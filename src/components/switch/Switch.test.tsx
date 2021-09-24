import React from "react";
import userEvent from "@testing-library/user-event";
import { render, queryByAttribute } from "@testing-library/react";
import { Switch, SwitchProps } from ".";

function getSwitch(
  state = false,
  props: Partial<SwitchProps> = {},
  onChange: () => void = () => {}
) {
  return (
    <Switch
      {...props}
      data={{
        id: "some-id",
        checked: state,
        name: "some-name",
        onChange: onChange,
      }}
    />
  );
}

describe("Switch Test Suite", () => {
  test("renders switch", () => {
    const { container, getByText } = render(getSwitch());
    const target = queryByAttribute("id", container, "some-id");

    expect(target).toBeInTheDocument();
    expect(target?.getAttribute("type")).toBe("checkbox");
    expect(target?.getAttribute("value")).toBe("false");
    expect(getByText("some-name")).toBeInTheDocument();
  });

  test("renders switch with label", () => {
    const { getByText } = render(getSwitch(false, { label: "Testing switch" }));
    const target = getByText("Testing switch");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("LABEL");
    expect(target).toHaveClass("MuiFormLabel-root");
  });

  test("renders switch with helper text", () => {
    const { getByText } = render(
      getSwitch(false, { helperEl: "Please toggle this switch" })
    );
    const target = getByText("Please toggle this switch");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("MuiFormHelperText-root");
  });

  test("renders switch with error text", () => {
    const { getByText } = render(
      getSwitch(false, { errorEl: "An error occurred", error: true })
    );
    const target = getByText("An error occurred");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("Mui-error");
  });

  test("renders switch with valid element", () => {
    const { getByText } = render(
      getSwitch(false, {
        validEl: <span style={{ color: "#0ca60c" }}>Looks great!</span>,
        valid: true,
      })
    );
    const target = getByText("Looks great!");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("SPAN");
    expect(target).toHaveStyle({ color: "#0ca60c" });
  });

  test("handles switch on change event", () => {
    const mockOnChange = jest.fn();
    const { container, rerender } = render(getSwitch(false, {}, mockOnChange));
    const target = queryByAttribute("id", container, "some-id");

    expect(target?.getAttribute("value")).toBe("false");
    target && userEvent.click(target);
    rerender(getSwitch(true));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(target?.getAttribute("value")).toBe("true");
  });
});
