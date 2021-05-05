import { CSSProperties } from 'react';
import { FC, Variant } from '../../util';
export interface FormButtonProps {
    type?: 'button' | 'submit' | 'reset';
    variant?: Variant;
    className?: string;
    buttonText?: string;
    disableDefaultStyles?: boolean;
    disabled?: boolean;
    baseStyles?: CSSProperties;
    hoverStyles?: CSSProperties;
    onClick?: () => void;
}
declare const FormButton: FC<FormButtonProps>;
export default FormButton;
