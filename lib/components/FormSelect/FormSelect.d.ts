import React, { FC } from 'react';
import { SharedInputProps } from '../SharedElement';
export declare type FormSelectOptionProps = {
    value: string;
    displayValue?: string;
    selected?: boolean;
};
export declare type FormSelectMetaProps = {
    selectOptions?: Array<FormSelectOptionProps | string>;
    disableSelect?: boolean;
    multipleSelect?: boolean;
    center?: boolean;
    onClick?: React.MouseEventHandler<HTMLSelectElement>;
};
export interface FormSelectProps extends SharedInputProps, FormSelectMetaProps {
}
declare const FormSelect: FC<FormSelectProps>;
export default FormSelect;
