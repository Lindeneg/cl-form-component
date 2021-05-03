import React from 'react';

import useForm, { FormEntryConstraint } from 'cl-use-form-state';

import FormInput from '../FormInput/FormInput';
import FormTextField from '../FormTextField/FormTextField';
import FormImage from '../FormImage/FormImage';
import FormSelect from '../FormSelect/FormSelect';
import FormButton from '../FormButton/FormButton';
import {
    Entries,
    SubmissionResult,
    getFormInputs,
    getSubmissionResult,
    onImageUpload,
    onImageInvalidUpload,
    metaSelect
} from './Form.util';
import { Variant, getVariantCSS, negateVariant } from '../../util';

export interface FormProps<T extends FormEntryConstraint> {
    entries: Entries<T>;
    onSubmit: (submissionResult: SubmissionResult<T>) => void;
    onCancel?: () => void;
    variant?: Variant;
    width?: string;
    submissionText?: string;
    headerText?: string;
    cancelText?: string;
    resetOnSubmit?: boolean;
}

function Form<T extends FormEntryConstraint = Record<string, never>>(
    props: FormProps<T>
): JSX.Element {
    const { formState, onChangeHandler, onTouchHandler, setFormState } = useForm<T>(
        getFormInputs(props.entries)
    );

    const variant = props.variant || 'light';

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
        e.preventDefault();
        props.resetOnSubmit && setFormState(getFormInputs(props.entries));
        props.onSubmit(getSubmissionResult(formState.inputs));
    };

    const onValidUpload = (id: string, file: File): void => {
        setFormState(onImageUpload(formState, id, file));
    };

    const onInvalidUpload = (id: string, noValidation = false): void => {
        setFormState(onImageInvalidUpload(formState, id, noValidation));
    };

    const onMultipleSelect = (
        noValidation: boolean,
        e: React.MouseEvent<HTMLSelectElement, MouseEvent>
    ): void => {
        const value = (e.target as HTMLOptionElement).value;
        const id = e.currentTarget.id;
        if (e.currentTarget.hasAttribute('multiple')) {
            setFormState(metaSelect(formState, id, value, noValidation));
        } else {
            onChangeHandler({ target: { id, value } } as React.ChangeEvent<HTMLSelectElement>);
        }
    };

    const onSelect: React.ChangeEventHandler<HTMLSelectElement> = (e): void => {
        if (!e.target.hasAttribute('multiple')) {
            onChangeHandler(e);
        }
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
                ...getVariantCSS(variant)
            }}
        >
            {props.headerText && (
                <>
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
                    <hr style={{ marginBottom: '1rem' }} />
                </>
            )}
            <form style={{ paddingBottom: '1rem', boxSizing: 'border-box' }} onSubmit={onSubmit}>
                {Object.keys(formState.inputs).map((id, index) => {
                    const target = props.entries[id];
                    const stateTarget = formState.inputs[id];
                    const baseProps = {
                        ...target,
                        id,
                        onChange: onChangeHandler,
                        onBlur: onTouchHandler,
                        variant: variant,
                        value: stateTarget.value,
                        isValid: stateTarget.isValid,
                        isInvalid: stateTarget.isTouched && !stateTarget.isValid
                    };
                    switch (target.elementType) {
                        case 'text-field':
                            return <FormTextField {...baseProps} key={index} />;
                        case 'selection':
                            return (
                                <FormSelect
                                    {...baseProps}
                                    key={index}
                                    onChange={onSelect}
                                    onClick={onMultipleSelect.bind(
                                        null,
                                        baseProps.noValidation === true
                                    )}
                                />
                            );
                        case 'image':
                            return (
                                <FormImage
                                    {...baseProps}
                                    key={index}
                                    onImageUpload={onValidUpload}
                                    onInvalidImageUpload={onInvalidUpload}
                                />
                            );
                        case 'input':
                        default:
                            return <FormInput {...baseProps} key={index} />;
                    }
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
                        variant={negateVariant(variant)}
                        disabled={!formState.isValid}
                        type="submit"
                    />
                    {props.onCancel && (
                        <FormButton
                            type="button"
                            variant={variant}
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
