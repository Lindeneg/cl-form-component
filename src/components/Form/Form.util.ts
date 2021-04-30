import {
    FormEntryConstraint,
    Inputs,
    FormValueType,
    GetInputOptions,
    getInput
} from 'cl-use-form-state';

import { FormInputProps } from '../FormInput/FormInput';

type Input = Omit<
    FormInputProps,
    'id' | 'onChange' | 'onBlur' | 'variant' | 'isValid' | 'isInvalid'
>;

interface Entry<T extends FormEntryConstraint> extends Input {
    options?: GetInputOptions<FormValueType, T>;
}

export type Entries<T extends FormEntryConstraint> = { [K in keyof T]: Entry<T> };

export type SubmissionResult<T extends FormEntryConstraint> = { [K in keyof T]: T[K] };

export function getFormInputs<T extends FormEntryConstraint>(entries: Entries<T>): Inputs<T> {
    const inputs: Record<string, unknown> = {};
    Object.keys(entries).forEach((key) => {
        const entry = entries[key];
        inputs[key] = getInput(entry.value || '', entry.options);
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
