import _react, { useState, useCallback, useEffect, useRef, createElement } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

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

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var interopRequireWildcard = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var form_validation = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.getValidator = exports.validateState = exports.countNumbers = exports.countUpperCase = exports.count = exports.ValidationType = void 0;

var _defineProperty2 = interopRequireDefault(defineProperty);

var _validationFunc;

/* Predefined validation options. However, a custom rule, which takes a function, can be created
   and thus any validation rule that is desired, can be created. */
var ValidationType;
/* Function that is tied to a custom rule. Must return a boolean and will always receive two arguments: 
   value: current value of the input field where this custom rule is tied 
   state: the most updated state of the entire form. */

exports.ValidationType = ValidationType;

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
})(ValidationType || (exports.ValidationType = ValidationType = {}));

var count = function count(target, callback) {
  var result = 0;

  for (var i = 0; i < target.length; i++) {
    if (callback(target[i])) {
      result++;
    }
  }

  return result;
};

exports.count = count;

var countUpperCase = function countUpperCase(target) {
  return count(target, function (e) {
    return e >= 'A' && e <= 'Z';
  });
};

exports.countUpperCase = countUpperCase;

var countNumbers = function countNumbers(target) {
  return count(target, function (e) {
    var n = parseInt(e);
    return typeof n === 'number' && !Number.isNaN(n);
  });
};

exports.countNumbers = countNumbers;
var validationFunc = (_validationFunc = {}, (0, _defineProperty2["default"])(_validationFunc, ValidationType.Require, function (value, isValid) {
  return isValid && value.toString().trim().length > 0;
}), (0, _defineProperty2["default"])(_validationFunc, ValidationType.MinLength, function (value, isValid, validator) {
  return isValid && value.toString().trim().length >= validator.value;
}), (0, _defineProperty2["default"])(_validationFunc, ValidationType.MaxLength, function (value, isValid, validator) {
  return isValid && value.toString().trim().length <= validator.value;
}), (0, _defineProperty2["default"])(_validationFunc, ValidationType.MinValue, function (value, isValid, validator) {
  return isValid && +value >= validator.value;
}), (0, _defineProperty2["default"])(_validationFunc, ValidationType.MaxValue, function (value, isValid, validator) {
  return isValid && +value <= validator.value;
}), (0, _defineProperty2["default"])(_validationFunc, ValidationType.MinUppercaseCharacters, function (value, isValid, validator) {
  var uppercaseChars = countUpperCase(value.toString());
  return isValid && uppercaseChars >= validator.value;
}), (0, _defineProperty2["default"])(_validationFunc, ValidationType.MaxUppercaseCharacters, function (value, isValid, validator) {
  var uppercaseChars = countUpperCase(value.toString());
  return isValid && uppercaseChars <= validator.value;
}), (0, _defineProperty2["default"])(_validationFunc, ValidationType.MinNumericalSymbols, function (value, isValid, validator) {
  var numericalSymbols = countNumbers(value.toString());
  return isValid && numericalSymbols >= validator.value;
}), (0, _defineProperty2["default"])(_validationFunc, ValidationType.MaxNumericalSymbols, function (value, isValid, validator) {
  var numericalSymbols = countNumbers(value.toString());
  return isValid && numericalSymbols <= validator.value;
}), (0, _defineProperty2["default"])(_validationFunc, ValidationType.CustomRule, function (value, isValid, validator, state) {
  return isValid && typeof validator.value === 'function' && validator.value(value, state);
}), _validationFunc);

var validateState = function validateState(state) {
  var isValid = true;

  for (var _key in state.inputs) {
    isValid = isValid && state.inputs[_key].isValid;
  }

  return isValid;
};

exports.validateState = validateState;

var getValidator = function getValidator(type, value) {
  return {
    type: type,
    value: value
  };
};

exports.getValidator = getValidator;

var validate = function validate(value, validators, state) {
  var isValid = true;
  validators.forEach(function (validator) {
    var func = validationFunc[validator.type];

    if (typeof func !== 'undefined') {
      isValid = func(value, isValid, validator, state);
    }
  });
  return isValid;
};

exports.validate = validate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtLnZhbGlkYXRpb24udHMiXSwibmFtZXMiOlsiVmFsaWRhdGlvblR5cGUiLCJjb3VudCIsInRhcmdldCIsImNhbGxiYWNrIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImNvdW50VXBwZXJDYXNlIiwiZSIsImNvdW50TnVtYmVycyIsIm4iLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwidmFsaWRhdGlvbkZ1bmMiLCJSZXF1aXJlIiwidmFsdWUiLCJpc1ZhbGlkIiwidG9TdHJpbmciLCJ0cmltIiwiTWluTGVuZ3RoIiwidmFsaWRhdG9yIiwiTWF4TGVuZ3RoIiwiTWluVmFsdWUiLCJNYXhWYWx1ZSIsIk1pblVwcGVyY2FzZUNoYXJhY3RlcnMiLCJ1cHBlcmNhc2VDaGFycyIsIk1heFVwcGVyY2FzZUNoYXJhY3RlcnMiLCJNaW5OdW1lcmljYWxTeW1ib2xzIiwibnVtZXJpY2FsU3ltYm9scyIsIk1heE51bWVyaWNhbFN5bWJvbHMiLCJDdXN0b21SdWxlIiwic3RhdGUiLCJ2YWxpZGF0ZVN0YXRlIiwia2V5IiwiaW5wdXRzIiwiZ2V0VmFsaWRhdG9yIiwidHlwZSIsInZhbGlkYXRlIiwidmFsaWRhdG9ycyIsImZvckVhY2giLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtJQUNZQSxjO0FBYVo7QUFDQTtBQUNBOzs7O1dBZllBLGM7QUFBQUEsRUFBQUEsYztBQUFBQSxFQUFBQSxjO0FBQUFBLEVBQUFBLGM7QUFBQUEsRUFBQUEsYztBQUFBQSxFQUFBQSxjO0FBQUFBLEVBQUFBLGM7QUFBQUEsRUFBQUEsYztBQUFBQSxFQUFBQSxjO0FBQUFBLEVBQUFBLGM7QUFBQUEsRUFBQUEsYztHQUFBQSxjLDhCQUFBQSxjOztBQW1DTCxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxNQUFELEVBQWlCQyxRQUFqQixFQUFrRTtBQUNuRixNQUFJQyxNQUFNLEdBQUcsQ0FBYjs7QUFDQSxPQUFLLElBQUlDLENB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U0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQXVCckIsS0FBdkI7QUFBQSxTQUE4RDtBQUFFcUIsSUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFyQixJQUFBQSxLQUFLLEVBQUxBO0FBQVIsR0FBOUQ7QUFBQSxDQUFyQjs7OztBQUVBLElBQU1zQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDdEIsS0FBRCxFQUF1QnVCLFVBQXZCLEVBQWdEUCxLQUFoRCxFQUFtRjtBQUN2RyxNQUFJZixPQUFnQixHQUFHLElBQXZCO0FBQ0FzQixFQUFBQSxVQUFVLENBQUNDLE9BQVgsQ0FBbUIsVUFBQ25CLFNBQUQsRUFBZTtBQUM5QixRQUFNb0IsSUFBZ0MsR0FBRzNCLGNBQWMsQ0FBQ08sU0FBUyxDQUFDZ0IsSUFBWCxDQUF2RDs7QUFDQSxRQUFJLE9BQU9JLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDN0J4QixNQUFBQSxPQUFPLEdBQUd3QixJQUFJLENBQUN6QixLQUFELEVBQVFDLE9BQVIsRUFBaUJJLFNBQWpCLEVBQTRCVyxLQUE1QixDQUFkO0FBQ0g7QUFDSixHQUxEO0FBTUEsU0FBT2YsT0FBUDtBQUNILENBVE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtU3RhdGUsIEZvcm1WYWx1ZVR5cGUsIEZvcm1FbnRyeUNvbnN0cmFpbnQgfSBmcm9tICcuL2Zvcm0uaG9vayc7XG5cbi8qIFByZWRlZmluZWQgdmFsaWRhdGlvbiBvcHRpb25zLiBIb3dldmVyLCBhIGN1c3RvbSBydWxlLCB3aGljaCB0YWtlcyBhIGZ1bmN0aW9uLCBjYW4gYmUgY3JlYXRlZFxuICAgYW5kIHRodXMgYW55IHZhbGlkYXRpb24gcnVsZSB0aGF0IGlzIGRlc2lyZWQsIGNhbiBiZSBjcmVhdGVkLiAqL1xuZXhwb3J0IGVudW0gVmFsaWRhdGlvblR5cGUge1xuICAgIFJlcXVpcmUgPSAnaXNSZXF1aXJlZCcsXG4gICAgTWluTGVuZ3RoID0gJ21pbkxlbmd0aCcsXG4gICAgTWF4TGVuZ3RoID0gJ21heExlbmd0aCcsXG4gICAgTWluVmFsdWUgPSAnbWluVmFsdWUnLFxuICAgIE1heFZhbHVlID0gJ21heFZhbHVlJyxcbiAgICBNaW5VcHBlcmNhc2VDaGFyYWN0ZXJzID0gJ21pblVwcGVyY2FzZUNoYXJhY3RlcnMnLFxuICAgIE1heFVwcGVyY2FzZUNoYXJhY3RlcnMgPSAnbWF4VXBwZXJjYXNlQ2hhcmFjdGVycycsXG4gICAgTWluTnVtZXJpY2FsU3ltYm9scyA9ICdtaW5OdW1lcmljYWxTeW1ib2xzJyxcbiAgICBNYXhOdW1lcmljYWxTeW1ib2xzID0gJ21heE51bWVyaWNhbFN5bWJvbHMnLFxuICAgIEN1c3RvbVJ1bGUgPSAnY3VzdG9tUnVsZSdcbn1cblxuLyogRnVuY3Rpb24gdGhhdCBpcyB0aWVkIHRvIGEgY3VzdG9tIHJ1bGUuIE11c3QgcmV0dXJuIGEgYm9vbGVhbiBhbmQgd2lsbCBhbHdheXMgcmVjZWl2ZSB0d28gYXJndW1lbnRzOiBcbiAgIHZhbHVlOiBjdXJyZW50IHZhbHVlIG9mIHRoZSBpbnB1dCBmaWVsZCB3aGVyZSB0aGlzIGN1c3RvbSBydWxlIGlzIHRpZWQgXG4gICBzdGF0ZTogdGhlIG1vc3QgdXBkYXRlZCBzdGF0ZSBvZiB0aGUgZW50aXJlIGZvcm0uICovXG5leHBvcnQgdHlwZSBDdXN0b21WYWxpZGF0aW9uUnVsZTxUIGV4dGVuZHMgRm9ybVZhbHVlVHlwZSwgUyBleHRlbmRzIEZvcm1FbnRyeUNvbnN0cmFpbnQgPSBhbnk+ID0gKFxuICAgIHZhbHVlOiBULFxuICAgIHN0YXRlOiBGb3JtU3RhdGU8Uz5cbikgPT4gYm9vbGVhbjtcblxuZXhwb3J0IHR5cGUgVmFsaWRhdGlvblZhbHVlID0gRm9ybVZhbHVlVHlwZSB8IEN1c3RvbVZhbGlkYXRpb25SdWxlPGFueSwgYW55PjtcblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0b3Ige1xuICAgIHR5cGU6IFZhbGlkYXRpb25UeXBlO1xuICAgIHZhbHVlOiBWYWxpZGF0aW9uVmFsdWU7XG59XG5cbmV4cG9ydCB0eXBlIFZhbGlkYXRpb25GdW5jID0gKFxuICAgIHZhbHVlOiBGb3JtVmFsdWVUeXBlLFxuICAgIGlzVmFsaWQ6IGJvb2xlYW4sXG4gICAgdmFsaWRhdG9yOiBWYWxpZGF0b3IsXG4gICAgc3RhdGU6IEZvcm1TdGF0ZTxhbnk+XG4pID0+IGJvb2xlYW47XG5cbmV4cG9ydCBjb25zdCBjb3VudCA9ICh0YXJnZXQ6IHN0cmluZywgY2FsbGJhY2s6IChlbnRyeTogc3RyaW5nKSA9PiBib29sZWFuKTogbnVtYmVyID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2FsbGJhY2sodGFyZ2V0W2ldKSkge1xuICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBjb3VudFVwcGVyQ2FzZSA9ICh0YXJnZXQ6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIGNvdW50KHRhcmdldCwgKGUpID0+IGUgPj0gJ0EnICYmIGUgPD0gJ1onKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb3VudE51bWJlcnMgPSAodGFyZ2V0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBjb3VudCh0YXJnZXQsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUludChlKTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKG4pO1xuICAgIH0pO1xufTtcblxuY29uc3QgdmFsaWRhdGlvbkZ1bmM6IHsgW2tleTogc3RyaW5nXTogVmFsaWRhdGlvbkZ1bmMgfSA9IHtcbiAgICBbVmFsaWRhdGlvblR5cGUuUmVxdWlyZV06ICh2YWx1ZSwgaXNWYWxpZCkgPT4ge1xuICAgICAgICByZXR1cm4gaXNWYWxpZCAmJiB2YWx1ZS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgIH0sXG4gICAgW1ZhbGlkYXRpb25UeXBlLk1pbkxlbmd0aF06ICh2YWx1ZSwgaXNWYWxpZCwgdmFsaWRhdG9yKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkICYmIHZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCA+PSB2YWxpZGF0b3IudmFsdWU7XG4gICAgfSxcbiAgICBbVmFsaWRhdGlvblR5cGUuTWF4TGVuZ3RoXTogKHZhbHVlLCBpc1ZhbGlkLCB2YWxpZGF0b3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQgJiYgdmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoIDw9IHZhbGlkYXRvci52YWx1ZTtcbiAgICB9LFxuICAgIFtWYWxpZGF0aW9uVHlwZS5NaW5WYWx1ZV06ICh2YWx1ZSwgaXNWYWxpZCwgdmFsaWRhdG9yKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkICYmICt2YWx1ZSA+PSB2YWxpZGF0b3IudmFsdWU7XG4gICAgfSxcbiAgICBbVmFsaWRhdGlvblR5cGUuTWF4VmFsdWVdOiAodmFsdWUsIGlzVmFsaWQsIHZhbGlkYXRvcikgPT4ge1xuICAgICAgICByZXR1cm4gaXNWYWxpZCAmJiArdmFsdWUgPD0gdmFsaWRhdG9yLnZhbHVlO1xuICAgIH0sXG4gICAgW1ZhbGlkYXRpb25UeXBlLk1pblVwcGVyY2FzZUNoYXJhY3RlcnNdOiAodmFsdWUsIGlzVmFsaWQsIHZhbGlkYXRvcikgPT4ge1xuICAgICAgICBjb25zdCB1cHBlcmNhc2VDaGFyczogbnVtYmVyID0gY291bnRVcHBlckNhc2UodmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkICYmIHVwcGVyY2FzZUNoYXJzID49IHZhbGlkYXRvci52YWx1ZTtcbiAgICB9LFxuICAgIFtWYWxpZGF0aW9uVHlwZS5NYXhVcHBlcmNhc2VDaGFyYWN0ZXJzXTogKHZhbHVlLCBpc1ZhbGlkLCB2YWxpZGF0b3IpID0+IHtcbiAgICAgICAgY29uc3QgdXBwZXJjYXNlQ2hhcnM6IG51bWJlciA9IGNvdW50VXBwZXJDYXNlKHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gaXNWYWxpZCAmJiB1cHBlcmNhc2VDaGFycyA8PSB2YWxpZGF0b3IudmFsdWU7XG4gICAgfSxcbiAgICBbVmFsaWRhdGlvblR5cGUuTWluTnVtZXJpY2FsU3ltYm9sc106ICh2YWx1ZSwgaXNWYWxpZCwgdmFsaWRhdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNhbFN5bWJvbHM6IG51bWJlciA9IGNvdW50TnVtYmVycyh2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQgJiYgbnVtZXJpY2FsU3ltYm9scyA+PSB2YWxpZGF0b3IudmFsdWU7XG4gICAgfSxcbiAgICBbVmFsaWRhdGlvblR5cGUuTWF4TnVtZXJpY2FsU3ltYm9sc106ICh2YWx1ZSwgaXNWYWxpZCwgdmFsaWRhdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNhbFN5bWJvbHM6IG51bWJlciA9IGNvdW50TnVtYmVycyh2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQgJiYgbnVtZXJpY2FsU3ltYm9scyA8PSB2YWxpZGF0b3IudmFsdWU7XG4gICAgfSxcbiAgICBbVmFsaWRhdGlvblR5cGUuQ3VzdG9tUnVsZV06ICh2YWx1ZSwgaXNWYWxpZCwgdmFsaWRhdG9yLCBzdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gaXNWYWxpZCAmJiB0eXBlb2YgdmFsaWRhdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nICYmIHZhbGlkYXRvci52YWx1ZSh2YWx1ZSwgc3RhdGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVN0YXRlID0gKHN0YXRlOiBGb3JtU3RhdGU8YW55Pik6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdGF0ZS5pbnB1dHMpIHtcbiAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgc3RhdGUuaW5wdXRzW2tleV0uaXNWYWxpZDtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VmFsaWRhdG9yID0gKHR5cGU6IFZhbGlkYXRpb25UeXBlLCB2YWx1ZTogVmFsaWRhdGlvblZhbHVlKTogVmFsaWRhdG9yID0+ICh7IHR5cGUsIHZhbHVlIH0pO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGUgPSAodmFsdWU6IEZvcm1WYWx1ZVR5cGUsIHZhbGlkYXRvcnM6IFZhbGlkYXRvcltdLCBzdGF0ZTogRm9ybVN0YXRlPGFueT4pOiBib29sZWFuID0+IHtcbiAgICBsZXQgaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XG4gICAgdmFsaWRhdG9ycy5mb3JFYWNoKCh2YWxpZGF0b3IpID0+IHtcbiAgICAgICAgY29uc3QgZnVuYzogVmFsaWRhdGlvbkZ1bmMgfCB1bmRlZmluZWQgPSB2YWxpZGF0aW9uRnVuY1t2YWxpZGF0b3IudHlwZV07XG4gICAgICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmdW5jKHZhbHVlLCBpc1ZhbGlkLCB2YWxpZGF0b3IsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpc1ZhbGlkO1xufTtcbiJdfQ==
});

var form_hook = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInput = getInput;
exports["default"] = void 0;

var _slicedToArray2 = interopRequireDefault(slicedToArray);

var _defineProperty2 = interopRequireDefault(defineProperty);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
        parsedOptions.validators.push((0, form_validation.getValidator)(key, options[key]));
      }
    });
  }

  return _objectSpread(_objectSpread({}, parsedOptions), {}, {
    value: initialValue
  });
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


var handleConnectedFields = function handleConnectedFields(state, targetId) {
  try {
    var newInputState = _objectSpread({}, state.inputs); // find connected fields from the targetId


    newInputState[targetId].connectedFields.forEach(function (connectedFieldId) {
      // if the connected field exists
      if (typeof newInputState[connectedFieldId] !== 'undefined') {
        // then validate it given the specified state
        newInputState[connectedFieldId] = _objectSpread(_objectSpread({}, newInputState[connectedFieldId]), {}, {
          isValid: (0, form_validation.validate)(newInputState[connectedFieldId].value, newInputState[connectedFieldId].validators, state)
        });
      }
    });
    return newInputState;
  } catch (err) {
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
  var pl = action.payload;

  switch (action.type) {
    case FormAction.INPUT_CHANGE:
      try {
        // copy the current state, update the entry with the specified payload Id and validate it.
        var newState = _objectSpread(_objectSpread({}, state), {}, {
          inputs: _objectSpread(_objectSpread({}, state.inputs), {}, (0, _defineProperty2["default"])({}, pl.id, _objectSpread(_objectSpread({}, state.inputs[pl.id]), {}, {
            value: pl.value,
            isValid: (0, form_validation.validate)(pl.value, state.inputs[pl.id].validators, state)
          })))
        }); // copy the inputs and validate connected fields given the now updated state.


        newState.inputs = _objectSpread(_objectSpread({}, newState.inputs), handleConnectedFields(newState, pl.id)); // return the updated FormState

        return _objectSpread(_objectSpread({}, newState), {}, {
          inputs: _objectSpread({}, newState.inputs),
          isValid: (0, form_validation.validateState)(newState)
        });
      } catch (err) {
        console.error("use-form-state cannot recognize input-id '".concat(pl.id, "'. Please make sure that all form input names are tied to a form element, such as <input id='{ID}' />."));
        break;
      }

    case FormAction.INPUT_TOUCH:
      try {
        return _objectSpread(_objectSpread({}, state), {}, {
          inputs: _objectSpread(_objectSpread({}, state.inputs), {}, (0, _defineProperty2["default"])({}, pl.id, _objectSpread(_objectSpread({}, state.inputs[pl.id]), {}, {
            isTouched: true
          })))
        });
      } catch (err) {
        console.error("use-form-state cannot recognize input-id '".concat(pl.id, "'. Please make sure that all form input names are tied to a form element, such as <input id='{ID}' />."));
        break;
      }

    case FormAction.SET_FORM:
      if (typeof pl.state !== 'undefined') {
        return _objectSpread({}, pl.state);
      } else {
        return state;
      }
  }

  return state;
}

function getState(initialState) {
  var state;

  if (Object.keys(initialState).length === 2 && typeof initialState.inputs !== 'undefined' && typeof initialState.isValid !== 'undefined') {
    state = _objectSpread({}, initialState);
  } else {
    state = {
      inputs: _objectSpread({}, initialState),
      isValid: false
    };
    state.isValid = (0, form_validation.validateState)(state);
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
  var _useReducer = (0, _react.useReducer)(formReducer, _objectSpread({}, getState(initialState))),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      formState = _useReducer2[0],
      dispatch = _useReducer2[1];

  var setFormState = (0, _react.useCallback)(function (state) {
    dispatch({
      type: FormAction.SET_FORM,
      payload: {
        state: _objectSpread({}, getState(state)),
        value: '',
        id: ''
      }
    });
  }, []);
  var onTouchHandler = (0, _react.useCallback)(function (event) {
    dispatch({
      type: FormAction.INPUT_TOUCH,
      payload: {
        id: event.target.id,
        value: ''
      }
    });
  }, []);
  var onChangeHandler = (0, _react.useCallback)(function (event) {
    dispatch({
      type: FormAction.INPUT_CHANGE,
      payload: {
        id: event.target.id,
        value: event.target.value
      }
    });
  }, []);
  return {
    formState: formState,
    onChangeHandler: onChangeHandler,
    onTouchHandler: onTouchHandler,
    setFormState: setFormState
  };
}

var _default = useForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtLmhvb2sudHMiXSwibmFtZXMiOlsiRm9ybUFjdGlvbiIsImdldElucHV0IiwiaW5pdGlhbFZhbHVlIiwib3B0aW9ucyIsInBhcnNlZE9wdGlvbnMiLCJpc1ZhbGlkIiwiaXNUb3VjaGVkIiwidmFsaWRhdG9ycyIsImNvbm5lY3RlZEZpZWxkcyIsImNvbm5lY3RGaWVsZHMiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsImluY2x1ZGVzIiwicHVzaCIsInZhbHVlIiwiaGFuZGxlQ29ubmVjdGVkRmllbGRzIiwic3RhdGUiLCJ0YXJnZXRJZCIsIm5ld0lucHV0U3RhdGUiLCJpbnB1dHMiLCJjb25uZWN0ZWRGaWVsZElkIiwiZXJyIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uc29sZSIsImVycm9yIiwiZm9ybVJlZHVjZXIiLCJhY3Rpb24iLCJwbCIsInBheWxvYWQiLCJ0eXBlIiwiSU5QVVRfQ0hBTkdFIiwibmV3U3RhdGUiLCJpZCIsIklOUFVUX1RPVUNIIiwiU0VUX0ZPUk0iLCJnZXRTdGF0ZSIsImluaXRpYWxTdGF0ZSIsImxlbmd0aCIsInVzZUZvcm0iLCJmb3JtU3RhdGUiLCJkaXNwYXRjaCIsInNldEZvcm1TdGF0ZSIsIm9uVG91Y2hIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJvbkNoYW5nZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7OztJQVNLQSxVOztXQUFBQSxVO0FBQUFBLEVBQUFBLFU7QUFBQUEsRUFBQUEsVTtBQUFBQSxFQUFBQSxVO0dBQUFBLFUsS0FBQUEsVTs7QUFvR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQyxRQUFULENBQ0hDLFlBREcsRUFFSEMsT0FGRyxFQUdjO0FBQ2pCLE1BQU1DLGFBQStDLEdBQUc7QUFDcERDLElBQUFBLE9BQU8sRUFBRSxLQUQyQztBQUVwREMsSUFBQUEsU0FBUyxFQUFFLEtBRnlD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SUEsTUFBTVUsY0FBOEQsR0FBRyx3QkFBWSxVQUFDQyxLQUFELEVBQVc7QUFDMUZILElBQUFBLFFBQVEsQ0FBQztBQUFFWCxNQUFBQSxJQUFJLEVBQUVqQyxVQUFVLENBQUNxQyxXQUFuQjtBQUFnQ0wsTUFBQUEsT0FBTyxFQUFFO0FBQUVJLFFBQUFBLEVBQUUsRUFBRVcsS0FBSyxDQUFDQyxNQUFOLENBQWFaLEVBQW5CO0FBQXVCcEIsUUFBQUEsS0FBSyxFQUFFO0FBQTlCO0FBQXpDLEtBQUQsQ0FBUjtBQUNILEdBRnNFLEVBRXBFLEVBRm9FLENBQXZFO0FBSUEsTUFBTWlDLGVBQWdFLEdBQUcsd0JBQVksVUFBQ0YsS0FBRCxFQUFXO0FBQzVGSCxJQUFBQSxRQUFRLENBQUM7QUFDTFgsTUFBQUEsSUFBSSxFQUFFakMsVUFBVSxDQUFDa0MsWUFEWjtBQUVMRixNQUFBQSxPQUFPLEVBQUU7QUFDTEksUUFBQUEsRUFBRSxFQUFFVyxLQUFLLENBQUNDLE1BQU4sQ0FBYVosRUFEWjtBQUVMcEIsUUFBQUEsS0FBSyxFQUFFK0IsS0FBSyxDQUFDQyxNQUFOLENBQWFoQztBQUZmO0FBRkosS0FBRCxDQUFSO0FBT0gsR0FSd0UsRUFRdEUsRUFSc0UsQ0FBekU7QUFVQSxTQUFPO0FBQUUyQixJQUFBQSxTQUFTLEVBQVRBLFNBQUY7QUFBYU0sSUFBQUEsZUFBZSxFQUFmQSxlQUFiO0FBQThCSCxJQUFBQSxjQUFjLEVBQWRBLGNBQTlCO0FBQThDRCxJQUFBQSxZQUFZLEVBQVpBO0FBQTlDLEdBQVA7QUFDSDs7ZUFFY0gsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZUNhbGxiYWNrLCBSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICAgIFZhbGlkYXRvcixcbiAgICBWYWxpZGF0aW9uVHlwZSxcbiAgICBDdXN0b21WYWxpZGF0aW9uUnVsZSxcbiAgICBnZXRWYWxpZGF0b3IsXG4gICAgdmFsaWRhdGUsXG4gICAgdmFsaWRhdGVTdGF0ZVxufSBmcm9tICcuL2Zvcm0udmFsaWRhdGlvbic7XG5cbmVudW0gRm9ybUFjdGlvbiB7XG4gICAgSU5QVVRfQ0hBTkdFID0gJ0lOUFVUX0NIQU5HRScsXG4gICAgSU5QVVRfVE9VQ0ggPSAnSU5QVVRfVE9VQ0gnLFxuICAgIFNFVF9GT1JNID0gJ1NFVF9GT1JNJ1xufVxuXG5pbnRlcmZhY2UgRm9ybVBheWxvYWQgZXh0ZW5kcyBQaWNrPEZvcm1FbnRyeVN0YXRlPGFueT4sICd2YWx1ZSc+IHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHN0YXRlPzogRm9ybVN0YXRlPGFueT47XG59XG5cbnR5cGUgRm9ybUVsZW1lbnRDb25zdHJhaW50ID0gSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxPcHRpb25FbGVtZW50O1xuXG50eXBlIFJlZHVjZXJBY3Rpb24gPSB7IHR5cGU6IEZvcm1BY3Rpb247IHBheWxvYWQ6IEZvcm1QYXlsb2FkIH07XG5cbi8qIFRoaXMgaXMgdGhlIGJhc2UgZm9yIGFueSBpbnB1dCBlbnRyeSBpbiBhICdmb3JtU3RhdGUnLiBJbiBvdGhlciB3b3Jkc1xuICAgYWxsIGlucHV0IGVudHJpZXMgd2lsbCBoYXZlIHRoZXNlIHByb3BlcnRpZXMgYXZhaWxhYmxlLiAqL1xudHlwZSBGb3JtRW50cnlTdGF0ZTxUIGV4dGVuZHMgRm9ybVZhbHVlVHlwZT4gPSB7XG4gICAgdmFsdWU6IFQ7XG4gICAgaXNWYWxpZDogYm9vbGVhbjtcbiAgICBpc1RvdWNoZWQ6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgdmFsaWRhdG9yczogVmFsaWRhdG9yW107XG4gICAgcmVhZG9ubHkgY29ubmVjdGVkRmllbGRzOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldElucHV0T3B0aW9uczxUIGV4dGVuZHMgRm9ybVZhbHVlVHlwZSwgUyBleHRlbmRzIEZvcm1FbnRyeUNvbnN0cmFpbnQgPSBhbnk+ID0ge1xuICAgIFtrZXk6IHN0cmluZ106IFQgfCBudW1iZXIgfCBib29sZWFuIHwgQ3VzdG9tVmFsaWRhdGlvblJ1bGU8VCwgUz4gfCBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcbiAgICBtaW5MZW5ndGg/OiBudW1iZXI7XG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyO1xuICAgIG1pblZhbHVlPzogbnVtYmVyO1xuICAgIG1heFZhbHVlPzogbnVtYmVyO1xuICAgIG1pblVwcGVyY2FzZUNoYXJhY3RlcnM/OiBudW1iZXI7XG4gICAgbWF4VXBwZXJjYXNlQ2hhcmFjdGVycz86IG51bWJlcjtcbiAgICBtaW5OdW1lcmljYWxTeW1ib2xzPzogbnVtYmVyO1xuICAgIG1heE51bWVyaWNhbFN5bWJvbHM/OiBudW1iZXI7XG4gICAgaXNSZXF1aXJlZD86IGJvb2xlYW47XG4gICAgaXNWYWxpZD86IGJvb2xlYW47XG4gICAgaXNUb3VjaGVkPzogYm9vbGVhbjtcbiAgICBjdXN0b21SdWxlPzogQ3VzdG9tVmFsaWRhdGlvblJ1bGU8VCwgUz47XG4gICAgY29ubmVjdEZpZWxkcz86IHN0cmluZ1tdO1xufTtcblxuLyogVGhlIHR5cGUgb2Ygb2JqZWN0IHJldHVybmVkIGJ5IHVzZUZvcm0gd2hlbiBpbml0aWFsaXplZC4gKi9cbmV4cG9ydCB0eXBlIFVzZUZvcm08UyBleHRlbmRzIEZvcm1FbnRyeUNvbnN0cmFpbnQ+ID0ge1xuICAgIC8qKlxuICAgICAqIGZvcm1TdGF0ZScgd2lsbCBhbHdheXMgaGF2ZSBwcm9wZXJ0aWVzICdpbnB1dHMnIGFuZCAnaXNWYWxpZCdcbiAgICAgKiBhdmFpbGFibGUgd2hpbGUgdGhlICdpbnB1dHMnIHByb3BlcnR5LCBpZiBub24tZW1wdHksIHdpbGxcbiAgICAgKiBoYXZlIGtleXMgdGhhdCB5aWVsZHMgYW4gb2JqZWN0IG9mIHR5cGUgRm9ybUVudHJ5U3RhdGVcbiAgICAgKi9cbiAgICBmb3JtU3RhdGU6IEZvcm1TdGF0ZTxTPjtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdG91Y2ggZXZlbnRzLiBDYW4gYmUgdXNlZCB3aXRoIHByb3AgJ29uQmx1cicsIGZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogXFw8aW5wdXQgb25CbHVyPXtvblRvdWNoSGFuZGxlcn0gL1xcPlxuICAgICAqXG4gICAgICovXG4gICAgb25Ub3VjaEhhbmRsZXI6IFJlYWN0LkZvY3VzRXZlbnRIYW5kbGVyPEZvcm1FbGVtZW50Q29uc3RyYWludD47XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGNoYW5nZSBldmVudHMuIENhbiBiZSB1c2VkIHdpdGggcHJvcCAnb25DaGFuZ2UnLCBmb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqIFxcPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IC9cXD5cbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ2hhbmdlSGFuZGxlcjogUmVhY3QuQ2hhbmdlRXZlbnRIYW5kbGVyPEZvcm1FbGVtZW50Q29uc3RyYWludD47XG5cbiAgICAvKipcbiAgICAgKiBPdmVyd3JpdGUgZXhpc3RpbmcgaW5wdXRzIGJ5IHNldHRpbmcgbmV3IG9uZXM6XG4gICAgICpcbiAgICAgKiBzZXRGb3JtU3RhdGUoe1xuICAgICAqICAgICAuLi5uZXdJbnB1dHNcbiAgICAgKiB9KVxuICAgICAqXG4gICAgICogT3IgYWRkIHRvIGN1cnJlbnQgaW5wdXRzOlxuICAgICAqXG4gICAgICogc2V0Rm9ybVN0YXRlKHtcbiAgICAgKiAgICAgLi4uZm9ybVN0YXRlLmlucHV0cyxcbiAgICAgKiAgICAgLi4ubmV3SW5wdXRzXG4gICAgICogfSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGF0ZSBPYmplY3Qgd2l0aCB0aGUgbmV3IEZvcm1TdGF0ZVxuICAgICAqL1xuICAgIHNldEZvcm1TdGF0ZTogKHN0YXRlOiBGb3JtU3RhdGU8Uz4gfCBJbnB1dHM8Uz4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgdHlwZSBJbnB1dHM8VCBleHRlbmRzIEZvcm1FbnRyeUNvbnN0cmFpbnQ+ID0geyBbSyBpbiBrZXlvZiBUXTogRm9ybUVudHJ5U3RhdGU8VFtLXT4gfTtcblxuLy8gU3VwcG9ydGVkIGlucHV0IHZhbGVzLiBDYW4gYmUgZXh0ZW5kZWQgaWYgbmVlZCBiZS5cbmV4cG9ydCB0eXBlIEZvcm1WYWx1ZVR5cGUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRmlsZTtcblxuLyogUHJvcGVydHkgbmFtZXMgYW5kIHR5cGVzIG9mIGlucHV0cywgZm9yIGV4YW1wbGU6XG4gICB7IHBhc3N3b3JkOiBzdHJpbmc7IGFnZTogbnVtYmVyOyBpc0hhcHB5OiBib29sZWFuOyB9ICovXG5leHBvcnQgdHlwZSBGb3JtRW50cnlDb25zdHJhaW50ID0geyBba2V5OiBzdHJpbmddOiBGb3JtVmFsdWVUeXBlIH07XG5cbmV4cG9ydCB0eXBlIEZvcm1TdGF0ZTxUIGV4dGVuZHMgRm9ybUVudHJ5Q29uc3RyYWludD4gPSB7XG4gICAgaW5wdXRzOiBJbnB1dHM8VD47XG4gICAgaXNWYWxpZDogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogR2V0IGFuIG9iamVjdCBvZiB0eXBlIEZvcm1FbnRyeVN0YXRlIGJ5IGp1c3QgZGVmaW5pbmcgdGhlIGlucHV0IHR5cGUsIGluaXRpYWwgdmFsdWUgYW5kIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIGluaXRpYWxWYWx1ZSAtIGluaXRpYWwgdmFsdWUgb2YgdGhlIGlucHV0IGVudHJ5LlxuICogQHBhcmFtIG9wdGlvbnMgICAgICAtIChvcHRpb25hbCkgb3B0aW9ucyBmb3IgaW5pdGlhbCBpbnB1dCBzdGF0ZSBhbmQgdmFsaWRhdGlvblxuICogQHJldHVybnMgT2JqZWN0IG9mIHR5cGUgRm9ybUVudHJ5U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0PFQgZXh0ZW5kcyBGb3JtVmFsdWVUeXBlLCBTIGV4dGVuZHMgRm9ybUVudHJ5Q29uc3RyYWludCA9IGFueT4oXG4gICAgaW5pdGlhbFZhbHVlOiBULFxuICAgIG9wdGlvbnM/OiBHZXRJbnB1dE9wdGlvbnM8VCwgUz5cbik6IEZvcm1FbnRyeVN0YXRlPFQ+IHtcbiAgICBjb25zdCBwYXJzZWRPcHRpb25zOiBPbWl0PEZvcm1FbnRyeVN0YXRlPFQ+LCAndmFsdWUnPiA9IHtcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXG4gICAgICAgIHZhbGlkYXRvcnM6IFtdLFxuICAgICAgICBjb25uZWN0ZWRGaWVsZHM6IG9wdGlvbnM/LmNvbm5lY3RGaWVsZHMgfHwgW11cbiAgICB9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICAgICAgICBwYXJzZWRPcHRpb25zLmlzVG91Y2hlZCA9ICEhb3B0aW9ucy5pc1RvdWNoZWQ7XG4gICAgICAgIHBhcnNlZE9wdGlvbnMuaXNWYWxpZCA9ICEhb3B0aW9ucy5pc1ZhbGlkO1xuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFbJ2lzVmFsaWQnLCAnaXNUb3VjaGVkJywgJ2Nvbm5lY3RlZEZpZWxkcyddLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRPcHRpb25zLnZhbGlkYXRvcnMucHVzaChnZXRWYWxpZGF0b3Ioa2V5IGFzIFZhbGlkYXRpb25UeXBlLCBvcHRpb25zW2tleV0gYXMgVCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucGFyc2VkT3B0aW9ucyxcbiAgICAgICAgdmFsdWU6IGluaXRpYWxWYWx1ZVxuICAgIH07XG59XG5cbi8qKlxuICogSGFuZGxlIGFsbCBjb25uZWN0ZWQgZmllbGRzIHRpZWQgdG8gYSBjZXJ0YWluIGlucHV0LiBUaGlzIGlzIHVzZWZ1bCBmb3IgdGhlIGZvbGxvd2luZyByZWFzb246XG4gKlxuICogSWYgd2UgaGF2ZSBpbnB1dCBBIGFuZCBpbnB1dCBCIGFuZCBpbnB1dCBCIGlzIGRlcGVuZGVudCB1cG9uIGlucHV0IEEuIFRoZW4gd2UnZCBsaWtlIHRvIGJlIGFibGUgdG9cbiAqIHJ1biB0aGUgdmFsaWRhdGlvbiBmb3IgaW5wdXQgQiBlYWNoIHRpbWUgdGhlIHZhbHVlIG9mIGlucHV0IEEgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0gc3RhdGUgICAtIGN1cnJlbnQgRm9ybVN0YXRlIHdoZXJlIHRoZSBjb25uZWN0ZWQgaW5wdXRzIGNhbiBiZSBmb3VuZFxuICogQHBhcmFtIHRhcmdldElkIC0gSWQgb2YgdGhlIG93bmluZyBpbnB1dCAoaW5wdXQgQSBpbiB0aGUgZXhhbXBsZSBhYm92ZSlcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIGVudHJ5IGtleXMgYW5kIHRoZWlyIHVwZGF0ZWQgb2JqZWN0IG9mIHR5cGUgRm9ybUVudHJ5U3RhdGVcbiAqL1xuY29uc3QgaGFuZGxlQ29ubmVjdGVkRmllbGRzID0gKHN0YXRlOiBGb3JtU3RhdGU8YW55PiwgdGFyZ2V0SWQ6IHN0cmluZyk6IHsgW2tleTogc3RyaW5nXTogRm9ybUVudHJ5U3RhdGU8YW55PiB9ID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdJbnB1dFN0YXRlID0geyAuLi5zdGF0ZS5pbnB1dHMgfTtcbiAgICAgICAgLy8gZmluZCBjb25uZWN0ZWQgZmllbGRzIGZyb20gdGhlIHRhcmdldElkXG4gICAgICAgIG5ld0lucHV0U3RhdGVbdGFyZ2V0SWRdLmNvbm5lY3RlZEZpZWxkcy5mb3JFYWNoKChjb25uZWN0ZWRGaWVsZElkKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgY29ubmVjdGVkIGZpZWxkIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdJbnB1dFN0YXRlW2Nvbm5lY3RlZEZpZWxkSWRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIHRoZW4gdmFsaWRhdGUgaXQgZ2l2ZW4gdGhlIHNwZWNpZmllZCBzdGF0ZVxuICAgICAgICAgICAgICAgIG5ld0lucHV0U3RhdGVbY29ubmVjdGVkRmllbGRJZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm5ld0lucHV0U3RhdGVbY29ubmVjdGVkRmllbGRJZF0sXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IHZhbGlkYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5wdXRTdGF0ZVtjb25uZWN0ZWRGaWVsZElkXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0lucHV0U3RhdGVbY29ubmVjdGVkRmllbGRJZF0udmFsaWRhdG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0lucHV0U3RhdGU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gc3RhdGUuaW5wdXRzO1xuICAgIH1cbn07XG5cbi8qKlxuICogSGFuZGxlIGNoYW5nZXMgdG8gRm9ybVN0YXRlIGdpdmVuIGFuIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggYSBwYXlsb2FkLlxuICpcbiAqIEBwYXJhbSBzdGF0ZSBPYmplY3Qgd2l0aCBjdXJyZW50IEZvcm1TdGF0ZVxuICogQHBhcmFtIGFjdGlvbiBGb3JtQWN0aW9uIGFuZCBGb3JtUGF5bG9hZCB0byBoYW5kbGVcbiAqIEByZXR1cm5zIE9iamVjdCB3aXRoIHRoZSB1cGRhdGVkIEZvcm1TdGF0ZVxuICovXG5mdW5jdGlvbiBmb3JtUmVkdWNlcjxTIGV4dGVuZHMgRm9ybVN0YXRlPGFueT4+KHN0YXRlOiBTLCBhY3Rpb246IFJlZHVjZXJBY3Rpb24pOiBTIHtcbiAgICBjb25zdCBwbCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGb3JtQWN0aW9uLklOUFVUX0NIQU5HRTpcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gY29weSB0aGUgY3VycmVudCBzdGF0ZSwgdXBkYXRlIHRoZSBlbnRyeSB3aXRoIHRoZSBzcGVjaWZpZWQgcGF5bG9hZCBJZCBhbmQgdmFsaWRhdGUgaXQuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGU6IFMgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmlucHV0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwbC5pZF06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5pbnB1dHNbcGwuaWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwbC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB2YWxpZGF0ZShwbC52YWx1ZSwgc3RhdGUuaW5wdXRzW3BsLmlkXS52YWxpZGF0b3JzLCBzdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gY29weSB0aGUgaW5wdXRzIGFuZCB2YWxpZGF0ZSBjb25uZWN0ZWQgZmllbGRzIGdpdmVuIHRoZSBub3cgdXBkYXRlZCBzdGF0ZS5cbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5pbnB1dHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm5ld1N0YXRlLmlucHV0cyxcbiAgICAgICAgICAgICAgICAgICAgLi4uaGFuZGxlQ29ubmVjdGVkRmllbGRzKG5ld1N0YXRlLCBwbC5pZClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgdXBkYXRlZCBGb3JtU3RhdGVcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdTdGF0ZS5pbnB1dHNcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogdmFsaWRhdGVTdGF0ZShuZXdTdGF0ZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYHVzZS1mb3JtLXN0YXRlIGNhbm5vdCByZWNvZ25pemUgaW5wdXQtaWQgJyR7cGwuaWR9Jy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IGFsbCBmb3JtIGlucHV0IG5hbWVzIGFyZSB0aWVkIHRvIGEgZm9ybSBlbGVtZW50LCBzdWNoIGFzIDxpbnB1dCBpZD0ne0lEfScgLz4uYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgRm9ybUFjdGlvbi5JTlBVVF9UT1VDSDpcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuaW5wdXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3BsLmlkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmlucHV0c1twbC5pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb3VjaGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYHVzZS1mb3JtLXN0YXRlIGNhbm5vdCByZWNvZ25pemUgaW5wdXQtaWQgJyR7cGwuaWR9Jy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IGFsbCBmb3JtIGlucHV0IG5hbWVzIGFyZSB0aWVkIHRvIGEgZm9ybSBlbGVtZW50LCBzdWNoIGFzIDxpbnB1dCBpZD0ne0lEfScgLz4uYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgRm9ybUFjdGlvbi5TRVRfRk9STTpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGwuc3RhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uKHBsLnN0YXRlIGFzIFMpIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlPFMgZXh0ZW5kcyBGb3JtRW50cnlDb25zdHJhaW50Pihpbml0aWFsU3RhdGU6IEZvcm1TdGF0ZTxTPiB8IElucHV0czxTPik6IEZvcm1TdGF0ZTxTPiB7XG4gICAgbGV0IHN0YXRlOiBGb3JtU3RhdGU8Uz47XG4gICAgaWYgKFxuICAgICAgICBPYmplY3Qua2V5cyhpbml0aWFsU3RhdGUpLmxlbmd0aCA9PT0gMiAmJlxuICAgICAgICB0eXBlb2YgaW5pdGlhbFN0YXRlLmlucHV0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIGluaXRpYWxTdGF0ZS5pc1ZhbGlkICE9PSAndW5kZWZpbmVkJ1xuICAgICkge1xuICAgICAgICBzdGF0ZSA9IHsgLi4uKGluaXRpYWxTdGF0ZSBhcyBGb3JtU3RhdGU8Uz4pIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBpbnB1dHM6IHsgLi4uKGluaXRpYWxTdGF0ZSBhcyBJbnB1dHM8Uz4pIH0sXG4gICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBzdGF0ZS5pc1ZhbGlkID0gdmFsaWRhdGVTdGF0ZShzdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBSZWFjdCBob29rIGZvciBtYW5hZ2luZyB0aGUgc3RhdGUgb2YgYSBmb3JtIGFuZCBpdHMgYXNzb2NpYXRlZCBpbnB1dHMuXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZSAtIE9iamVjdCB3aXRoIGluaXRpYWwgRm9ybVN0YXRlIG9yIGluaXRpYWwgSW5wdXRzXG5cbiAqIEByZXR1cm5zIE9iamVjdCBvZiBVc2VGb3JtIHR5cGUgd2l0aCBzcGVjaWZpZWQgcHJvcGVydGllcyBhbmQgdHlwZXMuXG4gKi9cbmZ1bmN0aW9uIHVzZUZvcm08UyBleHRlbmRzIEZvcm1FbnRyeUNvbnN0cmFpbnQ+KGluaXRpYWxTdGF0ZTogRm9ybVN0YXRlPFM+IHwgSW5wdXRzPFM+KTogVXNlRm9ybTxTPiB7XG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcjxSZWR1Y2VyPEZvcm1TdGF0ZTxTPiwgUmVkdWNlckFjdGlvbj4+KGZvcm1SZWR1Y2VyLCB7XG4gICAgICAgIC4uLmdldFN0YXRlKGluaXRpYWxTdGF0ZSlcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldEZvcm1TdGF0ZSA9IHVzZUNhbGxiYWNrKChzdGF0ZTogRm9ybVN0YXRlPFM+IHwgSW5wdXRzPFM+KTogdm9pZCA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogRm9ybUFjdGlvbi5TRVRfRk9STSwgcGF5bG9hZDogeyBzdGF0ZTogeyAuLi5nZXRTdGF0ZShzdGF0ZSkgfSwgdmFsdWU6ICcnLCBpZDogJycgfSB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvblRvdWNoSGFuZGxlcjogUmVhY3QuRm9jdXNFdmVudEhhbmRsZXI8Rm9ybUVsZW1lbnRDb25zdHJhaW50PiA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZvcm1BY3Rpb24uSU5QVVRfVE9VQ0gsIHBheWxvYWQ6IHsgaWQ6IGV2ZW50LnRhcmdldC5pZCwgdmFsdWU6ICcnIH0gfSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyOiBSZWFjdC5DaGFuZ2VFdmVudEhhbmRsZXI8Rm9ybUVsZW1lbnRDb25zdHJhaW50PiA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBGb3JtQWN0aW9uLklOUFVUX0NIQU5HRSxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBpZDogZXZlbnQudGFyZ2V0LmlkLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHsgZm9ybVN0YXRlLCBvbkNoYW5nZUhhbmRsZXIsIG9uVG91Y2hIYW5kbGVyLCBzZXRGb3JtU3RhdGUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybTtcbiJdfQ==
});

var lib = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _form["default"];
  }
});
Object.defineProperty(exports, "getInput", {
  enumerable: true,
  get: function get() {
    return _form.getInput;
  }
});

var _form = interopRequireWildcard(form_hook);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0LCBnZXRJbnB1dCB9IGZyb20gJy4vZm9ybS5ob29rJztcblxuZXhwb3J0IHR5cGUgeyBVc2VGb3JtLCBGb3JtU3RhdGUsIEZvcm1WYWx1ZVR5cGUsIEZvcm1FbnRyeUNvbnN0cmFpbnQsIElucHV0cywgR2V0SW5wdXRPcHRpb25zIH0gZnJvbSAnLi9mb3JtLmhvb2snO1xuZXhwb3J0IHR5cGUge1xuICAgIFZhbGlkYXRpb25UeXBlLFxuICAgIEN1c3RvbVZhbGlkYXRpb25SdWxlLFxuICAgIFZhbGlkYXRpb25WYWx1ZSxcbiAgICBWYWxpZGF0aW9uRnVuYyxcbiAgICBWYWxpZGF0b3Jcbn0gZnJvbSAnLi9mb3JtLnZhbGlkYXRpb24nO1xuIl19
});

var useForm = /*@__PURE__*/getDefaultExportFromCjs(lib);

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
        ? __assign(__assign({}, bg), tc) : opt === 'bg'
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
var defaultTextAreaStyle = __assign(__assign({}, defaultInputStyle), { height: 'auto', overflow: 'auto', resize: 'vertical' });
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
var defaultInvalidStyle = __assign(__assign({}, defaultValidStyle), { border: '1px solid #eb5765', backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\")" });
var defaultValidFeedbackStyle = {
    display: 'block',
    color: '#28a745',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '.25rem',
    fontSize: '80%'
};
var defaultInvalidFeedbackStyle = __assign(__assign({}, defaultValidFeedbackStyle), { color: '#eb5765' });
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
    return (jsxs("div", __assign({ style: __assign(__assign(__assign({}, styles.defaultInputWrapperStyle), (props.center ? { justifyContent: 'center', textAlign: 'center' } : {})), { width: props.width }) }, { children: [props.label && (jsx("label", __assign({ style: __assign(__assign({}, styles.defaultLabelStyle), getVariantChild(negatedVariant, 'tc')) }, { children: props.label }), void 0)), props.children, !props.noValidation && props.validFeedback && props.isValid ? (jsx("div", __assign({ style: styles.defaultValidFeedbackStyle }, { children: props.validFeedback }), void 0)) : !props.noValidation && props.invalidFeedback && props.isInvalid ? (jsx("div", __assign({ style: styles.defaultInvalidFeedbackStyle }, { children: props.invalidFeedback }), void 0)) : null,
            props.helperText && (jsx("small", __assign({ style: __assign(__assign({}, styles.defaultHelperTextStyle), getVariantChild(negatedVariant, 'tc')) }, { children: props.helperText }), void 0))] }), void 0));
};

var FormInput = function (props) {
    var _a;
    return (jsx(SharedElement, __assign({}, props, { children: jsx("input", { type: props.type || 'text', id: props.id, onChange: props.onChange, onBlur: props.onBlur, value: (_a = props.value) === null || _a === void 0 ? void 0 : _a.toString(), placeholder: props.placeholder, style: __assign(__assign({}, __assign(__assign({}, styles.defaultInputStyle), getVariantCSS(props.variant || 'light'))), (props.noValidation === true
                ? {}
                : props.isValid && !props.isInvalid
                    ? styles.defaultValidStyle
                    : props.isInvalid
                        ? styles.defaultInvalidStyle
                        : {})) }, void 0) }), void 0));
};

var FormTextField = function (props) {
    var _a;
    return (jsx(SharedElement, __assign({}, props, { children: jsx("textarea", { id: props.id, onChange: props.onChange, onBlur: props.onBlur, value: (_a = props.value) === null || _a === void 0 ? void 0 : _a.toString(), placeholder: props.placeholder, rows: props.rows || 3, cols: props.cols || 1, style: __assign(__assign({}, __assign(__assign({}, styles.defaultTextAreaStyle), getVariantCSS(props.variant || 'light'))), (props.noValidation === true
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
            setStyles(__assign({}, baseStyles));
        }
        else {
            setStyles(__assign(__assign(__assign({}, defaultBaseStyle), getColor(false)), baseStyles));
        }
    }, [disableDefaultStyles, baseStyles, getColor, setStyles]);
    var onHover = function () {
        if (!props.disabled) {
            setStyles(function (prev) { return (__assign(__assign(__assign({}, prev), (disableDefaultStyles ? {} : getColor(true))), props.hoverStyles)); });
        }
    };
    var onLeave = function () {
        if (!props.disabled) {
            setStyles(function (prev) { return (__assign(__assign(__assign({}, prev), (disableDefaultStyles ? {} : getColor(false))), baseStyles)); });
        }
    };
    return (jsx("button", __assign({ className: props.className, disabled: !!props.disabled, type: props.type || 'button', onClick: props.onClick, onMouseEnter: onHover, onMouseLeave: onLeave, style: __assign({ opacity: !disableDefaultStyles ? (props.disabled ? '.65' : '1') : '', cursor: !disableDefaultStyles ? (props.disabled ? 'not-allowed' : 'pointer') : '' }, styles) }, { children: props.buttonText || 'SUBMIT' }), void 0));
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
    return (jsxs(SharedElement, __assign({}, props, { children: [jsx("input", { ref: ref, id: props.id, type: "file", style: { display: 'none' }, accept: ".jpg,.jpeg,.png", onChange: onImageChosenHandler }, void 0),
            jsxs("div", __assign({ style: { display: 'flex', justifyContent: 'center', flexDirection: 'column' } }, { children: [jsxs("div", __assign({ style: {
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
                            !preview && (jsx("p", __assign({ style: __assign({}, getVariantChild(negateVariant(variant), 'tc')) }, { children: props.ImagepreviewText || 'Please choose an image.' }), void 0))] }), void 0),
                    jsx(FormButton, { variant: negateVariant(variant), buttonText: props.ImagebuttonText ? props.ImagebuttonText : 'UPLOAD', type: "button", onClick: onImageUploadHandler }, void 0)] }), void 0)] }), void 0));
};

function getFormInputs(entries) {
    var inputs = {};
    Object.keys(entries).forEach(function (key) {
        var entry = entries[key];
        var options = __assign({}, entry.options);
        if (entry.noValidation === true) {
            options = { isValid: true };
        }
        if (entry.elementType === 'image') {
            options = { isValid: entry.noValidation === true, isTouched: true };
        }
        inputs[key] = lib.getInput(entry.value || '', options);
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

function Form(props) {
    var _a = useForm(getFormInputs(props.entries)), formState = _a.formState, onChangeHandler = _a.onChangeHandler, onTouchHandler = _a.onTouchHandler, setFormState = _a.setFormState;
    var variant = props.variant || 'light';
    var onSubmit = function (e) {
        e.preventDefault();
        props.resetOnSubmit && setFormState(getFormInputs(props.entries));
        props.onSubmit(getSubmissionResult(formState.inputs));
    };
    var onImageUpload = function (id, file) {
        var _a;
        if (file instanceof File) {
            var newState = __assign(__assign({}, formState), { inputs: __assign(__assign({}, formState.inputs), (_a = {}, _a[id] = __assign(__assign({}, formState.inputs[id]), { value: file, isValid: true, isTouched: true }), _a)) });
            setFormState(__assign(__assign({}, newState), { isValid: checkInputValidity(newState.inputs) }));
        }
    };
    var onImageInvalid = function (id, noValidation) {
        var _a;
        if (noValidation === void 0) { noValidation = false; }
        if (formState.inputs[id].isValid) {
            setFormState(__assign(__assign({}, formState), { inputs: __assign(__assign({}, formState.inputs), (_a = {}, _a[id] = __assign(__assign({}, formState.inputs[id]), { value: '', isValid: noValidation, isTouched: true }), _a)), isValid: formState.isValid && noValidation }));
        }
    };
    return (jsxs("div", __assign({ style: __assign({ width: props.width || '100%', paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto', boxSizing: 'border-box' }, getVariantCSS(variant)) }, { children: [props.headerText && (jsx("h4", __assign({ style: {
                    paddingTop: '1rem',
                    fontSize: '1.5rem',
                    marginBottom: '.5rem',
                    fontWeight: 'normal',
                    lineHeight: '1.2',
                    marginTop: '0'
                } }, { children: props.headerText }), void 0)),
            jsx("hr", { style: { marginBottom: '1rem' } }, void 0),
            jsxs("form", __assign({ style: { paddingBottom: '1rem', boxSizing: 'border-box' }, onSubmit: onSubmit }, { children: [Object.keys(formState.inputs).map(function (id, index) {
                        var target = props.entries[id];
                        var stateTarget = formState.inputs[id];
                        var baseProps = __assign(__assign({}, target), { id: id, onChange: onChangeHandler, onBlur: onTouchHandler, variant: variant, value: stateTarget.value, isValid: stateTarget.isValid, isInvalid: stateTarget.isTouched && !stateTarget.isValid });
                        switch (target.elementType) {
                            case 'text-field':
                                return (createElement(FormTextField, __assign({}, baseProps, { rows: target.rows, key: index, placeholder: target.placeholder })));
                            case 'selection':
                                return null;
                            case 'image':
                                return (createElement(FormImage, __assign({}, baseProps, { key: index, onImageUpload: onImageUpload, onInvalidImageUpload: onImageInvalid })));
                            case 'input':
                            default:
                                return (createElement(FormInput, __assign({}, baseProps, { key: index, placeholder: target.placeholder })));
                        }
                    }),
                    jsxs("div", __assign({ style: {
                            display: 'flex',
                            boxSizing: 'border-box',
                            justifyContent: 'space-between'
                        } }, { children: [jsx(FormButton, { buttonText: props.submissionText || 'SUBMIT', variant: negateVariant(variant), disabled: !formState.isValid, type: "submit" }, void 0),
                            props.onCancel && (jsx(FormButton, { type: "button", variant: variant, buttonText: props.cancelText || 'CANCEL', onClick: props.onCancel }, void 0))] }), void 0)] }), void 0)] }), void 0));
}

export { Form };
//# sourceMappingURL=index.esm.js.map
