import { useReducer, useCallback, useState, useEffect, useRef, createElement } from 'react';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var _a;
/* Predefined validation options. However, a custom rule, which takes a function, can be created
   and thus any validation rule that is desired, can be created. */
var ValidationType;
(function (ValidationType) {
    ValidationType["Require"] = "isRequired";
    ValidationType["MinLength"] = "minLength";
    ValidationType["MaxLength"] = "maxLength";
    ValidationType["MinValue"] = "minValue";
    ValidationType["MaxValue"] = "maxValue";
    ValidationType["MinUppercaseCharacters"] = "minUppercaseCharacters";
    ValidationType["MaxUppercaseCharacters"] = "maxUppercaseCharacters";
    ValidationType["MinNumericalSymbols"] = "minNumericalSymbols";
    ValidationType["MaxNumericalSymbols"] = "maxNumericalSymbols";
    ValidationType["CustomRule"] = "customRule";
})(ValidationType || (ValidationType = {}));
var count = function (target, callback) {
    var result = 0;
    for (var i = 0; i < target.length; i++) {
        if (callback(target[i])) {
            result++;
        }
    }
    return result;
};
var countUpperCase = function (target) {
    return count(target, function (e) { return e >= 'A' && e <= 'Z'; });
};
var countNumbers = function (target) {
    return count(target, function (e) {
        var n = parseInt(e);
        return typeof n === 'number' && !Number.isNaN(n);
    });
};
function checkIsValid(isValid, value, validatorValue, callback) {
    if (typeof value !== 'undefined' && value !== null && typeof validatorValue === 'number') {
        return isValid && callback(value, validatorValue);
    }
    return isValid;
}
var validationFunc = (_a = {},
    _a[ValidationType.Require] = function (value, isValid) {
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        return (isValid &&
            typeof value !== 'undefined' &&
            value !== null &&
            value.toString().trim().length > 0);
    },
    _a[ValidationType.MinLength] = function (value, isValid, validator) {
        return checkIsValid(isValid, value, validator.value, function (actualValue, rule) {
            if (Array.isArray(actualValue)) {
                return actualValue.length >= rule;
            }
            return actualValue.toString().trim().length >= rule;
        });
    },
    _a[ValidationType.MaxLength] = function (value, isValid, validator) {
        return checkIsValid(isValid, value, validator.value, function (actualValue, rule) {
            if (Array.isArray(actualValue)) {
                return actualValue.length <= rule;
            }
            return actualValue.toString().trim().length <= rule;
        });
    },
    _a[ValidationType.MinValue] = function (value, isValid, validator) {
        return checkIsValid(isValid, value, validator.value, function (actualValue, rule) { return +actualValue >= rule; });
    },
    _a[ValidationType.MaxValue] = function (value, isValid, validator) {
        return checkIsValid(isValid, value, validator.value, function (actualValue, rule) { return +actualValue <= rule; });
    },
    _a[ValidationType.MinUppercaseCharacters] = function (value, isValid, validator) {
        return checkIsValid(isValid, value, validator.value, function (actualValue, rule) {
            var uppercaseChars = countUpperCase(actualValue);
            return uppercaseChars >= rule;
        });
    },
    _a[ValidationType.MaxUppercaseCharacters] = function (value, isValid, validator) {
        return checkIsValid(isValid, value, validator.value, function (actualValue, rule) {
            var uppercaseChars = countUpperCase(actualValue);
            return uppercaseChars <= rule;
        });
    },
    _a[ValidationType.MinNumericalSymbols] = function (value, isValid, validator) {
        return checkIsValid(isValid, value, validator.value, function (actualValue, rule) {
            var numericalSymbols = countNumbers(actualValue.toString());
            return numericalSymbols >= rule;
        });
    },
    _a[ValidationType.MaxNumericalSymbols] = function (value, isValid, validator) {
        return checkIsValid(isValid, value, validator.value, function (actualValue, rule) {
            var numericalSymbols = countNumbers(actualValue.toString());
            return numericalSymbols <= rule;
        });
    },
    _a[ValidationType.CustomRule] = function (value, isValid, validator, state) {
        return isValid && typeof validator.value === 'function' && validator.value(value, state);
    },
    _a);
var validateState = function (state) {
    var isValid = true;
    for (var key in state.inputs) {
        isValid = isValid && state.inputs[key].isValid;
    }
    return isValid;
};
var getValidator = function (type, value) { return ({
    type: type,
    value: value
}); };
var validate = function (value, validators, state) {
    var isValid = true;
    validators.forEach(function (validator) {
        var func = validationFunc[validator.type];
        if (typeof func !== 'undefined') {
            isValid = func(value, isValid, validator, state);
        }
    });
    return isValid;
};

var FormAction;
(function (FormAction) {
    FormAction["INPUT_CHANGE"] = "INPUT_CHANGE";
    FormAction["INPUT_TOUCH"] = "INPUT_TOUCH";
    FormAction["SET_FORM"] = "SET_FORM";
})(FormAction || (FormAction = {}));
/**
 * Get an object of type FormEntryState by just defining the input type, initial value and options.
 *
 * @param initialValue - initial value of the input entry.
 * @param options      - (optional) options for initial input state and validation
 * @returns Object of type FormEntryState
 */
function getInput(initialValue, options) {
    var parsedOptions = {
        isValid: false,
        isTouched: false,
        validators: [],
        connectedFields: (options === null || options === void 0 ? void 0 : options.connectFields) || []
    };
    if (typeof options !== 'undefined') {
        var keys = Object.keys(options);
        parsedOptions.isTouched = !!options.isTouched;
        parsedOptions.isValid = !!options.isValid;
        keys.forEach(function (key) {
            if (!['isValid', 'isTouched', 'connectedFields'].includes(key)) {
                parsedOptions.validators.push(getValidator(key, options[key]));
            }
        });
    }
    return __assign(__assign({}, parsedOptions), { value: initialValue });
}
/**
 * Handle all connected fields tied to a certain input. This is useful for the following reason:
 *
 * If we have input A and input B and input B is dependent upon input A. Then we'd like to be able to
 * run the validation for input B each time the value of input A changes.
 *
 * @param state   - current FormState where the connected inputs can be found
 * @param targetId - Id of the owning input (input A in the example above)
 * @returns An object with entry keys and their updated object of type FormEntryState
 */
var handleConnectedFields = function (state, targetId) {
    try {
        var newInputState_1 = __assign({}, state.inputs);
        // find connected fields from the targetId
        newInputState_1[targetId].connectedFields.forEach(function (connectedFieldId) {
            // if the connected field exists
            if (typeof newInputState_1[connectedFieldId] !== 'undefined') {
                // then validate it given the specified state
                newInputState_1[connectedFieldId] = __assign(__assign({}, newInputState_1[connectedFieldId]), { isValid: validate(newInputState_1[connectedFieldId].value, newInputState_1[connectedFieldId].validators, state) });
            }
        });
        return newInputState_1;
    }
    catch (err) {
        process.env.NODE_ENV !== 'production' && console.error(err);
        return state.inputs;
    }
};
/**
 * Handle changes to FormState given an action associated with a payload.
 *
 * @param state Object with current FormState
 * @param action FormAction and FormPayload to handle
 * @returns Object with the updated FormState
 */
function formReducer(state, action) {
    var _a, _b;
    var pl = action.payload;
    switch (action.type) {
        case FormAction.INPUT_CHANGE:
            try {
                // copy the current state, update the entry with the specified payload Id and validate it.
                var newState = __assign(__assign({}, state), { inputs: __assign(__assign({}, state.inputs), (_a = {}, _a[pl.id] = __assign(__assign({}, state.inputs[pl.id]), { value: pl.value, isValid: validate(pl.value, state.inputs[pl.id].validators, state) }), _a)) });
                // copy the inputs and validate connected fields given the now updated state.
                newState.inputs = __assign(__assign({}, newState.inputs), handleConnectedFields(newState, pl.id));
                // return the updated FormState
                return __assign(__assign({}, newState), { inputs: __assign({}, newState.inputs), isValid: validateState(newState) });
            }
            catch (err) {
                process.env.NODE_ENV !== 'test' &&
                    console.error("use-form-state cannot recognize input-id '" + pl.id + "'. Please make sure that all form input names are tied to a form element, such as <input id='" + pl.id + "' />.");
                break;
            }
        case FormAction.INPUT_TOUCH:
            try {
                return __assign(__assign({}, state), { inputs: __assign(__assign({}, state.inputs), (_b = {}, _b[pl.id] = __assign(__assign({}, state.inputs[pl.id]), { isTouched: true }), _b)) });
            }
            catch (err) {
                process.env.NODE_ENV !== 'test' &&
                    console.error("use-form-state cannot recognize input-id '" + pl.id + "'. Please make sure that all form input names are tied to a form element, such as <input id='" + pl.id + "' />.");
                break;
            }
        case FormAction.SET_FORM:
            if (typeof pl.state !== 'undefined') {
                return __assign({}, pl.state);
            }
            else {
                return state;
            }
    }
    return state;
}
function getState(initialState) {
    var state;
    if (Object.keys(initialState).length === 2 &&
        typeof initialState.inputs !== 'undefined' &&
        typeof initialState.isValid !== 'undefined') {
        state = __assign({}, initialState);
    }
    else {
        state = {
            inputs: __assign({}, initialState),
            isValid: false
        };
        state.isValid = validateState(state);
    }
    return state;
}
/**
 * React hook for managing the state of a form and its associated inputs.
 *
 * @param initialState - Object with initial FormState or initial Inputs

 * @returns Object of UseForm type with specified properties and types.
 */
function useForm(initialState) {
    var _a = useReducer(formReducer, __assign({}, getState(initialState))), formState = _a[0], dispatch = _a[1];
    var setFormState = useCallback(function (state) {
        dispatch({
            type: FormAction.SET_FORM,
            payload: { state: __assign({}, getState(state)), value: '', id: '' }
        });
    }, []);
    var onTouchHandler = useCallback(function (event) {
        dispatch({ type: FormAction.INPUT_TOUCH, payload: { id: event.target.id, value: '' } });
    }, []);
    var onChangeHandler = useCallback(function (event) {
        dispatch({
            type: FormAction.INPUT_CHANGE,
            payload: {
                id: event.target.id,
                value: event.target.value
            }
        });
    }, []);
    return { formState: formState, onChangeHandler: onChangeHandler, onTouchHandler: onTouchHandler, setFormState: setFormState };
}

var negateVariant = function (variant) {
    return variant === 'light' ? 'dark' : 'light';
};
var getVariantCSS = function (variant, hover) {
    var isLight = variant === 'light';
    return {
        backgroundColor: hover ? (isLight ? '#ede4e4' : '#282b2e') : isLight ? '#fff' : '#343a40',
        color: isLight ? '#343a40' : '#fff'
    };
};
var getVariantChild = function (variant, opt) {
    var isLight = variant === 'light';
    var bg = { backgroundColor: isLight ? '#fff' : '#495057' };
    var tc = { color: isLight ? '#fff' : '#495057' };
    return typeof opt === 'undefined'
        ? __assign$1(__assign$1({}, bg), tc) : opt === 'bg'
        ? bg
        : opt === 'tc'
            ? tc
            : {};
};
var checkInputValidity = function (inputs) {
    var isValid = true;
    for (var key in inputs) {
        isValid = isValid && inputs[key].isValid;
    }
    return isValid;
};
var capitalize = function (target) { return target[0].toUpperCase() + target.substr(1); };

var defaultInputWrapperStyle = {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    marginBottom: '1rem',
    alignItems: 'stretch',
    width: '100%'
};
var defaultInputStyle = {
    display: 'block',
    position: 'relative',
    flex: '1 1 auto',
    width: '1%',
    minWidth: '0',
    paddingTop: '.375rem',
    paddingBottom: '.375rem',
    paddingRight: '.75rem',
    paddingLeft: '.75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    boxSizing: 'border-box',
    margin: '0',
    fontFamily: 'inherit',
    outline: 'transparent'
};
var defaultTextAreaStyle = __assign$1(__assign$1({}, defaultInputStyle), { height: 'auto', overflow: 'auto', resize: 'vertical' });
var defaultHelperTextStyle = {
    display: 'block',
    width: '100%',
    marginTop: '.25rem',
    fontSize: '80%',
    boxSizing: 'border-box',
    fontStyle: 'italic',
    fontWeight: 'normal'
};
var defaultValidStyle = {
    border: '1px solid #28a745',
    paddingRight: 'calc(1.5em + .75rem)',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right calc(.375em + .1875rem) center',
    backgroundSize: 'calc(.75em + .375rem) calc(.75em + .375rem)',
    backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")"
};
var defaultInvalidStyle = __assign$1(__assign$1({}, defaultValidStyle), { border: '1px solid #eb5765', backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\")" });
var defaultValidFeedbackStyle = {
    display: 'block',
    color: '#28a745',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '.25rem',
    fontSize: '80%'
};
var defaultInvalidFeedbackStyle = __assign$1(__assign$1({}, defaultValidFeedbackStyle), { color: '#eb5765' });
var defaultLabelStyle = {
    display: 'inline-block',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '.5rem'
};
var styles = {
    defaultInputWrapperStyle: defaultInputWrapperStyle,
    defaultInputStyle: defaultInputStyle,
    defaultTextAreaStyle: defaultTextAreaStyle,
    defaultHelperTextStyle: defaultHelperTextStyle,
    defaultValidStyle: defaultValidStyle,
    defaultInvalidStyle: defaultInvalidStyle,
    defaultValidFeedbackStyle: defaultValidFeedbackStyle,
    defaultInvalidFeedbackStyle: defaultInvalidFeedbackStyle,
    defaultLabelStyle: defaultLabelStyle
};

var SharedElement = function (props) {
    var variant = typeof props.variant === 'undefined' ? 'light' : props.variant;
    var negatedVariant = variant === 'dark' ? 'light' : 'dark';
    return (jsxs("div", __assign$1({ style: __assign$1(__assign$1(__assign$1({}, styles.defaultInputWrapperStyle), (props.center ? { justifyContent: 'center', textAlign: 'center' } : {})), { width: props.width }) }, { children: [props.label && (jsx("label", __assign$1({ style: __assign$1(__assign$1({}, styles.defaultLabelStyle), getVariantChild(negatedVariant, 'tc')) }, { children: props.label }), void 0)), props.children, !props.noValidation && props.validFeedback && props.isValid ? (jsx("div", __assign$1({ style: styles.defaultValidFeedbackStyle }, { children: props.validFeedback }), void 0)) : !props.noValidation && props.invalidFeedback && props.isInvalid ? (jsx("div", __assign$1({ style: styles.defaultInvalidFeedbackStyle }, { children: props.invalidFeedback }), void 0)) : null,
            props.helperText && (jsx("small", __assign$1({ style: __assign$1(__assign$1({}, styles.defaultHelperTextStyle), getVariantChild(negatedVariant, 'tc')) }, { children: props.helperText }), void 0))] }), void 0));
};

var FormInput = function (props) {
    var _a;
    return (jsx(SharedElement, __assign$1({}, props, { children: jsx("input", { type: props.type || 'text', id: props.id, onChange: props.onChange, onBlur: props.onBlur, value: (_a = props.value) === null || _a === void 0 ? void 0 : _a.toString(), placeholder: props.placeholder, style: __assign$1(__assign$1({}, __assign$1(__assign$1({}, styles.defaultInputStyle), getVariantCSS(props.variant || 'light'))), (props.noValidation === true
                ? {}
                : props.isValid && !props.isInvalid
                    ? styles.defaultValidStyle
                    : props.isInvalid
                        ? styles.defaultInvalidStyle
                        : {})) }, void 0) }), void 0));
};

var FormTextField = function (props) {
    var _a;
    return (jsx(SharedElement, __assign$1({}, props, { children: jsx("textarea", { id: props.id, onChange: props.onChange, onBlur: props.onBlur, value: (_a = props.value) === null || _a === void 0 ? void 0 : _a.toString(), placeholder: props.placeholder, rows: props.rows || 3, cols: props.cols || 1, style: __assign$1(__assign$1({}, __assign$1(__assign$1({}, styles.defaultTextAreaStyle), getVariantCSS(props.variant || 'light'))), (props.noValidation === true
                ? {}
                : props.isValid && !props.isInvalid
                    ? styles.defaultValidStyle
                    : props.isInvalid
                        ? styles.defaultInvalidStyle
                        : {})), wrap: props.wrap }, void 0) }), void 0));
};

var defaultBaseStyle = {
    display: 'inline-block',
    fontWeight: 'normal',
    textAlign: 'center',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '0.25rem'
};
var FormButton = function (props) {
    var _a = useState(), styles = _a[0], setStyles = _a[1];
    var disableDefaultStyles = props.disableDefaultStyles, baseStyles = props.baseStyles, variant = props.variant;
    var getColor = useCallback(function (hover) { return getVariantCSS(variant, hover); }, [
        variant
    ]);
    useEffect(function () {
        if (disableDefaultStyles === true) {
            setStyles(__assign$1({}, baseStyles));
        }
        else {
            setStyles(__assign$1(__assign$1(__assign$1({}, defaultBaseStyle), getColor(false)), baseStyles));
        }
    }, [disableDefaultStyles, baseStyles, getColor, setStyles]);
    var onHover = function () {
        if (!props.disabled) {
            setStyles(function (prev) { return (__assign$1(__assign$1(__assign$1({}, prev), (disableDefaultStyles ? {} : getColor(true))), props.hoverStyles)); });
        }
    };
    var onLeave = function () {
        if (!props.disabled) {
            setStyles(function (prev) { return (__assign$1(__assign$1(__assign$1({}, prev), (disableDefaultStyles ? {} : getColor(false))), baseStyles)); });
        }
    };
    return (jsx("button", __assign$1({ className: props.className, disabled: !!props.disabled, type: props.type || 'button', onClick: props.onClick, onMouseEnter: onHover, onMouseLeave: onLeave, style: __assign$1({ opacity: !disableDefaultStyles ? (props.disabled ? '.65' : '1') : '', cursor: !disableDefaultStyles ? (props.disabled ? 'not-allowed' : 'pointer') : '' }, styles) }, { children: props.buttonText || 'SUBMIT' }), void 0));
};

var FormImage = function (props) {
    var _a = useState(), file = _a[0], setFile = _a[1];
    var _b = useState(), preview = _b[0], setPreview = _b[1];
    var ref = useRef(null);
    var variant = props.variant || 'light';
    useEffect(function () {
        if (typeof file !== 'undefined') {
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function () {
                var _a;
                setPreview((_a = fileReader_1.result) === null || _a === void 0 ? void 0 : _a.toString());
            };
            fileReader_1.readAsDataURL(file);
        }
    }, [file]);
    var onInvalidUpload = function () {
        setPreview('');
        props.onInvalidImageUpload &&
            props.onInvalidImageUpload(props.id, props.noValidation === true);
    };
    var onImageChosenHandler = function (event) {
        if (event.target.files &&
            event.target.files.length > 0 &&
            /^image\/png|jpg|jpeg$/.test(event.target.files[0].type)) {
            var file_1 = event.target.files[0];
            setFile(file_1);
            props.onImageUpload && props.onImageUpload(props.id, file_1);
        }
        else {
            onInvalidUpload();
        }
    };
    var onImageUploadHandler = function () {
        ref.current && ref.current.click();
    };
    return (jsxs(SharedElement, __assign$1({}, props, { children: [jsx("input", { ref: ref, id: props.id, type: "file", style: { display: 'none' }, accept: ".jpg,.jpeg,.png", onChange: onImageChosenHandler }, void 0),
            jsxs("div", __assign$1({ style: { display: 'flex', justifyContent: 'center', flexDirection: 'column' } }, { children: [jsxs("div", __assign$1({ style: {
                            display: 'flex',
                            justifyContent: 'center',
                            border: '1px solid #ccc',
                            alignItems: 'center',
                            textAlign: 'center',
                            width: '13rem',
                            height: 'auto',
                            marginBottom: '1rem'
                        } }, { children: [preview && (jsx("img", { style: {
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }, src: preview, alt: "Preview" }, void 0)),
                            !preview && (jsx("p", __assign$1({ style: __assign$1({}, getVariantChild(negateVariant(variant), 'tc')) }, { children: props.imagePreviewText || 'Please choose an image.' }), void 0))] }), void 0),
                    jsx(FormButton, { variant: negateVariant(variant), buttonText: props.imageButtonText ? props.imageButtonText : 'UPLOAD', type: "button", onClick: onImageUploadHandler }, void 0)] }), void 0)] }), void 0));
};

var selectStyles = {
    boxSizing: 'border-box',
    border: 'none',
    padding: '0 1rem 0 0',
    margin: '0',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    cursor: 'inherit',
    lineHeight: 'inherit'
};
var selectDiv = {
    width: '100%',
    minWidth: '15ch',
    maxWidth: '30ch',
    border: '1px solid #777',
    borderRadius: '.25rem',
    padding: '.25rem .5rem',
    fontSize: '1.1rem',
    cursor: 'pointer',
    lineHeight: '1.5rem'
};
var FormSelect = function (props) {
    var _a;
    return (jsx(SharedElement, __assign$1({}, props, { children: jsx("div", __assign$1({ style: selectDiv }, { children: jsx("select", __assign$1({ id: props.id, style: __assign$1(__assign$1({}, selectStyles), getVariantCSS(props.variant || 'light')), disabled: !!props.disableSelect, multiple: !!props.multipleSelect, value: typeof props.value === 'boolean' || props.value instanceof File
                    ? ''
                    : props.value, onChange: props.onChange, onClick: props.onClick }, { children: (_a = props.selectOptions) === null || _a === void 0 ? void 0 : _a.map(function (option, index) {
                    var _a = typeof option === 'string'
                        ? { value: option, displayValue: '' }
                        : { value: option.value, displayValue: option.displayValue }, value = _a.value, displayValue = _a.displayValue;
                    return (jsx("option", __assign$1({ value: value }, { children: displayValue || capitalize(value) }), index));
                }) }), void 0) }), void 0) }), void 0));
};

function getFormInputs(entries) {
    var inputs = {};
    Object.keys(entries).forEach(function (key) {
        var entry = entries[key];
        var value = entry.value || '';
        var options = __assign$1({}, entry.options);
        if (entry.elementType === 'selection' &&
            typeof entry.selectOptions !== 'undefined' &&
            entry.selectOptions.length > 0) {
            var preSelected = entry.selectOptions
                .filter(function (e) { return (typeof e === 'string' ? false : e.selected === true); })
                .map(function (e) { return (typeof e === 'string' ? e : e.value); }) || [];
            var isValid = false;
            if (entry.multipleSelect === true) {
                value = preSelected;
                isValid = preSelected.length > 0;
            }
            else {
                var selected = entry.selectOptions[0];
                value =
                    preSelected.length > 0
                        ? preSelected[0]
                        : typeof selected === 'string'
                            ? selected
                            : selected.value;
                isValid = true;
            }
            if (value) {
                options = __assign$1(__assign$1({}, options), { isValid: isValid });
            }
        }
        if (entry.noValidation === true) {
            options = { isValid: true };
        }
        if (entry.elementType === 'image') {
            value = null;
            options = { isValid: entry.noValidation === true, isTouched: true };
        }
        inputs[key] = getInput(value, options);
    });
    return inputs;
}
function getSubmissionResult(inputs) {
    var result = {};
    Object.keys(inputs).forEach(function (key) {
        result[key] = inputs[key].value;
    });
    return result;
}
function onImageUpload(formState, id, file) {
    var _a;
    if (file instanceof File) {
        var newState = __assign$1(__assign$1({}, formState), { inputs: __assign$1(__assign$1({}, formState.inputs), (_a = {}, _a[id] = __assign$1(__assign$1({}, formState.inputs[id]), { value: file, isValid: true, isTouched: true }), _a)) });
        return __assign$1(__assign$1({}, newState), { isValid: checkInputValidity(newState.inputs) });
    }
    return formState;
}
function onImageInvalidUpload(formState, id, noValidation) {
    var _a;
    if (noValidation === void 0) { noValidation = false; }
    if (formState.inputs[id].isValid) {
        return __assign$1(__assign$1({}, formState), { inputs: __assign$1(__assign$1({}, formState.inputs), (_a = {}, _a[id] = __assign$1(__assign$1({}, formState.inputs[id]), { value: null, isValid: noValidation, isTouched: true }), _a)), isValid: formState.isValid && noValidation });
    }
    return formState;
}
function metaSelect(formState, id, value, noValidation) {
    var _a;
    var arr = __spreadArray([], formState.inputs[id].value);
    var idx = arr.findIndex(function (e) { return e === value; });
    if (idx > -1) {
        arr.splice(idx, 1);
    }
    else {
        arr.push(value);
    }
    var newState = __assign$1(__assign$1({}, formState), { inputs: __assign$1(__assign$1({}, formState.inputs), (_a = {}, _a[id] = __assign$1(__assign$1({}, formState.inputs[id]), { value: arr, isValid: noValidation === true ||
                validate(arr, formState.inputs[id].validators, formState), isTouched: true }), _a)) });
    return __assign$1(__assign$1({}, newState), { isValid: checkInputValidity(newState.inputs) });
}

function Form(props) {
    var _a = useForm(getFormInputs(props.entries)), formState = _a.formState, onChangeHandler = _a.onChangeHandler, onTouchHandler = _a.onTouchHandler, setFormState = _a.setFormState;
    var variant = props.variant || 'light';
    var onSubmit = function (e) {
        e.preventDefault();
        props.resetOnSubmit && setFormState(getFormInputs(props.entries));
        props.onSubmit(getSubmissionResult(formState.inputs));
    };
    var onValidUpload = function (id, file) {
        setFormState(onImageUpload(formState, id, file));
    };
    var onInvalidUpload = function (id, noValidation) {
        if (noValidation === void 0) { noValidation = false; }
        setFormState(onImageInvalidUpload(formState, id, noValidation));
    };
    var onMultipleSelect = function (noValidation, e) {
        var value = e.target.value;
        var id = e.currentTarget.id;
        if (e.currentTarget.hasAttribute('multiple')) {
            setFormState(metaSelect(formState, id, value, noValidation));
        }
        else {
            onChangeHandler({ target: { id: id, value: value } });
        }
    };
    var onSelect = function (e) {
        if (!e.target.hasAttribute('multiple')) {
            onChangeHandler(e);
        }
    };
    return (jsxs("div", __assign$1({ id: props.wrapperId, style: __assign$1({ width: props.width || '100%', paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto', boxSizing: 'border-box' }, getVariantCSS(variant)) }, { children: [props.headerText && (jsxs(Fragment, { children: [jsx("h4", __assign$1({ style: {
                            paddingTop: '1rem',
                            fontSize: '1.5rem',
                            marginBottom: '.5rem',
                            fontWeight: 'normal',
                            lineHeight: '1.2',
                            marginTop: '0'
                        } }, { children: props.headerText }), void 0),
                    jsx("hr", { style: { marginBottom: '1rem' } }, void 0)] }, void 0)),
            jsxs("form", __assign$1({ style: { paddingBottom: '1rem', boxSizing: 'border-box' }, onSubmit: onSubmit }, { children: [Object.keys(formState.inputs).map(function (id, index) {
                        var target = props.entries[id];
                        var stateTarget = formState.inputs[id];
                        var baseProps = __assign$1(__assign$1({}, target), { id: id, onChange: onChangeHandler, onBlur: onTouchHandler, variant: variant, value: stateTarget.value, isValid: stateTarget.isValid, isInvalid: stateTarget.isTouched && !stateTarget.isValid });
                        switch (target.elementType) {
                            case 'text-field':
                                return createElement(FormTextField, __assign$1({}, baseProps, { key: index }));
                            case 'selection':
                                return (createElement(FormSelect, __assign$1({}, baseProps, { key: index, onChange: onSelect, onClick: onMultipleSelect.bind(null, baseProps.noValidation === true) })));
                            case 'image':
                                return (createElement(FormImage, __assign$1({}, baseProps, { key: index, onImageUpload: onValidUpload, onInvalidImageUpload: onInvalidUpload })));
                            case 'input':
                            default:
                                return createElement(FormInput, __assign$1({}, baseProps, { key: index }));
                        }
                    }),
                    jsxs("div", __assign$1({ style: {
                            display: 'flex',
                            boxSizing: 'border-box',
                            justifyContent: 'space-between'
                        } }, { children: [jsx(FormButton, { buttonText: props.submissionText || 'SUBMIT', variant: negateVariant(variant), disabled: !formState.isValid, type: "submit" }, void 0),
                            props.onCancel && (jsx(FormButton, { type: "button", variant: variant, buttonText: props.cancelText || 'CANCEL', onClick: props.onCancel }, void 0))] }), void 0)] }), void 0)] }), void 0));
}

export { Form };
//# sourceMappingURL=index.esm.js.map
