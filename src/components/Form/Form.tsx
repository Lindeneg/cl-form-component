import React from 'react';

import useForm, {
    FormEntryConstraint,
    Inputs,
    FormValueType,
    GetInputOptions,
    getInput
} from 'cl-use-form-state';

import FormInput, { FormInputProps } from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import { Variant } from '../../util';

type Input = Omit<
    FormInputProps,
    'id' | 'onChange' | 'onBlur' | 'variant' | 'isValid' | 'isInvalid'
>;

interface Entry<T extends FormEntryConstraint> extends Input {
    options?: GetInputOptions<FormValueType, T>;
}

type Entries<T extends FormEntryConstraint> = { [K in keyof T]: Entry<T> };

type SubmissionResult<T extends FormEntryConstraint> = { [K in keyof T]: T };

export interface FormProps<T extends FormEntryConstraint> {
    entries: Entries<T>;
    variant?: Variant;
    onSubmit: (submissionResult: SubmissionResult<T>) => void;
    onCancel?: () => void;
    cancelText?: string;
}

function getInputs<T extends FormEntryConstraint>(entries: Entries<T>): Inputs<T> {
    const inputs: Record<string, unknown> = {};
    Object.keys(entries).forEach((key) => {
        const entry = entries[key];
        inputs[key] = getInput(entry.value || '', entry.options);
    });
    return inputs as Inputs<T>;
}

function getResult<T extends FormEntryConstraint>(inputs: Inputs<T>): SubmissionResult<T> {
    const result: Record<string, unknown> = {};
    Object.keys(inputs).forEach((key) => {
        result[key] = inputs[key].value;
    });
    return result as SubmissionResult<T>;
}

function Form<T extends FormEntryConstraint = Record<string, never>>(
    props: FormProps<T>
): JSX.Element {
    const { formState, onChangeHandler, onTouchHandler } = useForm<T>(getInputs(props.entries));

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
        e.preventDefault();
        props.onSubmit(getResult(formState.inputs));
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Header Text</h1>
            <hr />
            <div>
                {Object.keys(formState.inputs).map((id, index) => {
                    const target = props.entries[id];
                    const stateTarget = formState.inputs[id];
                    const baseProps = {
                        id,
                        onChange: onChangeHandler,
                        onBlur: onTouchHandler,
                        variant: 'light' as Variant,
                        type: target.type,
                        label: target.label,
                        value: stateTarget.value,
                        helperText: target.helperText,
                        validFeedback: target.validFeedback,
                        invalidFeedback: target.invalidFeedback,
                        isValid: stateTarget.isValid,
                        isInvalid: stateTarget.isTouched && !stateTarget.isValid
                    };
                    return (
                        <FormInput {...baseProps} key={index} placeholder={target.placeholder} />
                    );
                })}
            </div>
            <div>
                <FormButton disabled={!formState.isValid} type="submit" />
                {props.onCancel && (
                    <FormButton
                        type="button"
                        variant="light"
                        buttonText={props.cancelText || 'CANCEL'}
                        onClick={props.onCancel}
                    />
                )}
            </div>
        </form>
    );
}

export default Form;
