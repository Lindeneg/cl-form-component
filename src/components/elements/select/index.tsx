import React from "react";
import Input from "@material-ui/core/Input";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem, { MenuItemProps } from "@material-ui/core/MenuItem";
import ListItemText, {
  ListItemTextProps,
} from "@material-ui/core/ListItemText";
import MaterialSelect, {
  SelectProps as MaterialSelectProps,
} from "@material-ui/core/Select";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import { Shared, SharedProps, InputLabelOpts, ExcludeProps } from "../Shared";

type MetaMenu = { muiMenuItemProps?: ExcludeProps<MenuItemProps, "button"> };

export type SelectTypeConstraint = "menu" | "tag" | "chip" | "native";

export type SelectMetaEntry<T extends SelectTypeConstraint> = {
  name: string;
} & (T extends "tag"
  ? {
      muiCheckboxOpts?: ExcludeProps<CheckboxProps, "checked">;
      muiListItemTextOpts?: ExcludeProps<ListItemTextProps, "primary">;
    } & MetaMenu
  : T extends "chip"
  ? MetaMenu
  : T extends "native"
  ? {
      muiOptionOpts?: ExcludeProps<
        React.OptionHTMLAttributes<HTMLOptionElement>,
        "value"
      >;
    }
  : {});

export type SelectEntryProps<T extends SelectTypeConstraint> =
  | SelectMetaEntry<T>
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
  tagRenderValueCb?: (selected: string[]) => string;
  muiChipOpts?: ExcludeProps<ChipProps, "label">;
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
  muiChipOpts = {},
  muiSelectOpts = { MenuProps: { getContentAnchorEl: null } },
  tagRenderValueCb = (selected) => selected.join(", "),
  ...sharedProps
}: SelectProps<T>) {
  const labelId = `${id}-label`;

  const renderValue = (selected: unknown) => {
    if (type === "tag") {
      return tagRenderValueCb(selected as string[]);
    } else if (type === "chip") {
      return (
        <div>
          {(selected as string[]).map((value) => (
            <Chip {...muiChipOpts} key={value} label={value} />
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
          const menuItemProps =
            !isStr && type !== "native"
              ? (entry as MetaMenu).muiMenuItemProps
              : {};
          const key = `${name}-${idx}`;
          switch (type) {
            case "tag":
              const { muiCheckboxOpts, muiListItemTextOpts } = !isStr
                ? (entry as SelectMetaEntry<"tag">)
                : { muiCheckboxOpts: {}, muiListItemTextOpts: {} };
              return (
                <MenuItem {...menuItemProps} key={key} value={name}>
                  <Checkbox
                    {...muiCheckboxOpts}
                    checked={(value as string[]).indexOf(name) > -1}
                  />
                  <ListItemText {...muiListItemTextOpts} primary={name} />
                </MenuItem>
              );
            case "native":
              const { muiOptionOpts } = !isStr
                ? (entry as SelectMetaEntry<"native">)
                : { muiOptionOpts: {} };
              return (
                <option {...muiOptionOpts} key={key} value={name}>
                  {name}
                </option>
              );
            case "chip":
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
