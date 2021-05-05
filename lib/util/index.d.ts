import { CSSProperties } from 'react';
import { Inputs, FormEntryConstraint } from 'cl-use-form-state';
export declare type FC<P = Record<string, never>> = (props: P) => React.ReactElement | null;
export declare type FCC<P = Record<string, never>> = (props: React.PropsWithChildren<P>) => React.ReactElement | null;
export declare type Variant = 'dark' | 'light';
export declare const negateVariant: (variant?: Variant | undefined) => Variant;
export declare const getVariantCSS: (variant?: Variant | undefined, hover?: boolean | undefined) => CSSProperties;
export declare const getVariantChild: (variant?: Variant | undefined, opt?: "bg" | "tc" | undefined) => CSSProperties;
export declare const checkInputValidity: (inputs: Inputs<FormEntryConstraint>) => boolean;
export declare const capitalize: (target: string) => string;
