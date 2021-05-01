import { CSSProperties } from 'react';

import { Inputs, FormEntryConstraint } from 'cl-use-form-state';

export type Variant = 'dark' | 'light';

export const negateVariant = (variant?: Variant): Variant => {
    return variant === 'light' ? 'dark' : 'light';
};

export const getVariantCSS = (variant?: Variant, hover?: boolean): CSSProperties => {
    const isLight = variant === 'light';
    return {
        backgroundColor: hover ? (isLight ? '#ede4e4' : '#282b2e') : isLight ? '#fff' : '#343a40',
        color: isLight ? '#343a40' : '#fff'
    };
};

export const getVariantChild = (variant?: Variant, opt?: 'bg' | 'tc'): CSSProperties => {
    const isLight = variant === 'light';
    const bg = { backgroundColor: isLight ? '#fff' : '#495057' };
    const tc = { color: isLight ? '#fff' : '#495057' };
    return typeof opt === 'undefined'
        ? { ...bg, ...tc }
        : opt === 'bg'
        ? bg
        : opt === 'tc'
        ? tc
        : {};
};

export const checkInputValidity = (inputs: Inputs<FormEntryConstraint>): boolean => {
    let isValid = true;
    for (const key in inputs) {
        isValid = isValid && inputs[key].isValid;
    }
    return isValid;
};
