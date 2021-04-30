import React, { FC } from 'react';

import SharedElement from '../SharedElement/SharedElement';
import { getVariantCSS } from '../../util';
import { SharedInputProps } from '../shared.props';
import * as style from '../shared.styles';

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
                ...(props.isValid
                    ? style.defaultValidStyle
                    : props.isInvalid
                    ? style.defaultInvalidStyle
                    : {})
            }}
        />
    </SharedElement>
);

export default FormInput;
