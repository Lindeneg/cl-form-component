import { FC } from 'react';
import { SharedInputProps } from '../SharedElement';
export declare type FormInputMetaProps = {
    type?: 'text' | 'password' | 'number' | 'email';
};
export interface FormInputProps extends SharedInputProps, FormInputMetaProps {
}
declare const FormInput: FC<FormInputProps>;
export default FormInput;
