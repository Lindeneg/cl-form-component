import React, { FC } from 'react';

import SharedElement, { SharedInputProps, style } from '../SharedElement';
import { getVariantCSS } from '../../util';

export interface FormTextFieldProps extends SharedInputProps {
    rows?: number;
    cols?: number;
    wrap?: 'hard' | 'soft';
}

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
