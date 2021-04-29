import { CSSProperties } from 'react';
export declare type Variant = 'dark' | 'light';
export declare const getVariantCSS: (variant?: Variant | undefined, hover?: boolean | undefined) => CSSProperties;
export declare const getVariantChild: (variant?: Variant | undefined, opt?: "bg" | "tc" | undefined) => CSSProperties;
