import React from 'react';

import SharedElement, { SharedInputProps, style } from '../SharedElement';
import { FC, getVariantCSS } from '../../util';

export type FormTextFieldMetaProps = {
    rows?: number;
    cols?: number;
    wrap?: 'hard' | 'soft';
};

export interface FormTextFieldProps extends SharedInputProps, FormTextFieldMetaProps {}

const FormTextField: FC<FormTextFieldProps> = (props) => (
    <SharedElement {...props}>
        <textarea
            id={props.id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value?.toString()}
            placeholder={props.placeholder}
            rows={props.rows || 3}
            cols={props.cols || 1}
            style={{
                ...{ ...style.defaultTextAreaStyle, ...getVariantCSS(props.variant || 'light') },
                ...(props.noValidation === true
                    ? {}
                    : props.isValid && !props.isInvalid
                    ? style.defaultValidStyle
                    : props.isInvalid
                    ? style.defaultInvalidStyle
                    : {})
            }}
            wrap={props.wrap}
        />
    </SharedElement>
);

export default FormTextField;
