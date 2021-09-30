import React from "react";
import { InputValueType } from "cl-use-form-state";
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
import {
  Shared,
  SharedProps,
  InputLabelOpts,
  ExcludeProps,
  ExcludeSharedKeys,
} from "../Shared";

type MetaMenu = { muiMenuItemProps?: ExcludeProps<MenuItemProps, "button"> };

export type SelectTypeConstraint = "menu" | "tag" | "chip" | "native";

export type SelectMetaEntry<
  T extends SelectTypeConstraint,
  K extends InputValueType
> = {
  val: K;
  text?: string;
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
  : Record<string, unknown>);

export type SelectEntryProps<
  T extends SelectTypeConstraint,
  K extends InputValueType
> = SelectMetaEntry<T, K> | K;

export interface SelectProps<
  T extends SelectTypeConstraint,
  K extends InputValueType
> extends SharedProps,
    InputLabelOpts {
  type: T;
  data: SelectEntryProps<T, K>[];
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

export type SelectFormProps = ExcludeProps<
  SelectProps<SelectTypeConstraint, string | number>,
  "onSelect" | "onSelectBlur" | "multiple" | "type" | ExcludeSharedKeys,
  "omit"
> & { type?: SelectTypeConstraint };

export function Select<
  T extends SelectTypeConstraint,
  K extends string | readonly string[] | number = string
>({
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
}: SelectProps<T, K>) {
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
          const { val, text, ...rest } =
            typeof entry === "object"
              ? (entry as SelectMetaEntry<T, K>)
              : { val: entry, text: "", muiMenuItemProps: {} };
          const key = `${val}-${idx}`;
          switch (type) {
            case "tag":
              const { muiCheckboxOpts, muiListItemTextOpts } = !isStr
                ? (entry as SelectMetaEntry<"tag", K>)
                : { muiCheckboxOpts: {}, muiListItemTextOpts: {} };
              return (
                <MenuItem
                  {...(rest as SelectMetaEntry<"tag", K>).muiMenuItemProps}
                  key={key}
                  value={val}
                >
                  <Checkbox
                    {...muiCheckboxOpts}
                    checked={(value as string[]).indexOf(String(val)) > -1}
                  />
                  <ListItemText
                    {...muiListItemTextOpts}
                    primary={text || String(val)}
                  />
                </MenuItem>
              );
            case "native":
              const { muiOptionOpts } = !isStr
                ? (entry as SelectMetaEntry<"native", K>)
                : { muiOptionOpts: {} };
              return (
                <option {...muiOptionOpts} key={key} value={val}>
                  {text || String(val)}
                </option>
              );
            case "chip":
            default:
              return (
                <MenuItem
                  {...(rest as SelectMetaEntry<"chip", K>).muiMenuItemProps}
                  key={key}
                  value={val}
                >
                  {text || String(val)}
                </MenuItem>
              );
          }
        })}
      </MaterialSelect>
    </Shared>
  );
}
