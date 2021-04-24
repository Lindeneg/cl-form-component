import React, { CSSProperties, FC, useEffect, useState, useCallback } from 'react';

import { Variant, getVariantCSS } from '../../util';

const defaultBaseStyle: CSSProperties = {
    display: 'inline-block',
    fontWeight: 'normal',
    textAlign: 'center',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '0.25rem'
};

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

const FormButton: FC<FormButtonProps> = (props) => {
    const [styles, setStyles] = useState<CSSProperties>();
    const { disableDefaultStyles, baseStyles, variant } = props;

    const getColor = useCallback((hover: boolean): CSSProperties => getVariantCSS(variant, hover), [
        variant
    ]);

    useEffect(() => {
        if (disableDefaultStyles === true) {
            setStyles({ ...baseStyles });
        } else {
            setStyles({ ...defaultBaseStyle, ...getColor(false), ...baseStyles });
        }
    }, [disableDefaultStyles, baseStyles, getColor, setStyles]);

    const onHover = (): void => {
        if (!props.disabled) {
            setStyles((prev) => ({
                ...prev,
                ...(disableDefaultStyles ? {} : getColor(true)),
                ...props.hoverStyles
            }));
        }
    };

    const onLeave = (): void => {
        if (!props.disabled) {
            setStyles((prev) => ({
                ...prev,
                ...(disableDefaultStyles ? {} : getColor(false)),
                ...baseStyles
            }));
        }
    };

    return (
        <button
            className={props.className}
            disabled={!!props.disabled}
            type={props.type || 'button'}
            onClick={props.onClick}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            style={{
                opacity: !disableDefaultStyles ? (props.disabled ? '.65' : '1') : '',
                cursor: !disableDefaultStyles ? (props.disabled ? 'not-allowed' : 'pointer') : '',
                // overwrite above styles if user has defined them in passed props
                ...styles
            }}
        >
            {props.buttonText || 'SUBMIT'}
        </button>
    );
};

export default FormButton;
