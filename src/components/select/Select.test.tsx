import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { Select, SelectProps, SelectTypeConstraint } from ".";

function getSelect<T extends SelectTypeConstraint>(
  props: Partial<SelectProps<T, unknown>> = {},
  onSelect: () => void = () => {}
) {
  return (
    <div id="test-select-wrapper">
      <Select
        {...props}
        type="menu"
        data={["Option 1", "Option 2"]}
        id="some-id"
        label="some-label"
        value=""
        onSelect={onSelect}
      />
    </div>
  );
}

describe("Select Test Suite", () => {
  test("renders select before click", () => {
    const { getByText } = render(getSelect());
    const target = getByText("some-label");

    expect(target).toBeInTheDocument();
    expect(target?.tagName).toBe("LABEL");
    expect(target?.getAttribute("id")).toBe("some-id-label");
  });

  test("renders select after click", () => {
    const { getByText, getByRole } = render(getSelect());
    const target = getByRole("button");

    expect(() => getByText("Option 1")).toThrow();
    expect(() => getByText("Option 2")).toThrow();

    userEvent.click(target);

    const opt1 = getByText("Option 1");
    expect(opt1).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(opt1.tagName).toBe("LI");
    expect(opt1.getAttribute("role")).toBe("option");
  });

  test("renders select with helper text", () => {
    const { getByText } = render(
      getSelect({ helperEl: "Please write something" })
    );
    const target = getByText("Please write something");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("MuiFormHelperText-root");
  });

  test("renders select with error text", () => {
    const { getByText } = render(
      getSelect({ errorEl: "An error occurred", error: true })
    );
    const target = getByText("An error occurred");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("Mui-error");
  });

  test("renders select with valid element", () => {
    const { getByText } = render(
      getSelect({
        validEl: <span style={{ color: "#0ca60c" }}>Looks great!</span>,
        valid: true,
      })
    );
    const target = getByText("Looks great!");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("SPAN");
    expect(target).toHaveStyle({ color: "#0ca60c" });
  });
});
