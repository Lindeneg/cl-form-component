import React from "react";
import userEvent from "@testing-library/user-event";
import { render, queryByAttribute } from "@testing-library/react";
import { Input, InputProps } from ".";

function getInput(
  value = "",
  props: Partial<InputProps> = {},
  onChange: () => void = () => {}
) {
  return (
    <Input {...props} id="some-id" value={value} onInputChange={onChange} />
  );
}

describe("Input Test Suite", () => {
  test("renders input", () => {
    const { container } = render(getInput());
    const target = queryByAttribute("id", container, "some-id");

    expect(target).toBeInTheDocument();
    expect(target?.getAttribute("type")).toBe("text");
    expect(target).toHaveClass("MuiInputBase-input");
  });

  test("renders input with label", () => {
    const { getByText } = render(getInput("", { label: "Testing Input" }));
    const target = getByText("Testing Input");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("LABEL");
    expect(target).toHaveClass("MuiFormLabel-root");
  });

  test("renders input with helper text", () => {
    const { getByText } = render(
      getInput("", { helperEl: "Please write something" })
    );
    const target = getByText("Please write something");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("MuiFormHelperText-root");
  });

  test("renders input with error text", () => {
    const { getByText } = render(
      getInput("", { errorEl: "An error occurred", error: true })
    );
    const target = getByText("An error occurred");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("Mui-error");
  });

  test("renders input with valid element", () => {
    const { getByText } = render(
      getInput("", {
        validEl: <span style={{ color: "#0ca60c" }}>Looks great!</span>,
        valid: true,
      })
    );
    const target = getByText("Looks great!");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("SPAN");
    expect(target).toHaveStyle({ color: "#0ca60c" });
  });

  test("handles input on change event", () => {
    const mockOnChange = jest.fn();
    const { container, rerender } = render(getInput("", {}, mockOnChange));
    const target = queryByAttribute("id", container, "some-id");

    expect(target?.getAttribute("value")).toBe("");
    target && userEvent.type(target, "something");
    rerender(getInput("something"));
    expect(mockOnChange).toHaveBeenCalledTimes(9);
    expect(target?.getAttribute("value")).toBe("something");
  });
});
