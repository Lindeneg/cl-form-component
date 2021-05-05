import React from 'react';
import { FormEntryConstraint, FormValueType } from 'cl-use-form-state';
import { Entries, SubmissionResult } from './Form.util';
import { Variant } from '../../util';
export interface FormProps<T extends FormEntryConstraint> {
    entries: Entries<T>;
    onSubmit: (submissionResult: SubmissionResult<T>) => void;
    onCancel?: () => void;
    variant?: Variant;
    width?: string;
    submissionText?: string;
    headerText?: string;
    cancelText?: string;
    wrapperId?: string;
    resetOnSubmit?: boolean;
}
declare function Form<T extends FormEntryConstraint = Record<string, FormValueType>>(props: FormProps<T>): React.ReactElement;
export default Form;
