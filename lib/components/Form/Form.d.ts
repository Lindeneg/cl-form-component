/// <reference types="react" />
import { FormEntryConstraint, FormValueType, GetInputOptions } from 'cl-use-form-state';
import { FormInputProps } from '../FormInput/FormInput';
import { Variant } from '../../util';
declare type Input = Omit<FormInputProps, 'id' | 'onChange' | 'onBlur' | 'variant' | 'isValid' | 'isInvalid'>;
interface Entry<T extends FormEntryConstraint> extends Input {
    options?: GetInputOptions<FormValueType, T>;
}
declare type Entries<T extends FormEntryConstraint> = {
    [K in keyof T]: Entry<T>;
};
declare type SubmissionResult<T extends FormEntryConstraint> = {
    [K in keyof T]: T;
};
export interface FormProps<T extends FormEntryConstraint> {
    entries: Entries<T>;
    variant?: Variant;
    onSubmit: (submissionResult: SubmissionResult<T>) => void;
    onCancel?: () => void;
    cancelText?: string;
}
declare function Form<T extends FormEntryConstraint = Record<string, never>>(props: FormProps<T>): JSX.Element;
export default Form;
