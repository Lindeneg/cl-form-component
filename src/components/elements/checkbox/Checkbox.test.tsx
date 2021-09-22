import React from "react";
import userEvent from "@testing-library/user-event";
import { render, queryByAttribute } from "@testing-library/react";
import { Checkbox, CheckboxProps } from ".";

function getCheckbox(
  state = false,
  props: Partial<CheckboxProps> = {},
  onChange: () => void = () => {}
) {
  return (
    <Checkbox
      {...props}
      data={{
        id: "some-id",
        checked: state,
        name: "some-name",
        onCheckboxChange: onChange,
      }}
    />
  );
}

describe("Checkbox Test Suite", () => {
  test("renders checkbox", () => {
    const { container, getByText } = render(getCheckbox());
    const target = queryByAttribute("id", container, "some-id");

    expect(target).toBeInTheDocument();
    expect(target?.getAttribute("type")).toBe("checkbox");
    expect(target?.getAttribute("value")).toBe("false");
    expect(getByText("some-name")).toBeInTheDocument();
  });

  test("renders checkbox with label", () => {
    const { getByText } = render(
      getCheckbox(false, { label: "Testing Checkbox" })
    );
    const target = getByText("Testing Checkbox");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("LABEL");
    expect(target).toHaveClass("MuiFormLabel-root");
  });

  test("renders checkbox with helper text", () => {
    const { getByText } = render(
      getCheckbox(false, { helperEl: "Please check this box" })
    );
    const target = getByText("Please check this box");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("MuiFormHelperText-root");
  });

  test("renders checkbox with error text", () => {
    const { getByText } = render(
      getCheckbox(false, { errorEl: "An error occurred", error: true })
    );
    const target = getByText("An error occurred");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("Mui-error");
  });

  test("renders checkbox with valid element", () => {
    const { getByText } = render(
      getCheckbox(false, {
        validEl: <span style={{ color: "#0ca60c" }}>Looks great!</span>,
        valid: true,
      })
    );
    const target = getByText("Looks great!");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("SPAN");
    expect(target).toHaveStyle({ color: "#0ca60c" });
  });

  test("handles checkbox on change event", () => {
    const mockOnChange = jest.fn();
    const { container, rerender } = render(
      getCheckbox(false, {}, mockOnChange)
    );
    const target = queryByAttribute("id", container, "some-id");

    expect(target?.getAttribute("value")).toBe("false");
    target && userEvent.click(target);
    rerender(getCheckbox(true));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(target?.getAttribute("value")).toBe("true");
  });
});
