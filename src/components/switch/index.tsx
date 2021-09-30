import React from "react";
import MaterialSwitch, {
  SwitchProps as MaterialSwitchProps,
} from "@material-ui/core/Switch";
import { Checkbox, CheckboxProps, MetaCheckboxProps } from "../checkbox";
import { ExcludeProps, ExcludeSharedKeys } from "../Shared";

export type MetaSwitchProps<O extends string = ""> = Omit<
  MetaCheckboxProps,
  "muiCheckboxOpts" | O
> & {
  muiSwitchOpts?: ExcludeProps<MaterialSwitchProps, "checked" | "name">;
};

export interface SwitchProps extends Omit<CheckboxProps, "data"> {
  data:
    | MetaSwitchProps<"controlComponent">
    | MetaSwitchProps<"controlComponent">[];
}

type ExcludedMetaProps = ExcludeProps<
  MetaSwitchProps,
  "checked" | "id",
  "omit"
>;

export type SwitchFormProps = Omit<
  CheckboxProps,
  "data" | ExcludeSharedKeys
> & {
  data: Array<ExcludedMetaProps | string>;
};

export function Switch({ data, ...props }: SwitchProps) {
  let controlledData: MetaSwitchProps | MetaSwitchProps[];
  if (Array.isArray(data)) {
    controlledData = data.map((entry) => {
      return {
        ...entry,
        controlComponent: (
          <MaterialSwitch
            {...entry.muiSwitchOpts}
            id={entry.id}
            onChange={entry.onChange}
            onBlur={entry.onBlur}
            checked={entry.checked}
            value={entry.checked}
          />
        ),
      };
    });
  } else {
    controlledData = {
      ...data,
      controlComponent: (
        <MaterialSwitch
          {...data.muiSwitchOpts}
          id={data.id}
          onChange={data.onChange}
          onBlur={data.onBlur}
          checked={data.checked}
          value={data.checked}
        />
      ),
    };
  }
  return <Checkbox data={controlledData} {...props} />;
}
