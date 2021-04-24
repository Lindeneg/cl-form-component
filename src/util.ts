import { CSSProperties } from 'react';

export type Variant = 'dark' | 'light';

export const negateVariant = (variant: Variant): Variant =>
    variant === 'light' ? 'dark' : 'light';

export const getVariantCSS = (variant?: Variant, hover?: boolean): CSSProperties => {
    const isLight = variant === 'light';
    return {
        backgroundColor: hover ? (isLight ? '#ede4e4' : '#282b2e') : isLight ? '#fff' : '#343a40',
        color: isLight ? '#343a40' : '#fff'
    };
};

export const defaultInputStyle: CSSProperties = {
    display: 'block',
    position: 'relative',
    flex: '1 1 auto',
    width: '1%',
    minWidth: '0',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#495057', // use variant
    backgroundColor: '#fff', // use variant
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    margin: '0',
    fontFamily: 'inherit',
    outlineColor: '#007bff'
};

//text area: height: auto; overflow: auto; resize: vertical;
