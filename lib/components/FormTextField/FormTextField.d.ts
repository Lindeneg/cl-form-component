import { SharedInputProps } from '../SharedElement';
import { FC } from '../../util';
export declare type FormTextFieldMetaProps = {
    rows?: number;
    cols?: number;
    wrap?: 'hard' | 'soft';
};
export interface FormTextFieldProps extends SharedInputProps, FormTextFieldMetaProps {
}
declare const FormTextField: FC<FormTextFieldProps>;
export default FormTextField;
