import { FormEntryConstraint, Inputs, FormValueType, FormState, GetInputOptions } from 'cl-use-form-state';
import { FormInputMetaProps } from '../FormInput/FormInput';
import { FormTextFieldMetaProps } from '../FormTextField/FormTextField';
import { FormImageMetaProps } from '../FormImage/FormImage';
import { FormSelectMetaProps } from '../FormSelect/FormSelect';
import { SharedBaseInputProps } from '../SharedElement';
interface Input extends SharedBaseInputProps, FormInputMetaProps, FormImageMetaProps, FormSelectMetaProps, FormTextFieldMetaProps {
}
interface Entry<T extends FormEntryConstraint, K extends FormValueType> extends Omit<Input, 'value'> {
    value?: K;
    elementType?: 'input' | 'text-field' | 'selection' | 'image';
    options?: GetInputOptions<K, T>;
}
export declare type Entries<T extends FormEntryConstraint> = {
    [K in keyof T]: Entry<T, T[K] extends File ? T[K] | null : T[K]>;
};
export declare type SubmissionResult<T extends FormEntryConstraint> = {
    [K in keyof T]: T[K] extends File ? T[K] | null : T[K];
};
export declare function getFormInputs<T extends FormEntryConstraint>(entries: Entries<T>): Inputs<T>;
export declare function getSubmissionResult<T extends FormEntryConstraint>(inputs: Inputs<T>): SubmissionResult<T>;
export declare function onImageUpload<T extends FormEntryConstraint>(formState: FormState<T>, id: string, file: File): FormState<T>;
export declare function onImageInvalidUpload<T extends FormEntryConstraint>(formState: FormState<T>, id: string, noValidation?: boolean): FormState<T>;
export declare function metaSelect<T extends FormEntryConstraint>(formState: FormState<T>, id: string, value: string, noValidation: boolean): FormState<T>;
export {};
