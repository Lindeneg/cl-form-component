import {
    FormEntryConstraint,
    Inputs,
    FormValueType,
    GetInputOptions,
    getInput
} from 'cl-use-form-state';

import { FormInputProps } from '../FormInput/FormInput';
import { FormTextFieldProps } from '../FormTextField/FormTextField';
import { SharedBaseInputProps } from '../shared.props';

interface Input
    extends SharedBaseInputProps,
        Pick<FormInputProps, 'type'>,
        Pick<FormTextFieldProps, 'rows'> {}

interface Entry<T extends FormEntryConstraint> extends Input {
    elementType?: 'input' | 'text-field' | 'selection';
    options?: GetInputOptions<FormValueType, T>;
}

export type Entries<T extends FormEntryConstraint> = { [K in keyof T]: Entry<T> };

export type SubmissionResult<T extends FormEntryConstraint> = { [K in keyof T]: T[K] };

export function getFormInputs<T extends FormEntryConstraint>(entries: Entries<T>): Inputs<T> {
    const inputs: Record<string, unknown> = {};
    Object.keys(entries).forEach((key) => {
        const entry = entries[key];
        let options = { ...entry.options };
        if (entry.noValidation === true) {
            options = { isValid: true };
        }
        inputs[key] = getInput(entry.value || '', options);
    });
    return inputs as Inputs<T>;
}

export function getSubmissionResult<T extends FormEntryConstraint>(
    inputs: Inputs<T>
): SubmissionResult<T> {
    const result: Record<string, unknown> = {};
    Object.keys(inputs).forEach((key) => {
        result[key] = inputs[key].value;
    });
    return result as SubmissionResult<T>;
}
