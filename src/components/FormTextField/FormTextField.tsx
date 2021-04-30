import React, { FC } from 'react';

import SharedElement from '../SharedElement/SharedElement';
import { getVariantCSS } from '../../util';
import { SharedInputProps } from '../shared.props';
import * as style from '../shared.styles';

export interface FormTextFieldProps extends SharedInputProps {
    rows?: number;
}

const FormTextField: FC<FormTextFieldProps> = (props) => (
    <SharedElement {...props}>
        <textarea
            id={props.id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value?.toString()}
            placeholder={props.placeholder}
            rows={props.rows}
            style={{
                ...{ ...style.defaultTextAreaStyle, ...getVariantCSS(props.variant || 'light') },
                ...(props.noValidation === true
                    ? {}
                    : props.isValid
                    ? style.defaultValidStyle
                    : props.isInvalid
                    ? style.defaultInvalidStyle
                    : {})
            }}
        />
    </SharedElement>
);

export default FormTextField;
