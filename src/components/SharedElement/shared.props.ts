import { FormValueType } from 'cl-use-form-state';

import { Variant } from '../../util';

export type SharedBaseInputProps = {
    value?: FormValueType;
    label?: string;
    placeholder?: string;
    helperText?: string;
    validFeedback?: string;
    invalidFeedback?: string;
    noValidation?: boolean;
    width?: string;
};

export interface SharedInputProps extends SharedBaseInputProps {
    id: string;
    onChange?: React.ChangeEventHandler;
    onBlur?: React.FocusEventHandler;
    variant?: Variant;
    isValid?: boolean;
    isInvalid?: boolean;
}
