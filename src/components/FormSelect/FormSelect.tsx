import React, { FC, CSSProperties } from 'react';

import SharedElement, { SharedInputProps } from '../SharedElement';
import { getVariantCSS, capitalize } from '../../util';

const selectStyles: CSSProperties = {
    boxSizing: 'border-box',
    border: 'none',
    padding: '0 1rem 0 0',
    margin: '0',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    cursor: 'inherit',
    lineHeight: 'inherit'
};

const selectDiv: CSSProperties = {
    width: '100%',
    minWidth: '15ch',
    maxWidth: '30ch',
    border: '1px solid #777',
    borderRadius: '.25rem',
    padding: '.25rem .5rem',
    fontSize: '1.1rem',
    cursor: 'pointer',
    lineHeight: '1.5rem'
};

export type FormSelectOptionProps = {
    value: string;
    displayValue?: string;
    selected?: boolean;
};

export type FormSelectMetaProps = {
    selectOptions?: Array<FormSelectOptionProps | string>;
    disableSelect?: boolean;
    multipleSelect?: boolean;
    center?: boolean;
    onClick?: React.MouseEventHandler<HTMLSelectElement>;
};

export interface FormSelectProps extends SharedInputProps, FormSelectMetaProps {}

const FormSelect: FC<FormSelectProps> = (props) => {
    return (
        <SharedElement {...props}>
            <div style={selectDiv}>
                <select
                    id={props.id}
                    style={{ ...selectStyles, ...getVariantCSS(props.variant || 'light') }}
                    disabled={!!props.disableSelect}
                    multiple={!!props.multipleSelect}
                    value={
                        typeof props.value === 'boolean' || props.value instanceof File
                            ? ''
                            : props.value
                    }
                    onChange={props.onChange}
                    onClick={props.onClick}
                >
                    {props.selectOptions?.map((option, index) => {
                        const { value, displayValue } =
                            typeof option === 'string'
                                ? { value: option, displayValue: '' }
                                : { value: option.value, displayValue: option.displayValue };
                        return (
                            <option key={index} value={value}>
                                {displayValue || capitalize(value)}
                            </option>
                        );
                    })}
                </select>
            </div>
        </SharedElement>
    );
};

export default FormSelect;
