import React, { FC } from 'react';

import { SharedInputProps, style } from './';
import { getVariantChild } from '../../util';

interface SharedElementProps extends SharedInputProps {
    center?: boolean;
}

const SharedElement: FC<SharedElementProps> = (props) => {
    const variant = typeof props.variant === 'undefined' ? 'light' : props.variant;
    const negatedVariant = variant === 'dark' ? 'light' : 'dark';
    return (
        <div
            style={{
                ...style.defaultInputWrapperStyle,
                ...(props.center ? { justifyContent: 'center', textAlign: 'center' } : {}),
                width: props.width
            }}
        >
            {props.label && (
                <label
                    style={{
                        ...style.defaultLabelStyle,
                        ...getVariantChild(negatedVariant, 'tc')
                    }}
                >
                    {props.label}
                </label>
            )}
            {props.children}
            {!props.noValidation && props.validFeedback && props.isValid ? (
                <div style={style.defaultValidFeedbackStyle}>{props.validFeedback}</div>
            ) : !props.noValidation && props.invalidFeedback && props.isInvalid ? (
                <div style={style.defaultInvalidFeedbackStyle}>{props.invalidFeedback}</div>
            ) : null}
            {props.helperText && (
                <small
                    style={{
                        ...style.defaultHelperTextStyle,
                        ...getVariantChild(negatedVariant, 'tc')
                    }}
                >
                    {props.helperText}
                </small>
            )}
        </div>
    );
};

export default SharedElement;
