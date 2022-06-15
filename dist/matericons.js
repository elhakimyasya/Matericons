(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["matericons"] = factory();
	else
		root["matericons"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/icon-replace.js":
/*!*****************************!*\
  !*** ./src/icon-replace.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Replace all HTML elements that have a `data-matericons` attribute with SVG markup corresponding to the element's `data-matericons` attribute value.
function replace() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (typeof document === 'undefined') {
        throw new Error('`matericons.replace()` only works in a browser environment.');
    }

    var elementsToReplace = document.querySelectorAll('[data-matericons]');

    Array.from(elementsToReplace).forEach(function (element) {
        return replaceElement(element, attrs);
    });
}

// Replace a single HTML element with SVG markup corresponding to the element's `data-matericon` attribute value.
function replaceElement(element) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var elementAttrs = getAttrs(element);
    var name = elementAttrs['data-matericons'];
    delete elementAttrs['data-matericons'];

    var svgString = _icons2.default[name].iconToSVG(_extends({}, attrs, elementAttrs, {
        class: (0, _dedupe2.default)(attrs.class, elementAttrs.class)
    }));
    var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
    var svgElement = svgDocument.querySelector('svg');

    element.parentNode.replaceChild(svgElement, element);
}

// Get the attributes of an HTML element
function getAttrs(element) {
    return Array.from(element.attributes).reduce(function (attrs, attr) {
        attrs[attr.name] = attr.value;
        return attrs;
    }, {});
}

exports["default"] = replace;

/***/ }),

/***/ "./src/icon-to-svg.js":
/*!****************************!*\
  !*** ./src/icon-to-svg.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create an SVG string
function iconToSVG(name) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    console.warn('matericons.iconToSVG() is deprecated. Please use matericons.icons[name].iconToSVG() instead.');

    if (!name) {
        throw new Error('The required `key` (icon name) parameter is missing.');
    }

    if (!_icons2.default[name]) {
        throw new Error('No icon matching \'' + name + '\'.');
    }

    return _icons2.default[name].iconToSVG(attrs);
}

exports["default"] = iconToSVG;

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _iconAttributes = __webpack_require__(/*! ./icon-attributes.json */ "./src/icon-attributes.json");

var _iconAttributes2 = _interopRequireDefault(_iconAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function () {
    function Icon(name, contents) {
        var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, Icon);

        this.name = name;
        this.contents = contents;
        this.tags = tags;
        this.attrs = _extends({}, _iconAttributes2.default, { class: 'matericons matericons-' + name });
    }

    // Create an SVG string


    _createClass(Icon, [{
        key: 'iconToSVG',
        value: function iconToSVG() {
            var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

            return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
        }

        // Return string representation of an `Icon`

    }, {
        key: 'toString',
        value: function toString() {
            return this.contents;
        }
    }]);

    return Icon;
}();

// Convert attributes object to string of HTML attributes


function attrsToString(attrs) {
    return Object.keys(attrs).map(function (key) {
        return key + '="' + attrs[key] + '"';
    }).join(' ');
}

exports["default"] = Icon;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");

var _icons2 = _interopRequireDefault(_icons);

var _iconTags = __webpack_require__(/*! ./icon-tags.json */ "./src/icon-tags.json");

var _iconTags2 = _interopRequireDefault(_iconTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = Object.keys(_icons2.default).map(function (key) {
    return new _icon2.default(key, _icons2.default[key], _iconTags2.default[key]);
}).reduce(function (object, icon) {
    object[icon.name] = icon;
    return object;
}, {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

var _iconToSvg = __webpack_require__(/*! ./icon-to-svg */ "./src/icon-to-svg.js");

var _iconToSvg2 = _interopRequireDefault(_iconToSvg);

var _iconReplace = __webpack_require__(/*! ./icon-replace */ "./src/icon-replace.js");

var _iconReplace2 = _interopRequireDefault(_iconReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { icons: _icons2.default, iconToSVG: _iconToSvg2.default, replace: _iconReplace2.default };

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			if (object.toString === Object.prototype.toString) {
				for (var k in object) {
					if (hasOwn.call(object, k)) {
						// set value to false instead of deleting it to avoid changing object structure
						// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
						resultSet[k] = !!object[k];
					}
				}
			} else {
				resultSet[object.toString()] = true;
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var Array = global.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ ((module) => {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ ((module) => {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ ((module) => {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt);
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"acer-1":"<path d=\\"M17.88 9.5h1.63l-.19.95a2.07 2.07 0 0 1 1.77-1.06 4.59 4.59 0 0 1 .81.07l-.31 1.25a3.15 3.15 0 0 0-.78-.12 2 2 0 0 0-1.93 1.57l-.57 2.15h-1.69C17 12.7 17.6 11 17.88 9.5zm-4.65 2.13a13.67 13.67 0 0 1 1.9-.2c.73-.09 1.76-.49 1.73-1.1s-.62-.8-1.16-.73a3 3 0 0 0-2.47 2zm-.16.42a3.82 3.82 0 0 0 0 .81 1.45 1.45 0 0 0 1.55 1.19 2.61 2.61 0 0 0 1.8-.82.13.13 0 0 1 .22 0 .22.22 0 0 1 0 .21 3 3 0 0 1-2.25 1c-1.06 0-2.38-.4-2.54-1.49a2 2 0 0 1 0-.43 3.84 3.84 0 0 1 3.89-3.22c.87-.05 2.13.18 2.05 1.12s-1.57 1.34-2.54 1.36a5.68 5.68 0 0 0-2.12.24zm-.91 1.15l-.27 1a6.8 6.8 0 0 1-1.61.17c-1.62 0-2.82-.78-2.74-2.33.08-1.78 1.85-2.69 3.55-2.71a6.69 6.69 0 0 1 1.65.19l-.51 1a3.67 3.67 0 0 0-1.37-.15 1.76 1.76 0 0 0-1.7 1.29 1.3 1.3 0 0 0 1.37 1.76 5.62 5.62 0 0 0 1.63-.27zM5.28 9.38c1.36 0 2.39.32 2.48 1.45a3.75 3.75 0 0 1-.24 1.28L7 14.32c-1.09 0-2 0-3 .1s-2-.19-2-1.35c0-1.9 3-1.73 4.21-1.73.26-.76-.36-1.06-1.23-1.06a6.41 6.41 0 0 0-2.08.43l.23-1a7.4 7.4 0 0 1 2.15-.31zM6 12.1c-.69 0-2.62-.16-2.62.89 0 .52.54.6 1 .6 1.23 0 1.42-.42 1.62-1.49zm15.31 1.23a.67.67 0 0 0-.47.2.72.72 0 0 0-.2.48.69.69 0 0 0 .2.47.63.63 0 0 0 .47.2.67.67 0 0 0 .48-.2A.64.64 0 0 0 22 14a.65.65 0 0 0-.19-.48.72.72 0 0 0-.48-.2zm.61.68a.6.6 0 0 1-.18.42.69.69 0 0 1-.43.18.64.64 0 0 1-.43-.18.61.61 0 0 1-.17-.42.67.67 0 0 1 .17-.44.63.63 0 0 1 .43-.17.58.58 0 0 1 .43.18.62.62 0 0 1 .2.42zm-.59-.4h-.28v.77h.11V14h.19l.17.35h.12l-.16-.35a.21.21 0 0 0 .19-.21c0-.15-.1-.21-.32-.21zm0 .07c.15 0 .24 0 .24.14s-.08.15-.24.15h-.15v-.29z\\"></path>","acer-2":"<path d=\\"M22 9.8c-.07-.09-.14-.16-.49-.19h-.88a2.8 2.8 0 0 0-2.64 1.18c.12-.78-.64-1.18-2.29-1.18-1.94 0-3.17.78-3.66 2.36a2.18 2.18 0 0 0-.05 1.44H10.38c-.71 0-1.15-.12-1.32-.35a1.53 1.53 0 0 1 .05-1.21 2 2 0 0 1 2.22-1.39 11.61 11.61 0 0 1 1.2.07c.07 0 .12-.1.12-.17v-.07l-.12-.29c0-.21-.19-.33-.47-.38s-.48 0-.76 0a3.45 3.45 0 0 0-3.23 1.48c.21-1-.5-1.51-2.13-1.51a17.75 17.75 0 0 0-2 .07c-.31.05-.5.17-.57.38l-.14.42q0 .12.12.12c.07 0 .35 0 .83-.07.63 0 1.08-.07 1.39-.07.9 0 1.3.24 1.16.69a.29.29 0 0 1-.22.19c-.85.14-1.53.23-2 .3-1.41.19-2.24.62-2.45 1.33-.31 1 .45 1.44 2.26 1.44a12.38 12.38 0 0 0 2.29-.17c.36-.07.55-.14.62-.38l.33-1.08c0 1.08.71 1.63 2.27 1.63a14.93 14.93 0 0 0 1.6-.07c.31-.05.47-.12.55-.36l.07-.33c.33.52 1.06.78 2.17.78a10.3 10.3 0 0 0 2.05-.1.42.42 0 0 0 .31-.26.08.08 0 0 1 0-.07l.14-.45c0-.07 0-.11-.12-.11h-1.94a3.79 3.79 0 0 1-1.11-.12.61.61 0 0 1-.42-.68l2.38-.31a3 3 0 0 0 2.15-1l-.83 2.76a.1.1 0 0 0 0 .12.23.23 0 0 0 .16.05h1a.27.27 0 0 0 .26-.17l.87-3c.12-.41.47-.59 1.13-.59h1.3a.25.25 0 0 0 .21-.14L22 10a.25.25 0 0 0 0-.2zM6 13.44a8.87 8.87 0 0 1-1.32.07c-1 0-1.44-.21-1.32-.61a.82.82 0 0 1 .78-.52l2.29-.31zM16.59 11c-.09.31-.54.52-1.34.64l-1.92.26.05-.16a1.84 1.84 0 0 1 .66-1 2.64 2.64 0 0 1 1.42-.29c.87 0 1.25.22 1.13.59z\\"></path>","align-text-both-one":"<path d=\\"M18.8 3H5.2A2.2 2.2 0 0 0 3 5.2v13.6A2.2 2.2 0 0 0 5.2 21h13.6a2.2 2.2 0 0 0 2.2-2.2V5.2A2.2 2.2 0 0 0 18.8 3zm.4 15.8a.4.4 0 0 1-.4.4H5.2a.4.4 0 0 1-.4-.4V5.2a.4.4 0 0 1 .4-.4h13.6a.4.4 0 0 1 .4.4zM17.4 12a.9.9 0 0 1-.9.9h-9a.9.9 0 0 1 0-1.8h9a.9.9 0 0 1 .9.9zm0-4.1a1 1 0 0 1-.9 1h-9a1 1 0 0 1-.9-1 .9.9 0 0 1 .9-.8h9a.9.9 0 0 1 .9.8zm0 8.2a.9.9 0 0 1-.9.8h-9a.9.9 0 0 1-.9-.8 1 1 0 0 1 .9-1h9a1 1 0 0 1 .9 1z\\"></path>","apple":"<path d=\\"M18.73 19.5C17.9 20.74 17 22 15.68 22s-1.77-.79-3.29-.79-2 .77-3.27.82-2.3-1.35-3.12-2.56C4.27 17 3 12.45 4.72 9.39a4.88 4.88 0 0 1 4.12-2.51c1.28 0 2.5.87 3.29.87s2.26-1.07 3.81-.91a4.64 4.64 0 0 1 3.64 2 4.56 4.56 0 0 0-2.15 3.81 4.41 4.41 0 0 0 2.68 4 11.05 11.05 0 0 1-1.38 2.83M13 3.5A4.55 4.55 0 0 1 16 2a4.38 4.38 0 0 1-1 3.19 3.65 3.65 0 0 1-3 1.42 4.27 4.27 0 0 1 1-3.11z\\"></path>","application-menu":"<path d=\\"M7.6 5.8A1.8 1.8 0 1 1 5.8 4a1.8 1.8 0 0 1 1.8 1.8zM12 4a1.8 1.8 0 1 0 1.8 1.8A1.8 1.8 0 0 0 12 4zm6.2 3.6a1.8 1.8 0 1 0-1.8-1.8 1.8 1.8 0 0 0 1.8 1.8zM5.8 10.2A1.8 1.8 0 1 0 7.6 12a1.8 1.8 0 0 0-1.8-1.8zm6.2 0a1.8 1.8 0 1 0 1.8 1.8 1.8 1.8 0 0 0-1.8-1.8zm6.2 0A1.8 1.8 0 1 0 20 12a1.8 1.8 0 0 0-1.8-1.8zM5.8 16.4a1.8 1.8 0 1 0 1.8 1.8 1.8 1.8 0 0 0-1.8-1.8zm6.2 0a1.8 1.8 0 1 0 1.8 1.8 1.8 1.8 0 0 0-1.8-1.8zm6.2 0a1.8 1.8 0 1 0 1.8 1.8 1.8 1.8 0 0 0-1.8-1.8z\\"></path>","archive-outline":"<path d=\\"M20 21H4V10h2v9h12v-9h2v11M3 3h18v6H3V3m6.5 8h5c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5M5 5v2h14V5H5z\\"></path>","archive":"<path d=\\"M19.7 5.6H4.3A1.3 1.3 0 0 0 3 6.9v1.9a1.3 1.3 0 0 0 1.3 1.3v7a1.3 1.3 0 0 0 1.3 1.3h12.8a1.3 1.3 0 0 0 1.3-1.3v-7A1.3 1.3 0 0 0 21 8.8V6.9a1.3 1.3 0 0 0-1.3-1.3zm-1.3 11.5H5.6v-7h12.8zm1.3-8.3H4.3V6.9h15.4zM9.4 12.6a.7.7 0 0 1 .7-.6h3.8a.7.7 0 0 1 .7.6.7.7 0 0 1-.7.7h-3.8a.7.7 0 0 1-.7-.7z\\"></path>","arrow-clockwise":"<path d=\\"M22 4.4v4.8a.9.9 0 0 1-.8.8h-4.8a.9.9 0 0 1-.8-.8.8.8 0 0 1 .8-.8h2.9l-2.1-2.1a7.9 7.9 0 0 0-11.3.1 8 8 0 0 0 11.3 11.3.8.8 0 0 1 1.2-.1.8.8 0 0 1 0 1.1 9.7 9.7 0 0 1-13.6 0 9.7 9.7 0 0 1 0-13.6 9.7 9.7 0 0 1 13.6 0l2 2V4.4a.8.8 0 0 1 1.6 0z\\"></path>","arrow-left-1":"<path d=\\"M20 12a.7.7 0 0 1-.7.6h-13l4.8 4.9a.7.7 0 0 1 0 1 .7.7 0 0 1-.9 0l-6-6a.7.7 0 0 1 0-1l6-6a.6.6 0 0 1 .9.1.7.7 0 0 1 0 .9l-4.8 4.8h13a.7.7 0 0 1 .7.7z\\"></path>","arrow-left-2":"<path d=\\"M20 12a.9.9 0 0 1-.8.8H6.7l3.5 3.4a.9.9 0 0 1 0 1.2l-.6.2-.6-.2-4.8-4.8v-.3a.6.6 0 0 1 0-.6v-.3L9 6.6a.9.9 0 0 1 1.2 0 .9.9 0 0 1 0 1.2l-3.5 3.4h12.5a.9.9 0 0 1 .8.8z\\"></path>","arrow-left":"<path d=\\"M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z\\"></path>","arrow-right-1":"<path d=\\"M4 12a.7.7 0 0 1 .7-.6h13l-4.8-4.9a.7.7 0 0 1 0-1 .7.7 0 0 1 .9 0l6 6a.7.7 0 0 1 0 1l-6 6a.6.6 0 0 1-.9-.1.7.7 0 0 1 0-.9l4.8-4.8h-13A.7.7 0 0 1 4 12z\\"></path>","arrow-right-2":"<path d=\\"M4 12a.9.9 0 0 1 .8-.8h12.5l-3.5-3.4a.9.9 0 0 1 0-1.2l.6-.2.6.2 4.8 4.8v.3a.6.6 0 0 1 0 .6v.3L15 17.4a.8.8 0 0 1-1.2-1.2l3.5-3.4H4.8A.9.9 0 0 1 4 12z\\"></path>","arrow-right":"<path d=\\"M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z\\"></path>","arrow-up-1":"<path d=\\"M12 20a.7.7 0 0 1-.6-.7v-13l-4.9 4.8a.7.7 0 0 1-1 0 .7.7 0 0 1 0-.9l6-6a.7.7 0 0 1 1 0l6 6a.6.6 0 0 1-.1.9.7.7 0 0 1-.9 0l-4.8-4.8v13a.7.7 0 0 1-.7.7z\\"></path>","arrow-up-2":"<path d=\\"M12 20a.9.9 0 0 1-.8-.8V6.7l-3.4 3.5a.9.9 0 0 1-1.2 0 1.4 1.4 0 0 1-.2-.6 1.4 1.4 0 0 1 .2-.6l4.8-4.8h1.2L17.4 9a.8.8 0 0 1-1.2 1.2l-3.4-3.5v12.5a.9.9 0 0 1-.8.8z\\"></path>","arrow-up":"<path d=\\"M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12z\\"></path>","article":"<path d=\\"M19.6 4.4H4.4A1.4 1.4 0 0 0 3 5.8v12.4a1.4 1.4 0 0 0 1.4 1.4h15.2a1.4 1.4 0 0 0 1.4-1.4V5.8a1.4 1.4 0 0 0-1.4-1.4zm0 13.8H4.4V5.8h15.2zm-2.4-9a.7.7 0 0 1-.7.7h-9a.7.7 0 0 1 0-1.4h9a.7.7 0 0 1 .7.7zm0 2.8a.7.7 0 0 1-.7.7h-9a.7.7 0 0 1 0-1.4h9a.7.7 0 0 1 .7.7zm0 2.8a.7.7 0 0 1-.7.7h-9a.7.7 0 0 1 0-1.4h9a.7.7 0 0 1 .7.7z\\"></path>","asus-rog":"<defs><clippath id=\\"a\\"><rect width=\\"48\\" height=\\"48\\"></rect></clippath><symbol id=\\"b\\" data-name=\\"material_system_icon_keylines\\" viewbox=\\"0 0 48 48\\"><g clip-path=\\"url(#a)\\" opacity=\\".4\\"><line x1=\\"24\\" x2=\\"24\\" y2=\\"48\\"></line><line x1=\\"48\\" y1=\\"24\\" y2=\\"24\\"></line><line x1=\\"48\\" y1=\\"16\\" y2=\\"16\\"></line><line x1=\\"48\\" y1=\\"32\\" y2=\\"32\\"></line><line x1=\\"32\\" y1=\\"48\\" x2=\\"32\\"></line><line x1=\\"16\\" y1=\\"48\\" x2=\\"16\\"></line><line x1=\\"47.75\\" y1=\\".25\\" x2=\\".25\\" y2=\\"47.75\\"></line><line x1=\\".25\\" y1=\\".25\\" x2=\\"47.75\\" y2=\\"47.75\\"></line><path d=\\"M24 14a10 10 0 1 0 10 10 10 10 0 0 0-10-10z\\"></path><path d=\\"M24 4a20 20 0 1 0 20 20A20 20 0 0 0 24 4z\\"></path><path d=\\"M38 6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4z\\"></path><path d=\\"M40 8H8a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4z\\"></path><path d=\\"M40 40V8a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4z\\"></path><path d=\\"M47.75.25v47.5H.25V.25h47.5M48 0H0v48h48V0z\\"></path></g></symbol></defs><use width=\\"48\\" height=\\"48\\" transform=\\"scale(.5)\\" xlink:href=\\"#b\\"></use><path d=\\"M14 7.61h-.07l-.07.06-.13.12c-.25.2-.57.52-.81.74s-.7.68-1 1c-.67.64-1.42 1.42-2.09 2s-1 1-1.59 1.49c-.22.2-.36.38-.66.39a3.38 3.38 0 0 1-1.48-.6 4.83 4.83 0 0 0-1.43-.63l.27.37c.19.3.52.95.68 1.27a9 9 0 0 0 2.2 3 5.68 5.68 0 0 0 .76.54l.41.23a3.57 3.57 0 0 0 .46.2c-.1-.1-.2-.22-.28-.31a17.94 17.94 0 0 1-1.38-1.64.74.74 0 0 1 0-.91 6.93 6.93 0 0 1 1.15-1.13c.9-.77 1.71-1.46 2.65-2.19.44-.35.9-.7 1.38-1s.95-.66 1.44-1l.74-.47.75-.45.66-.37.68-.35a25.38 25.38 0 0 1 2.84-1.26l.76-.26.78-.25h-1.08c-.64 0-1 0-1.65.07a16.58 16.58 0 0 0-1.76.23l-.24.05-.47.1c-.31.08-.59.17-.88.26s-.58.19-.85.3a3.21 3.21 0 0 0-.68.47zm6.25 1.55l.57-.29.58-.29a1.39 1.39 0 0 0 .6-1.17c-.07 0-.34.14-.41.16l-.14.06c-.34.14-.79.31-1.1.46l-.28.12a1 1 0 0 0-.26.13c-.11 0-2.16 1-2.41 1.14l-1.18.61s-1.11.59-1.15.65-.8.44-.92.51c-1.45.82-3.05 1.84-4.44 2.78-.38.27-.88.61-1.26.9l-.31.23s-.08.05-.1.09a8.25 8.25 0 0 0 1.27.57 20.9 20.9 0 0 0 3.67 1l.81.12.65.06-.53-.05h.74a8.69 8.69 0 0 0 .89 0 1.68 1.68 0 0 0 .85-.1 2.3 2.3 0 0 0 .59-.35 8.45 8.45 0 0 0 1.75-2 19.55 19.55 0 0 0 1.34-2.47c.2-.43.38-.88.56-1.34.09-.23.16-.45.24-.7a6.66 6.66 0 0 0 .22-.74c-.18 0-3.39 1.75-3.7 1.92l-1.21.67c-.39.21-.81.46-1.19.68-.79.44-1.59.93-2.38 1.38-.13.08-1.14.67-1.17.71s3.25-1.38 3.33-1.41 3.27-1.4 3.32-1.41a4.37 4.37 0 0 1-.26.54c-.08.18-.18.38-.27.56-.5 1-1 2.19-2.15 2.63h-.06l-.3.09-.31.07a5.79 5.79 0 0 1-1.81 0c-.6-.09-1-.2-1.61-.34-.14 0-1.14-.32-1.2-.36s.61-.42.66-.46c1.11-.77 3-1.91 4.17-2.6l.37-.21a4 4 0 0 0 .35-.2l.56-.31.57-.2c.38-.22.76-.4 1.14-.61 0 0 2.19-1.15 2.32-1.19zM5.75 15s-.41-.45-.48-.54c-.49-.54-1-1.05-1.45-1.62l-.93-1.11c-.12-.15-.79-1-.89-1.15 0 0 .15.71.18.8l.11.41a3.3 3.3 0 0 0 2.05 2.56c.16.08 1.32.64 1.41.65z\\" fill-rule=\\"evenodd\\" data-name=\\"Layer 9\\"></path>","asus":"<path d=\\"M21.15 10.52a.41.41 0 0 1 .41-.42.41.41 0 0 1 .4.41.38.38 0 0 1-.12.29.39.39 0 0 1-.28.13.41.41 0 0 1-.41-.41m0 0a.44.44 0 0 0 .44.44.4.4 0 0 0 .31-.13.45.45 0 0 0 0-.63.46.46 0 0 0-.31-.13.44.44 0 0 0-.44.45m.27.26h.07v-.21h.19a.09.09 0 0 1 0 .06v.14h.08v-.11-.06a.14.14 0 0 0 0-.07.12.12 0 0 0-.07-.12h-.29zm.06-.26v-.17h.2a.07.07 0 0 1 0 .07v.07h-.07zm-17.64.61L2 14h1.24L5 11.26zm7.45-.06V10H7.74a1.13 1.13 0 0 0-.84.42 1.4 1.4 0 0 0-.26.54V10H4.76a.44.44 0 0 0-.37.2c-.11.14-.54.85-.54.85zm9.57 0V10h-3.79a1.17 1.17 0 0 0-.85.42A1.4 1.4 0 0 0 16 11v.09zM12.5 10h-1.06v1.05h1.06zm3.5 0h-1v1.05h1zm0 1.43l-1-.06v1.23a.34.34 0 0 1-.34.35H12.8a.33.33 0 0 1-.3-.34v-1.39l-1.05-.07V13a1.15 1.15 0 0 0 1 1h2.5a1.09 1.09 0 0 0 1-1.07zM5.56 14h4.93a1.16 1.16 0 0 0 .94-1 1.69 1.69 0 0 0 0-.42 1.25 1.25 0 0 0-1-.91l-3.8-.3A1.12 1.12 0 0 0 7 12a1.32 1.32 0 0 0 .62.29l2.63.22c.08 0 .23 0 .23.23a.2.2 0 0 1-.22.2H6.59v-1.56l-1-.08V14zM16 14h3.76a1.14 1.14 0 0 0 1.08-1 1.5 1.5 0 0 0 0-.43 1.17 1.17 0 0 0-1-.91c-.38 0-3.82-.24-3.82-.24a1 1 0 0 0 .35.56 1.17 1.17 0 0 0 .59.28l2.66.22c.08 0 .25 0 .25.22a.2.2 0 0 1-.07.15.43.43 0 0 1-.18 0H16z\\"></path>","bank-bca-alt":"<path d=\\"M14.6 15.8l.8-1.7v1.7zm4.8.1v-1.5h-1.9l-.5 1.4h-1.6v-1.7l1.8-3.9h-.4l1-1.9h3.5l.7 7.6zm0-3v-2.6l-.6 1.3-.7 1.3h1.3zm-8.2-.7c.2-1.2 2.5-2.2 4.1-1.1v-.3l.8-1.9-.8-.4-.7-.5-.2.5c-1 0-3.5-.9-5.1 3.1L9 12.7v.8c.2 1.5 1.4 2.8 4.6 2.4l.9-2.2c-2.5.7-3.4-.3-3.3-1.5zm-3.4-.5c1.7 1.7 0 3.7-1.7 4.1v-1.9c.5-.3.8-1.4 0-1.5H5L4.5 14h1.6v1.9H2l1.3-5.6h-.5l1.1-2.1h3.5A1.4 1.4 0 0 1 9 9.5v.6a2.1 2.1 0 0 1-1.2 1.6zm-1.1-2H5.6l-.4 1.5h1.2c.8 0 .8-1.5.3-1.5z\\"></path>","bank-bca":"<path d=\\"M20.4 4.2V4a18.7 18.7 0 0 0-8.2-2H12a18.7 18.7 0 0 0-8.3 2v.2A19.1 19.1 0 0 0 2 11.9v.4A18.2 18.2 0 0 0 3.6 20h.2a18.6 18.6 0 0 0 16.4 0h.2a18.2 18.2 0 0 0 1.7-7.7v-.4a19.1 19.1 0 0 0-1.7-7.7zm-.6 15.4a20 20 0 0 1-7.8 1.7 20 20 0 0 1-7.8-1.7 18.2 18.2 0 0 1-1.7-7.7 19 19 0 0 1 1.7-7.3 16.5 16.5 0 0 1 7.7-1.9h.2a16.5 16.5 0 0 1 7.7 1.9 19 19 0 0 1 1.7 7.3 18.2 18.2 0 0 1-1.7 7.7zm-7-7.7c-.6 1.8-.4 3.8-.6 5.7a38 38 0 0 0-.6-5.8C11 10.1 9 9.1 9 7.3a3 3 0 0 1 3.1-3.2 3.3 3.3 0 0 1 3.4 3c.1 1.8-2.1 3.1-2.7 4.8zm6.3 1c.1.8.2 2.1-.4 2.6s-2.3.1-3.7.5-1.3.8-2 1.1a14.7 14.7 0 0 1 .3-4.7A5.2 5.2 0 0 1 16.5 9a2.2 2.2 0 0 1 2.5 2.4 3.5 3.5 0 0 1-3 2.5c-.8 0-1.1.7-1.6 1a7.9 7.9 0 0 0 4.7-2zM5.7 15.5c-.7-.5-.6-1.8-.4-2.6a7.9 7.9 0 0 0 4.7 2c-.5-.3-.8-1-1.6-1a3.6 3.6 0 0 1-3.1-2.5A2.3 2.3 0 0 1 7.8 9a4.8 4.8 0 0 1 3.2 3.4 12.3 12.3 0 0 1 .4 4.7c-.7-.3-1.2-.8-2-1.1s-2.5.3-3.7-.5zm3.7 3.3h-1l-.3 1.5h.3l.2-.6h.3v.2H9v.4h.4V20l-.2-.3h.2c.1-.1.2-.2.2-.3V19zm-.1.4h-.7v-.4H9c.1 0 .1 0 .1.1zM7 19c-.1.1 0 .3 0 .4l.3.2h.4v-.2h-.3V19l.7.2-.2.6h-.7l-.4-.2a.6.6 0 0 1-.1-.4.3.3 0 0 1 0-.4.5.5 0 0 1 .2-.4l.3-.2h.4c.2.1.3.1.4.3a.4.4 0 0 1 .1.3h-.3v-.2h-.2c-.2-.1-.3 0-.4 0a.5.5 0 0 0-.2.4zm7.2.6a.1.1 0 0 0 .1-.1v-.2c0-.1 0-.2-.1-.2a.1.1 0 0 0-.1-.1h-.4v.3h.3v.2h-.3a.1.1 0 0 1-.1.1h-.2v-.4h.3v-.3H13l.2 1.5h1.1V20a.4.4 0 0 0-.1-.3zm0 .5h-.6v-.4h.7zm1.5-.5h.3a.8.8 0 0 1-.2.4l-.3.2h-.6l-.3-.6a1.3 1.3 0 0 1 .1-.6.5.5 0 0 1 .5-.3h.5c.1 0 .1.1.2.2l-.3.2a.2.2 0 0 0-.2-.2h-.2c-.1 0-.2 0-.2.1a.6.6 0 0 0-.1.4c.1.2.1.4.2.4h.5v-.3zm-5-.7h.3v1.3h-1c-.1-.1-.2-.1-.2-.2h-.1v-1.2h.3V20h.5c.1-.1.1-.1.1-.2a.3.3 0 0 1 .1-.2zm6-.5h-.3l-.2 1.6h.3v-.3h.6l.3.3h.3l-.9-1.2zm.1.9h-.2v-.6l.2.2.2.3zm-4.7-.3h-.8v1.5h.3v-.6h.7v-.7zm0 .5h-.5V19h.5z\\"></path>","bank-bni":"<path d=\\"M9.9 19.6l1.7 2.4H4.2l4.6-3.7zm2.2-5.8a17.9 17.9 0 0 1-3.8-7.2c-.7-2.8-.4-4-.1-4.6H2v3.5l8 10zM2 9.7V22h.1L8 17.2zM11.1 2c-1.1 1.9.3 5.9 2.3 8.3 0 0 .3-4.3 3.9-5.7a5.6 5.6 0 0 1 4.7 0V2zm5.2 15.6a11.4 11.4 0 0 1-3.3-2.8l-2.2 1.8 2.4 2.9a4.2 4.2 0 0 0 3.4 1.4L15.3 22H22v-4.7a5.9 5.9 0 0 1-5.7.3zM19 6.3c-2.1-.4-5.1 1.1-3.8 5.3S19.5 17 22 16V8.2a5 5 0 0 0-3-1.9z\\"></path>","bank-bri":"<path d=\\"M19.1 2H4.9A2.9 2.9 0 0 0 2 4.9v14.2A2.9 2.9 0 0 0 4.9 22h14.2a2.9 2.9 0 0 0 2.9-2.9V4.9A2.9 2.9 0 0 0 19.1 2zM6.9 20H5.5A1.4 1.4 0 0 1 4 18.5v-13A1.4 1.4 0 0 1 5.5 4h1.7c2.3 0 4 2.3 2.6 3.8L5.5 12l3.7 3.9c1.7 1.8-.3 4.1-2.3 4.1zm3.4 0c1.8 0 2.9-3 1-4.9L8.4 12l3.4-3.4A2.8 2.8 0 0 0 11 4h1.5c2.3 0 4 2.3 2.5 3.8L10.8 12l7.8 8zm3.4-8l3.4-3.4a2.8 2.8 0 0 0-.8-4.6h2.2A1.4 1.4 0 0 1 20 5.5v13z\\"></path>","bank-jenius":"<path d=\\"M13.2 4a9.1 9.1 0 0 0-6.6 2.8C4 8 2 10.5 2 13.2c0 4.3 3.8 6.8 8.3 6.8a7.1 7.1 0 0 0 2.1-.3h1.5a7.9 7.9 0 0 0 8.1-7.6C22 7.6 18.3 4 13.2 4zm-3.1 3.2a4 4 0 0 1 3.8 3.9c0 2.5-1.5 4.1-3.7 4.1A3.9 3.9 0 0 1 6.5 11a3.7 3.7 0 0 1 3.6-3.8zm-.3 12.1a6.5 6.5 0 0 1-6.1-6.2 5.6 5.6 0 0 1 2-4.5 3.2 3.2 0 0 0-.5 1.8 1.9 1.9 0 0 0-.1.8 8.3 8.3 0 0 0 5.4 8zm2.2-.4a7.7 7.7 0 0 1-5.4-4.5 5.1 5.1 0 0 0 3.7 1.4 4.7 4.7 0 0 0 5-4.6 5.1 5.1 0 0 0-.5-2.3 6.2 6.2 0 0 1 1.7 4.3 6.4 6.4 0 0 1-4.5 5.7zm2.5 0a6.4 6.4 0 0 0 3.3-5.3c0-4.9-4.9-6.6-4.9-6.6a6.6 6.6 0 0 0-3.2-.8h-.4a8.1 8.1 0 0 1 4.5-1.5 7 7 0 0 1 6.7 6.8 7.6 7.6 0 0 1-6 7.4z\\"></path>","bank-mandiri":"<path d=\\"M5.6 12.6c.1.1.1.3.1.7v1.5h-.6v-1.4A1 1 0 0 0 5 13l-.3-.2-.4.2c0 .1-.1.2-.1.3v1.5h-.7v-1.4c0-.2 0-.4-.1-.4s-.1-.2-.3-.2l-.3.2a.4.4 0 0 0-.1.3v1.5H2v-2.4h.7v.4l.3-.4h.5l.4.2.3.3.3-.3.5-.2zm2.6.7v1.5h-.6v-.3a.7.7 0 0 1-.6.3h-.2l-.5-.2a.7.7 0 0 1-.2-.6c0-.2 0-.3.1-.4l.3-.3h1c0-.6-.8-.5-1.1-.2l-.2-.5.9-.2a1 1 0 0 1 1.1.9zm-.6.3h-.8a.4.4 0 0 0-.1.3c0 .6.7.4.9 0zm2.5-1.3h-.5l-.3.4v-.4h-.7v2.4h.7v-1.4c0-.1.1-.2.1-.3l.4-.2.3.2a1 1 0 0 1 .1.4v1.4h.6v-1.5c0-.4 0-.6-.2-.7a.5.5 0 0 0-.5-.3zm6.7 2.5h.7v-2.4h-.7zm-3.2-.2v.2h-.7v-.3l-.3.2h-.4a.9.9 0 0 1-.7-.3 1.2 1.2 0 0 1-.3-.9 1.2 1.2 0 0 1 .3-.9.9.9 0 0 1 .7-.3h.4l.3.2v-1.1h.7v3.2zm-.7-1a1.3 1.3 0 0 0-.1-.6l-.4-.2-.3.2a1.4 1.4 0 0 0-.2.6 1.1 1.1 0 0 0 .2.6c0 .1.2.2.3.2l.4-.2a1.3 1.3 0 0 0 .1-.6zm8.2-4.1c-.8 0-1.4.9-2 .8s-.8-1.2-1.5-1.2-1.9 1.2-2.9 1.3-.9-1.3-1.7-1.1-2.1 1-3.3 1.6c.3.2.7.9 1.1.8s1.8-1.3 3.1-1.2.8 1 1.4 1.1 1.7-1.2 3.1-1.2.9 1.1 1.5 1.1 1.3-.7 2.1-1.1-.5-.8-.9-.9zm-5 3q-.3.1-.3.3v-.4h-.6v2.4h.7v-1.3a.5.5 0 0 1 .2-.4h.6v-.6h-.5zm-2 2.3h.7v-2.4h-.7z\\"></path>","behance":"<path d=\\"M17.7 18.3a4.1 4.1 0 0 1-1.9-.4 3.8 3.8 0 0 1-1.5-.9 6 6 0 0 1-.9-1.5 6.2 6.2 0 0 1 0-3.8 6.5 6.5 0 0 1 1-1.5 7.1 7.1 0 0 1 1.4-1 5.8 5.8 0 0 1 1.9-.3 4.1 4.1 0 0 1 1.9.4 3.3 3.3 0 0 1 1.4 1.2 3.8 3.8 0 0 1 .8 1.7 6.5 6.5 0 0 1 .2 2h-6.4a1.9 1.9 0 0 0 .6 1.7 1.7 1.7 0 0 0 1.5.5 2.8 2.8 0 0 0 1.3-.3 1.8 1.8 0 0 0 .7-.8h2.1a4.1 4.1 0 0 1-1.6 2.3 4.3 4.3 0 0 1-2.5.7zm-.1-7.6l-1 .2-.6.5c-.1.2-.3.4-.3.6a1.3 1.3 0 0 0-.1.6h3.9a2.4 2.4 0 0 0-.5-1.4 2.4 2.4 0 0 0-1.4-.5zM8 18H2V5.7h5.8l1.6.2a2.6 2.6 0 0 1 1.2.5 1.7 1.7 0 0 1 .8.9 4 4 0 0 1 .3 1.5 2.6 2.6 0 0 1-.4 1.5 2.3 2.3 0 0 1-1.2 1 3.1 3.1 0 0 1 1.6 1.2 3.6 3.6 0 0 1 .6 2 3.2 3.2 0 0 1-.4 1.6 3.1 3.1 0 0 1-.9 1.1 4.2 4.2 0 0 1-1.4.6A4.7 4.7 0 0 1 8 18zm-3.3-5.4v3.3h3.7l.6-.3a1 1 0 0 0 .4-.5 1.1 1.1 0 0 0 .2-.8 1.9 1.9 0 0 0-.5-1.3 2 2 0 0 0-1.5-.4zm0-4.8v2.9h2.7a2.1 2.1 0 0 0 1.2-.3 1.3 1.3 0 0 0 .5-1.2 2 2 0 0 0-.1-.7l-.5-.4-.6-.2H4.7zm15.3 0h-4.9V6.6H20z\\"></path>","blackberry-1":"<path d=\\"M11.74 12.44h-.52v-.5h.53V12h.47v-.27H11.53V12.54h.65v-.16zm-3.55.13V10.81h-.05l-.36 1.66v.47h.67v-.36h-.3zm6.16-1.29h-.6L13 12l.26-1.21h-.46l-.5 2.29h.44l.12-.56.27-.21.37.77h.5l-.52-1 .89-.75zm-7.1.12v-.12h-.73l-.1.46h.81zm-.15.92v-.08h-.77l-.12.55H7zm-1.29 0V10.79h1.2v1.05h-.88v-.37zm9.79-.95v-.12h-.67l-.1.46h.81zm-.15.92v-.08h-.76l-.12.55h.74zm-1.3 0V10.76h1.2v1.08h-.92v-.43zm4.92-1.07h-.35V12.34h.43v-.78.64-.32h.4v-.36h-.21zm1.48 2.46l1.45-2.4h-.47l-.67 1.16-.15-1.16h-.88v1.08L19 13v.06h.43V11.9h.33l.09-.42V13.03 13l-.45.78zM9.28 11.84h.5H9v.46h.65v.17h.45V10.98h-.75v.05zm.17.46h.41v.21h-.75v-.06h.25zm7.63-.63h.31-.83v.23h.26zm.26.86h-.48v-.11h1.04v-.56h-.67v.59h.65-.48zm-14.27-2v-.12h-.79l-.12.57H3v-.48zm1.17 0v-.08h-.78l-.13.57h.82v-.52zm-1.33.87v-.09h-.79l-.12.38h.83v-.06zm1.18 0v-.09H3.3l-.13.57H4v-.06zm1.22-.4v-.09h-.78l-.13.57h.83V11zm-.17.9v-.13h-.78l-.13.57h.82zm-1.22.35v-.13h-.79l-.13.47h.81z\\"></path>","blackberry-2":"<path d=\\"M8.45 6.46v-.51l-.15-.13-.07-.13-.05-.06v-.06l-.06-.06L8 5.45V5.4l-.1-.05h-.63L7.16 5H3.7L3 8.41h4.28l.12-.31.1-.1h.11l.09-.07.09-.06.08-.07.13-.08v-.07l.06-.08.06-.08v-.08l.05-.08v-.7zm7.09 0V5.69l-.05-.06v-.06l-.06-.06-.05-.06h-.07l-.31-.1h-.85L14 5h-3.21L10 8.41h4.33l.12-.06.15-.35h.1l.1-.07.08-.06.12-.08v-.07l.07-.07.06-.08.06-.08v-.08l.05-.08v-.87zm-8 5.21V10.84l-.05-.06v-.11L7 10.62v-.06l-.08-.05H6.14L6 10.2H2.75L2 13.63h4.21l.12-.05h.11l.12-.05.09-.06.1-.07.09-.06.08-.34.08-.07.08-.08.06-.07.06-.08v-1.05zm7.09 0V10.84l-.05-.06v-.06l-.05-.05-.06-.05-.47-.06v-.05H9.84l-.75 3.47h4.21l.12-.05h.12l.11-.05.09-.07.1-.06.09-.06L14 13l.06-.07.08-.08.06-.07.06-.08.05-.08.05-.08V11.65zM22 9.56V8.79l-.05-.07v-.05l-.06-.06h-.06l-.06-.06-.07-.05h-.06l-.08-.05h-.08l-.09-.05h-4.13l-.75 3.46h4.2l.12-.05.17-.61.1-.06.1-.06.1-.06.09-.06.08-.07.08-.07.07-.08.06-.07.06-.08.05-.08.05-.08V10.09L22 10V9.56zM21 15v-.51l-.06-.13-.07-.13v-.12l-.25-.11h-.06l-.06-.06-.07-.05h-4.2l-.75 3.46h4.08l.13-.05h.12l.12-.06.11-.06h.11l.09-.07.09-.06.08-.07.08-.07.06-.07.06-.08.06-.08.06-.08V15zm-7.42 2.11v-.51l-.06-.13-.07-.13v-.06l-.05-.06v-.05l-.06-.06-.25-.11h-.16l-.08-.06H8.82l-.75 3.46h4.34l.11-.05.1-.06.11-.05.09-.07.09-.06.08-.07.08-.07.07-.07.06-.07.06-.09.05-.07V17.71z\\"></path>","blogger":"<path d=\\"M12.5 10H10c-.55 0-1-.45-1-1s.45-1 1-1h2.5c.55 0 1 .45 1 1s-.45 1-1 1m2.5 4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1m7-10v16c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V4c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2m-4 8s0-1-1-1c-.95.03-1-1-1-1V8c0-1.66-1.34-3-3-3H9C7.34 5 6 6.34 6 8v7c0 1.66 1.34 3 3 3h6c1.66 0 3-1.34 3-3v-3z\\"></path>","brightness-4":"<path d=\\"M12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12c0-2.42-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6a6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69z\\"></path>","brightness-7":"<path d=\\"M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4m0 10a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69z\\"></path>","buffer":"<path d=\\"M12.6 2.1l8.8 4.1c.2.1.4.1.4.4s-.2.2-.4.3L12.7 11a1.7 1.7 0 0 1-1.4 0L2.6 6.9c-.2-.1-.4-.1-.4-.4l.3-.3 8.9-4.1a2.4 2.4 0 0 1 1.2 0M12 22l-.7-.2-8.7-4.1c-.2 0-.4-.1-.4-.3s.2-.3.4-.4l1.4-.6a1.4 1.4 0 0 1 1.5 0l5.8 2.7a1.7 1.7 0 0 0 1.4 0l5.8-2.7a1.4 1.4 0 0 1 1.4-.1l1.6.8h.2a.3.3 0 0 1 0 .4h-.3l-8.7 4.1-.7.4m0-5.4l-.7-.2-8.7-4.1c-.2-.1-.4-.1-.4-.3s.2-.3.4-.4l1.5-.7a1.4 1.4 0 0 1 1.4.1l5.8 2.7a1.7 1.7 0 0 0 1.4 0l5.9-2.8a1.5 1.5 0 0 1 1.3 0l1.6.7.2.2a.3.3 0 0 1 0 .4h-.2l-8.8 4.1z\\"></path>","buy-me-a-coffee":"<path d=\\"M18.8 7.3v-.5a1.5 1.5 0 0 0-.8-1.2.6.6 0 0 1-.5-.2c-.1-.1-.1-.3-.2-.4s-.1-.7-.1-1-.1-.6-.2-.8a2.2 2.2 0 0 0-.9-.7h-.5L13 2H9.9a8.5 8.5 0 0 0-2.3.4l-.8.4a.9.9 0 0 0-.1 1 1 1 0 0 0 .6.5l.9.3a24.8 24.8 0 0 0 2.7.3h3.8c.3-.1.5-.5.4-.7a.6.6 0 0 0-.7-.4h-1.1a15 15 0 0 1-3 0H8.5v-.4h3.9l1.7.2h.9c.3.1.7.1.9.5a.4.4 0 0 0 .1.3l.2 1.3c0 .1 0 .2-.1.2H16L12 6a25.6 25.6 0 0 1-3.9-.3H6l-.6.6c-.1.3-.1.6-.2.9s-.1.6-.1.8a1.4 1.4 0 0 0 1.1 1.2 30.3 30.3 0 0 0 9.5.3.4.4 0 0 1 .4.4v.5l-.9 8.3a3.4 3.4 0 0 1-.1 1 1.1 1.1 0 0 1-1 1l-1.4.2H11a2.1 2.1 0 0 1-1.7-.4 2.1 2.1 0 0 1-.5-1.5l-.6-5.9-.3-2.6a.6.6 0 0 0-1.1.1l.2 1.8.8 7.6a2.1 2.1 0 0 0 2 1.9h4.3a2.5 2.5 0 0 0 2.2-2.2c.3-2.8.5-5.6.8-8.4l.2-1.7c0-.2.2-.3.3-.4a1 1 0 0 0 .9-.4 1.4 1.4 0 0 0 .3-1.5zm-1.2.7l-.5.2a40.8 40.8 0 0 1-6.1.4l-4.3-.4-.4-.2c-.2-.2-.1-.6 0-.8a.6.6 0 0 1 .4-.6l1.2.2 1.5.2a25.8 25.8 0 0 0 6.2-.1l1.1-.2c.4-.1.7-.2.9.2a1.1 1.1 0 0 1 .2.8l-.2.3zm-5.1 3.2a6.6 6.6 0 0 1-2.6.7l-1.3-.2.7 7.5a1.3 1.3 0 0 0 1.3 1.2h2.8a1.3 1.3 0 0 0 1.3-1.2l.8-8.3-1.1-.2a5.9 5.9 0 0 0-1.9.5z\\"></path>","caret-down":"<path d=\\"M12 15.3l-.4-.2-5.5-5.5a.5.5 0 0 1 .1-.7.5.5 0 0 1 .7 0L12 14l5.1-5.1a.6.6 0 0 1 .8 0 .9.9 0 0 1 0 .7l-5.5 5.5z\\"></path>","chat-dots":"<path d=\\"M20.5 2.8h-17A1.6 1.6 0 0 0 2 4.4v15.2a1.4 1.4 0 0 0 .9 1.4l.6.2a1.5 1.5 0 0 0 1-.4l3.1-2.6h12.9a1.5 1.5 0 0 0 1.5-1.5V4.4a1.6 1.6 0 0 0-1.5-1.6zm0 13.9H7.6a1.9 1.9 0 0 0-1 .3l-3.1 2.6V4.4h17zm-9.7-6.2a1.2 1.2 0 0 1 2.4 0 1.2 1.2 0 0 1-2.4 0zm-4.6 0a1.1 1.1 0 0 1 1.2-1.1 1.1 1.1 0 0 1 1.1 1.1 1.1 1.1 0 0 1-1.1 1.2 1.2 1.2 0 0 1-1.2-1.2zm9.3 0a1.1 1.1 0 0 1 1.1-1.1 1.1 1.1 0 0 1 1.2 1.1 1.2 1.2 0 0 1-1.2 1.2 1.1 1.1 0 0 1-1.1-1.2z\\"></path>","chat":"<path d=\\"M3.5 21.2l-.6-.2a1.4 1.4 0 0 1-.9-1.4V4.4a1.6 1.6 0 0 1 1.5-1.6h17A1.6 1.6 0 0 1 22 4.4v12.3a1.5 1.5 0 0 1-1.5 1.5H7.6l-3.1 2.6a1.5 1.5 0 0 1-1 .4zm0-16.8v15.2L6.6 17a1.9 1.9 0 0 1 1-.3h12.9V4.4z\\"></path>","check-1":"<path d=\\"M9.2 18.3a.5.5 0 0 1-.5-.3l-5.5-5.5a.8.8 0 0 1 .1-1.1.9.9 0 0 1 1 0l4.9 5L19.7 5.9a.8.8 0 0 1 1.1.1.7.7 0 0 1 0 1l-11 11a.6.6 0 0 1-.6.3z\\"></path>","check-2":"<path d=\\"M20.7 7L9.6 18.2l-.7.2-.6-.2-5-5.1a.8.8 0 0 1-.1-1.2 1.1 1.1 0 0 1 1.3 0l4.4 4.5L19.5 5.8a1.1 1.1 0 0 1 1.3 0 .8.8 0 0 1-.1 1.2z\\"></path>","check-decagram":"<path d=\\"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12m-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\\"></path>","check-one":"<path d=\\"M19.4 4.6A10.4 10.4 0 0 0 12 1.5a10.2 10.2 0 0 0-7.4 3.1A10.2 10.2 0 0 0 1.5 12a10.2 10.2 0 0 0 3.1 7.4 10.2 10.2 0 0 0 7.4 3.1 10.4 10.4 0 0 0 7.4-3.1 10.2 10.2 0 0 0 3.1-7.4 10.2 10.2 0 0 0-3.1-7.4zm-1.3 13.5a8.6 8.6 0 0 1-6.1 2.5 8.6 8.6 0 1 1 0-17.2 8.6 8.6 0 0 1 6.1 14.7zm-.7-9.6a.9.9 0 0 1 0 1.3l-5.7 5.7a.9.9 0 0 1-.7.3l-.6-.3-2.9-2.8a1 1 0 0 1 0-1.4 1.2 1.2 0 0 1 1.4 0l2.1 2.2 5.1-5a.9.9 0 0 1 1.3 0z\\"></path>","check":"<path d=\\"M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z\\"></path>","chevron-down":"<path d=\\"M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z\\"></path>","circle-wavy-check":"<path d=\\"M21.6 9.5l-.9-1.1a5.7 5.7 0 0 1-.1-1.4 4.2 4.2 0 0 0-.8-2.8 4.2 4.2 0 0 0-2.8-.8h-1.4a3.9 3.9 0 0 1-1.1-.9A3.8 3.8 0 0 0 12 1a3.8 3.8 0 0 0-2.5 1.4l-1.1.9H7a4.2 4.2 0 0 0-2.8.8A4.2 4.2 0 0 0 3.4 7a5.7 5.7 0 0 1-.1 1.4 3.9 3.9 0 0 1-.9 1.1A3.8 3.8 0 0 0 1 12a3.8 3.8 0 0 0 1.4 2.5l.9 1.1a5.7 5.7 0 0 1 .1 1.4 4.2 4.2 0 0 0 .8 2.8 4.2 4.2 0 0 0 2.8.8h1.4a3.9 3.9 0 0 1 1.1.9A3.8 3.8 0 0 0 12 23a3.8 3.8 0 0 0 2.5-1.4l1.1-.9H17a4.2 4.2 0 0 0 2.8-.8 4.2 4.2 0 0 0 .8-2.8 5.7 5.7 0 0 1 .1-1.4 3.9 3.9 0 0 1 .9-1.1A3.8 3.8 0 0 0 23 12a3.8 3.8 0 0 0-1.4-2.5zm-1.1 3.9a4.5 4.5 0 0 0-1.2 1.6 4.4 4.4 0 0 0-.3 2c0 .6 0 1.4-.3 1.7s-1.1.3-1.8.3a4.2 4.2 0 0 0-1.9.3 4.5 4.5 0 0 0-1.6 1.2c-.5.4-1 .9-1.4.9s-.9-.5-1.4-.9A4.5 4.5 0 0 0 9 19.3a4.2 4.2 0 0 0-1.9-.3c-.7 0-1.5 0-1.8-.3S5 17.6 5 17a4.4 4.4 0 0 0-.3-2 4.5 4.5 0 0 0-1.2-1.6c-.4-.5-.9-1-.9-1.4s.5-.9.9-1.4A4.5 4.5 0 0 0 4.7 9 4.2 4.2 0 0 0 5 7.1c0-.7 0-1.5.3-1.8S6.4 5 7 5a4.4 4.4 0 0 0 2-.3 4.5 4.5 0 0 0 1.6-1.2c.5-.4 1-.9 1.4-.9s.9.5 1.4.9A4.5 4.5 0 0 0 15 4.7a4.4 4.4 0 0 0 2 .3c.6 0 1.4 0 1.7.3S19 6.4 19 7a4.4 4.4 0 0 0 .3 2 4.5 4.5 0 0 0 1.2 1.6c.4.5.9 1 .9 1.4s-.5.9-.9 1.4zm-3.6-4.3a.8.8 0 0 1 0 1.1l-5.8 5.5c-.1.2-.3.2-.5.2a.7.7 0 0 1-.6-.2L7.1 13a.8.8 0 0 1 0-1.1c.2-.4.7-.4 1.1-.1l2.4 2.3 5.2-5a.8.8 0 0 1 1.1 0z\\"></path>","close-1":"<path d=\\"M18.8 17.7a.8.8 0 0 1 0 1.1l-.6.2-.5-.2-5.7-5.7-5.7 5.7-.5.2-.6-.2a.8.8 0 0 1 0-1.1l5.7-5.7-5.7-5.7a.8.8 0 0 1 1.1-1.1l5.7 5.7 5.7-5.7a.8.8 0 0 1 1.1 1.1L13.1 12z\\"></path>","close":"<path d=\\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z\\"></path>","codepen":"<path d=\\"M8.2 12l-1.3.9v-1.8l1.3.9m3.3-2.2V7.3l-4.2 2.8 1.9 1.3 2.3-1.6m5.2.3l-4.2-2.8v2.5l2.3 1.6 1.9-1.3m-9.4 3.8l4.2 2.8v-2.5l-2.3-1.6-1.9 1.3m5.2.3v2.5l4.2-2.8-1.9-1.3-2.3 1.6m-.5-3.5L10.1 12l1.9 1.3 1.9-1.3-1.9-1.3M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10m-3.8-1.9H18l-5.7-4.2a.6.6 0 0 0-.6 0L6.1 9.7h-.3v3.8h.3l5.6 3.8h.6l5.7-3h.2v-4.2m-1.1 2.8v-1.8l-1.3.9z\\"></path>","comment-outline":"<path d=\\"M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m1-6v3.08L13.08 16H20V4H4v12h6z\\"></path>","comment-text-outline":"<path d=\\"M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m1-6v3.08L13.08 16H20V4H4v12h6M6 7h12v2H6V7m0 4h9v2H6v-2z\\"></path>","content-copy":"<path d=\\"M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z\\"></path>","copy-1":"<path d=\\"M18.9 3H8.5a2.1 2.1 0 0 0-2.1 2.1v1.3H5.1A2.1 2.1 0 0 0 3 8.5v10.4A2.1 2.1 0 0 0 5.1 21h10.4a2.1 2.1 0 0 0 2.1-2.1v-1.3h1.3a2.1 2.1 0 0 0 2.1-2.1V5.1A2.1 2.1 0 0 0 18.9 3zm-3 15.9a.4.4 0 0 1-.4.4H5.1a.4.4 0 0 1-.4-.4V8.5a.4.4 0 0 1 .4-.4h10.4a.4.4 0 0 1 .4.4zm3.4-3.4a.4.4 0 0 1-.4.4h-1.3V8.5a2.2 2.2 0 0 0-2.1-2.1H8.1V5.1a.4.4 0 0 1 .4-.4h10.4a.4.4 0 0 1 .4.4z\\"></path>","copy":"<path d=\\"M20.2 3H8.3a.7.7 0 0 0-.8.8v3.7H3.8a.7.7 0 0 0-.8.8v11.9a.7.7 0 0 0 .8.8h11.9a.7.7 0 0 0 .8-.8v-3.7h3.7a.7.7 0 0 0 .8-.8V3.8a.7.7 0 0 0-.8-.8zM15 19.5H4.5V9H15zm4.5-4.5h-3V8.3a.7.7 0 0 0-.8-.8H9v-3h10.5z\\"></path>","dana":"<path d=\\"M21.8 11.2a9.6 9.6 0 0 0-2.1-5.3 5 5 0 0 0-1.1-1.3 8.4 8.4 0 0 0-3.1-1.9 10 10 0 0 0-4.3-.7 9.7 9.7 0 0 0-7.6 4.8 10.3 10.3 0 0 0-1.4 6A10 10 0 0 0 12.8 22a10 10 0 0 0 9-10.8zm-4.1-1.5v5.2c0 .3-.2.1-.3 0-3.4-1.9-6.7 2-10 .8-1.3-.4-1.1-.7-1.1-1.5s-.1-4.8 0-5.1a14 14 0 0 0 1.9.7c3 .4 6.2-3.2 9.2-1.1.4.3.3.4.3 1z\\"></path>","dark-mode":"<path d=\\"M22.7 11.3l-2.3-2.4V4.6a1.1 1.1 0 0 0-1-1h-4.3l-2.4-2.3a1 1 0 0 0-1.4 0L8.9 3.6H4.6a1.1 1.1 0 0 0-1 1v4.3l-2.3 2.4a1 1 0 0 0 0 1.4l2.3 2.4v4.3a1.1 1.1 0 0 0 1 1h4.3l2.4 2.3a1 1 0 0 0 1.4 0l2.4-2.3h4.3a1.1 1.1 0 0 0 1-1v-4.3l2.3-2.4a1 1 0 0 0 0-1.4zm-4 2.6a1.1 1.1 0 0 0-.3.7v3.8h-3.8a1.1 1.1 0 0 0-.7.3L12 20.6l-1.9-1.9a1.1 1.1 0 0 0-.7-.3H5.6v-3.8a1.1 1.1 0 0 0-.3-.7L3.4 12l1.9-1.9a1.1 1.1 0 0 0 .3-.7V5.6h3.8a1.1 1.1 0 0 0 .7-.3L12 3.4l1.9 1.9a1.1 1.1 0 0 0 .7.3h3.8v3.8a1.1 1.1 0 0 0 .3.7l1.9 1.9zm-5.2-6.4a.9.9 0 0 0-1 1c0 2.9-1.4 3.5-4 3.5a.9.9 0 0 0-1 1 3.9 3.9 0 0 0 2.3 3.3 4.4 4.4 0 0 0 2.2.5 5 5 0 0 0 3.1-1 4.7 4.7 0 0 0 1.5-5.4c-.5-1.7-1.8-2.9-3.1-2.9zm.4 6.7a2.9 2.9 0 0 1-3.2.3 1.6 1.6 0 0 1-.8-.6 4.4 4.4 0 0 0 4.4-3.7 2 2 0 0 1 .4.8 2.7 2.7 0 0 1-.8 3.2z\\"></path>","dell-1":"<defs><clippath id=\\"a\\"><rect width=\\"48\\" height=\\"48\\"></rect></clippath><symbol id=\\"b\\" data-name=\\"material_system_icon_keylines\\" viewbox=\\"0 0 48 48\\"><g clip-path=\\"url(#a)\\" opacity=\\".4\\"><line x1=\\"24\\" x2=\\"24\\" y2=\\"48\\"></line><line x1=\\"48\\" y1=\\"24\\" y2=\\"24\\"></line><line x1=\\"48\\" y1=\\"16\\" y2=\\"16\\"></line><line x1=\\"48\\" y1=\\"32\\" y2=\\"32\\"></line><line x1=\\"32\\" y1=\\"48\\" x2=\\"32\\"></line><line x1=\\"16\\" y1=\\"48\\" x2=\\"16\\"></line><line x1=\\"47.75\\" y1=\\".25\\" x2=\\".25\\" y2=\\"47.75\\"></line><line x1=\\".25\\" y1=\\".25\\" x2=\\"47.75\\" y2=\\"47.75\\"></line><path d=\\"M24 14a10 10 0 1 0 10 10 10 10 0 0 0-10-10z\\"></path><path d=\\"M24 4a20 20 0 1 0 20 20A20 20 0 0 0 24 4z\\"></path><path d=\\"M38 6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4z\\"></path><path d=\\"M40 8H8a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4z\\"></path><path d=\\"M40 40V8a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4z\\"></path><path d=\\"M47.75.25v47.5H.25V.25h47.5M48 0H0v48h48V0z\\"></path></g></symbol></defs><use width=\\"48\\" height=\\"48\\" transform=\\"scale(.5)\\" xlink:href=\\"#b\\"></use><path d=\\"M11.69 2h.62A10 10 0 0 1 22 11.7v.6a10 10 0 0 1-9.7 9.7h-.61A10 10 0 0 1 2 12.3v-.6a9.84 9.84 0 0 1 2.93-6.76A10 10 0 0 1 11.69 2zm-2 1.43a8.9 8.9 0 0 0-5.14 3.7 8.62 8.62 0 0 0-1.44 5.17 8.78 8.78 0 0 0 5.44 7.82 8.58 8.58 0 0 0 3.73.67 8.83 8.83 0 0 0 3.59-.79 8.71 8.71 0 0 0 4.3-4.54 8.5 8.5 0 0 0 .68-3.72A8.6 8.6 0 0 0 18.1 5.6a8.65 8.65 0 0 0-2.67-1.75 8.82 8.82 0 0 0-3.75-.67 9.07 9.07 0 0 0-1.95.28zm1.35 6c.32.21.64.41.94.64-.68.42-1.34.86-2 1.29.1.08.22.14.32.22l2-1.29c.3.19.6.38.88.59-.68.43-1.33.88-2 1.31a3.7 3.7 0 0 0 .33.21c.69-.42 1.37-.87 2-1.3V9.66h1.5v2.83h1.33v1.33h-2.72v-1.34c-.83.51-1.68 1.08-2.52 1.61-.87-.57-1.71-1.16-2.58-1.73a2 2 0 0 1-1.84 1.47h-2V9.66a13.18 13.18 0 0 1 2.57.1 2 2 0 0 1 1.27 1.31l2.59-1.66zM6.08 11v1.5a1.34 1.34 0 0 0 .84-.14A.87.87 0 0 0 7 11.2a1.08 1.08 0 0 0-.91-.2h-.01zm10.76-1.34h1.5v2.84h1.32v1.33h-2.83V9.69z\\" data-name=\\"Layer 9\\"></path>","dell-2":"<path d=\\"M10.57 8.88c.42.28.85.55 1.25.85l-2.68 1.72c.14.11.29.19.43.3l2.7-1.75c.41.25.8.5 1.18.78-.91.57-1.78 1.17-2.67 1.75.13.11.3.18.44.28.92-.57 1.82-1.15 2.73-1.73V9.22h2V13h1.77v1.77H14V13c-1.11.68-2.24 1.44-3.36 2.15-1.16-.76-2.27-1.55-3.43-2.31a2.65 2.65 0 0 1-2.46 2c-.82.06-1.75 0-2.7 0V9.22a17 17 0 0 1 3.42.13 2.66 2.66 0 0 1 1.7 1.74c1.16-.72 2.3-1.47 3.45-2.21zM3.91 11v2A1.73 1.73 0 0 0 5 12.81a1.15 1.15 0 0 0 .14-1.54A1.41 1.41 0 0 0 3.92 11h-.01zm14.33-1.78h2V13H22v1.77h-3.77V9.26z\\"></path>","dev":"<path d=\\"M7.7 11.9c0 1.7 0 1.9-.2 2.1s-.4.2-.8.2h-.5V9.7h.5l.8.2c.2.2.2.3.2 2M22 7.5v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2M8.9 11.7c0-1.8 0-2-.3-2.4s-.8-.8-2.3-.8H5v7h1.2c1.3 0 1.9-.2 2.3-.7s.5-1 .4-3.1m4.2-3.2h-1.5c-1.5 0-1.5 0-1.7.3s-.2.4-.2 3.2v3l.3.2c.2.3.3.3 1.7.3h1.4v-1.2h-2.2v-1.7h1.4v-1.3h-1.4V9.7h2.2V8.5m5.9.1h-1.3l-.6 2.3c-.4 1.5-.6 2.3-.7 2.1s-1.1-4.4-1.1-4.4h-1.4l.4 1.6c.2.8.6 2.2.8 3.1s.5 1.7.8 1.9a.7.7 0 0 0 .6.4 1.2 1.2 0 0 0 .9-.7z\\"></path>","deviant-art":"<path d=\\"M6 6h6l2-4h4v4l-3.5 7H18v5h-6l-2 4H6v-4l3.5-7H6z\\"></path>","discord":"<path d=\\"M20.7 22l-4.6-4.3.6 1.7H5.5a2.2 2.2 0 0 1-2.2-2.2v-13A2.2 2.2 0 0 1 5.5 2h13a2.2 2.2 0 0 1 2.2 2.2V22M12 7a8.6 8.6 0 0 0-4 1 7 7 0 0 1 2.5-1.2l-.2-.2a6.5 6.5 0 0 0-2.8 1.1 15.6 15.6 0 0 0-1.4 5.8A4 4 0 0 0 9.2 15l.6-.8A3.8 3.8 0 0 1 8 13a8.1 8.1 0 0 0 4 1.1 8.1 8.1 0 0 0 4-1.1 3.8 3.8 0 0 1-1.8 1.2l.6.8a4 4 0 0 0 3.1-1.5 15.6 15.6 0 0 0-1.4-5.8 6.5 6.5 0 0 0-2.8-1.1l-.2.2A7 7 0 0 1 16 8a8.6 8.6 0 0 0-4-1m-1.8 3.3a1 1 0 0 1 1 1.1 1 1 0 1 1-2 0 1 1 0 0 1 1-1.1m3.6 0a1 1 0 0 1 1 1.1 1 1 0 0 1-1 1.1 1.1 1.1 0 0 1 0-2.2z\\"></path>","disqus":"<path d=\\"M12.4 21.7a9.9 9.9 0 0 1-6.3-2.3L2 20l1.6-4a10.2 10.2 0 0 1-.9-4 9.7 9.7 0 1 1 9.7 9.7m5.2-9.7c0-2.8-2-4.8-5.4-4.8H8.6V17h3.6c3.4 0 5.4-2.1 5.4-4.9m-5.3 2.5h-1.1v-5h1.1a2.3 2.3 0 0 1 2.6 2.4 2.3 2.3 0 0 1-2.6 2.5z\\"></path>","document-folder":"<path d=\\"M9.4 3.5L5.8 3a1 1 0 0 0-.7.2 1.1 1.1 0 0 0-.3.6L3 19.5a.8.8 0 0 0 .8 1l3.8.5h.1l.6-.2a.7.7 0 0 0 .3-.6l1.6-15.8a.9.9 0 0 0-.8-.9zM6.9 19.1l-2-.2 1.6-14 1.8.2zm7.3-11.2v1.4a.9.9 0 0 1-.9.9 1 1 0 0 1-.9-.9V7.9a1 1 0 0 1 .9-.8.9.9 0 0 1 .9.8zM20.1 3h-9a.9.9 0 0 0-.9.9v16.2a.9.9 0 0 0 .9.9h9a.9.9 0 0 0 .9-.9V3.9a.9.9 0 0 0-.9-.9zM12 4.8h2.7v14.4H12zm7.2 14.4h-2.7V4.8h2.7zm-2.3-9.9V7.9a1 1 0 0 1 .9-.8.9.9 0 0 1 .9.8v1.4a.9.9 0 0 1-.9.9 1 1 0 0 1-.9-.9z\\"></path>","dots-grid":"<path d=\\"M12 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M6 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m12 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z\\"></path>","dots-horizontal":"<path d=\\"M16 12a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2z\\"></path>","dots-nine":"<path d=\\"M6.4 5.2a1.2 1.2 0 0 1-1.2 1.2A1.2 1.2 0 0 1 4 5.2 1.2 1.2 0 0 1 5.2 4a1.2 1.2 0 0 1 1.2 1.2zM12 4a1.2 1.2 0 0 0-1.2 1.2 1.2 1.2 0 0 0 2.4 0A1.2 1.2 0 0 0 12 4zm6.8 2.4A1.2 1.2 0 0 0 20 5.2a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 1.2 1.2zM5.2 17.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 1 0 0-2.4zm6.8 0a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zm6.8 0a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zM5.2 10.8a1.2 1.2 0 0 0 0 2.4 1.2 1.2 0 1 0 0-2.4zm6.8 0a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zm6.8 0A1.2 1.2 0 1 0 20 12a1.2 1.2 0 0 0-1.2-1.2z\\"></path>","dots-three":"<path d=\\"M6.5 12a1.2 1.2 0 0 1-1.2 1.3 1.3 1.3 0 0 1 0-2.6A1.2 1.2 0 0 1 6.5 12zm12.2-1.3a1.2 1.2 0 0 0-1.2 1.3 1.2 1.2 0 0 0 1.2 1.3 1.3 1.3 0 1 0 0-2.6zm-6.7 0a1.3 1.3 0 1 0 1.3 1.3 1.3 1.3 0 0 0-1.3-1.3z\\"></path>","down":"<path d=\\"M17.7 10l-5.1 5.2-.6.2-.6-.2L6.3 10a.7.7 0 0 1 0-1.2.9.9 0 0 1 1.2 0l4.5 4.6 4.5-4.6a.9.9 0 0 1 1.2 0 .7.7 0 0 1 0 1.2z\\"></path>","email":"<path d=\\"M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\\"></path>","evernote":"<path d=\\"M15.09 11.63s.19-1.28.91-1.28c.76 0 1.78 1.71 1.78 1.71s-2.32-.43-2.69-.43M19 4.69c-.36-.6-2.17-1.28-3.11-1.28H13.5S12.7 2 10.88 2c-1.83 0-1.71.81-1.71 1.5v2.82l-.83.87H4.5s-1.06.72-1.06 2.25c0 1.56.48 6.91 3.69 7.41 3.8.58 4.45-1.18 4.45-1.39 0-.9.02-2.25.02-2.25s1.11 2.12 2.79 2.12 2.65.97 2.65 1.96v1.84S17 20.28 16 20.28h-2.11s-.69-.54-.69-1.28c0-.75.33-.95.73-.95.39 0 .72.04.72.04v-1.56s-3.18-.03-3.18 2.41c0 2.43 1.66 3.06 2.99 3.06h2.17s3.93-.5 3.93-8.25S19.33 5.28 19 4.69M7.5 6.31H4.26l4.06-4.09V5.5l-.82.81z\\"></path>","eye-off-outline":"<path d=\\"M2 5.27L3.28 4 20 20.72 18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3 3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12 9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13z\\"></path>","eye-slash":"<path d=\\"M5.2 3.4a.7.7 0 0 0-1 0 .8.8 0 0 0-.1 1l1.8 2a12.7 12.7 0 0 0-4.8 5.3.6.6 0 0 0 0 .6 11.5 11.5 0 0 0 2.5 3.5 11.6 11.6 0 0 0 8.4 3.5 11.5 11.5 0 0 0 4.8-1l2 2.3.5.2.5-.2a.7.7 0 0 0 .1-1zm4.3 7l3.9 4.2a3.5 3.5 0 0 1-1.4.3A2.9 2.9 0 0 1 9.1 12a2.9 2.9 0 0 1 .4-1.6zm2.5 7.5a10.1 10.1 0 0 1-7.3-3.1A9.4 9.4 0 0 1 2.6 12a11.3 11.3 0 0 1 4.3-4.5l1.6 1.8a4.5 4.5 0 0 0 .8 6.2 4.5 4.5 0 0 0 5.1.2l1.3 1.5a11.6 11.6 0 0 1-3.7.7zm10.9-5.6a11.8 11.8 0 0 1-3 4l-.5.2a.9.9 0 0 1-.6-.3.8.8 0 0 1 .1-1 11.1 11.1 0 0 0 2.5-3.2 9.4 9.4 0 0 0-2.1-2.8A10.1 10.1 0 0 0 12 6.1l-1.8.2c-.4 0-.8-.2-.8-.6a.8.8 0 0 1 .6-.9h2a11.6 11.6 0 0 1 8.4 3.5 11.5 11.5 0 0 1 2.5 3.5.6.6 0 0 1 0 .5zM12.6 9.1c-.4-.1-.7-.4-.6-.8a.6.6 0 0 1 .8-.6 4.4 4.4 0 0 1 3.6 3.9.8.8 0 0 1-.7.8h-.1a.8.8 0 0 1-.7-.7 3 3 0 0 0-2.3-2.6z\\"></path>","facebook-messanger":"<path d=\\"M12 2a9.7 9.7 0 0 0-10 9.7 9.8 9.8 0 0 0 3.1 7.2.5.5 0 0 1 .3.5v1.8a.7.7 0 0 0 1.1.7l2-.8H9a9.2 9.2 0 0 0 2.9.4A9.7 9.7 0 1 0 12 2m6 7.5l-2.9 4.6a1.4 1.4 0 0 1-2.2.4l-2.3-1.7a.6.6 0 0 0-.8 0l-3.1 2.4a.5.5 0 0 1-.7-.7l2.9-4.6a1.5 1.5 0 0 1 2.2-.4l2.3 1.7a.6.6 0 0 0 .8 0l3.1-2.4a.5.5 0 0 1 .7.7z\\"></path>","facebook":"<path d=\\"M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z\\"></path>","file-document-outline":"<path d=\\"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6m0 2h7v5h5v11H6V4m2 8v2h8v-2H8m0 4v2h5v-2H8z\\"></path>","file-removal":"<path d=\\"M20.1 7.1H20v-.3l-4-4.5a1.1 1.1 0 0 0-.7-.3H5.6a1.8 1.8 0 0 0-1.8 1.8v16.4A1.8 1.8 0 0 0 5.6 22h12.8a1.8 1.8 0 0 0 1.8-1.8V7.5c0-.2 0-.3-.1-.4zm-4.5-2.3l1.6 1.7h-1.6zm2.8 15.4H5.6V3.8h8.2v3.7a.9.9 0 0 0 .9.9h3.7zm-9.6-7.3h6.4a.9.9 0 0 1 0 1.8H8.8a.9.9 0 1 1 0-1.8z\\"></path>","file-text":"<path d=\\"M20.2 7.6l-5.3-5.4-.6-.2H5.1a1.6 1.6 0 0 0-1.6 1.5v17A1.6 1.6 0 0 0 5.1 22h13.8a1.6 1.6 0 0 0 1.6-1.5V8.2a.7.7 0 0 0-.3-.6zm-5.1-3l2.7 2.8h-2.7zm3.8 15.9H5.1v-17h8.4v4.7a.8.8 0 0 0 .8.7h4.6zm-3.1-7.7a.7.7 0 0 1-.7.7H8.9a.7.7 0 0 1-.7-.7.7.7 0 0 1 .7-.8h6.2a.7.7 0 0 1 .7.8zm0 3a.7.7 0 0 1-.7.8H8.9a.7.7 0 0 1-.7-.8.7.7 0 0 1 .7-.7h6.2a.7.7 0 0 1 .7.7z\\"></path>","format-list-numbered":"<path d=\\"M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 0 1 .75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z\\"></path>","github":"<path d=\\"M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.6c-2.8.6-3.4-1.4-3.4-1.4A2.9 2.9 0 0 0 5 16.7c-.9-.6.1-.6.1-.6a2.1 2.1 0 0 1 1.5 1.1 2.2 2.2 0 0 0 2.9.8 2 2 0 0 1 .7-1.3c-2.3-.3-4.6-1.1-4.6-5A3.7 3.7 0 0 1 6.7 9a3.2 3.2 0 0 1 .1-2.6s.8-.3 2.7 1a10.6 10.6 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.4 3.4 0 0 1 .2 2.6 4.1 4.1 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5a2.2 2.2 0 0 1 .7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2.2z\\"></path>","gitlab":"<path d=\\"M21.9 13.1l-1-3.2-2.1-6.6a.9.9 0 0 0-.8-.5.8.8 0 0 0-.8.5l-2 6.2H8.8l-2-6.2a.8.8 0 0 0-.8-.5 1 1 0 0 0-.8.5L3.1 9.8l-1 3.3a1.2 1.2 0 0 0 .4 1.4l9.2 6.7a.6.6 0 0 0 .6 0l9.2-6.7a1.2 1.2 0 0 0 .4-1.4M8.2 10.5l2.5 7.9-6.1-7.9m8.7 7.9l2.5-7.6v-.3h3.6l-5.6 7.1M18 3.9l1.8 5.6h-3.6m-1.3 1L13.1 16 12 19.2l-2.9-8.7M6 3.9l1.8 5.6H4.2m-1.1 4.2c-.1-.1-.2-.2-.1-.3l.8-2.4 5.8 7.4M21 13.7l-6.6 4.7h.1l5.8-7.4.7 2.4c.1.1 0 .2 0 .3\\"></path>","gojek":"<path d=\\"M22 12.2a9.9 9.9 0 0 1-6 9.2 1.8 1.8 0 0 1-2.6-1 1.8 1.8 0 0 1 1.1-2.3 6.3 6.3 0 1 0-7.6-9.5 6.2 6.2 0 0 0-.3 6.9 7 7 0 0 0 2.8 2.6 1.8 1.8 0 0 1 1.1 2.5 1.9 1.9 0 0 1-2.7.8 9.7 9.7 0 0 1-5.6-7.3A9.9 9.9 0 0 1 9.3 2.7a9.8 9.8 0 0 1 12.3 7.2 22.3 22.3 0 0 1 .4 2.3zm-6.3.1A3.8 3.8 0 0 0 12 8.6c-1.8-.1-3.9 1.9-3.7 3.6a3.7 3.7 0 0 0 3.7 3.9 3.8 3.8 0 0 0 3.7-3.8z\\"></path>","goodreads":"<path d=\\"M17.3 12.9a6.4 6.4 0 0 1-5.3 3c-3.5 0-6.4-3.1-6.4-7A6.7 6.7 0 0 1 12 2a6.4 6.4 0 0 1 5.3 3V2h1.1v13.6c0 6.1-3.9 6.4-7.2 6.4s-4.4-1.9-4.9-4.4h1.1a3.7 3.7 0 0 0 3.8 3.3c2.4 0 6.1 0 6.1-5.3v-2.7M12 3.1a5.6 5.6 0 0 0-5.3 5.8 5.6 5.6 0 0 0 5.3 5.9 5.6 5.6 0 0 0 5.3-5.9A5.6 5.6 0 0 0 12 3.1z\\"></path>","google-maps":"<path d=\\"M18.3 6a7.4 7.4 0 0 1-.4 6.8 37.2 37.2 0 0 1-3.4 4.7 17.6 17.6 0 0 0-1.4 2.3l-.3.8-.3.8c-.1.3-.2.6-.5.6-.4 0-.5-.4-.6-.7a10.2 10.2 0 0 0-.8-2.1 18.2 18.2 0 0 0-1.5-2.3L18.3 6M9.1 8.4l-3.3 3.9a16.7 16.7 0 0 0 2.4 3.5l.6.8 4.2-4.9A3 3 0 0 1 9.3 10c-.1-.2-.1-.4-.2-.6v-1M6.6 4.6a7.7 7.7 0 0 0-1 7.3l4-4.7-3-2.6m7.6-2.2L11 6.2a3 3 0 0 1 3.6 1.3l.3.9a3.4 3.4 0 0 1 0 1l3.2-3.8a6.9 6.9 0 0 0-3.9-3.2M9.9 6.9l3.9-4.7L12 2a6.6 6.6 0 0 0-5.1 2.3h-.1z\\"></path>","google-my-business":"<path d=\\"M22 8.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 4.5 11 2.5 2.5 0 0 1 2 8.5l1.4-5.4S3.7 2 4.7 2h14.6c1 0 1.3 1.1 1.3 1.1L22 8.5m-1 3.7V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.8a4 4 0 0 0 1.5.3 3.8 3.8 0 0 0 2.5-.9 3.9 3.9 0 0 0 5 0 3.9 3.9 0 0 0 5 0 3.8 3.8 0 0 0 2.5.9 4 4 0 0 0 1.5-.3m-2 5.1v-.8h-3v1.2h1.9l-.3.6a1.7 1.7 0 0 1-1.3.5 2.4 2.4 0 0 1-1.4-.5 1.8 1.8 0 0 1 .1-2.6 1.8 1.8 0 0 1 2.5 0h.1l.9-.9h-.2a3 3 0 0 0-2.1-.8 2.9 2.9 0 0 0-2.1.9 2.7 2.7 0 0 0-.9 2.1 2.9 2.9 0 0 0 .9 2.1 2.9 2.9 0 0 0 2.2.9 2.8 2.8 0 0 0 2-.8 2.7 2.7 0 0 0 .7-1.9z\\"></path>","google-play":"<path d=\\"M3 20.6V3.4A1.5 1.5 0 0 1 3.8 2l10 10-10 10a1.6 1.6 0 0 1-.8-1.4m14-5.4L6.1 21.5l8.6-8.6 2.3 2.3m3.4-4.4a1.5 1.5 0 0 1 0 2.4l-2.3 1.3-2.5-2.5 2.5-2.5 2.3 1.3M6.1 2.5L17 8.8l-2.3 2.3z\\"></path>","google-podcast":"<path d=\\"M17.7 7.2v1.4a1.3 1.3 0 0 1-1.3 1.3 1.2 1.2 0 0 1-1.2-1.3V7.2A1.2 1.2 0 0 1 16.4 6a1.2 1.2 0 0 1 1.3 1.2m-4.5 1.2v7.2a1.2 1.2 0 1 1-2.4 0V8.4a1.2 1.2 0 1 1 2.4 0m8.8 2.9v1.4a1.2 1.2 0 0 1-1.2 1.2 1.2 1.2 0 0 1-1.3-1.2v-1.4a1.2 1.2 0 0 1 1.3-1.2 1.2 1.2 0 0 1 1.2 1.2m-17.5 0v1.4a1.2 1.2 0 0 1-1.3 1.2A1.2 1.2 0 0 1 2 12.7v-1.4a1.2 1.2 0 0 1 1.2-1.2 1.2 1.2 0 0 1 1.3 1.2m4.3 4.1v1.4A1.2 1.2 0 0 1 7.6 18a1.2 1.2 0 0 1-1.3-1.2v-1.4a1.3 1.3 0 0 1 1.3-1.3 1.2 1.2 0 0 1 1.2 1.3m4.4 4v1.4a1.2 1.2 0 0 1-2.4 0v-1.4a1.2 1.2 0 1 1 2.4 0m0-16.2v1.4a1.2 1.2 0 1 1-2.4 0V3.2A1.2 1.2 0 0 1 12 2a1.2 1.2 0 0 1 1.2 1.2m4.5 9.1v4.5a1.2 1.2 0 0 1-1.3 1.2 1.2 1.2 0 0 1-1.2-1.2v-4.5a1.2 1.2 0 0 1 1.2-1.2 1.2 1.2 0 0 1 1.3 1.2M8.8 7.2v4.4a1.2 1.2 0 0 1-1.2 1.3 1.3 1.3 0 0 1-1.3-1.3V7.2A1.2 1.2 0 0 1 7.6 6a1.2 1.2 0 0 1 1.2 1.2z\\"></path>","google":"<path d=\\"M21.6 11.1h-9.2v2.7h6.5c-.3 3.8-3.5 5.5-6.5 5.5A7.3 7.3 0 0 1 5.2 12a7.2 7.2 0 0 1 7.2-7.3 7 7 0 0 1 4.9 2l1.9-2A9.6 9.6 0 0 0 12.3 2a10.2 10.2 0 0 0-10 10 10.1 10.1 0 0 0 10.2 10 8.8 8.8 0 0 0 9.2-9.1 14.1 14.1 0 0 0-.1-1.8z\\"></path>","gopay":"<path d=\\"M16 12.6c0 .2-.1.3-.2.5v.3a.5.5 0 0 1-.5.4.4.4 0 0 1-.4-.4v-.3c-.1-.2-.2-.3-.2-.5a.6.6 0 0 1 .6-.6.7.7 0 0 1 .7.6zm6-.6a9.9 9.9 0 0 1-10 9.7A9.9 9.9 0 0 1 2 12a9.9 9.9 0 0 1 10-9.7A9.9 9.9 0 0 1 22 12zm-4.2-.3a2.2 2.2 0 0 0-2.4-2.1H9.1a.4.4 0 1 1 0-.8h6.4A2 2 0 0 0 14 7a17.5 17.5 0 0 0-5.6 0 2.5 2.5 0 0 0-2 2.2 18.2 18.2 0 0 0 0 5.7A2.7 2.7 0 0 0 8.7 17a26.6 26.6 0 0 0 6.9 0 2.4 2.4 0 0 0 2-2 12.2 12.2 0 0 0 .2-3.3z\\"></path>","hamburger-button":"<path d=\\"M3 6a.9.9 0 0 1 1-1h16a.9.9 0 0 1 1 1 .9.9 0 0 1-1 1H4a.9.9 0 0 1-1-1zm17 5H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zm0 6H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2z\\"></path>","hash":"<path d=\\"M21 8.3h-4.6l.8-4.4a.8.8 0 0 0-.6-.9.6.6 0 0 0-.8.6l-.9 4.7h-4.5l.8-4.4a.8.8 0 0 0-.6-.9.6.6 0 0 0-.8.6l-.9 4.7H4.1a.8.8 0 0 0-.8.7.9.9 0 0 0 .8.8h4.5l-.8 4.5H3a.8.8 0 0 0-.8.7.9.9 0 0 0 .8.8h4.6l-.8 4.3a.8.8 0 0 0 .6.9h.1a.7.7 0 0 0 .7-.6l.9-4.7h4.5l-.8 4.4a.8.8 0 0 0 .6.9h.1a.7.7 0 0 0 .7-.6l.9-4.7h4.8a.8.8 0 0 0 .8-.7.9.9 0 0 0-.8-.8h-4.5l.8-4.5H21a.8.8 0 0 0 .8-.7.9.9 0 0 0-.8-.8zm-7.2 6H9.4l.8-4.5h4.4z\\"></path>","home-variant-outline":"<path d=\\"M9 13h6v6h3v-9l-6-4.5L6 10v9h3v-6m-5 8V9l8-6 8 6v12H4z\\"></path>","home":"<path d=\\"M21.6 10.4l-9-7.2a.9.9 0 0 0-1.2 0l-9 7.2a.9.9 0 0 0-.3.7 1.4 1.4 0 0 0 .2.6 1 1 0 0 0 1.3.1l.7-.6v8.9a1 1 0 0 0 .9.9h13.6a1 1 0 0 0 .9-.9v-8.9l.7.6a1 1 0 0 0 1.3-.1 1.4 1.4 0 0 0 .2-.6.9.9 0 0 0-.3-.7zm-11 8.8v-4.1h2.8v4.1zm7.3 0h-2.7v-5a1.1 1.1 0 0 0-.9-.9H9.7a1.1 1.1 0 0 0-.9.9v5H6.1V9.7L12 5.1l5.9 4.6z\\"></path>","house":"<path d=\\"M19.3 21h-4.4a1.5 1.5 0 0 1-1.4-1.5v-4.3h-3v4.3A1.5 1.5 0 0 1 9.1 21H4.7a1.5 1.5 0 0 1-1.5-1.5v-8.4a1.6 1.6 0 0 1 .5-1.1L11 3.4a1.5 1.5 0 0 1 2 0l7.3 6.6a1.6 1.6 0 0 1 .5 1.1v8.4a1.5 1.5 0 0 1-1.5 1.5zm-8.8-7.3h3a1.5 1.5 0 0 1 1.4 1.5v4.3h4.4v-8.4L12 4.5l-7.3 6.6v8.4h4.4v-4.3a1.5 1.5 0 0 1 1.4-1.5z\\"></path>","icon_newspaper":"<path d=\\"M9.1 10.6a.8.8 0 0 1 .8-.7H17a.7.7 0 0 1 0 1.4H9.9a.8.8 0 0 1-.8-.7zm.8 3.5H17a.7.7 0 1 0 0-1.4H9.9a.8.8 0 0 0-.8.7.8.8 0 0 0 .8.7zM22 6.3V17a2.1 2.1 0 0 1-2.1 2.1H4.1A2.1 2.1 0 0 1 2 17V8.4a.7.7 0 0 1 .7-.7.7.7 0 0 1 .7.7V17a.7.7 0 0 0 .7.7.8.8 0 0 0 .8-.7V6.3a1.4 1.4 0 0 1 1.4-1.4h14.3A1.4 1.4 0 0 1 22 6.3zm-1.4 0H6.3V17c0 .2-.1.5-.1.7h13.7a.7.7 0 0 0 .7-.7z\\"></path>","infinix":"<path d=\\"M15.07 11.07h-1.66a.5.5 0 0 0-.42.22v-.22h-.74v3.1H13v-2a.45.45 0 0 1 .45-.44h1.41a.44.44 0 0 1 .44.44v2h.7V12a.93.93 0 0 0-.95-.88M2 10.17h.74v4H2zm8.74.89h.75v3.11h-.75zm6 0h.75v3.1h-.75zm-10.45 0H4.65a.49.49 0 0 0-.41.22v-.22H3.5v3.1h.74v-2a.45.45 0 0 1 .45-.44H6.1a.44.44 0 0 1 .44.44v2h.73V12a.93.93 0 0 0-.95-.88m4.42-1.24h.75v.65h-.75zm6 0h.75v.65h-.75zM22 11.07h-.93L20 12.15l-1.07-1.08H18l1.53 1.55L18 14.17h.94L20 13.09l1.06 1.08H22l-1.53-1.55zm-12.91-.52a.2.2 0 0 1 .18-.07h.83v-.65h-.91a1 1 0 0 0-.7.28.8.8 0 0 0-.21.51v.44h-1s.27.1.46.66h.51v2.44H9v-2.44h1.1v-.66H9v-.33a.24.24 0 0 1 .05-.14\\"></path>","instagram":"<path d=\\"M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.6 1.5a1.3 1.3 0 0 1 1.3 1.3A1.3 1.3 0 0 1 17.2 8 1.3 1.3 0 0 1 16 6.8a1.3 1.3 0 0 1 1.2-1.3M12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0 2a3 3 0 1 0 3 3 2.9 2.9 0 0 0-3-3z\\"></path>","intermediate-mode":"<path d=\\"M22.7 11.3l-2.3-2.4V4.6a1.1 1.1 0 0 0-1-1h-4.3l-2.4-2.3a1 1 0 0 0-1.4 0L8.9 3.6H4.6a1.1 1.1 0 0 0-1 1v4.3l-2.3 2.4a1 1 0 0 0 0 1.4l2.3 2.4v4.3a1.1 1.1 0 0 0 1 1h4.3l2.4 2.3a1 1 0 0 0 1.4 0l2.4-2.3h4.3a1.1 1.1 0 0 0 1-1v-4.3l2.3-2.4a1 1 0 0 0 0-1.4zm-4 2.6a1.1 1.1 0 0 0-.3.7v3.8h-3.8a1.1 1.1 0 0 0-.7.3L12 20.6l-1.9-1.9a1.1 1.1 0 0 0-.7-.3H5.6v-3.8a1.1 1.1 0 0 0-.3-.7L3.4 12l1.9-1.9a1.1 1.1 0 0 0 .3-.7V5.6h3.8a1.1 1.1 0 0 0 .7-.3L12 3.4l1.9 1.9a1.1 1.1 0 0 0 .7.3h3.8v3.8a1.1 1.1 0 0 0 .3.7l1.9 1.9zM16.5 12a5.1 5.1 0 0 1-4.4 5H12a1.1 1.1 0 0 1-1-.9.9.9 0 0 1 .9-1.1 3 3 0 0 0 2.6-3 3.1 3.1 0 0 0-2.6-3 1 1 0 1 1 .2-2 5.1 5.1 0 0 1 4.4 5z\\"></path>","lenovo-1":"<path d=\\"M22 13v.36h-.06v-.28l-.1.28h-.06l-.1-.28v.28h-.06V13h.09l.1.28.1-.28H22m-.42 0v.05h-.11v.31h-.06v-.31h-.12V13h.29m-1.51-.54c.09-.3.09-.47 0-.58a.37.37 0 0 0-.31-.12c-.32 0-.5.18-.64.64-.09.3-.09.47 0 .58a.35.35 0 0 0 .3.12c.33.01.51-.17.65-.63zm1.25-.66a.59.59 0 0 1 .08.6c-.21.67-1 1.05-2.15 1.05a1.79 1.79 0 0 1-1.38-.39.65.65 0 0 1-.07-.6c.21-.67 1-1.06 2.16-1.06a1.75 1.75 0 0 1 1.36.4M17 11.48h1.23l-1.44 1.92H14.9c0-.05-.24-1.86-.25-1.92h1.16l.17 1.35 1-1.35m-3.82 1c.09-.3.1-.47 0-.58a.35.35 0 0 0-.3-.12c-.32 0-.51.18-.64.64-.1.3-.1.47 0 .58a.35.35 0 0 0 .3.12c.33-.01.48-.19.65-.65zm1.26-.66a.59.59 0 0 1 .07.6c-.2.67-1 1.05-2.15 1.05a1.78 1.78 0 0 1-1.34-.4.62.62 0 0 1-.08-.6c.21-.67 1-1.06 2.16-1.06a1.77 1.77 0 0 1 1.37.4m-3.62-.1a.29.29 0 0 1 .06.21l-.48 1.49h-1.3L9.56 12a.14.14 0 0 0 0-.15c-.06-.07-.19-.12-.63-.09 0 0-.53 1.61-.54 1.63H7.08s.59-1.83.6-1.84a9.47 9.47 0 0 1 1.64-.15c.82 0 1.32.09 1.49.29m-4.65.41a.33.33 0 0 0-.06-.26.44.44 0 0 0-.37-.14.59.59 0 0 0-.61.39l-.12.59 1.2-.56zm1.07 0a.43.43 0 0 1 0 .2l-2.26.5A.16.16 0 0 0 5 13a.68.68 0 0 0 .42.11 3.66 3.66 0 0 0 1.34-.35c0 .09-.22.51-.23.53a4.44 4.44 0 0 1-1.44.18 1.6 1.6 0 0 1-1.21-.35.7.7 0 0 1-.06-.66c.21-.66 1-1 2.09-1a1.54 1.54 0 0 1 1.21.35.52.52 0 0 1 .12.36m-4.35-1.63h1.26c0 .08-.88 2.82-.89 2.86H2c0-.08.88-2.82.89-2.86\\"></path>","lenovo-2":"<path d=\\"M8.16 11.82l-1.23.51a.87.87 0 0 1 .13-.6.64.64 0 0 1 1.1.09zm10.67-.3a.67.67 0 0 0-.68.72.69.69 0 0 0 .68.71.72.72 0 0 0 0-1.43zM22 8.67v6.66H2V8.67zM6.17 12.88h-1.6V10.2h-.72v3.32h2.32zm1-.1L8.91 12a1.51 1.51 0 0 0-.3-.72 1.29 1.29 0 0 0-1-.41 1.31 1.31 0 0 0-1.36 1.32 1.33 1.33 0 0 0 1.44 1.32 1.72 1.72 0 0 0 1.19-.49l-.44-.32a1.07 1.07 0 0 1-.74.26.73.73 0 0 1-.58-.18zm4.63-.85a1 1 0 0 0-1-1 1 1 0 0 0-.83.42V11h-.7v2.57h.7v-1.5a.55.55 0 0 1 .58-.55.58.58 0 0 1 .59.55v1.45h.7zm3 .31a1.38 1.38 0 1 0-1.38 1.32 1.33 1.33 0 0 0 1.37-1.32zm1.73 1.28l1-2.57h-.79l-.64 1.76-.62-1.71h-.79l1.06 2.57zm3.69-1.28a1.38 1.38 0 1 0-1.38 1.32 1.32 1.32 0 0 0 1.37-1.32zm.3.92h-.3v.06h.11v.3h.07v-.3h.12zm.45 0h-.07l-.12.17-.11-.17h-.08v.38h.08v-.27l.11.17.12-.17v.27h.1zm-7.55-1.64a.67.67 0 0 0-.68.72.69.69 0 0 0 .68.71.72.72 0 0 0 0-1.43z\\"></path>","lenovo-3":"<path d=\\"M10.38 10.82a1.31 1.31 0 0 0-1 .5v-.45H8.5V14h.86v-1.77a.67.67 0 0 1 .71-.67.7.7 0 0 1 .73.67V14h.86v-1.93a1.21 1.21 0 0 0-1.28-1.25m7.4 0L17 13l-.78-2.14h-1L16.53 14h.94l1.29-3.14zm-11.85 1a.78.78 0 0 1 .66-.31.71.71 0 0 1 .67.44l-1.51.62a1 1 0 0 1 .18-.75m1.65 1.23a1.34 1.34 0 0 1-.9.33.9.9 0 0 1-.68-.26l2.2-.91a1.69 1.69 0 0 0-.38-.87 1.56 1.56 0 0 0-1.24-.52 1.62 1.62 0 1 0 .1 3.24 2.09 2.09 0 0 0 1.46-.59zm-2.75.17h-2V9.94H2V14h2.83zm15.48-1.66a.82.82 0 0 0-.83.88.86.86 0 0 0 .84.89.84.84 0 0 0 .83-.89.85.85 0 0 0-.84-.88m0 2.5A1.62 1.62 0 1 1 22 12.44a1.63 1.63 0 0 1-1.69 1.62m-6.63-2.5a.82.82 0 0 0-.83.88.86.86 0 0 0 .84.89.84.84 0 0 0 .83-.89.85.85 0 0 0-.84-.88m0 2.5a1.62 1.62 0 1 1 1.69-1.62 1.63 1.63 0 0 1-1.69 1.62\\"></path>","link-aja":"<path d=\\"M14.1 11.6a2.5 2.5 0 0 0-2.4 1.5c-.3 1.1-.3 2.9 1.2 3.2a4.7 4.7 0 0 0 2.6-.4 15 15 0 0 0 .4-2.1c.2-1.5.2-1.9.1-2a4.7 4.7 0 0 0-1.9-.2zm.5 1.4a9.5 9.5 0 0 1-.4 1.8c0 .2-.2.2-.4.2s-.8-.5-.6-1.3.4-.9.9-.9.5 0 .5.2zm2.7-6.3a7.8 7.8 0 0 1 .8-1l.6-.7.2-.2h1.2c.3 0 .4-.1.2.2l-.7.8a3.8 3.8 0 0 0-.8.9l.7 1.6.7 1.5c0 .1 0 .2-.1.2h-1.4v-.3L17.8 8zM10.2 9v-.2c.2-1.1.3-2.1.5-3.1.1-.6.2-.7.3-.8a7.2 7.2 0 0 1 2.2-.2h.2c1.6.4 1.3 2.1 1.2 2.9l-.2 1.5c0 .2-.1.2-.8.2h-.4c-.2 0-.3-.1-.2-.2a9.9 9.9 0 0 1 .2-1.8c.1-.8.1-1.6-.9-1.4s-.2 0-.2.2a20 20 0 0 0-.4 2.4 4.3 4.3 0 0 1-.1.5h-.1c-.1-.3-.9-.3-1.2-.1s-.2.4-.1.1zm7.7 6.5c.7.6-.2 1.6-1.1 1.2a.7.7 0 0 1 .1-1.3.8.8 0 0 1 1 .1zm.8-4.4c-.2.7-.7 3.2-.7 3.4s0 .2-.3.2H17c-.1 0-.2-.1-.1-.4s.1-.6.1-1 .1-1.1.1-1.5a2.3 2.3 0 0 0 .1-.7l.3-.2h1.2zm-3.4-1.8c-.1 0 0-.4 0-.9s.2-1.4.4-2.1a15.7 15.7 0 0 1 .4-3c0-.3 0-.3.3-.3h.8c.4 0 .4 0 .3.6a14.3 14.3 0 0 0-.3 2.1c-.3 2.2-.5 3.5-.5 3.6zM4.4 16.1h.2l.2-.5.2-.6h1.8v.5a.7.7 0 0 0 .1.5c0 .1 0 .1.1.1h1.3c.2 0 .1 0 .1-.2s-.8-5.1-.9-5.4 0-.4-.4-.4H6a.5.5 0 0 0-.4.3c-.4.7-2 4.4-2.5 5.4s-.1.3 0 .3zm1.9-4.3h.1c0 .2.2 1.6.2 1.9h-1zM22 18.7h-.6l-5.6.4a97.2 97.2 0 0 0-11 1.8l-1.3.3-.8-.3-.7-.4a18.6 18.6 0 0 1 3.1-.7 84.8 84.8 0 0 1 9.3-1.1H22zM11.1 11a.8.8 0 0 1-1.3-.4 1 1 0 0 1 .7-.9.8.8 0 0 1 .8.1.9.9 0 0 1-.2 1.2zM3.2 8.3c0-.3.4-3.7.6-4.7s.1-.3.3-.3h1.1c.2 0 .2.1.1.3s-.1 1-.2 1.9a14.4 14.4 0 0 0-.3 2.3l1.4.2h1c.2 0 .2 0 .2.2s-.1.7-.1 1-.2.1-.4.1H5.8c-1.5.1-1.5.1-1.9-.1a1.3 1.3 0 0 1-.7-.9zm7.8 3.3c.2 0 .1.2.1.4a4.1 4.1 0 0 1-.1 1 14.1 14.1 0 0 0-.2 1.8 8 8 0 0 1-.5 1.9 2.1 2.1 0 0 1-1.5 1.2c-.1.1-.6.3-.6.1l-.3-.9c0-.2.2-.2.3-.3a1.3 1.3 0 0 0 .9-.9c0-.2.2-1.2.3-2.2a18.8 18.8 0 0 0 .3-1.9l.2-.2zM8.5 3.9a1 1 0 0 1 .9-1.1c.8-.1 1 1 .2 1.5a.8.8 0 0 1-1.1-.4zm-.7 5.2c.1-1.5.3-2.7.5-4.1s.2-.2.4-.2h.7c.4 0 .5.1.4.4s-.4 2.5-.6 3.9-.1.2-.3.2h-1c-.1 0-.1 0-.1-.2z\\"></path>","link-three":"<path d=\\"M20.5 6.4l-2.9-2.9a1.6 1.6 0 0 0-2.4 0l-4.1 4.1a1.7 1.7 0 0 0 0 2.3l.9.9-1.2 1.2-.9-.9a1.7 1.7 0 0 0-2.3 0l-4.1 4.1a1.7 1.7 0 0 0 0 2.4l2.9 2.9a1.8 1.8 0 0 0 1.2.5 1.8 1.8 0 0 0 1.2-.5l4.1-4.1a1.7 1.7 0 0 0 0-2.3l-.9-.9 1.2-1.2.9.9a1.6 1.6 0 0 0 1.1.5 1.7 1.7 0 0 0 1.2-.5l4.1-4.1a1.8 1.8 0 0 0 .5-1.2 1.8 1.8 0 0 0-.5-1.2zM9.4 11.7l-.6.6zm2.3 3.5l-4.1 4.1-2.9-2.9 4.1-4.1.9.9-1.2 1.1a.9.9 0 0 0 0 1.2.7.7 0 0 0 .6.3.9.9 0 0 0 .6-.3l1.1-1.2zM17 4.1l-.6.6zm-1.8 7.6l-.9-.9 1.2-1.1a.8.8 0 0 0-1.2-1.2l-1.1 1.2-.9-.9 4.1-4.1 2.9 2.9z\\"></path>","link-variant":"<path d=\\"M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z\\"></path>","link":"<path d=\\"M21 7.8a4.9 4.9 0 0 1-1.4 3.4L17 13.8a5 5 0 0 1-6.8 0 .8.8 0 0 1 0-1.1.7.7 0 0 1 1 0h.1a3.3 3.3 0 0 0 4.7 0l2.6-2.6a3.4 3.4 0 0 0 .1-4.7 3.4 3.4 0 0 0-4.7-.1h-.1l-1.8 2a.9.9 0 0 1-1.1-.1.9.9 0 0 1 0-1l1.8-1.8A4.8 4.8 0 0 1 21 7.8zm-8.9 8.8l-1.9 1.8a3.1 3.1 0 0 1-4.6-.1 3.1 3.1 0 0 1 0-4.5l2.6-2.6a3.2 3.2 0 0 1 4.6 0 .9.9 0 0 0 1.1-.1.9.9 0 0 0 0-1 5 5 0 0 0-6.8 0l-2.6 2.6a4.8 4.8 0 1 0 6.6 7l.2-.2 1.8-1.8a.8.8 0 0 0-.1-1.1.8.8 0 0 0-.9 0z\\"></path>","linkedin":"<path d=\\"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z\\"></path>","linktree":"<path d=\\"M8.6 14.6v.4a.8.8 0 0 0 .8.7h1.1v4a.7.7 0 0 1-.7.7H7.5a.8.8 0 0 1-.8-.7v-4H2.8a.7.7 0 0 1-.7-1.1L7.9 4a.8.8 0 0 1 1.2-.3c.1.1.3.2.3.3l2.5 4.7zm13.3 0L16.1 4a.9.9 0 0 0-1.2-.3c-.1.1-.3.2-.3.3l-2.5 4.7 3.2 5.9c.1.1.1.2.1.4a1 1 0 0 1-.9.7h-1.1v4a.7.7 0 0 0 .8.7h2.4a.7.7 0 0 0 .7-.7v-4h3.9a.7.7 0 0 0 .7-1.1z\\"></path>","list-number":"<path d=\\"M21 12.2a.7.7 0 0 1-.7.7H9.8a.7.7 0 0 1-.8-.7.8.8 0 0 1 .8-.8h10.5a.8.8 0 0 1 .7.8zM9.8 6.9h10.5a.7.7 0 0 0 .7-.7.8.8 0 0 0-.7-.8H9.8a.8.8 0 0 0-.8.8.7.7 0 0 0 .8.7zm10.5 10.5H9.8a.8.8 0 0 0-.8.8.7.7 0 0 0 .8.7h10.5a.7.7 0 0 0 .7-.7.8.8 0 0 0-.7-.8zM4.1 6.5l.4-.2v4a.8.8 0 0 0 .8.8.8.8 0 0 0 .7-.8V5.1a.8.8 0 0 0-.4-.7.8.8 0 0 0-.7 0l-1.5.7a.8.8 0 0 0-.3 1.1.8.8 0 0 0 1 .3zm2.7 9.7a2.7 2.7 0 0 0 .3-1.2 2.1 2.1 0 0 0-2-2.1 2 2 0 0 0-1.9 1.3.7.7 0 0 0 .4 1 .9.9 0 0 0 1-.4.5.5 0 0 1 .5-.4.6.6 0 0 1 .5.6.4.4 0 0 1-.1.3l-2.3 3.2a.7.7 0 0 0 .1 1l.5.2h2.6a.7.7 0 0 0 .7-.8.7.7 0 0 0-.7-.7H5.3l1.5-2z\\"></path>","list":"<path d=\\"M21 12a.8.8 0 0 1-.8.8H3.8a.8.8 0 0 1 0-1.6h16.4a.8.8 0 0 1 .8.8zM3.8 6.8h16.4a.8.8 0 1 0 0-1.6H3.8a.8.8 0 0 0 0 1.6zm16.4 10.4H3.8a.8.8 0 1 0 0 1.6h16.4a.8.8 0 1 0 0-1.6z\\"></path>","magnify":"<path d=\\"M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z\\"></path>","magnifying-glass":"<path d=\\"M20.3 19.4l-3.5-3.5a7.7 7.7 0 0 0-.9-10.6 7.5 7.5 0 1 0-9.7 11.5 7.7 7.7 0 0 0 9.7 0l3.5 3.5a.6.6 0 1 0 .9-.9zM4.8 11A6.2 6.2 0 0 1 11 4.8a6.2 6.2 0 0 1 6.2 6.2 6.1 6.1 0 0 1-6.2 6.2A6.2 6.2 0 0 1 4.8 11z\\"></path>","medium":"<path d=\\"M4.4 7.3a.9.9 0 0 0-.3-.7L2.3 4.3V4h5.8l4.4 9.9 4-9.9H22v.3l-1.6 1.6-.2.4v11.4a.8.8 0 0 0 .2.4l1.6 1.6v.3h-7.9v-.3l1.6-1.6c.2-.2.2-.2.2-.5V8.5L11.4 20h-.6L5.6 8.5v7.7a.9.9 0 0 0 .3.9L8 19.6v.4H2v-.4l2.1-2.5a1.6 1.6 0 0 0 .3-.9z\\"></path>","menu":"<path d=\\"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z\\"></path>","message-one-alt":"<path d=\\"M21.1 3.1H2.9A.9.9 0 0 0 2 4v13.7a.9.9 0 0 0 .9.9h6.5l2 2a.8.8 0 0 0 1.2 0l2-2h6.5a.9.9 0 0 0 .9-.9V4a.9.9 0 0 0-.9-.9zm-.9 13.7h-5.9l-.7.2-1.6 1.7-1.6-1.7-.7-.2H3.8V5h16.4z\\"></path>","message-one":"<path d=\\"M21.1 3.1H2.9A.9.9 0 0 0 2 4v13.7a.9.9 0 0 0 .9.9h6.5l2 2a.8.8 0 0 0 1.2 0l2-2h6.5a.9.9 0 0 0 .9-.9V4a.9.9 0 0 0-.9-.9zm-.9 13.7h-5.9l-.7.2-1.6 1.7-1.6-1.7-.7-.2H3.8V5h16.4zm-9.6-5.9a.9.9 0 0 1 .9-.9h1a.9.9 0 0 1 0 1.8h-1a.9.9 0 0 1-.9-.9zm4.6 0a.9.9 0 0 1 .9-.9h.9a.9.9 0 1 1 0 1.8h-.9a.9.9 0 0 1-.9-.9zm-9.1 0A.9.9 0 0 1 7 10h.9a.9.9 0 0 1 0 1.8H7a.9.9 0 0 1-.9-.9z\\"></path>","monitor":"<path d=\\"M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z\\"></path>","moon":"<path d=\\"M23 14.3a1 1 0 0 0-.9-.6h-.3a9.3 9.3 0 0 1-11.5-6.5 8.9 8.9 0 0 1 0-5.1v-.2a.8.8 0 0 0-.8-.9h-.3a11.2 11.2 0 0 0 6 21.6 11.3 11.3 0 0 0 7.8-7.8zm-10.8 6.9A9.4 9.4 0 0 1 8.3 3.3 11.2 11.2 0 0 0 18 15.8h2.7a9.3 9.3 0 0 1-8.5 5.4z\\"></path>","more":"<path d=\\"M7.2 12a1.6 1.6 0 1 1-1.6-1.6A1.6 1.6 0 0 1 7.2 12zm4.8-1.6a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6zm6.4 0A1.6 1.6 0 1 0 20 12a1.6 1.6 0 0 0-1.6-1.6z\\"></path>","newspaper-folding":"<path d=\\"M21.1 5.6h-7.8l-.4-2.8A.9.9 0 0 0 12 2H2.9a.9.9 0 0 0-.9.9v14.6a.9.9 0 0 0 .9.9h6.5l.3 2.8c0 .1.1.1.1.2l.3.3h11a.9.9 0 0 0 .9-.9V6.5a.9.9 0 0 0-.9-.9zM3.8 3.8h7.4l1.6 12.7h-9zm8 14.6l-.5.6v-.6zm8.4 1.8h-7.6l1.9-2.1c0-.1.1-.1.1-.2s.1-.1.1-.2v-.4l-.3-2.6H17a.9.9 0 1 0 0-1.8h-2.8l-.3-1.8H17a.9.9 0 0 0 0-1.8h-3.3l-.2-1.8h6.7zM4.7 6.5a.9.9 0 0 1 .9-.9h3.2a.9.9 0 0 1 .9.9 1 1 0 0 1-.9 1H5.6a1 1 0 0 1-.9-1zm0 3.7a.9.9 0 0 1 .9-.9h3.7a.9.9 0 0 1 0 1.8H5.6a.9.9 0 0 1-.9-.9zm5.9 3.6a.9.9 0 0 1-.9.9H5.6a.9.9 0 0 1 0-1.8h4.1a.9.9 0 0 1 .9.9z\\"></path>","newspaper-variant-outline":"<path d=\\"M20 5v14H4V5h16m0-2H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m-2 12H6v2h12v-2m-8-8H6v6h4V7m2 2h6V7h-6v2m6 2h-6v2h6v-2z\\"></path>","newspaper":"<path d=\\"M9.1 10.6a.8.8 0 0 1 .8-.7H17a.7.7 0 0 1 0 1.4H9.9a.8.8 0 0 1-.8-.7zm.8 3.5H17a.7.7 0 1 0 0-1.4H9.9a.8.8 0 0 0-.8.7.8.8 0 0 0 .8.7zM22 6.3V17a2.1 2.1 0 0 1-2.1 2.1H4.1A2.1 2.1 0 0 1 2 17V8.4a.7.7 0 0 1 .7-.7.7.7 0 0 1 .7.7V17a.7.7 0 0 0 .7.7.8.8 0 0 0 .8-.7V6.3a1.4 1.4 0 0 1 1.4-1.4h14.3A1.4 1.4 0 0 1 22 6.3zm-1.4 0H6.3V17c0 .2-.1.5-.1.7h13.7a.7.7 0 0 0 .7-.7z\\"></path>","oneplus":"<path d=\\"M8.07 17.67v-1.74H9.8v-5.21H8.07V9h3.47v7h1.77v1.74H8.07zM19.38 22V10.69h-1.74v9.57H3.74V6.36h9.57V4.62H2V22zm0-13V6.33H22V4.62h-2.62V2h-1.74v2.62H15v1.74h2.62V9h1.74z\\"></path>","oppo":"<path d=\\"M7.09 12.08V9.79h.71v.3l.1-.09a3.27 3.27 0 0 1 2.38-.31 2 2 0 0 1 1.47 1.21 1.58 1.58 0 0 1 0 1.05 1.84 1.84 0 0 1-.92 1A3.32 3.32 0 0 1 8.3 13a2.74 2.74 0 0 1-.42-.21l-.08-.05v1.61h-.71zm2.72.55a1.79 1.79 0 0 0 .95-.39 1 1 0 0 0 .34-.6 1.41 1.41 0 0 0 0-.41 1.07 1.07 0 0 0-.45-.69 1.56 1.56 0 0 0-.41-.2 2.51 2.51 0 0 0-1.16-.1 1.35 1.35 0 0 0-1.24.92 1.07 1.07 0 0 0 0 .64 1.47 1.47 0 0 0 1.31.84 4.53 4.53 0 0 0 .64 0zm2.37-.55V9.79h.71v.15a1.19 1.19 0 0 0 0 .15L13 10a2.37 2.37 0 0 1 .45-.23 3.38 3.38 0 0 1 1.92-.09 1.8 1.8 0 0 1 1.56 1.82 1.73 1.73 0 0 1-1.22 1.5 2.55 2.55 0 0 1-.78.19 4.82 4.82 0 0 1-.76 0 2.68 2.68 0 0 1-1.17-.38h-.07v1.61h-.71zm2.74.55a1.48 1.48 0 0 0 1.15-.63 1.08 1.08 0 0 0 .12-.73 1.32 1.32 0 0 0-1.26-1 2.44 2.44 0 0 0-1.36.18 1.13 1.13 0 0 0-.66.8 1.55 1.55 0 0 0 0 .43 1.12 1.12 0 0 0 .36.6 1.85 1.85 0 0 0 1 .39 3.52 3.52 0 0 0 .65 0zm-10.79.61a3.36 3.36 0 0 1-1-.23A1.77 1.77 0 0 1 2 11.72a1.84 1.84 0 0 1 0-.47 1.81 1.81 0 0 1 1.38-1.48 3.38 3.38 0 0 1 1.42-.12 2.22 2.22 0 0 1 1.79 1.1 1.59 1.59 0 0 1-.08 1.51 1.88 1.88 0 0 1-.54.55 2.8 2.8 0 0 1-1.21.41h-.63zm.51-.6a2 2 0 0 0 .92-.31 1.18 1.18 0 0 0 .44-.55.91.91 0 0 0 0-.35.88.88 0 0 0 0-.34 1.36 1.36 0 0 0-1.05-.82 2.51 2.51 0 0 0-1.42.1 1.23 1.23 0 0 0-.66.53 1.1 1.1 0 0 0-.09.87 1.22 1.22 0 0 0 .72.72 2.42 2.42 0 0 0 .68.16zm14.76.6h-.12a3.06 3.06 0 0 1-1.12-.34 1.7 1.7 0 0 1-.82-1 1.6 1.6 0 0 1-.05-.84 1.69 1.69 0 0 1 .74-1 3.09 3.09 0 0 1 2-.41 2.53 2.53 0 0 1 1.47.65 1.58 1.58 0 0 1 .46.95 2.54 2.54 0 0 1 0 .39 1.89 1.89 0 0 1-1.56 1.51 3.52 3.52 0 0 1-.76.09zm.47-.6A1.79 1.79 0 0 0 21 12.2a1.05 1.05 0 0 0 .3-.58 1.21 1.21 0 0 0 0-.38 1.31 1.31 0 0 0-1.21-1 2 2 0 0 0-.43 0 1.64 1.64 0 0 0-1.56.76 1 1 0 0 0-.1.46 1 1 0 0 0 .18.6 1.59 1.59 0 0 0 1.2.61z\\"></path>","ordered-list":"<path d=\\"M5.5 7.3V6.1h-.4l-.6-.3a.8.8 0 0 1 .2-1L5.8 4h.8a.1.1 0 0 1 .1.1H7v3.2h.4a.8.8 0 0 1 .7.8.7.7 0 0 1-.7.7H5.1a.7.7 0 0 1-.7-.7.8.8 0 0 1 .7-.8zm-1.1 6.1v.2l.2.2h2.8a.7.7 0 0 0 .7-.7.8.8 0 0 0-.7-.8h-.2a2.7 2.7 0 0 0 .6-1 1.2 1.2 0 0 0-.2-1.2 1.8 1.8 0 0 0-1.2-.9 3.5 3.5 0 0 0-1.8.7.8.8 0 0 0 1.1 1.1l.5-.3.2.2a3.8 3.8 0 0 1-1.6 1.5h-.1a.1.1 0 0 0-.1.1h-.1v.2zm3 1.7a1.8 1.8 0 0 0-2.1-.2c-.5.3-.7.7-.8.7a.9.9 0 0 0 .2 1.1.9.9 0 0 0 1.1-.2.5.5 0 0 1 .8-.2h.2c0 .1-.1.1-.1.2h-.4a.7.7 0 0 0-.8.7.8.8 0 0 0 .8.8h.5l-.2.2a.5.5 0 0 1-.8-.2.9.9 0 0 0-1.1 0 .8.8 0 0 0-.2 1 1.9 1.9 0 0 0 .8.7 1.6 1.6 0 0 0 .9.3 1.9 1.9 0 0 0 1.2-.4 1.4 1.4 0 0 0 .8-1.3 1.6 1.6 0 0 0-.2-1 1.3 1.3 0 0 0 .2-.9 1.4 1.4 0 0 0-.8-1.3zm11.5-3.7h-8.2a.7.7 0 0 0-.7.7.7.7 0 0 0 .7.8h8.2a.7.7 0 0 0 .7-.8.7.7 0 0 0-.7-.7zm0 5.2h-8.2a.7.7 0 0 0-.7.7.8.8 0 0 0 .7.8h8.2a.8.8 0 0 0 .7-.8.7.7 0 0 0-.7-.7zm-8.2-8.9h8.2a.7.7 0 0 0 .7-.7.8.8 0 0 0-.7-.8h-8.2a.8.8 0 0 0-.7.8.7.7 0 0 0 .7.7z\\"></path>","ovo":"<path d=\\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 17.5a7.5 7.5 0 1 1 7.5-7.5 7.6 7.6 0 0 1-7.5 7.5zm0-2.5a5 5 0 1 1 5-5 5 5 0 0 1-5 5z\\"></path>","patreon":"<path d=\\"M14.8 2.4a7.2 7.2 0 1 1-7.2 7.2 7.2 7.2 0 0 1 7.2-7.2M2 21.6h3.5V2.4H2z\\"></path>","paypal":"<path d=\\"M20.4 9.2a6.2 6.2 0 0 1-.1 2.3c-.6 3.3-2.7 4.9-6.3 4.9h-.5l-.5.2c-.1.2-.2.3-.2.5v.2l-.6 3.9a.5.5 0 0 1-.3.5l-.5.2H8.5l-.3-.2c-.1-.1-.2-.2-.1-.4a8.2 8.2 0 0 1 .3-1.8 15.2 15.2 0 0 1 .3-1.9 8.9 8.9 0 0 1 .3-1.8c.1-.8.2-1.4.3-1.9a.4.4 0 0 1 .4-.4h1.5a10.2 10.2 0 0 0 2.6-.2 6.5 6.5 0 0 0 3.2-1.6 6.2 6.2 0 0 0 1.8-2.8 10.3 10.3 0 0 0 .4-1.4h.1a2.8 2.8 0 0 1 1.1 1.7zm-1.9-3.1a9.1 9.1 0 0 1-.5 2.6 5.6 5.6 0 0 1-3.4 3.5 8.7 8.7 0 0 1-2.8.5h-2a1.2 1.2 0 0 0-1.4 1.1l-.9 5.9H4.1l-.4-.2a.8.8 0 0 1-.2-.4L6.1 2.7l.3-.5L7 2h7.8l1.2.4a3.7 3.7 0 0 1 1.8 1.4 3.2 3.2 0 0 1 .7 2.3z\\"></path>","pinterest":"<path d=\\"M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2 10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41.86 0 1.26.63 1.26 1.44 0 .86-.57 2.09-.86 3.27-.17.98.52 1.84 1.52 1.84 1.78 0 3.16-1.9 3.16-4.58 0-2.4-1.72-4.04-4.19-4.04-2.82 0-4.48 2.1-4.48 4.31 0 .86.28 1.73.74 2.3.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11-1.28-.56-2.02-2.38-2.02-3.85 0-3.16 2.24-6.03 6.56-6.03 3.44 0 6.12 2.47 6.12 5.75 0 3.44-2.13 6.2-5.18 6.2-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03z\\"></path>","pound-1":"<path d=\\"M20.1 14.7h-3.6V9.3h3.6a.9.9 0 1 0 0-1.8h-3.6V3.9a.9.9 0 0 0-1.8 0v3.6H9.3V3.9a.9.9 0 0 0-1.8 0v3.6H3.9a.9.9 0 1 0 0 1.8h3.6v5.4H3.9a.9.9 0 0 0 0 1.8h3.6v3.6a.9.9 0 0 0 1.8 0v-3.6h5.4v3.6a.9.9 0 1 0 1.8 0v-3.6h3.6a.9.9 0 0 0 0-1.8zm-10.8 0V9.3h5.4v5.4z\\"></path>","pound":"<path d=\\"M5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4h-2M9.53 9l-1.06 6h6l1.06-6h-6z\\"></path>","preview-close-one":"<path d=\\"M14.7 17a.9.9 0 0 1-.7 1 6.9 6.9 0 0 1-2 .3c-5.4 0-9.5-5.5-9.7-5.8a.7.7 0 0 1 0-1 14.4 14.4 0 0 1 2.8-2.9.8.8 0 0 1 1.2.1.9.9 0 0 1-.1 1.3 12.4 12.4 0 0 0-2 2c1.3 1.5 5.1 5.4 9.4 4.3a.9.9 0 0 1 1.1.7zm7-5.5c-.2-.3-4.3-5.8-9.7-5.8a6.9 6.9 0 0 0-2 .3.9.9 0 0 0-.7 1 1 1 0 0 0 1.1.7c4.3-1 8.1 2.8 9.4 4.3a12.4 12.4 0 0 1-2 2 .9.9 0 0 0-.1 1.3.8.8 0 0 0 .7.3l.5-.2a14.4 14.4 0 0 0 2.8-2.9.7.7 0 0 0 0-1zm-1 8a.8.8 0 0 1 0 1.2.7.7 0 0 1-1.2 0l-6-5.9a4.2 4.2 0 0 1-1.5.4 2.9 2.9 0 0 1-2.1-.9 3.1 3.1 0 0 1-1.1-2.2 4.7 4.7 0 0 1 .4-1.6l-5.9-6a.8.8 0 0 1 0-1.2.7.7 0 0 1 1.2 0zm-8.6-6.2l-1.4-1.4v.2a1.6 1.6 0 0 0 .5.9 1 1 0 0 0 .9.3z\\"></path>","quora":"<path d=\\"M19.8 18.8a1.4 1.4 0 0 0 .4-1.1h1.5a5.1 5.1 0 0 1-.1.9l-.3 1a4.1 4.1 0 0 1-1.2 1.5 3.5 3.5 0 0 1-2.3.8 4.1 4.1 0 0 1-2.5-.5 7.8 7.8 0 0 1-2-2.2 9.2 9.2 0 0 1-7.8-1.7 8.5 8.5 0 0 1-3.2-6.7c0-.7.4-8.5 8.6-8.8a8.4 8.4 0 0 1 8.4 5.2 8.6 8.6 0 0 1 .7 3.2 9.7 9.7 0 0 1-.2 2 6.7 6.7 0 0 1-.8 2.4 8.8 8.8 0 0 1-1.2 1.7 12.5 12.5 0 0 1-1.2 1.2 5.9 5.9 0 0 0 1.6 1.4c.2 0 1.1.3 1.6-.3m-7-1.5c.1-.1-.3-.6-.5-.9l-.7-1a1.7 1.7 0 0 0-1.3-.8H8.7l-.3-.5a1.3 1.3 0 0 1-.1-.5 5.1 5.1 0 0 1 3.2-.9 4.1 4.1 0 0 1 2.8 1.3c.4.3.5.7.9 1h.1c.4.3.9-3 .8-5.2s-.2-3.3-1-4.4a4.7 4.7 0 0 0-3.6-1.8c-.7 0-3 .1-4 1.8s-1 5.6-1 5.6-.3 3.3 1.4 5a4.9 4.9 0 0 0 4.2 1.4z\\"></path>","realme":"<path d=\\"M9.44 14.45a1.74 1.74 0 0 1-1-.48 1.76 1.76 0 0 1-.52-1.3 1.73 1.73 0 0 1 1.76-1.79 1.85 1.85 0 0 1 .77.18 2.13 2.13 0 0 1 .33.23h.06v-.39h.44v3.5h-.48V14a1.63 1.63 0 0 1-.91.4 2.84 2.84 0 0 1-.41 0zm.41-.45a1.19 1.19 0 0 0 1-1 2.91 2.91 0 0 0 0-.59 1.22 1.22 0 0 0-.13-.38 1.14 1.14 0 0 0-.93-.66 1.46 1.46 0 0 0-.51 0 1.25 1.25 0 0 0-.87.83 1.14 1.14 0 0 0-.07.47 1.2 1.2 0 0 0 0 .31 1.27 1.27 0 0 0 1 1 1.85 1.85 0 0 0 .47 0zm-4.23.44a1.67 1.67 0 0 1-.8-.28 1.86 1.86 0 0 1-.42-.42 1.84 1.84 0 0 1-.3-1.15 1.8 1.8 0 0 1 .33-1 1 1 0 0 1 .18-.2 1.57 1.57 0 0 1 .86-.46 3.71 3.71 0 0 1 .58 0 1.54 1.54 0 0 1 1.32 1.18 2.41 2.41 0 0 1 .07.5v.17h-2.9v.1a1.28 1.28 0 0 0 .68 1.06 1.31 1.31 0 0 0 .59.14 1.16 1.16 0 0 0 .91-.38 1.71 1.71 0 0 0 .28-.34l.38.25a1.71 1.71 0 0 1-.24.32 1.63 1.63 0 0 1-1.22.51zM7 12.3a1.17 1.17 0 0 0-.94-1 1.55 1.55 0 0 0-.48 0 1.27 1.27 0 0 0-.64.33 1.3 1.3 0 0 0-.37.67H7zm13.19 2.13a1.63 1.63 0 0 1-1.48-1.35 2 2 0 0 1 .29-1.47 1.64 1.64 0 0 1 1.1-.71 2.43 2.43 0 0 1 .66 0 1.48 1.48 0 0 1 .8.42 1.77 1.77 0 0 1 .44 1.27v.14h-2.9v.08a1.26 1.26 0 0 0 1 1.2 1.93 1.93 0 0 0 .48 0 1.21 1.21 0 0 0 .83-.56l.06-.09.37.24a1 1 0 0 1-.19.28 1.74 1.74 0 0 1-1.52.55zm1.37-2.12v-.11a1.12 1.12 0 0 0-1-.9 1.36 1.36 0 0 0-.6 0 1.26 1.26 0 0 0-.83.89v.09h2.43zM2 12.67v-1.74h2.07v.41H2.44v3.06H2zM12 12V9.55h.45v4.84H12zm1.22.69v-1.76h.44v.46-.05a1.19 1.19 0 0 1 .92-.45 1.23 1.23 0 0 1 .64.12 1.06 1.06 0 0 1 .48.48h.06a1.26 1.26 0 0 1 .82-.54 1.88 1.88 0 0 1 .58 0 1.16 1.16 0 0 1 .6.31 1.3 1.3 0 0 1 .34.66v2.51h-.44v-1.1-1.17a.89.89 0 0 0-.58-.82 1.12 1.12 0 0 0-.41 0 .84.84 0 0 0-.79.67 5.63 5.63 0 0 0 0 1.25v1.17h-.44v-1-1.17a.87.87 0 0 0-.76-.88 1 1 0 0 0-1 .55c-.06.15-.06.07-.06 1.36v1.18h-.43v-1.81z\\"></path>","reddit":"<path d=\\"M14.5 15.41c.08.09.08.28 0 .39-.73.7-2.09.76-2.5.76-.39 0-1.75-.06-2.46-.76-.1-.11-.1-.3 0-.39.11-.1.28-.1.38 0 .46.46 1.41.59 2.08.59.69 0 1.66-.13 2.1-.59.11-.1.28-.1.4 0m-3.75-2.37c0-.57-.47-1.04-1.04-1.04-.57 0-1.04.47-1.04 1.04 0 .57.47 1.05 1.04 1.04.57 0 1.04-.47 1.04-1.04M14.29 12c-.57 0-1.04.5-1.04 1.05s.47 1.04 1.04 1.04c.57 0 1.04-.48 1.04-1.04 0-.55-.47-1.05-1.04-1.05M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10m-3.33 0c0-.81-.67-1.46-1.45-1.46-.4 0-.76.16-1.02.41-1-.72-2.37-1.18-3.9-1.24l.67-3.13 2.17.47c.02.55.48.99 1.04.99.57 0 1.04-.47 1.04-1.04 0-.57-.47-1.04-1.04-1.04-.41 0-.77.24-.93.59l-2.43-.52c-.07-.03-.14 0-.19.04-.06.04-.09.1-.1.17l-.74 3.48c-1.55.05-2.95.51-3.97 1.24-.26-.25-.62-.4-1.01-.4-.81 0-1.46.65-1.46 1.44 0 .61.36 1.11.86 1.34-.02.16-.03.28-.03.44 0 2.22 2.61 4.07 5.82 4.07 3.23 0 5.85-1.82 5.85-4.07 0-.14-.01-.28-.04-.44.5-.23.86-.74.86-1.34z\\"></path>","redo":"<path d=\\"M22 4v4.5a.9.9 0 0 1-1 1h-4.5a.9.9 0 0 1-1-1 .9.9 0 0 1 1-1h2.3a5.7 5.7 0 0 1-1.1-1.2A8.3 8.3 0 0 0 12 4a8 8 0 0 0 0 16 8.6 8.6 0 0 0 5.7-2.3 1 1 0 0 1 1.4 1.4A10.5 10.5 0 0 1 12 22a10 10 0 0 1 0-20 9.9 9.9 0 0 1 7.1 2.9l.9 1V4a1 1 0 0 1 2 0z\\"></path>","reload":"<path d=\\"M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0z\\"></path>","samsung":"<path d=\\"M22 10.26c-.27-1.56-5-2-10.48-1.09a30.06 30.06 0 0 0-6 1.67A.77.77 0 0 1 6 11a.47.47 0 0 1 .13.36v.15h-.52v-.14a.17.17 0 0 0-.19-.18.17.17 0 0 0-.18.14.17.17 0 0 0 0 .1c.06.24.86.39 1 .82a1.29 1.29 0 0 1 0 .35c-.05.35-.36.49-.75.49-.55 0-.78-.26-.78-.62v-.17h.58v.21a.21.21 0 0 0 .41.05.26.26 0 0 0 0-.15c-.1-.27-.85-.4-.95-.83a.71.71 0 0 1 0-.29.44.44 0 0 1 0-.15c-1.82.86-2.88 1.8-2.75 2.6.27 1.56 5 2 10.48 1.09a29.51 29.51 0 0 0 6.27-1.76h-.08c-.37 0-.71-.14-.75-.53v-1a.61.61 0 0 1 0-.14c0-.38.34-.53.74-.53s.71.09.75.53a.72.72 0 0 1 0 .13v.08h-.55v-.12a.28.28 0 0 0 0-.08.18.18 0 0 0-.2-.15.18.18 0 0 0-.2.15.28.28 0 0 0 0 .1v1a.2.2 0 0 0 .21.15.19.19 0 0 0 .21-.15v-.38h-.21v-.32h.76v.57a.82.82 0 0 1 0 .14.54.54 0 0 1-.09.26c1.76-.78 2.79-1.73 2.66-2.52zM7.68 13l-.27-1.88-.3 1.88h-.58l.39-2.13h1L8.26 13zm2.81 0v-1.82L10.12 13h-.54l-.34-1.85V13h-.57l.05-2.13h.87l.25 1.58.25-1.58H11V13zm2.51-.38c0 .41-.46.48-.74.48-.48 0-.77-.2-.77-.61v-.17h.58v.21a.18.18 0 0 0 .2.18.18.18 0 0 0 .2-.13.29.29 0 0 0 0-.16c-.1-.26-.85-.39-.94-.82a.66.66 0 0 1 0-.28c.06-.39.43-.47.73-.47a.77.77 0 0 1 .58.18.45.45 0 0 1 .14.35v.16h-.54v-.14a.17.17 0 0 0-.19-.18.16.16 0 0 0-.18.13.21.21 0 0 0 0 .11c.06.24.85.38.94.81a1 1 0 0 1-.01.35zm2-.2v.14c0 .35-.28.53-.74.53s-.71-.18-.74-.53a.61.61 0 0 1 0-.14V10.9h.55v1.65a.19.19 0 0 0 .2.15.18.18 0 0 0 .2-.15V10.9H15zm2.36.59h-.76l-.52-1.69v1.69h-.48V10.9h.8l.47 1.62V10.9h.54V13z\\"></path>","saweria-alt":"<path d=\\"M13 15.9c-.1.4-.5 1.2-.9 1.3-.4 0-.7-.8-.9-1.4a1.8 1.8 0 0 0 .9-.6 2.2 2.2 0 0 0 .9.7zm7.4.1a6.9 6.9 0 0 1 .5 1.7 1 1 0 0 1-.4 1.1 3.9 3.9 0 0 1-2.3 1.3 2.9 2.9 0 0 1-2.5 1.7h-.1a4 4 0 0 1-2.7-1h-1.7A3.9 3.9 0 0 1 8.4 22h-.1a2.6 2.6 0 0 1-2.5-1.8 3.9 3.9 0 0 1-2.3-1.3 1 1 0 0 1-.4-1.1 6.9 6.9 0 0 1 .5-1.8 1.3 1.3 0 0 1-.9-.2c-.2-.4-.3-1.2 2-4.5a34.2 34.2 0 0 1 2.2-3.1A3.9 3.9 0 0 1 4.4 6a4.1 4.1 0 0 1 .1-3.4A1.5 1.5 0 0 1 5.8 2c1.4.1 1.5 1.5 1.6 2.7s.1.7.1 1 .8 1.2 1 1.2a12.6 12.6 0 0 1 7 0c.2 0 .8-.2 1-1.2s.1-.7.1-1 .2-2.6 1.6-2.7a1.5 1.5 0 0 1 1.3.6 4.1 4.1 0 0 1 .1 3.4 3.9 3.9 0 0 1-2.5 2.2 34.2 34.2 0 0 1 2.2 3.1c2.3 3.3 2.2 4.1 2 4.5a1.3 1.3 0 0 1-.9.2zm-6.6-8l.2.2c.5-.1 1.1.4 1.4.6h.3c.1 0 .1-.2 0-.3s-1-.8-1.7-.7-.2 0-.2.2zm-1.1 2.2h.3c.1-.1.2-.2.1-.3a1.3 1.3 0 0 1-.2-.9l-.2-.2-.3.2a3.1 3.1 0 0 0 .3 1.2zm-.9-.1a.2.2 0 0 0 .4 0v-1c0-.2-.1-.3-.2-.3s-.2.1-.2.3zm-.8.2h.3a3.1 3.1 0 0 0 .3-1.1l-.3-.2-.2.2a2.7 2.7 0 0 1-.2.9c-.1 0 0 .1.1.2zM7.9 8.9h.3c.2-.2.9-.7 1.3-.6s.3-.1.3-.2l-.2-.3a3.3 3.3 0 0 0-1.7.8c-.1 0-.1.2 0 .3zm-1.7 4a1.9 1.9 0 0 0 1.3 1.2h.6a1.9 1.9 0 0 0 1.2-.4 3.1 3.1 0 0 0 1.1-1.6A2.5 2.5 0 0 0 9 9a2.6 2.6 0 0 0-2.9 2 2.5 2.5 0 0 0 .1 1.9zm4.5 5.9a.5.5 0 0 0-.5.1c0 .1-.1.1-.2.1a.2.2 0 0 1-.2-.2s0-.8-.4-.8-.7.5-.7.5-.2.2-.3.1a.2.2 0 0 1-.2-.2 1 1 0 0 0-.1-.4c-.1-.2-.3-.2-.6-.2a.9.9 0 0 0-.8.4 2.2 2.2 0 0 0-.5 1.9 2.5 2.5 0 0 0 2.1 1.5 3.2 3.2 0 0 0 2.8-1.4 1.1 1.1 0 0 0-.4-1.4zm1.4-1.2c.8 0 1.2-1.1 1.3-1.6h.4c.5 0 .7-.7.8-1h.3c.1 0 .2-.2.2-.3s-.1-.2-.3-.1h-.3l-.4-.2h-.3a.3.3 0 0 0 0 .4h.4c-.1.3-.2.7-.4.7h-.5a1.8 1.8 0 0 1-1-.7.8.8 0 0 0 .7-.7c.5-.2.9-.4.9-.7s-.9-.9-1.9-.9-1.8.4-1.8.9.2.4.6.6h.3c0 .4.3.6.8.7l-1 .7h-.4c-.1 0-.3-.3-.4-.7l.2-.2a.2.2 0 0 0 0-.3h-.4l-.2.3h-.4a.2.2 0 0 0 0 .4h.4c.1.3.4.9.8.9h.3c.1.5.5 1.6 1.3 1.6zm5.2.4a.7.7 0 0 0-.8-.4.8.8 0 0 0-.6.2 1 1 0 0 0-.1.4c0 .1-.1.2-.2.3l-.3-.2s-.2-.6-.7-.5-.4.8-.4.8l-.2.2c-.1 0-.2 0-.2-.1h-.5a1.1 1.1 0 0 0-.4 1.4 3.2 3.2 0 0 0 2.8 1.4 2.5 2.5 0 0 0 2.1-1.5 2.2 2.2 0 0 0-.5-2zm.5-7.1a2.1 2.1 0 0 0-1.1-1.6 2.2 2.2 0 0 0-1.7-.4 2.6 2.6 0 0 0-1.5 3.2 2.5 2.5 0 0 0 2.4 2h.5a2.2 2.2 0 0 0 1.3-1.2 2.5 2.5 0 0 0 .1-2zM7.6 13.7a1.7 1.7 0 0 0 1.4-.3 2 2 0 0 0 .8-.8.9.9 0 0 1-.6.3c-.5 0-1-.7-1-1.6s.5-1.6 1-1.6h.1l-.5-.2h-.4a2.2 2.2 0 0 0-1.9 1.7 2.2 2.2 0 0 0 .1 1.6 1.6 1.6 0 0 0 1 .9zm8.9-4.1a1.5 1.5 0 0 0-1.4-.2 1.2 1.2 0 0 0-.8.4h.5c.5 0 .9.7.9 1.6s-.4 1.6-.9 1.6a.6.6 0 0 1-.6-.3 1.9 1.9 0 0 0 2.1 1 1.6 1.6 0 0 0 1-1 2.2 2.2 0 0 0 .1-1.6 2.3 2.3 0 0 0-.9-1.5z\\"></path>","saweria":"<path d=\\"M10.4 12.2A2.5 2.5 0 0 0 9 9a2.6 2.6 0 0 0-2.9 2 2.5 2.5 0 0 0 .1 1.9 1.9 1.9 0 0 0 1.3 1.2h.6a1.9 1.9 0 0 0 1.2-.4 3.1 3.1 0 0 0 1.1-1.5zm-2.8 1.5a1.6 1.6 0 0 1-1-1 2.2 2.2 0 0 1-.1-1.6 2.2 2.2 0 0 1 1.9-1.7h.4l.5.2h-.1c-.5 0-1 .7-1 1.6s.5 1.6 1 1.6a.9.9 0 0 0 .6-.3 2 2 0 0 1-.8.8 1.7 1.7 0 0 1-1.4.4zm9.1-4.4a2.2 2.2 0 0 0-1.7-.4 2.6 2.6 0 0 0-1.5 3.2 2.5 2.5 0 0 0 2.4 2h.5a2.2 2.2 0 0 0 1.3-1.2 2.5 2.5 0 0 0 .1-1.9 2.1 2.1 0 0 0-1.1-1.7zm.6 3.3a1.6 1.6 0 0 1-1 1 1.9 1.9 0 0 1-2.1-1 .6.6 0 0 0 .6.3c.5 0 .9-.7.9-1.6s-.4-1.6-.9-1.6h-.5a1.2 1.2 0 0 1 .8-.4 1.5 1.5 0 0 1 1.4.2 2.3 2.3 0 0 1 .9 1.4 2.2 2.2 0 0 1-.1 1.7zm-2.5 2.1h-.3l-.4-.2h-.3a.3.3 0 0 0 0 .4h.4c-.1.3-.2.7-.4.7h-.5a1.8 1.8 0 0 1-1-.7.8.8 0 0 0 .7-.7c.5-.2.9-.4.9-.7s-.9-.9-1.9-.9-1.8.4-1.8.9.2.4.6.6h.3c0 .4.3.6.8.7l-1 .7h-.4c-.1 0-.3-.3-.4-.7l.2-.2a.2.2 0 0 0 0-.3h-.4l-.2.3h-.4a.2.2 0 0 0 0 .4h.4c.1.3.4.9.8.9h.3c.1.5.5 1.6 1.3 1.6s1.2-1.1 1.3-1.6h.4c.5 0 .7-.7.8-1h.3c.1 0 .2-.2.2-.3s-.1 0-.3.1zm-2.7 2.5c-.4 0-.7-.8-.9-1.4a1.8 1.8 0 0 0 .9-.6 2.2 2.2 0 0 0 .9.7c-.1.4-.5 1.2-.9 1.3zM7.9 8.9c-.1-.1-.1-.3 0-.3a3.3 3.3 0 0 1 1.7-.8l.2.3c0 .1-.1.2-.3.2s-1.1.4-1.3.6h-.3zm5.9-.9c0-.2 0-.3.2-.3s1.6.7 1.7.7.1.3 0 .3h-.3c-.3-.2-.9-.7-1.4-.6zm-2.9 2a2.7 2.7 0 0 0 .2-.9l.2-.2.3.2a3.1 3.1 0 0 1-.3 1.1H11c-.1 0-.2-.1-.1-.2zm1.8.2a3.1 3.1 0 0 1-.3-1.1l.3-.2.2.2a1.3 1.3 0 0 0 .2.9c.1.1 0 .2-.1.3h-.3zm-.9-.1v-1c0-.2.1-.3.2-.3s.2.1.2.3v1a.2.2 0 0 1-.4 0zm7.5 1.2a34.2 34.2 0 0 0-2.2-3.1A3.9 3.9 0 0 0 19.6 6a4.1 4.1 0 0 0-.1-3.4 1.5 1.5 0 0 0-1.3-.6c-1.4.1-1.5 1.5-1.6 2.7s-.1.7-.1 1-.8 1.2-1 1.2a12.6 12.6 0 0 0-7 0c-.2 0-.8-.2-1-1.2s-.1-.7-.1-1S7.2 2.1 5.8 2a1.5 1.5 0 0 0-1.3.6A4.1 4.1 0 0 0 4.4 6a3.9 3.9 0 0 0 2.5 2.2 34.2 34.2 0 0 0-2.2 3.1c-2.3 3.3-2.2 4.1-2 4.5a1.3 1.3 0 0 0 .9.2 6.9 6.9 0 0 0-.5 1.7 1 1 0 0 0 .4 1.1 3.9 3.9 0 0 0 2.3 1.3A2.6 2.6 0 0 0 8.3 22h.1a3.9 3.9 0 0 0 2.8-1.2h1.7a4 4 0 0 0 2.7 1h.1a2.9 2.9 0 0 0 2.5-1.7 3.9 3.9 0 0 0 2.3-1.3 1 1 0 0 0 .4-1.1 6.9 6.9 0 0 0-.5-1.7 1.3 1.3 0 0 0 .9-.2c.2-.4.3-1.2-2-4.5zm-8.2 8.9a3.2 3.2 0 0 1-2.8 1.4 2.5 2.5 0 0 1-2.1-1.5 2.2 2.2 0 0 1 .5-1.9.9.9 0 0 1 .8-.4c.3 0 .5 0 .6.2a1 1 0 0 1 .1.4.2.2 0 0 0 .2.2c.1.1.2 0 .3-.1s.2-.6.7-.5.4.8.4.8a.2.2 0 0 0 .2.2c.1 0 .2 0 .2-.1a.5.5 0 0 1 .5-.1 1.1 1.1 0 0 1 .4 1.4zm6.7-.3a2.5 2.5 0 0 1-2.1 1.5 3.2 3.2 0 0 1-2.8-1.4 1.1 1.1 0 0 1 .4-1.4h.5c0 .1.1.1.2.1l.2-.2s0-.8.4-.8.7.5.7.5l.3.2c.1-.1.2-.2.2-.3a1 1 0 0 1 .1-.4.8.8 0 0 1 .6-.2.7.7 0 0 1 .8.4 2.2 2.2 0 0 1 .5 2zm3.1-4.4c-.1.1-.3.1-.8-.1h-.3v.2a15.6 15.6 0 0 1 .7 2.1 1.1 1.1 0 0 1-.3.7 4.2 4.2 0 0 1-1.9 1.2 3.6 3.6 0 0 0-.6-2 1.7 1.7 0 0 0-1.2-.6 1.3 1.3 0 0 0-.9.4l-.2.2a1.2 1.2 0 0 0-.8-.4 1.1 1.1 0 0 0-.8.9.6.6 0 0 0-.7.1 1.3 1.3 0 0 0-.6 1.9h-1a1.5 1.5 0 0 0-.6-2h-.7a1.1 1.1 0 0 0-.8-.9 1.2 1.2 0 0 0-.8.4l-.2-.2a1.3 1.3 0 0 0-.9-.4 1.7 1.7 0 0 0-1.2.6 3 3 0 0 0-.6 1.8 4.2 4.2 0 0 1-1.9-1.2 1.1 1.1 0 0 1-.3-.7 15.6 15.6 0 0 1 .7-2.1v-.2h-.3c-.5.2-.7.2-.8.1s-.3-.7 1.9-4l2.5-3.2c.1-.1.1-.2 0-.2a.2.2 0 0 0-.2-.2 2.9 2.9 0 0 1-2.5-1.9 3.3 3.3 0 0 1 .1-2.9c.2-.3.4-.5.8-.4s1.2.8 1.3 2.2a3.4 3.4 0 0 0 .1 1c.3 1.6 1.4 1.7 1.4 1.7h.1a11.8 11.8 0 0 1 6.8-.1c0 .1 0 .1.1.1s1.1-.1 1.4-1.7a3.4 3.4 0 0 0 .1-1c.1-1.4.3-2.2 1.3-2.3a1 1 0 0 1 .8.5 3.3 3.3 0 0 1 .1 2.9 2.9 2.9 0 0 1-2.5 1.9.2.2 0 0 0-.2.2c-.1 0-.1.1 0 .2l2.5 3.4c2.2 3.3 2 3.9 1.9 4z\\"></path>","search":"<path d=\\"M14.25 7.72A.86.86 0 0 1 13 8.94a2.55 2.55 0 0 0-1.82-.76 2.57 2.57 0 0 0-1.83.76.88.88 0 0 1-1.22 0 .86.86 0 0 1 0-1.22 4.27 4.27 0 0 1 3-1.27 4.3 4.3 0 0 1 3.12 1.27zm6.5 13a.87.87 0 0 1-1.22 0l-3.2-3.2a8.13 8.13 0 0 1-5.13 1.88 8.2 8.2 0 1 1 8.2-8.2 8.13 8.13 0 0 1-1.85 5.13l3.2 3.2a.88.88 0 0 1 0 1.22zm-9.55-3.05a6.47 6.47 0 1 0-6.47-6.47 6.47 6.47 0 0 0 6.47 6.47z\\"></path>","share-network":"<path d=\\"M17.3 15a3.7 3.7 0 0 0-2.7 1.1l-4.3-2.7a4.5 4.5 0 0 0 0-2.8l4.3-2.7a3.7 3.7 0 0 0 5.3 0 3.7 3.7 0 0 0 0-5.3 3.7 3.7 0 0 0-5.3 0 3.7 3.7 0 0 0-1.1 2.7 3.1 3.1 0 0 0 .3 1.3L9.4 9.4a3.8 3.8 0 0 0-5.3-.1 3.8 3.8 0 0 0 5.3 5.4l4.4 2.8a3.2 3.2 0 0 0-.3 1.4 3.8 3.8 0 1 0 3.8-3.9zm0-12a2.2 2.2 0 0 1 2.2 2.3 2.2 2.2 0 0 1-2.2 2.2 2.3 2.3 0 1 1 0-4.5zM6.8 14.3A2.3 2.3 0 0 1 4.5 12a2.2 2.2 0 0 1 2.3-2.2A2.2 2.2 0 0 1 9 12a2.4 2.4 0 0 1-2.2 2.3zM17.3 21a2.3 2.3 0 1 1 2.2-2.2 2.2 2.2 0 0 1-2.2 2.2z\\"></path>","share-one":"<path d=\\"M17.5 15a4.2 4.2 0 0 0-2.4.9l-5.2-3.1a1.9 1.9 0 0 0 .1-.8c0-.3-.1-.6-.1-.9L15 8a3.5 3.5 0 0 0 6-2.5 3.5 3.5 0 0 0-7 0 1.7 1.7 0 0 0 .1.7L8.8 9.4a3.2 3.2 0 0 0-2.3-.9 3.5 3.5 0 0 0 0 7 4.2 4.2 0 0 0 2.4-.9l5.2 3.1a1.9 1.9 0 0 0-.1.8 3.5 3.5 0 1 0 3.5-3.5zm0-11A1.5 1.5 0 0 1 19 5.5a1.5 1.5 0 0 1-3 0A1.5 1.5 0 0 1 17.5 4zm-11 9.5a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3zm11 6.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z\\"></path>","share-variant-outline":"<path d=\\"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66 0 1.61 1.31 2.91 2.92 2.91s2.92-1.3 2.92-2.91-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m12 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\\"></path>","shopee":"<path d=\\"M20.5 6.8h-4.1C16.3 4.1 14.4 2 12 2S7.7 4.1 7.6 6.8H3.5a.4.4 0 0 0-.4.4l.6 13A1.7 1.7 0 0 0 5.3 22h13.2a1.8 1.8 0 0 0 1.8-1.7l.6-13a.4.4 0 0 0-.4-.5zM12 3.2a3.5 3.5 0 0 1 3.2 3.6H8.8A3.5 3.5 0 0 1 12 3.2zM15.3 17a2.6 2.6 0 0 1-1.6 2.1 5.2 5.2 0 0 1-1.8.3 4.6 4.6 0 0 1-2.3-.6 3 3 0 0 1-1-.7.1.1 0 0 1 0-.2l.4-.5h.2a.1.1 0 0 1 .1.1 4.5 4.5 0 0 0 2.6.9c1.3 0 2.2-.5 2.4-1.4s-.6-1.8-2.1-2.3l-1.8-.7a2.4 2.4 0 0 1-1.5-2.4 2.8 2.8 0 0 1 3-2.3 7.8 7.8 0 0 1 2.1.4l.8.5c.1 0 .1.1 0 .2l-.3.5h-.2a4.7 4.7 0 0 0-2.4-.7 1.9 1.9 0 0 0-2 1.5c0 .8.6 1.4 1.9 1.9s3.7 1.8 3.5 3.4z\\"></path>","skype":"<path d=\\"M18.7 5.3a9.6 9.6 0 0 1 2.6 8.4 6.4 6.4 0 0 1 .7 2.7 5.6 5.6 0 0 1-5.6 5.6 6.4 6.4 0 0 1-2.7-.7 9.4 9.4 0 0 1-11-11A6.4 6.4 0 0 1 2 7.6 5.6 5.6 0 0 1 7.6 2a6.4 6.4 0 0 1 2.7.7 9.6 9.6 0 0 1 8.4 2.6M12 17.7c3.2 0 4.8-1.5 4.8-3.6s-.6-2.7-3-3.2l-2.2-.5c-.9-.2-1.8-.5-1.8-1.3s.6-1.3 1.9-1.3 2.2 1.7 3.4 1.7a1.1 1.1 0 0 0 1.2-1.1c0-1.5-2.4-2.6-4.5-2.6s-4.6.9-4.6 3.5.5 2.5 2.9 3.1l2.9.7c.9.3 1.2.8 1.2 1.2s-.8 1.5-2.2 1.5-2.3-2-3.7-2a1 1 0 0 0-1.1 1.1c0 1.2 1.5 2.8 4.8 2.8z\\"></path>","snapchat-alt":"<path d=\\"M21.9 16.6a1.4 1.4 0 0 0-.7-.8h-.4a5.9 5.9 0 0 1-2.2-1.9l-.4-.6V13h.2l.4-.3.5-.3.8-.9a2 2 0 0 0 .1-1.5 1.8 1.8 0 0 0-1.7-1h-.6V7.3a5.3 5.3 0 0 0-1.4-3.2 4.1 4.1 0 0 0-1.4-1.2 6.2 6.2 0 0 0-3.1-.8 6.5 6.5 0 0 0-3.1.8 5.3 5.3 0 0 0-1.4 1.2 4.8 4.8 0 0 0-1.3 3.2 7.1 7.1 0 0 0-.1 1.4h-.6a1.8 1.8 0 0 0-1.7 1 2.6 2.6 0 0 0 .1 1.5 3.8 3.8 0 0 0 .9.9l.4.3.4.3h.2v.3l-.4.6a6.5 6.5 0 0 1-2.1 1.9c-.5.2-1 .4-1.2 1a1.1 1.1 0 0 0 .3 1.3l.5.4 1.3.5h.2c.2.1.2.3.4.6l.3.4a2.2 2.2 0 0 0 1.4.3 4.4 4.4 0 0 1 1.5.2l.8.5a5.7 5.7 0 0 0 3.2 1 5 5 0 0 0 3.2-1.1l.8-.4a4.4 4.4 0 0 1 1.5-.2 2.2 2.2 0 0 0 1.4-.3l.4-.5c.1-.2.1-.4.3-.5h.2l1.3-.5.5-.4a1.1 1.1 0 0 0 .3-1.3\\"></path>","snapchat":"<path d=\\"M21.9 16.6a1.4 1.4 0 0 0-.7-.8h-.4a5.9 5.9 0 0 1-2.2-1.9l-.4-.6V13h.2l.4-.3.5-.3.8-.9a2 2 0 0 0 .1-1.5 1.8 1.8 0 0 0-1.7-1h-.6V7.3a5.3 5.3 0 0 0-1.4-3.2 4.1 4.1 0 0 0-1.4-1.2 6.2 6.2 0 0 0-3.1-.8 6.5 6.5 0 0 0-3.1.8 5.3 5.3 0 0 0-1.4 1.2 4.8 4.8 0 0 0-1.3 3.2 7.1 7.1 0 0 0-.1 1.4h-.6a1.8 1.8 0 0 0-1.7 1 2.6 2.6 0 0 0 .1 1.5 3.8 3.8 0 0 0 .9.9l.4.3.4.3h.2v.3l-.4.6a6.5 6.5 0 0 1-2.1 1.9c-.5.2-1 .4-1.2 1a1.1 1.1 0 0 0 .3 1.3l.5.4 1.3.5h.2c.2.1.2.3.4.6l.3.4a2.2 2.2 0 0 0 1.4.3 4.4 4.4 0 0 1 1.5.2l.8.5a5.7 5.7 0 0 0 3.2 1 5 5 0 0 0 3.2-1.1l.8-.4a4.4 4.4 0 0 1 1.5-.2 2.2 2.2 0 0 0 1.4-.3l.4-.5c.1-.2.1-.4.3-.5h.2l1.3-.5.5-.4a1.1 1.1 0 0 0 .3-1.3m-1.4.7c-.8.5-1.4.4-1.8.7s-.2.3-.3.4v.2a.5.5 0 0 1-.2.4c-.3.2-1.3 0-2.6.4s-1.7 1.3-3.6 1.3-2.5-1-3.6-1.3-2.3-.2-2.6-.4-.1-.7-.5-1-1-.2-1.8-.7-.4-.3-.3-.4l.2-.2A7 7 0 0 0 6.5 14a3.7 3.7 0 0 0 .5-1.3c.1-.2.1-.3-.1-.5l-1.5-1c-.5-.3-.7-.7-.5-1.1a.6.6 0 0 1 .6-.3h.2l1.3.4h.3a22.1 22.1 0 0 1 0-2.6 3.6 3.6 0 0 1 .2-1.1A4.2 4.2 0 0 1 8.3 5 5.1 5.1 0 0 1 12 3.3a4.3 4.3 0 0 1 3.4 1.3l.3.2a4.5 4.5 0 0 1 .9 1.7 2.5 2.5 0 0 1 .1.9 11.1 11.1 0 0 1 0 2.6h.3l1.3-.4h.2a.6.6 0 0 1 .6.3c.2.4 0 .8-.5 1.1l-1.5 1c-.2.2-.2.3-.1.5a4.4 4.4 0 0 0 1.1 2.2 6.4 6.4 0 0 0 2.5 1.8l.2.2q0 .5-.3.6z\\"></path>","sony":"<path d=\\"M21.7 13.07a.3.3 0 0 0-.31.3.3.3 0 0 0 .29.31.3.3 0 0 0 .3-.3.31.31 0 0 0-.3-.31zm0 .58a.27.27 0 0 1-.27-.27.27.27 0 0 1 .27-.27.27.27 0 0 1 .26.27.28.28 0 0 1-.26.27zm.15-.35a.09.09 0 0 0 0-.08h-.23v.34-.16h.08l.1.16h.05l-.11-.16c.07 0 .11 0 .11-.09zm-.16.06h-.07v-.12h.1s.09 0 .09.06-.07.06-.12.06zm-1.78-1.71l.62-.67a.17.17 0 0 0 .06-.11s-.05-.07-.18-.07h-.15v-.42H22v.42h-.23c-.25 0-.3 0-.66.5l-1 1.06V13c0 .17.08.23.33.23h.37v.4h-2.42v-.4h.38c.24 0 .32-.06.32-.23v-.65l-1.16-1.28c-.19-.23-.17-.28-.7-.28v-.42h2.15v.42h-.15c-.15 0-.22 0-.22.09s0 .09.08.13l.58.64a.15.15 0 0 0 .24 0zM5.44 10.38H6v1.18h-.52a.74.74 0 0 0-.32-.45A2 2 0 0 0 4 10.7c-.57 0-1 .18-1 .44 0 .71 3.24.14 3.24 1.5 0 .71-.69 1.1-1.94 1.1a3.75 3.75 0 0 1-1.47-.33c-.12-.07-.17.06-.19.23H2v-1.21h.48a1 1 0 0 0 .39.49 2.16 2.16 0 0 0 1.3.37c.77 0 1-.18 1-.42s-.26-.3-1.11-.44l-.71-.11C2.59 12.2 2 12 2 11.37s.74-1.09 1.92-1.09a2.58 2.58 0 0 1 1.31.29c.11.07.21.08.21-.19zm10.15 2V11c0-.17-.09-.23-.34-.23H15v-.4h1.9v.4h-.25c-.25 0-.34.06-.34.23v2.63h-.74l-2.41-2.28V13c0 .16.09.23.34.23h.33v.4h-2v-.4h.33c.25 0 .34-.07.34-.23v-2c0-.17-.09-.23-.34-.23h-.33v-.4h1.71zm-6.36-2.12c-1.51 0-2.46.67-2.46 1.74s.93 1.72 2.41 1.72 2.49-.66 2.49-1.77-1-1.69-2.44-1.69zm0 3A1.2 1.2 0 0 1 7.88 12a1.22 1.22 0 0 1 1.36-1.3 1.2 1.2 0 0 1 1.3 1.3 1.19 1.19 0 0 1-1.34 1.29z\\"></path>","sort-amount-down":"<path d=\\"M20.6 5.3a.8.8 0 0 1-.8.8h-8.4a.9.9 0 0 1-.9-.8.9.9 0 0 1 .9-.9h8.4a.8.8 0 0 1 .8.9zM7.6 4a.9.9 0 0 0-.9.8v12.3l-1.9-1.9a.9.9 0 0 0-1.2 0 .9.9 0 0 0 0 1.2L7 19.8h.9a1 1 0 0 0 .5-.4V4.8a.9.9 0 0 0-.8-.8zm10.5 4.6h-6.7a.9.9 0 0 0-.9.9.9.9 0 0 0 .9.8h6.7a.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.9zm-1.7 4.2h-5a.9.9 0 0 0-.9.9.9.9 0 0 0 .9.8h5a.9.9 0 0 0 .9-.8.9.9 0 0 0-.9-.9zm-1.7 4.3h-3.3a.8.8 0 1 0 0 1.6h3.3a.8.8 0 1 0 0-1.6z\\"></path>","sort-amount-up":"<path d=\\"M20.8 5.3a.8.8 0 0 1-.8.8h-8.4a.9.9 0 0 1-.9-.8.9.9 0 0 1 .9-.9H20a.8.8 0 0 1 .8.9zM7.7 4.1h-.9L3.4 7.6a.9.9 0 0 0 0 1.2l.6.3.6-.3 1.9-1.9v12.3a.9.9 0 0 0 .9.8.9.9 0 0 0 .8-.8V4.8a.4.4 0 0 0-.1-.3.4.4 0 0 0-.4-.4zm10.6 4.5h-6.7a.9.9 0 0 0-.9.9.9.9 0 0 0 .9.8h6.7a.9.9 0 0 0 .9-.8.9.9 0 0 0-.9-.9zm-1.7 4.2h-5a.9.9 0 0 0-.9.9.9.9 0 0 0 .9.8h5a.9.9 0 0 0 .9-.8.9.9 0 0 0-.9-.9zm-1.7 4.3h-3.3a.8.8 0 1 0 0 1.6h3.3a.8.8 0 1 0 0-1.6z\\"></path>","sort-ascending-1":"<path d=\\"M21.8 16l-4.2 4.1h-1.2L12.3 16a.8.8 0 0 1 .1-1.2.8.8 0 0 1 1.1 0l2.7 2.7v-8a.9.9 0 0 1 .8-.8.9.9 0 0 1 .9.8v8l2.7-2.7a.8.8 0 0 1 1.2.1.8.8 0 0 1 0 1.1zm-11.4-5.6H2.8a.8.8 0 1 0 0 1.6h7.6a.8.8 0 0 0 0-1.6zM2.8 5.3H17a.8.8 0 1 0 0-1.6H2.8a.8.8 0 0 0 0 1.6zM8.7 17H2.8a.9.9 0 0 0-.8.9.9.9 0 0 0 .8.8h5.9a.9.9 0 0 0 .8-.8.9.9 0 0 0-.8-.9z\\"></path>","sort-ascending":"<path d=\\"M19 17h3l-4 4-4-4h3V3h2M2 17h10v2H2M6 5v2H2V5m0 6h7v2H2v-2z\\"></path>","sort-descending-1":"<path d=\\"M21.8 9.2a.7.7 0 0 1-1.2 0l-2.8-2.7v8a.8.8 0 0 1-1.6 0v-8l-2.8 2.7a.7.7 0 0 1-1.2 0 .9.9 0 0 1 0-1.2l4.2-4.1a.1.1 0 0 0 .1-.1h1a.1.1 0 0 0 .1.1L21.8 8a.9.9 0 0 1 0 1.2zm-19 4.4h7.5a.8.8 0 1 0 0-1.6H2.8a.8.8 0 1 0 0 1.6zm0-6.6h5.9a.9.9 0 0 0 .8-.9.9.9 0 0 0-.8-.8H2.8a.9.9 0 0 0-.8.8.9.9 0 0 0 .8.9zM17 18.6H2.8a.9.9 0 0 0-.8.9.9.9 0 0 0 .8.8H17a.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.9z\\"></path>","sort-descending":"<path d=\\"M19 7h3l-4-4-4 4h3v14h2M2 17h10v2H2M6 5v2H2V5m0 6h7v2H2v-2z\\"></path>","soundcloud":"<path d=\\"M11.6 8.8v7.4h8a2.3 2.3 0 0 0 2.4-2.4 2.4 2.4 0 0 0-2.4-2.4 1.5 1.5 0 0 0-.9.2 4.2 4.2 0 0 0-4.3-3.8 4.8 4.8 0 0 0-2.8 1m-.8 1l-.9-.4v6.8h1.3V9.3a1 1 0 0 0-.4.5m-2.1-.5v6.9h.8V9.3h-.8M7 9.9v6.3h.8V9.4l-.8.5m-1.5 2.2h-.2v4.2h.8v-5.7a4.7 4.7 0 0 0-.6 1.5m-1.9-.2v4.2h.9v-4.3h-.9M2 14a2.1 2.1 0 0 0 .8 1.7v-3.4A2.1 2.1 0 0 0 2 14z\\"></path>","spotify":"<path d=\\"M17.9 10.9C14.7 9 9.4 8.8 6.3 9.8a.9.9 0 0 1-1.1-.7.8.8 0 0 1 .6-1.1 18.4 18.4 0 0 1 13.1 1.4.8.8 0 0 1 .3 1.2 1 1 0 0 1-1.3.3m-.1 2.8c-.3.4-.7.5-1 .2a13.3 13.3 0 0 0-10-1.1.8.8 0 0 1-1-.5c0-.4.1-.9.5-.9a14.3 14.3 0 0 1 11.3 1.3.8.8 0 0 1 .2 1m-1.2 2.8c-.2.3-.6.4-.8.1-2.4-1.4-5.4-1.7-8.9-.9-.3.1-.6-.1-.7-.5s.1-.6.5-.7a12.6 12.6 0 0 1 9.7 1.1.6.6 0 0 1 .2.9M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z\\"></path>","stackexchange":"<path d=\\"M3.9 10.7H20V14H3.9v-3.3m0-4.3H20v3.4H3.9V6.4M17.5 2h-11a2.7 2.7 0 0 0-2.6 2.7v.8H20v-.8A2.6 2.6 0 0 0 17.5 2M3.9 15v.8a2.7 2.7 0 0 0 2.6 2.7h6.9V22l3.4-3.5h.7a2.7 2.7 0 0 0 2.6-2.7V15z\\"></path>","stackoverflow":"<path d=\\"M17.8 20.2v-5.3h1.8V22h-16v-7.1h1.7v5.3h12.5M7.3 14.4l.4-1.8 8.7 1.9-.4 1.7-8.7-1.8m1.2-4.2l.7-1.6 8.1 3.7-.8 1.7-8-3.8m2.2-4l1.1-1.3 6.9 5.7-1.1 1.3-6.9-5.7M15.1 2l5.3 7.2-1.4 1-5.3-7.1L15.1 2m-8 16.4v-1.8H16v1.8z\\"></path>","star-1":"<path d=\\"M21.4 9.8a1.1 1.1 0 0 0-.7-.6l-5.5-.8-2.4-4.9A1 1 0 0 0 12 3a1 1 0 0 0-.8.5L8.8 8.4l-5.5.8a1.1 1.1 0 0 0-.7.6 1 1 0 0 0 .2.9l4 3.9-.9 5.4a.7.7 0 0 0 .3.8.8.8 0 0 0 .9.1l4.9-2.6 4.9 2.6h.4l.5-.2a.7.7 0 0 0 .3-.8l-.9-5.4 4-3.9a1 1 0 0 0 .2-.8zm-5.7 3.9a1.1 1.1 0 0 0-.3.7l.7 4.2-3.7-2h-.8l-3.7 2 .7-4.2a1.1 1.1 0 0 0-.3-.7l-3-3 4.2-.6a1.8 1.8 0 0 0 .7-.5L12 5.8l1.9 3.8a1.5 1.5 0 0 0 .6.5l4.2.6z\\"></path>","star-outline":"<path d=\\"M12 15.39l-3.76 2.27.99-4.28-3.32-2.88 4.38-.37L12 6.09l1.71 4.04 4.38.37-3.32 2.88.99 4.28M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24z\\"></path>","star":"<path d=\\"M17.3 21.6a1.1 1.1 0 0 1-.8-.2L12 18.6l-4.2 2.6a1.7 1.7 0 0 1-1.8 0 1.7 1.7 0 0 1-.6-1.8l1.2-4.7-4.1-3.5a1.6 1.6 0 0 1-.4-1.6 1.5 1.5 0 0 1 1.3-1l5.2-.3c.1 0 .1 0 .1-.1l1.9-4.9a1.4 1.4 0 0 1 1.9-.8 1.4 1.4 0 0 1 .9.8l1.9 4.9c0 .1 0 .1.1.1l5.2.3a1.5 1.5 0 0 1 1.3 1 1.6 1.6 0 0 1-.4 1.6l-4.1 3.4 1.3 5.1a1.5 1.5 0 0 1-.6 1.6zM12 17.1a1.3 1.3 0 0 1 .8.3l4.5 2.8L16 15a1.7 1.7 0 0 1 .5-1.5l4.1-3.4h-.1l-5.2-.3a1.6 1.6 0 0 1-1.3-1l-2-5-2 5a1.4 1.4 0 0 1-1.3.9l-5.2.3h-.1l4.1 3.4A1.7 1.7 0 0 1 8 15l-1.2 4.8c-.1.1 0 .1 0 .2s.2.1.2 0l4.2-2.6a1.3 1.3 0 0 1 .8-.3z\\"></path>","steam":"<path d=\\"M12 2a10 10 0 0 1 0 20 9.9 9.9 0 0 1-9.6-7.3l3.8 1.6A2.8 2.8 0 0 0 9 18.6a2.9 2.9 0 0 0 2.8-2.8v-.2l3.4-2.4h.1A3.7 3.7 0 0 0 19 9.4a3.6 3.6 0 0 0-3.7-3.7 3.7 3.7 0 0 0-3.8 3.7l-2.4 3.5H9a2.8 2.8 0 0 0-1.6.5L2 11.2A10 10 0 0 1 12 2M8.3 17.2a1.6 1.6 0 0 0 2-.9 1.4 1.4 0 0 0-.8-2l-1.3-.5a2.2 2.2 0 0 1 1.6 0 2 2 0 0 1 1.1 1.1 2.5 2.5 0 0 1 0 1.7 2.1 2.1 0 0 1-2.8 1.1 2.4 2.4 0 0 1-1-1l1.2.5m9.5-7.8a2.5 2.5 0 1 1-2.5-2.5 2.5 2.5 0 0 1 2.5 2.5m-4.4 0a1.8 1.8 0 0 0 1.9 1.9 1.9 1.9 0 0 0 1.9-1.9 2 2 0 0 0-1.9-1.9 1.9 1.9 0 0 0-1.9 1.9z\\"></path>","sun":"<path d=\\"M12 5.8a6.2 6.2 0 1 0 6.2 6.2A6.2 6.2 0 0 0 12 5.8zm0 11A4.9 4.9 0 0 1 7.2 12 4.9 4.9 0 0 1 12 7.2a4.9 4.9 0 0 1 4.8 4.8 4.9 4.9 0 0 1-4.8 4.8zm-.7-13.2V1.7a.7.7 0 1 1 1.4 0v1.9a.7.7 0 0 1-1.4 0zM4.2 5.3a.9.9 0 0 1-.1-1.1.9.9 0 0 1 1.1-.1.1.1 0 0 0 .1.1l1.3 1.3a1.1 1.1 0 0 1 0 1.1 1.1 1.1 0 0 1-1.1 0zm-.6 7.4H1.7a.7.7 0 1 1 0-1.4h1.9a.7.7 0 1 1 0 1.4zm3 4.7a1.1 1.1 0 0 1 0 1.1l-1.3 1.3-.6.2-.5-.2a.8.8 0 0 1 0-1.1l1.3-1.3a1.1 1.1 0 0 1 1.1 0zm6.1 3v1.9a.7.7 0 0 1-1.4 0v-1.9a.7.7 0 0 1 1.4 0zm7.1-1.7a.8.8 0 0 1 0 1.1l-.5.2-.6-.2-1.3-1.3a.8.8 0 0 1 1.1-1.1zM23 12a.7.7 0 0 1-.7.7h-1.9a.7.7 0 0 1 0-1.4h1.9a.7.7 0 0 1 .7.7zm-5.6-5.4a1.1 1.1 0 0 1 0-1.1l1.3-1.3a.9.9 0 0 1 1.1.1.9.9 0 0 1 0 1l-1.3 1.3a1.1 1.1 0 0 1-1.1 0z\\"></path>","teamviewer":"<path d=\\"M10 9.2L9.3 11h5.5L14 9.2l5.5 2.8-5.5 2.8.8-1.8H9.3l.7 1.8L4.5 12 10 9.2M20.8 22H3.2A1.2 1.2 0 0 1 2 20.8V3.2A1.2 1.2 0 0 1 3.2 2h17.6A1.2 1.2 0 0 1 22 3.2v17.6a1.2 1.2 0 0 1-1.2 1.2M11.9 3.8A8.2 8.2 0 0 0 3.8 12a8 8 0 0 0 8.1 8.2h.1a8.2 8.2 0 0 0 8.2-8.2 8 8 0 0 0-7.9-8.2z\\"></path>","telegram":"<path d=\\"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z\\"></path>","text-box-outline":"<path d=\\"M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H5m0 2h14v14H5V5m2 2v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7z\\"></path>","tokopedia-alt":"<path d=\\"M20.2 5.7c-1.3 0-2.6-.1-3.9 0a4.3 4.3 0 0 0-8.6 0c-1.3-.1-2.6 0-3.9 0h-.7V22H15a5.9 5.9 0 0 0 5.9-5.9V5.7zM12 3.2a3.2 3.2 0 0 1 3.2 2.6h-.1a10.9 10.9 0 0 0-3.1.8 6.8 6.8 0 0 0-3.1-.8A3.1 3.1 0 0 1 12 3.2zm3.8 13.5a2.9 2.9 0 0 1-1.6-.4l-.3.3-1.5 1.6-.4.4-.4-.4-1.5-1.6-.3-.3a2.9 2.9 0 0 1-1.6.4A4.2 4.2 0 0 1 4 12.5a4.2 4.2 0 0 1 4.2-4.1A4.1 4.1 0 0 1 12 11a4.1 4.1 0 0 1 3.8-2.6 4.2 4.2 0 0 1 4.2 4.1 4.2 4.2 0 0 1-4.2 4.2zm-4.3-5.1a.4.4 0 0 1-.1-.3c0-.1-.1-.1-.1-.2a.4.4 0 0 1-.1-.3h-.1c0-.1 0-.1-.1-.2v-.2h-.1c0-.1-.1-.1-.1-.2h-.1V10h-.1v-.2H6.1l-.2.2-.2.2a3.3 3.3 0 0 0-1 2.3A3.5 3.5 0 0 0 8.2 16a3.5 3.5 0 0 0 3.4-3.5 2.8 2.8 0 0 0-.1-.9zm-2.9 3.2a2.2 2.2 0 0 1-2.2-2.2 2 2 0 0 1 .3-1.1 1 1 0 0 0 1 .7 1 1 0 0 0 1-1.1.8.8 0 0 0-.2-.7h.1a2.2 2.2 0 0 1 2.2 2.2 2.2 2.2 0 0 1-2.2 2.2zm10.5-3.2a.4.4 0 0 0-.1-.3c0-.1 0-.1-.1-.2 0-.1 0-.2-.1-.2 0-.1-.1-.1-.1-.2h-.1v-.2l-.2-.2-.2-.2-.2-.2h-4.3v.1h-.3c0 .1-.1.1-.1.2h-.1v.2c-.1.1-.1.1-.1.2h-.2v.2h-.1a2.8 2.8 0 0 0-.1.9 3.5 3.5 0 0 0 3.1 4.3 3.5 3.5 0 0 0 3.5-3.5 2.9 2.9 0 0 0-.2-.9zm-3.7 3.2a2.2 2.2 0 0 1-2.2-2.2 2 2 0 0 1 .3-1.1 1 1 0 0 0 1 .7 1 1 0 0 0 1-1.1 1.4 1.4 0 0 0-.2-.7h.1a2.2 2.2 0 0 1 2.2 2.2 2.2 2.2 0 0 1-2.2 2.2zm-3.4-.7a4.1 4.1 0 0 1-.5.9h1a4.1 4.1 0 0 1-.5-.9zm1.5 2.2a1.7 1.7 0 0 0-3 0l1.5 1.6z\\"></path>","tokopedia":"<path d=\\"M10.8 12.6a2.2 2.2 0 0 1-2.2 2.2 2.2 2.2 0 0 1-2.2-2.2 2 2 0 0 1 .3-1.1 1 1 0 0 0 1 .7 1 1 0 0 0 1-1.1.8.8 0 0 0-.2-.7h.1a2.2 2.2 0 0 1 2.2 2.2zm10.1-6.9v10.4A5.9 5.9 0 0 1 15 22H3.1V5.7h.7c1.3 0 2.6-.1 3.9 0a4.3 4.3 0 0 1 8.6 0c1.3-.1 2.6 0 3.9 0zm-12 .1a6.8 6.8 0 0 1 3.1.8 10.9 10.9 0 0 1 3.1-.8h.1A3.2 3.2 0 0 0 12 3.2a3.1 3.1 0 0 0-3.1 2.6zm11.3.6c-1.3 0-2.6-.1-3.8 0h-1.2a8 8 0 0 0-3.2.9 8.5 8.5 0 0 0-3.2-.9H7.6c-1.2-.1-2.5 0-3.8 0v14.9H15a5.2 5.2 0 0 0 5.2-5.2V6.4zm-4.9 4a1.4 1.4 0 0 1 .2.7 1 1 0 0 1-1 1.1 1 1 0 0 1-1-.7 2 2 0 0 0-.3 1.1 2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-2.2-2.2zm.5-2a4.2 4.2 0 0 1 4.2 4.1 4.2 4.2 0 0 1-4.2 4.2 2.9 2.9 0 0 1-1.6-.4l-.3.3-1.5 1.6-.4.4-.4-.4-1.5-1.6-.3-.3a2.9 2.9 0 0 1-1.6.4A4.2 4.2 0 0 1 4 12.5a4.2 4.2 0 0 1 4.2-4.1A4.1 4.1 0 0 1 12 11a4.1 4.1 0 0 1 3.8-2.6zM12 14.1a4.1 4.1 0 0 1-.5.9h1a4.1 4.1 0 0 1-.5-.9zm-.4-1.6a2.8 2.8 0 0 0-.1-.9.4.4 0 0 1-.1-.3c0-.1-.1-.1-.1-.2a.4.4 0 0 1-.1-.3h-.1c0-.1 0-.1-.1-.2v-.2h-.1c0-.1-.1-.1-.1-.2h-.1V10h-.1v-.2H6.1l-.2.2-.2.2a3.3 3.3 0 0 0-1 2.3A3.5 3.5 0 0 0 8.2 16a3.5 3.5 0 0 0 3.4-3.5zm1.9 3.8a1.7 1.7 0 0 0-3 0l1.5 1.6zm2.6-7.2h-2.4v.9h-.3c0 .1-.1.1-.1.2h-.1v.2c-.1.1-.1.1-.1.2h-.2v.2h-.1a2.8 2.8 0 0 0-.1.9 3.5 3.5 0 0 0 3.1 4.3 3.5 3.5 0 0 0 3.5-3.5 2.9 2.9 0 0 0-.2-.9.4.4 0 0 0-.1-.3c0-.1 0-.1-.1-.2 0-.1 0-.2-.1-.2 0-.1-.1-.1-.1-.2h-.1v-.2l-.2-.2-.2-.2-.2-.2h-1.9z\\"></path>","trakteer":"<path d=\\"M13.5 4.1a2 2 0 0 1 1.9 2 1.9 1.9 0 0 1-.3 1h-3.3a1.9 1.9 0 0 1-.3-1 2 2 0 0 1 2-2zM8.2 9.3h7.6a.9.9 0 0 0 .9-.8v-.2a.8.8 0 0 0-.9-.8H8.2a.8.8 0 0 0-.9.8v.2a.9.9 0 0 0 .9.8zm2.6-2.9h.2v-.5a2.3 2.3 0 0 1 2-2.2A2.3 2.3 0 0 0 10.8 2a2.2 2.2 0 0 0 0 4.4zm6.7 6v8.1A1.5 1.5 0 0 1 16 22H8a1.5 1.5 0 0 1-1.5-1.5v-8.1A1.5 1.5 0 0 1 8 10.9v-.6h8.1v.6a1.5 1.5 0 0 1 1.4 1.5zm-2.6 1.8h-.1a1.8 1.8 0 0 0-2.5 0l-.3.3-.3-.3a1.8 1.8 0 0 0-2.5 0h-.1a1.8 1.8 0 0 0 0 2.5l.3.3 2.6 2.6 2.6-2.6.3-.3a1.8 1.8 0 0 0 0-2.5z\\"></path>","trello":"<path d=\\"M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2m-8.8 15.2a1.2 1.2 0 0 1-1.2 1.2H5.8a1.2 1.2 0 0 1-1.2-1.2V5.8a1.2 1.2 0 0 1 1.2-1.2h3.7a1.2 1.2 0 0 1 1.2 1.2v11.4m8.7-5a1.2 1.2 0 0 1-1.2 1.2h-3.7a1.2 1.2 0 0 1-1.2-1.2V5.8a1.2 1.2 0 0 1 1.2-1.2h3.7a1.2 1.2 0 0 1 1.2 1.2z\\"></path>","trend-up":"<path d=\\"M22 6.3V12a.7.7 0 1 1-1.4 0V8l-7.4 7.4a.9.9 0 0 1-1 0l-3.1-3.1-5.9 5.9a.7.7 0 0 1-1 0 .7.7 0 0 1 0-1l6.4-6.4a.8.8 0 0 1 1.1 0l3 3L19.6 7h-4a.7.7 0 1 1 0-1.4h5.7a.7.7 0 0 1 .7.7z\\"></path>","trending-up-1":"<path d=\\"M22 6.4v6.1a1 1 0 0 1-1 1 1 1 0 0 1-1.1-1V8.9L14.1 15a1 1 0 0 1-1.3.2l-4.2-2.6-4.8 5.7a1.2 1.2 0 0 1-.8.4.9.9 0 0 1-.6-.3 1 1 0 0 1-.2-1.4l5.3-6.4a1.1 1.1 0 0 1 1.4-.2l4.3 2.6 5.4-5.6h-3.8a1.1 1.1 0 0 1-1-1 1.1 1.1 0 0 1 1-1.1h6.9l.2.3v.2z\\"></path>","trending-up":"<path d=\\"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z\\"></path>","twitch":"<path d=\\"M11.6 5.9h1.5v4.3h-1.5m4-4.3H17v4.3h-1.4M7 2L3.4 5.6v12.8h4.3V22l3.6-3.6h2.8l6.5-6.4V2m-1.5 9.3l-2.8 2.8h-2.9l-2.5 2.5v-2.5H7.7V3.4h11.4z\\"></path>","twitter":"<path d=\\"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z\\"></path>","vimeo":"<path d=\\"M22 7.3c-.1 2-1.5 4.7-4.1 8.1s-5 5.3-6.9 5.3-2.1-1.1-3-3.3-1-3.9-1.6-5.9-1.2-3.2-1.9-3.2l-1.6.9L2 8l2.9-2.6q1.9-1.8 3-1.8c1.5-.2 2.5.9 2.9 3.2a29.1 29.1 0 0 0 .8 4.6c.4 2 .9 3 1.4 3s1.1-.6 1.9-1.9a8.4 8.4 0 0 0 1.4-3.1c.1-1.1-.3-1.7-1.4-1.7l-1.4.3c.9-3.2 2.8-4.8 5.6-4.7s3 1.4 2.9 4z\\"></path>","vivo-1":"<path d=\\"M2 2h20v20H2zm15 9.47h1.53a3.64 3.64 0 0 1 .74 0A1.12 1.12 0 0 1 20 13a1.16 1.16 0 0 1-.85.78h-1.53a4.54 4.54 0 0 1-.74 0 1.14 1.14 0 0 1-.77-1.41v-.07a1.07 1.07 0 0 1 .84-.71zm3.74 1.31a1.78 1.78 0 0 0-.61-1.62 1.76 1.76 0 0 0-.75-.37 6.39 6.39 0 0 0-1.07 0h-1.14a1.82 1.82 0 0 0-.89.23 1.84 1.84 0 0 0-.62 2.53A2.11 2.11 0 0 0 16 14a2.45 2.45 0 0 0 1.82.41H19a1.75 1.75 0 0 0 1.76-1.59zm-10.6-1.48a1.67 1.67 0 0 0 .28.46l.87 1.3c.18.26.41.62.59.87a1.11 1.11 0 0 0 1 .51 1.1 1.1 0 0 0 .86-.59l.6-.86 1-1.53a.37.37 0 0 0-.07-.52.35.35 0 0 0-.28-.07.6.6 0 0 0-.37.36l-.59.86-.59.87-.3.43a.43.43 0 0 1-.43.28.7.7 0 0 1-.36-.36l-.26-.43-.62-.88-.6-.87a.42.42 0 0 0-.44-.27.35.35 0 0 0-.29.42zm-6.88 0a1.89 1.89 0 0 0 .26.46l1.18 1.73c.29.43.58 1 1.25.93s.87-.54 1.18-1L8 12.11l.3-.4a.78.78 0 0 0 .23-.51.37.37 0 0 0-.4-.33.6.6 0 0 0-.36.32l-.59.87c-.21.3-.38.6-.58.89l-.3.43a.45.45 0 0 1-.42.3.72.72 0 0 1-.38-.37c-.51-.69-1-1.45-1.47-2.16a.42.42 0 0 0-.44-.28.35.35 0 0 0-.3.41zm6-.42c-.37.08-.31.38-.31.76v2.16a.84.84 0 0 0 .06.47.36.36 0 0 0 .51.1.35.35 0 0 0 .15-.2v-2.66a.8.8 0 0 0-.04-.51.34.34 0 0 0-.36-.15zm0-1.29a.91.91 0 0 0-.16.11l-.24.3c-.17.17 0 .24.18.46l.16.13c.17.17.23 0 .46-.18s.31-.25-.18-.74a.16.16 0 0 0-.19-.06z\\" fill-rule=\\"evenodd\\"></path>","vivo-2":"<path d=\\"M17.7 11.45h1.75a4 4 0 0 1 .85 0 1.29 1.29 0 0 1-.11 2.55h-1.75a4 4 0 0 1-.85 0 1.29 1.29 0 0 1-.87-1.6v-.09a1.2 1.2 0 0 1 1-.81zM22 13a2 2 0 0 0-.7-1.83 2 2 0 0 0-.86-.43 7.08 7.08 0 0 0-1.22 0h-1.31a1.92 1.92 0 0 0-1 .26 2.11 2.11 0 0 0-.71 2.89 2.47 2.47 0 0 0 .42.49 2.75 2.75 0 0 0 2.08.47H20A2 2 0 0 0 22 13zM9.87 11.21a2.18 2.18 0 0 0 .33.52l1 1.49c.19.29.44.71.66 1a1.27 1.27 0 0 0 1.1.57 1.32 1.32 0 0 0 1-.64l.67-1 1.18-1.75a.43.43 0 0 0-.07-.59.46.46 0 0 0-.34-.08.74.74 0 0 0-.42.41l-.67 1-.67 1c-.12.17-.22.32-.33.5s-.24.38-.49.32a.9.9 0 0 1-.42-.42l-.3-.54c-.23-.32-.44-.64-.68-1l-.67-1a.48.48 0 0 0-.51-.32.43.43 0 0 0-.37.47zM2 11.2a1.74 1.74 0 0 0 .32.52l1.35 2c.32.51.64 1.1 1.42 1.08s1-.62 1.36-1.15l1-1.49.34-.49a1 1 0 0 0 .26-.58.41.41 0 0 0-.48-.35.68.68 0 0 0-.43.4c-.23.34-.44.64-.67 1s-.45.65-.68 1c-.12.17-.22.32-.32.49a.52.52 0 0 1-.49.34.79.79 0 0 1-.42-.42C4 12.71 3.43 11.84 2.88 11a.49.49 0 0 0-.51-.32.43.43 0 0 0-.37.47zm6.88-.48c-.41.09-.35.44-.35.88v2.45a.9.9 0 0 0 .08.54.41.41 0 0 0 .58.12.46.46 0 0 0 .17-.22v-3.06a1.11 1.11 0 0 0-.07-.54.43.43 0 0 0-.43-.18zm0-1.49a.54.54 0 0 0-.15.15l-.32.3c-.2.19 0 .28.21.51l.15.15c.2.2.27.06.53-.2s.35-.27-.21-.82a.17.17 0 0 0-.18-.09z\\" fill-rule=\\"evenodd\\"></path>","vkontakte":"<path d=\\"M15.1 2H8.9C3.3 2 2 3.3 2 8.9v6.2C2 20.7 3.3 22 8.9 22h6.2c5.6 0 6.9-1.3 6.9-6.9V8.9C22 3.3 20.7 2 15.1 2m3 14.3h-1.4c-.6 0-.7-.5-1.7-1.5s-1.3-.9-1.5-.9-.4.1-.4.5v1.3c0 .3-.1.6-1 .6a5.8 5.8 0 0 1-4.4-2.7 10.6 10.6 0 0 1-2.3-4.8c0-.3 0-.5.4-.5h1.5c.4 0 .5.2.7.6.7 2.1 1.9 3.9 2.4 3.9s.2-.1.2-.6v-2.1c0-1-.5-1.1-.5-1.4s.1-.4.3-.4h2.3c.3 0 .4.2.4.6v2.9c0 .3.2.4.3.4s.3-.1.7-.5a13 13 0 0 0 1.8-2.9c0-.2.2-.4.6-.4h1.4c.5 0 .6.2.5.5a19.9 19.9 0 0 1-2 3.3c-.1.3-.2.4 0 .7l1 1a11 11 0 0 1 1.3 1.7c.1.5-.1.7-.6.7z\\"></path>","waze":"<path d=\\"M20.5 6.6a8.3 8.3 0 0 1 1.4 3.2 7.7 7.7 0 0 1-.3 3.7 7.2 7.2 0 0 1-2 3.1 9.4 9.4 0 0 1-2.3 1.6 2.1 2.1 0 0 1-1.2 2.7h-.7a2.2 2.2 0 0 1-2.1-2h-3.1a2.1 2.1 0 0 1-4.1-.2.7.7 0 0 1 .1-.5 9 9 0 0 1-4-2.9 1.1 1.1 0 0 1 .2-1.3l.7-.2c.7 0 1-.3 1.1-.7a5.4 5.4 0 0 0 .4-2.2 7.7 7.7 0 0 1 .2-1.5A7.1 7.1 0 0 1 7.5 5a9.5 9.5 0 0 1 5.8-2 8.6 8.6 0 0 1 4.1 1 8.6 8.6 0 0 1 3.1 2.6m-3.8 10.7a7.5 7.5 0 0 0 3.9-4.1c1.6-4.9-2.6-9.1-7.3-9.1h-1.1c-2.8.4-5.8 2.4-6.4 5.4s.2 5.3-2.7 5.3a7.6 7.6 0 0 0 3.7 2.6 2 2 0 0 1 2.9.1l.3.4h3.6a2.1 2.1 0 0 1 2.8-.9l.3.3m-5.7-7a1 1 0 0 1-1.1-1 1 1 0 0 1 1-1.1 1.2 1.2 0 0 1 1.1 1 1 1 0 0 1-1 1.1m4.7 0a1.2 1.2 0 0 1-1.2-1 1.1 1.1 0 0 1 1-1.1 1.2 1.2 0 0 1 1.2 1 1 1 0 0 1-1 1.1m-6 1.8a.7.7 0 0 1 .4-.7.6.6 0 0 1 .6.5 2.6 2.6 0 0 0 2.6 1.7 2.5 2.5 0 0 0 2.6-1.7.5.5 0 0 1 .7-.3c.2.2.3.3.3.5a3.6 3.6 0 0 1-1.2 1.8 4 4 0 0 1-2.4.7h-.1a3.5 3.5 0 0 1-3.5-2.5z\\"></path>","wechat":"<path d=\\"M9.5 4C5.4 4 2 6.7 2 10a5.7 5.7 0 0 0 2.8 4.7L4 17l2.5-1.5a9.3 9.3 0 0 0 2.9.5 4.5 4.5 0 0 1-.4-2c0-3.3 3.1-6 7-6h.6a7.7 7.7 0 0 0-7.1-4m-3 2.5a.9.9 0 0 1 1 1 .9.9 0 0 1-1 1 .9.9 0 0 1-1-1 .9.9 0 0 1 1-1m5 0a.9.9 0 0 1 1 1 1 1 0 0 1-2 0 .9.9 0 0 1 1-1M16 9c-3.3 0-6 2.2-6 5s2.7 5 6 5l1.9-.2L20 20l-.6-1.9A4.7 4.7 0 0 0 22 14c0-2.8-2.7-5-6-5m-2 2.5a1 1 0 1 1-1 1 .9.9 0 0 1 1-1m4 0a1 1 0 1 1-1 1 .9.9 0 0 1 1-1z\\"></path>","whatsapp":"<path d=\\"M12 6.1a5.9 5.9 0 0 0-5.9 5.8 6.2 6.2 0 0 0 .9 3.2l.2.2-.6 2.2 2.2-.6H9a6.1 6.1 0 0 0 3 .8 6 6 0 0 0 6-5.9 5.9 5.9 0 0 0-1.8-4.1A6.1 6.1 0 0 0 12 6.1zm3.5 8.4a1.8 1.8 0 0 1-1.2.8 4.2 4.2 0 0 1-2.2-.4 9.1 9.1 0 0 1-3-2.7 3.5 3.5 0 0 1-.7-1.8A2.3 2.3 0 0 1 9 8.9a.6.6 0 0 1 .5-.2h.3c.1 0 .3-.1.4.3s.5 1.2.6 1.3.1.2 0 .3-.7.6-.5 1a5.4 5.4 0 0 0 2.4 2.1h.4l.5-.7c.1-.2.3-.1.4-.1l1.2.6.4.2a3.9 3.9 0 0 1-.1.8zM19.9 2H4.1A2.2 2.2 0 0 0 2 4.1v15.8A2.2 2.2 0 0 0 4.1 22h15.8a2.2 2.2 0 0 0 2.1-2.1V4.1A2.2 2.2 0 0 0 19.9 2zM12 19a7.7 7.7 0 0 1-3.4-.8l-3.7.9 1-3.6a6.5 6.5 0 0 1-1-3.6 7 7 0 0 1 7.1-7 7 7 0 0 1 5 2 7.3 7.3 0 0 1 2.1 5A7.1 7.1 0 0 1 12 19z\\"></path>","wordpress":"<path d=\\"M3.4 12a8.5 8.5 0 0 1 .8-3.5l4.1 11.2A8.5 8.5 0 0 1 3.4 12m14.4-.4a9.7 9.7 0 0 1-.7 2.7l-.8 2.9L13.2 8h1a.4.4 0 0 0-.1-.7H9.6c-.5 0-.5.7-.1.7h.9l1.4 3.6-1.9 5.7L6.7 8h1a.4.4 0 0 0 0-.7H4.8A8.8 8.8 0 0 1 12 3.4a8.6 8.6 0 0 1 5.8 2.3h-.1a1.5 1.5 0 0 0-1.5 1.5 3.6 3.6 0 0 0 .9 2 4.9 4.9 0 0 1 .7 2.4m-5.7 1.2l2.7 7.2h.1a9.3 9.3 0 0 1-2.9.5 6.7 6.7 0 0 1-2.4-.4l2.5-7.4m7.4-4.9a8.1 8.1 0 0 1 1.1 4.2 8.5 8.5 0 0 1-4.3 7.4l2.6-7.6a7.9 7.9 0 0 0 .7-3v-.9M12 2A10 10 0 1 1 2 12 10 10 0 0 1 12 2m0 19.5a9.4 9.4 0 0 0 9.5-9.5A9.4 9.4 0 0 0 12 2.5 9.4 9.4 0 0 0 2.5 12a9.4 9.4 0 0 0 9.5 9.5z\\"></path>","x":"<path d=\\"M18.8 17.8a.7.7 0 0 1 0 1 .9.9 0 0 1-1 0L12 13l-5.8 5.8a.9.9 0 0 1-1 0 .7.7 0 0 1 0-1L11 12 5.2 6.2a.8.8 0 0 1 .1-1 .8.8 0 0 1 .9 0L12 11l5.8-5.8a.7.7 0 0 1 1 .1.7.7 0 0 1 0 .9L13 12z\\"></path>","xiaomi-1":"<path d=\\"M21.24 22H2.76a.76.76 0 0 1-.76-.76V2.76A.76.76 0 0 1 2.76 2h18.48a.76.76 0 0 1 .76.76v18.48a.76.76 0 0 1-.76.76M17.68 8.29h-1.57a.12.12 0 0 0-.12.12v7.18a.12.12 0 0 0 .12.12h1.57a.12.12 0 0 0 .12-.12V8.41a.12.12 0 0 0-.12-.12m-5.37 0h-6a.12.12 0 0 0-.12.12v7.18a.12.12 0 0 0 .12.12h1.58a.12.12 0 0 0 .11-.12V10a.12.12 0 0 1 .12-.11h3.39A1.15 1.15 0 0 1 12.75 11v4.55a.12.12 0 0 0 .12.12h1.57a.13.13 0 0 0 .13-.12V10.5A2 2 0 0 0 14 8.94a2.13 2.13 0 0 0-1.66-.65m-1.1 2.86H9.56a.12.12 0 0 0-.13.12v4.32a.13.13 0 0 0 .13.12h1.65a.13.13 0 0 0 .12-.12v-4.32a.12.12 0 0 0-.12-.12\\"></path>","xiaomi-2":"<path d=\\"M19.92 4.09C18 2.21 15.32 2 12 2s-6 .21-7.92 2.1S2 8.69 2 12s.19 6 2.08 7.91S8.68 22 12 22s6-.19 7.92-2.08S22 15.33 22 12s-.19-6-2.08-7.92zM17.8 8.2a.12.12 0 0 1 .13.12v7.4a.13.13 0 0 1-.13.12h-1.62a.12.12 0 0 1-.12-.12v-7.4a.12.12 0 0 1 .12-.12zm-7 0c1.22 0 2.5.05 3.13.68s.69 1.86.69 3.06v3.78a.13.13 0 0 1-.13.12h-1.65a.12.12 0 0 1-.12-.12v-3.84a2.54 2.54 0 0 0-.39-1.71 2.12 2.12 0 0 0-1.43-.38H8a.12.12 0 0 0-.12.12v5.81a.13.13 0 0 1-.13.12H6.09a.13.13 0 0 1-.09-.12v-7.4a.12.12 0 0 1 .13-.12zm.36 2.94a.13.13 0 0 1 .13.12v4.46a.13.13 0 0 1-.13.12H9.43a.13.13 0 0 1-.13-.12v-4.46a.13.13 0 0 1 .13-.12z\\"></path>","xiaomi-3":"<path d=\\"M13.26 10.44a1.72 1.72 0 0 0-1.21.34 1.73 1.73 0 0 0-.4 1.24 1.67 1.67 0 0 0 .35 1.23 1.7 1.7 0 0 0 1.22.36 1.67 1.67 0 0 0 1.2-.35 1.66 1.66 0 0 0 .4-1.24 1.61 1.61 0 0 0-.39-1.22 1.69 1.69 0 0 0-1.17-.36zm.74 2.34a.92.92 0 0 1-.69.21.92.92 0 0 1-.69-.21 1.06 1.06 0 0 1-.22-.78 1.09 1.09 0 0 1 .17-.75.88.88 0 0 1 .69-.21.88.88 0 0 1 .69.21 1 1 0 0 1 .18.75 1.12 1.12 0 0 1-.13.78zM7 10.5h-.73a.05.05 0 0 0 0 .05v3h.65v-3-.05zM4.2 12l1.15-1.42a.06.06 0 0 0 0-.07h-.92l-.76 1-.74-1h-.88L3.18 12 2 13.47v.07h.86a.05.05 0 0 0 .05 0l.78-1 .73 1h.82l.05-.05zM20 10.72a1.56 1.56 0 0 0-1-.27 1.9 1.9 0 0 0-.9.18h-.12a1.94 1.94 0 0 0-.92-.18 1.63 1.63 0 0 0-1 .24c-.21.18-.26.42-.26.91v1.95h.65l.05-.05v-1.56a2.13 2.13 0 0 1 .05-.69c0-.08.12-.18.47-.18s.52 0 .59.22a1.1 1.1 0 0 1 0 .18v2a.05.05 0 0 0 .05.05h.65l.05-.05v-2a.57.57 0 0 1 0-.18c.06-.19.16-.22.58-.22s.43.1.48.18a2.16 2.16 0 0 1 .05.69v1.57H20.16v-1.78c.06-.52.05-.73-.16-1.01zm-9.3.18a1.55 1.55 0 0 0-1.4-.5 3.6 3.6 0 0 0-1.07.19c-.06 0 0 .07 0 .11v.5c0 .11.06.07.11.06a4.08 4.08 0 0 1 .9-.22c.33 0 .79 0 .91.19a.82.82 0 0 1 .07.37 5.57 5.57 0 0 0-.82 0 2.43 2.43 0 0 0-1 .18.69.69 0 0 0-.41.41 1.28 1.28 0 0 0-.06.51.88.88 0 0 0 .33.65 2 2 0 0 0 1.28.28c.9 0 1.14-.32 1.26-.52a2.66 2.66 0 0 0 .17-1.26 1.87 1.87 0 0 0-.3-.95zm-.59 1.87c-.08.18-.39.2-.57.21a1.55 1.55 0 0 1-.74-.08.37.37 0 0 1-.19-.3.29.29 0 0 1 .05-.24c.12-.16.43-.19.74-.2a5.1 5.1 0 0 1 .78 0 1.65 1.65 0 0 1-.1.61zM22 10.5h-.7l-.05.05v2.95l.05.05h.7v-3-.05z\\"></path>","xiaomi-4":"<path d=\\"M21.79 5.61a.21.21 0 0 1 .21.21v12.36a.21.21 0 0 1-.21.21h-2.71a.21.21 0 0 1-.21-.21V5.82a.21.21 0 0 1 .21-.21zM10 5.61c2 0 4.18.09 5.24 1.15s1.14 3.1 1.15 5.11v6.31a.21.21 0 0 1-.21.21H13.5a.21.21 0 0 1-.21-.21v-6.42a4.24 4.24 0 0 0-.65-2.85 3.6 3.6 0 0 0-2.39-.64H5.34a.22.22 0 0 0-.21.21v9.7a.21.21 0 0 1-.21.21H2.21a.21.21 0 0 1-.21-.21V5.82a.21.21 0 0 1 .21-.21zm.61 4.93a.21.21 0 0 1 .21.2v7.44a.21.21 0 0 1-.21.21H7.79a.21.21 0 0 1-.21-.21v-7.44a.2.2 0 0 1 .21-.2z\\"></path>","yahoo":"<path d=\\"M10.5 7.6l-2.3 5.6-2.4-5.6H2l4.3 9.6-1.5 3.5h3.7l5.7-13.1h-3.7m4.5 5.1a2.3 2.3 0 0 0-2.4 2.3 2.2 2.2 0 0 0 2.3 2.2 2.4 2.4 0 0 0 2.5-2.3 2.3 2.3 0 0 0-2.4-2.2m2.7-9.4l-3.8 8.6h4.3L22 3.3z\\"></path>","youtube":"<path d=\\"M10 15l5.2-3L10 9v6m11.6-7.8a8.4 8.4 0 0 1 .2 1.9 16.2 16.2 0 0 1 .1 2.1v.8a25.1 25.1 0 0 1-.4 4.8 2.7 2.7 0 0 1-1.8 1.8l-2.6.2H12a50.8 50.8 0 0 1-7.8-.4 2.7 2.7 0 0 1-1.8-1.8 8.4 8.4 0 0 1-.2-1.9 16.2 16.2 0 0 1-.1-2.1V12a25.1 25.1 0 0 1 .4-4.8 2.7 2.7 0 0 1 1.7-1.8 12.6 12.6 0 0 1 2.6-.2H12a50.8 50.8 0 0 1 7.8.4 2.7 2.7 0 0 1 1.8 1.6z\\"></path>","zte":"<path d=\\"M2.58 16.82a.65.65 0 0 1-.5-.34.66.66 0 0 1 0-.58l1.49-2.35 2.12-3.33c.36-.56.67-1.06.68-1.09a.47.47 0 0 0 0-.4.52.52 0 0 0-.18-.18c-.11-.06 0-.06-1.69-.06s-1.59 0-1.75-.07a.66.66 0 0 1-.34-.77.7.7 0 0 1 .34-.41c.15-.08-.08-.07 2.91-.07h2.7a.66.66 0 0 1 .43.43.53.53 0 0 1 0 .2.55.55 0 0 1-.08.32s-1 1.54-2.14 3.36-2.12 3.33-2.13 3.36a.74.74 0 0 0 0 .26.49.49 0 0 0 .26.32h1.82c1.94 0 1.77 0 1.94.08a.64.64 0 0 1 .27.27.66.66 0 0 1-.22.87.53.53 0 0 1-.28.1H2.58zm14.28 0a1 1 0 0 1-.28-.12.88.88 0 0 1-.19-.24c-.07-.15-.06.26-.06-4.49V7.61a.9.9 0 0 1 .18-.28.88.88 0 0 1 .31-.15h4.65a.5.5 0 0 1 .3.18.46.46 0 0 1 .13.16.65.65 0 0 1 .1.48.45.45 0 0 1-.14.24.59.59 0 0 1-.27.18H19.91a13.58 13.58 0 0 0-1.61 0 .71.71 0 0 0-.46.49v1.8a.69.69 0 0 0 .49.5 9.49 9.49 0 0 0 1.33 0c1.4 0 1.33 0 1.48.07a.69.69 0 0 1 .34.41.65.65 0 0 1-.43.82H18.28a.68.68 0 0 0-.39.33c-.07.16-.07.12-.07 1.06a5.32 5.32 0 0 0 0 .92.66.66 0 0 0 .49.48 12.42 12.42 0 0 0 1.52 0h1.56a.64.64 0 0 1 .61.7.42.42 0 0 1 0 .27.64.64 0 0 1-.44.5h-4.7zm-4.42 0a.73.73 0 0 1-.23-.09 1 1 0 0 1-.29-.28l-.06-.14v-3.67V9a.67.67 0 0 0-.44-.47H10.62a3.52 3.52 0 0 1-.76 0A.67.67 0 0 1 9.35 8a.86.86 0 0 1 0-.32.67.67 0 0 1 .42-.46h5.51a.85.85 0 0 1 .32.15.68.68 0 0 1 .18.29.41.41 0 0 1 0 .22.39.39 0 0 1 0 .21.71.71 0 0 1-.43.42 3.41 3.41 0 0 1-.77 0c-.8 0-.75 0-.9.09a.67.67 0 0 0-.33.4V16.28a.74.74 0 0 1-.53.54 1.22 1.22 0 0 1-.33 0z\\"></path>"}');

/***/ }),

/***/ "./src/icon-attributes.json":
/*!**********************************!*\
  !*** ./src/icon-attributes.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"height":24,"viewBox":"0 0 24 24","width":24,"xmlns":"http://www.w3.org/2000/svg"}');

/***/ }),

/***/ "./src/icon-tags.json":
/*!****************************!*\
  !*** ./src/icon-tags.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"bank-bca":["social brand logo"],"bank-bca-alt":["social brand logo"],"bank-bni":["social brand logo"],"bank-bri":["social brand logo"],"bank-jenius":["social brand logo"],"bank-mandiri":["social brand logo"],"behance":["social brand logo"],"buffer":["social brand logo"],"buy-me-a-coffee":["social brand logo"],"codepen":["social brand logo"],"deviant-art":["social brand logo"],"discord":["social brand logo"],"dana":["social brand logo"],"dev":["social brand logo"],"disqus":["social brand logo"],"facebook-messanger":["social brand logo"],"github":["social brand logo microsoft"],"gitlab":["social brand logo microsoft"],"gojek":["social brand logo"],"goodreads":["social brand logo"],"google":["social brand logo"],"google-maps":["social brand logo"],"google-my-business":["social brand logo"],"google-play":["social brand logo"],"google-podcast":["social brand logo"],"gopay":["social brand logo gojek"],"instagram":["social brand logo"],"linkaja":["social brand logo"],"linktree":["social brand logo"],"medium":["social brand logo"],"patreon":["social brand logo"],"ovo":["social brand logo"],"paypal":["social brand logo"],"quora":["social brand logo"],"saweria":["social brand logo"],"saweria-alt":["social brand logo"],"shopee":["social brand logo"],"skype":["social brand logo"],"snapchat":["social brand logo"],"snapchat-alt":["social brand logo"],"soundcloud":["social brand logo"],"spotify":["social brand logo"],"stackexchange":["social brand logo"],"stackoverflow":["social brand logo"],"steam":["social brand logo"],"teamviewer":["social brand logo"],"tokopedia":["social brand logo"],"tokopedia-alt":["social brand logo"],"trakteer":["social brand logo"],"twitch":["social brand logo"],"trello":["social brand logo"],"vimeo":["social brand logo"],"vkontakte":["social brand logo vk"],"waze":["social brand logo"],"wechat":["social brand logo"],"wordpress":["social brand logo"],"yahoo":["social brand logo"],"youtube":["social brand logo"],"samsung":["brand logo"],"oppo":["brand logo"],"realme":["brand logo"],"vivo-1":["brand logo"],"vivo-2":["brand logo"],"apple":["brand logo"],"lenovo-1":["brand logo"],"lenovo-2":["brand logo"],"lenovo-3":["brand logo"],"acer-1":["brand logo"],"acer-2":["brand logo"],"asus":["brand logo"],"asus-rog":["brand logo republic of games"],"blackberry-1":["brand logo"],"blackberry-2":["brand logo"],"dell-1":["brand logo"],"dell-2":["brand logo"],"zte":["brand logo"],"xiaomi-1":["brand logo"],"xiaomi-2":["brand logo"],"xiaomi-3":["brand logo"],"xiaomi-4":["brand logo"],"sony":["brand logo"],"oneplus":["brand logo"],"infinix":["brand logo"],"archive-outline":["material_design icon_archive"],"arrow-left":["material_design icon_arrow_left"],"arrow-right":["material_design icon_arrow_right"],"arrow-up":["material_design icon_arrow_up"],"blogger":["material_design icon_blogger social logo"],"brightness-4":["material_design icon_dark"],"brightness-7":["material_design icon_light sun"],"check-decagram":["material_design icon_verified"],"check":["material_design icon_check"],"chevron_down":["material_design icon_check caret"],"close":["material_design icon_close x"],"comment-outline":["material_design icon_comment chat"],"comment-text-outline":["material_design icon_comment_text chat"],"content-copy":["material_design icon_copy"],"dots-grid":["material_design icon_dots_grid dots_nine"],"dots-horizontal":["material_design icon_more"],"email":["material_design icon_email_send"],"evernote":["material_design icon_evernote social logo"],"eye-off-outline":["material_design icon_eye_off eye_slash"],"file-document-outline":["material_design icon_page"],"facebook":["material_design icon_facebook social logo"],"format-list-numbered":["material_design icon_list_numbered"],"home-variant-outline":["material_design icon_home house"],"link-variant":["material_design icon_link"],"linkedin":["material_design icon_linkedin social logo"],"magnify":["material_design icon_search"],"monitor":["material_design icon_monitor monitor desktop"],"menu":["material_design icon_menu"],"newspaper-variant-outline":["material_design icon_newspaper"],"pinterest":["material_design icon_pinterest social logo"],"pound":["material_design icon_pound hash"],"reddit":["material_design icon_reddit social logo"],"reload":["material_design icon_reload redo"],"share-variant-outline":["material_design icon_share"],"sort-ascending":["material_design icon_sort_ascending"],"sort-descending":["material_design icon_sort_descending"],"star-outline":["material_design icon_star"],"telegram":["material_design icon_telegram social logo"],"text-box-outline":["material_design icon_document article"],"trending-up":["material_design icon_trending"],"twitter":["material_design icon_twitter social logo"],"whatsapp":["material_design icon_whatsapp social logo"],"archive":["phosphor icon_archive"],"arrow-left-1":["phosphor icon_arrow_left"],"arrow-right-1":["phosphor icon_arrow_right"],"arrow-up-1":["phosphor icon_arrow_up"],"check-1":["phosphor icon_check"],"caret-down":["phosphor icon_chevron_down"],"x":["phosphor icon_close"],"chat":["phosphor icon_comment"],"chat-dots":["phosphor icon_comment_text"],"copy":["phosphor icon_copy"],"article":["phosphor icon_document"],"dots-nine":["phosphor icon_dots_grid"],"eye-slash":["phosphor icon_eye_off"],"house":["phosphor icon_home"],"sun":["phosphor icon_light"],"link":["phosphor icon_link"],"list-number":["phosphor icon_list_numbered"],"magnifying-glass":["phosphor icon_search"],"list":["phosphor icon_menu"],"dots-three":["phosphor icon_more"],"newspaper":["phosphor icon_newspaper"],"file-text":["phosphor icon_page"],"hash":["phosphor icon_pound"],"arrow-clockwise":["phosphor icon_reload redo"],"share-network":["phosphor icon_share"],"sort-ascending-1":["phosphor icon_sort_ascending"],"sort-descending-1":["phosphor icon_sort_descending"],"star":["phosphor icon_star"],"trend-up":["phosphor icon_trending"],"circle-wavy-check":["phosphor icon_verified"],"moon":["phosphor icon_dark"],"document-folder":["iconpark_outline icon_archive"],"arrow-left-2":["iconpark_outline icon_arrow_left"],"arrow-right-2":["iconpark_outline icon_arrow_right"],"arrow-up-2":["iconpark_outline icon_arrow_up"],"check-2":["iconpark_outline icon_check"],"down":["iconpark_outline icon_chevron_down"],"close-1":["iconpark_outline icon_close"],"message-one-alt":["iconpark_outline icon_comment"],"message-one":["iconpark_outline icon_comment_text"],"copy-1":["iconpark_outline icon_copy"],"align-text-both-one":["iconpark_outline icon_document"],"application-menu":["iconpark_outline icon_dots_grid"],"preview-close-one":["iconpark_outline icon_eye_off"],"home":["iconpark_outline icon_home"],"intermediate-mode":["iconpark_outline icon_light"],"link-three":["iconpark_outline icon_link"],"ordered-list":["iconpark_outline icon_list_numbered"],"search":["iconpark_outline icon_search"],"hamburger-button":["iconpark_outline icon_menu"],"more":["iconpark_outline icon_more"],"newspaper-folding":["iconpark_outline icon_newspaper"],"file-removal":["iconpark_outline icon_page"],"pound-1":["iconpark_outline icon_pound"],"redo":["iconpark_outline icon_reload redo"],"share-one":["iconpark_outline icon_share"],"sort-amount-down":["iconpark_outline icon_sort_ascending"],"sort-amount-up":["iconpark_outline icon_sort_descending"],"star-1":["iconpark_outline icon_star"],"trending-up-1":["iconpark_outline icon_trending"],"check-one":["iconpark_outline icon_verified"],"dark-mode":["iconpark_outline icon_dark"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./node_modules/core-js/es/array/from.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=matericons.js.map