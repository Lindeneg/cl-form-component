import {
    FormEntryConstraint,
    Inputs,
    FormValueType,
    FormState,
    GetInputOptions,
    getInput,
    validate
} from 'cl-use-form-state';

import { FormInputMetaProps } from '../FormInput/FormInput';
import { FormTextFieldMetaProps } from '../FormTextField/FormTextField';
import { FormImageMetaProps } from '../FormImage/FormImage';
import { FormSelectMetaProps } from '../FormSelect/FormSelect';
import { SharedBaseInputProps } from '../SharedElement';
import { checkInputValidity } from '../../util';

interface Input
    extends SharedBaseInputProps,
        FormInputMetaProps,
        FormImageMetaProps,
        FormSelectMetaProps,
        FormTextFieldMetaProps {}

interface Entry<T extends FormEntryConstraint, K extends FormValueType>
    extends Omit<Input, 'value'> {
    value?: K;
    elementType?: 'input' | 'text-field' | 'selection' | 'image';
    options?: GetInputOptions<K, T>;
}

export type Entries<T extends FormEntryConstraint> = {
    [K in keyof T]: Entry<T, T[K] extends File ? T[K] | null : T[K]>;
};

export type SubmissionResult<T extends FormEntryConstraint> = {
    [K in keyof T]: T[K] extends File ? T[K] | null : T[K];
};

export function getFormInputs<T extends FormEntryConstraint>(entries: Entries<T>): Inputs<T> {
    const inputs: Record<string, unknown> = {};
    Object.keys(entries).forEach((key) => {
        const entry = entries[key] as Entry<FormEntryConstraint, FormValueType>;
        let value = entry.value || '';
        let options = { ...entry.options };
        if (
            entry.elementType === 'selection' &&
            typeof entry.selectOptions !== 'undefined' &&
            entry.selectOptions.length > 0
        ) {
            const preSelected =
                entry.selectOptions
                    .filter((e) => (typeof e === 'string' ? false : e.selected === true))
                    .map((e) => (typeof e === 'string' ? e : e.value)) || [];
            let isValid = false;
            if (entry.multipleSelect === true) {
                value = preSelected;
                isValid = preSelected.length > 0;
            } else {
                const selected = entry.selectOptions[0];
                value =
                    preSelected.length > 0
                        ? preSelected[0]
                        : typeof selected === 'string'
                        ? selected
                        : selected.value;
                isValid = true;
            }
            if (value) {
                options = { ...options, isValid };
            }
        }
        if (entry.noValidation === true) {
            options = { isValid: true };
        }
        if (entry.elementType === 'image') {
            options = { isValid: entry.noValidation === true, isTouched: true };
        }
        inputs[key] = getInput(value, options);
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

export function onImageUpload<T extends FormEntryConstraint>(
    formState: FormState<T>,
    id: string,
    file: File
): FormState<T> {
    if (file instanceof File) {
        const newState: FormState<T> = {
            ...formState,
            inputs: {
                ...formState.inputs,
                [id]: {
                    ...formState.inputs[id],
                    value: file,
                    isValid: true,
                    isTouched: true
                }
            }
        };
        return {
            ...newState,
            isValid: checkInputValidity(newState.inputs)
        };
    }
    return formState;
}

export function onImageInvalidUpload<T extends FormEntryConstraint>(
    formState: FormState<T>,
    id: string,
    noValidation = false
): FormState<T> {
    if (formState.inputs[id].isValid) {
        return {
            ...formState,
            inputs: {
                ...formState.inputs,
                [id]: {
                    ...formState.inputs[id],
                    value: '',
                    isValid: noValidation,
                    isTouched: true
                }
            },
            isValid: formState.isValid && noValidation
        };
    }
    return formState;
}

export function metaSelect<T extends FormEntryConstraint>(
    formState: FormState<T>,
    id: string,
    value: string,
    noValidation: boolean
): FormState<T> {
    const arr = [...(formState.inputs[id].value as string[])];
    const idx = arr.findIndex((e) => e === value);
    if (idx > -1) {
        arr.splice(idx, 1);
    } else {
        arr.push(value);
    }
    const newState = {
        ...formState,
        inputs: {
            ...formState.inputs,
            [id]: {
                ...formState.inputs[id],
                value: arr,
                isValid:
                    noValidation === true ||
                    validate(arr, formState.inputs[id].validators, formState),
                isTouched: true
            }
        }
    };
    return {
        ...newState,
        isValid: checkInputValidity(newState.inputs)
    };
}
