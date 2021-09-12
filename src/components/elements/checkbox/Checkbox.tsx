import React from "react";
import MCheckbox, {
  CheckboxProps as MaterialCheckboxProps,
} from "@material-ui/core/Checkbox";
import { Shared, SharedProps, ExcludeProps } from "../Shared";
import FormLabel, { FormLabelProps } from "@material-ui/core/FormLabel";
import FormGroup, { FormGroupProps } from "@material-ui/core/FormGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@material-ui/core/FormControlLabel";

type MetaSharedPick = Pick<SharedProps, "id" | "value">;
type MetaCheckboxProps = MetaSharedPick & {
  name: string;
  onCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
  muiFormControlLabelOpts?: ExcludeProps<
    FormControlLabelProps,
    "control" | "label"
  >;
  muiCheckboxOpts?: ExcludeProps<MaterialCheckboxProps, "checked" | "name">;
};
type Data = MetaCheckboxProps;

function MetaCheckbox({
  id,
  value,
  name,
  onCheckboxChange,
  muiCheckboxOpts = {},
  muiFormControlLabelOpts = {},
}: MetaCheckboxProps) {
  return (
    <FormControlLabel
      {...muiFormControlLabelOpts}
      control={
        <MCheckbox
          {...muiCheckboxOpts}
          id={id}
          name={name}
          checked={!!value}
          onChange={onCheckboxChange}
        />
      }
      label={name}
    />
  );
}

export interface CheckboxProps extends Omit<SharedProps, "id" | "value"> {
  data: Data | Data[];
  muiFormLabelOpts?: ExcludeProps<FormLabelProps, "children">;
  muiFormGroupOpts?: FormGroupProps;
}

export function Checkbox({
  data,
  label = "",
  muiFormLabelOpts = {},
  muiFormGroupOpts = {},
  ...rest
}: CheckboxProps) {
  return (
    <Shared
      {...rest}
      labelEl={<FormLabel {...muiFormLabelOpts}>{label}</FormLabel>}
    >
      <FormGroup {...muiFormGroupOpts}>
        {(() => {
          if (Array.isArray(data)) {
            return data.map((entry) => (
              <MetaCheckbox {...entry} key={entry.id} />
            ));
          }
          return <MetaCheckbox {...data} />;
        })()}
      </FormGroup>
    </Shared>
  );
}
