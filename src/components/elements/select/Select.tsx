import React from "react";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem, { MenuItemProps } from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import MaterialSelect, {
  SelectProps as MaterialSelectProps,
} from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { Shared, SharedProps, InputLabelOpts, ExcludeProps } from "../Shared";

export type SelectTypeConstraint = "menu" | "tag" | "chip" | "native";

// TODO: dynamic props relative to component type
export type SelectEntryProps<T extends SelectTypeConstraint> =
  | {
      name: string;
      muiMenuItemProps?: ExcludeProps<MenuItemProps, "button">;
    }
  | string;

export interface SelectProps<T extends SelectTypeConstraint>
  extends SharedProps,
    InputLabelOpts {
  type: T;
  data: SelectEntryProps<T>[];
  onSelect: (
    event: React.ChangeEvent<{ value: unknown; name?: string }>
  ) => void;
  containerStyle?: React.CSSProperties;
  onSelectBlur?: React.FocusEventHandler;
  multiple?: boolean;
  muiSelectOpts?: ExcludeProps<
    MaterialSelectProps,
    "labelId" | "input" | "multiple" | "native" | "renderValue"
  >;
}

export function Select<T extends SelectTypeConstraint>({
  id,
  value,
  data,
  onSelect,
  onSelectBlur,
  type,
  multiple = false,
  label = "",
  containerStyle = { margin: "1px", minWidth: "120px", maxWidth: "320px" },
  muiInputLabelOpts = {},
  muiSelectOpts = { MenuProps: { getContentAnchorEl: null } },
  ...sharedProps
}: SelectProps<T>) {
  const labelId = `${id}-label`;

  const renderValue = (selected: unknown) => {
    if (type === "tag") {
      return (selected as string[]).join(", ");
    } else if (type === "chip") {
      return (
        <div>
          {(selected as string[]).map((value) => (
            <Chip key={value} label={value} />
          ))}
        </div>
      );
    }
  };

  return (
    <Shared
      {...sharedProps}
      muiFormControlOpts={{
        style: containerStyle,
      }}
      labelEl={
        <InputLabel {...muiInputLabelOpts} id={labelId}>
          {label}
        </InputLabel>
      }
    >
      <MaterialSelect
        {...muiSelectOpts}
        id={id}
        autoWidth={true}
        labelId={labelId}
        value={value}
        onChange={onSelect}
        onBlur={(e) =>
          onSelectBlur && onSelectBlur({ ...e, target: { ...e.target, id } })
        }
        input={<Input id={id} />}
        multiple={multiple}
        native={type === "native"}
        renderValue={
          type === "tag" || type === "chip" ? renderValue : undefined
        }
      >
        {data.map((entry, idx) => {
          const isStr = typeof entry === "string";
          const name = isStr ? entry : entry.name;
          const menuItemProps = isStr ? {} : entry.muiMenuItemProps;
          const key = `${name}-${idx}`;
          switch (type) {
            case "tag":
              return (
                <MenuItem {...menuItemProps} key={key} value={name}>
                  <Checkbox checked={(value as string[]).indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              );
            case "chip":
              return (
                <MenuItem {...menuItemProps} key={key} value={name}>
                  {name}
                </MenuItem>
              );
            case "native":
              return (
                <MenuItem {...menuItemProps} key={key} value={name}>
                  {name}
                </MenuItem>
              );
            default:
              return (
                <MenuItem {...menuItemProps} key={key} value={name}>
                  {name}
                </MenuItem>
              );
          }
        })}
      </MaterialSelect>
    </Shared>
  );
}
