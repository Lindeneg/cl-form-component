import { FC } from 'react';
import { SharedInputProps } from '../SharedElement';
export declare type FormImageMetaProps = {
    onImageUpload?: (id: string, file: File) => void;
    onInvalidImageUpload?: (id: string, noValidation: boolean) => void;
    imagePreviewText?: string;
    imageButtonText?: string;
    center?: boolean;
};
export interface FormImageProps extends SharedInputProps, FormImageMetaProps {
}
declare const FormImage: FC<FormImageProps>;
export default FormImage;
