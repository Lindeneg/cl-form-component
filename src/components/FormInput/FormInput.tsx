import React, { FC } from 'react';

import { FormValueType } from 'cl-use-form-state';

import { Variant, getVariantChild, getVariantCSS } from '../../util';
import * as style from '../shared-styles';

export interface FormInputProps {
    id: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    variant?: Variant;
    value?: FormValueType;
    type?: 'text' | 'password' | 'number' | 'file' | 'email';
    label?: string;
    width?: string;
    placeholder?: string;
    helperText?: string;
    validFeedback?: string;
    invalidFeedback?: string;
    isValid?: boolean;
    isInvalid?: boolean;
}

const FormInput: FC<FormInputProps> = (props) => {
    const variant = typeof props.variant === 'undefined' ? 'light' : props.variant;
    const negatedVariant = variant === 'dark' ? 'light' : 'dark';
    return (
        <div style={{ ...style.defaultInputWrapperStyle, width: props.width }}>
            {props.label && (
                <label
                    style={{
                        ...style.defaultLabelStyle,
                        ...getVariantChild(negatedVariant, 'tc')
                    }}
                >
                    {props.label}
                </label>
            )}
            <input
                type={props.type || 'text'}
                id={props.id}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value?.toString()}
                placeholder={props.placeholder}
                style={{
                    ...{ ...style.defaultInputStyle, ...getVariantCSS(variant) },
                    ...(props.isValid
                        ? style.defaultValidStyle
                        : props.isInvalid
                        ? style.defaultInvalidStyle
                        : {})
                }}
            />
            {props.validFeedback && props.isValid ? (
                <div style={style.defaultValidFeedbackStyle}>{props.validFeedback}</div>
            ) : props.invalidFeedback && props.isInvalid ? (
                <div style={style.defaultInvalidFeedbackStyle}>{props.invalidFeedback}</div>
            ) : null}
            {props.helperText && (
                <small
                    style={{
                        ...style.defaultHelperTextStyle,
                        ...getVariantChild(negatedVariant, 'tc')
                    }}
                >
                    {props.helperText}
                </small>
            )}
        </div>
    );
};

export default FormInput;
