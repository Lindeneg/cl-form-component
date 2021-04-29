import React, { FC } from 'react';
import { FormValueType } from 'cl-use-form-state';
import { Variant } from '../../util';
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
declare const FormInput: FC<FormInputProps>;
export default FormInput;
