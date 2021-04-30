import React from 'react';

import useForm, { FormEntryConstraint } from 'cl-use-form-state';

import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import { Entries, SubmissionResult, getFormInputs, getSubmissionResult } from './Form.util';
import { Variant, getVariantCSS, negateVariant } from '../../util';

export interface FormProps<T extends FormEntryConstraint> {
    entries: Entries<T>;
    variant?: Variant;
    onSubmit: (submissionResult: SubmissionResult<T>) => void;
    onCancel?: () => void;
    width?: string;
    submissionText?: string;
    headerText?: string;
    cancelText?: string;
}

function Form<T extends FormEntryConstraint = Record<string, never>>(
    props: FormProps<T>
): JSX.Element {
    const { formState, onChangeHandler, onTouchHandler } = useForm<T>(getFormInputs(props.entries));

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
        e.preventDefault();
        props.onSubmit(getSubmissionResult(formState.inputs));
    };

    return (
        <div
            style={{
                width: props.width || '100%',
                paddingRight: '15px',
                paddingLeft: '15px',
                marginRight: 'auto',
                marginLeft: 'auto',
                boxSizing: 'border-box',
                ...getVariantCSS(props.variant)
            }}
        >
            {props.headerText && (
                <h4
                    style={{
                        paddingTop: '1rem',
                        fontSize: '1.5rem',
                        marginBottom: '.5rem',
                        fontWeight: 'normal',
                        lineHeight: '1.2',
                        marginTop: '0'
                    }}
                >
                    {props.headerText}
                </h4>
            )}
            <hr style={{ marginBottom: '1rem' }} />
            <form style={{ paddingBottom: '1rem', boxSizing: 'border-box' }} onSubmit={onSubmit}>
                {Object.keys(formState.inputs).map((id, index) => {
                    const target = props.entries[id];
                    const stateTarget = formState.inputs[id];
                    const baseProps = {
                        id,
                        onChange: onChangeHandler,
                        onBlur: onTouchHandler,
                        variant: props.variant,
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
                <div
                    style={{
                        display: 'flex',
                        boxSizing: 'border-box',
                        justifyContent: 'space-between'
                    }}
                >
                    <FormButton
                        buttonText={props.submissionText || 'SUBMIT'}
                        variant={negateVariant(props.variant)}
                        disabled={!formState.isValid}
                        type="submit"
                    />
                    {props.onCancel && (
                        <FormButton
                            type="button"
                            variant={props.variant}
                            buttonText={props.cancelText || 'CANCEL'}
                            onClick={props.onCancel}
                        />
                    )}
                </div>
            </form>
        </div>
    );
}

export default Form;

<Form<{ hello: number }>
    entries={{ hello: { options: { maxLength: 2 } } }}
    onSubmit={(result) => result.hello}
/>;
