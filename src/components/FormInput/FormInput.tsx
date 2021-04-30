import React, { FC } from 'react';

import SharedElement, { SharedInputProps, style } from '../SharedElement';
import { getVariantCSS } from '../../util';

export interface FormInputProps extends SharedInputProps {
    type?: 'text' | 'password' | 'number' | 'file' | 'email';
}

const FormInput: FC<FormInputProps> = (props) => (
    <SharedElement {...props}>
        <input
            type={props.type || 'text'}
            id={props.id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value?.toString()}
            placeholder={props.placeholder}
            style={{
                ...{ ...style.defaultInputStyle, ...getVariantCSS(props.variant || 'light') },
                ...(props.noValidation === true
                    ? {}
                    : props.isValid && !props.isInvalid
                    ? style.defaultValidStyle
                    : props.isInvalid
                    ? style.defaultInvalidStyle
                    : {})
            }}
        />
    </SharedElement>
);

export default FormInput;
