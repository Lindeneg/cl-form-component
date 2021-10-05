import React from "react";
import userEvent from "@testing-library/user-event";
import { render, queryByAttribute } from "@testing-library/react";
import { Radio, RadioProps } from ".";

enum Selected {
  ON = "ON",
  OFF = "OFF",
}

function getRadio(
  selected = Selected.OFF,
  props: Partial<RadioProps> = {},
  onChange: () => void = () => {}
) {
  return (
    <Radio
      data={[
        {
          id: "some-id",
          name: "Some option",
          value: Selected.ON,
        },
      ]}
      {...props}
      selectedValue={selected}
      onRadioChange={onChange}
    />
  );
}

describe("Radio Test Suite", () => {
  test("renders radio", () => {
    const { container, getByText } = render(getRadio());
    const target = queryByAttribute("id", container, "some-id");

    expect(target).toBeInTheDocument();
    expect(target?.getAttribute("type")).toBe("radio");
    expect(target?.getAttribute("value")).toBe(Selected.ON);
    expect(getByText("Some option")).toBeInTheDocument();
  });

  test("renders radio with label", () => {
    const { getByText } = render(
      getRadio(Selected.OFF, { label: "Testing Radio" })
    );
    const target = getByText("Testing Radio");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("LABEL");
    expect(target).toHaveClass("MuiFormLabel-root");
  });

  test("renders radio with helper text", () => {
    const { getByText } = render(
      getRadio(Selected.OFF, { helperEl: "Please click this radio" })
    );
    const target = getByText("Please click this radio");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("MuiFormHelperText-root");
  });

  test("renders radio with error text", () => {
    const { getByText } = render(
      getRadio(Selected.OFF, { errorEl: "An error occurred", error: true })
    );
    const target = getByText("An error occurred");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("P");
    expect(target).toHaveClass("Mui-error");
  });

  test("renders radio with valid element", () => {
    const { getByText } = render(
      getRadio(Selected.OFF, {
        validEl: <span style={{ color: "#0ca60c" }}>Looks great!</span>,
        valid: true,
      })
    );
    const target = getByText("Looks great!");

    expect(target).toBeInTheDocument();
    expect(target.tagName).toBe("SPAN");
    expect(target).toHaveStyle({ color: "#0ca60c" });
  });

  test("handles radio on change event", () => {
    const mockOnChange = jest.fn();
    const { container, rerender } = render(
      getRadio(Selected.OFF, {}, mockOnChange)
    );
    const target = queryByAttribute("id", container, "some-id");
    target && userEvent.click(target);
    rerender(getRadio(Selected.ON));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
