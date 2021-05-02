import { FormEntryConstraint, Inputs, FormValueType, GetInputOptions } from 'cl-use-form-state';
import { FormInputMetaProps } from '../FormInput/FormInput';
import { FormTextFieldMetaProps } from '../FormTextField/FormTextField';
import { FormImageMetaProps } from '../FormImage/FormImage';
import { SharedBaseInputProps } from '../SharedElement';
interface Input extends SharedBaseInputProps, FormInputMetaProps, FormImageMetaProps, FormTextFieldMetaProps {
}
interface Entry<T extends FormEntryConstraint> extends Input {
    elementType?: 'input' | 'text-field' | 'selection' | 'image';
    options?: GetInputOptions<FormValueType, T>;
}
export declare type Entries<T extends FormEntryConstraint> = {
    [K in keyof T]: Entry<T>;
};
export declare type SubmissionResult<T extends FormEntryConstraint> = {
    [K in keyof T]: T[K];
};
export declare function getFormInputs<T extends FormEntryConstraint>(entries: Entries<T>): Inputs<T>;
export declare function getSubmissionResult<T extends FormEntryConstraint>(inputs: Inputs<T>): SubmissionResult<T>;
export {};
