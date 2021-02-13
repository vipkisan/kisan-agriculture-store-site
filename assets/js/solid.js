/*!
 * Font Awesome Pro 5.12.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */

/*!
 * Font Awesome Pro 5.12.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
(function() {
    'use strict';

    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }

        return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

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

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
            }

            ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        }

        return target;
    }

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        }
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    var noop = function noop() {};

    var _WINDOW = {};
    var _DOCUMENT = {};
    var _MUTATION_OBSERVER = null;
    var _PERFORMANCE = {
        mark: noop,
        measure: noop
    };

    try {
        if (typeof window !== 'undefined') _WINDOW = window;
        if (typeof document !== 'undefined') _DOCUMENT = document;
        if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
        if (typeof performance !== 'undefined') _PERFORMANCE = performance;
    } catch (e) {}

    var _ref = _WINDOW.navigator || {},
        _ref$userAgent = _ref.userAgent,
        userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

    var WINDOW = _WINDOW;
    var DOCUMENT = _DOCUMENT;
    var MUTATION_OBSERVER = _MUTATION_OBSERVER;
    var PERFORMANCE = _PERFORMANCE;
    var IS_BROWSER = !!WINDOW.document;
    var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
    var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

    var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
    var UNITS_IN_GRID = 16;
    var DEFAULT_FAMILY_PREFIX = 'fa';
    var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
    var DATA_FA_I2SVG = 'data-fa-i2svg';
    var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
    var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
    var DATA_PREFIX = 'data-prefix';
    var DATA_ICON = 'data-icon';
    var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
    var MUTATION_APPROACH_ASYNC = 'async';
    var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
    var PRODUCTION = function() {
        try {
            return "production" === 'production';
        } catch (e) {
            return false;
        }
    }();
    var PREFIX_TO_STYLE = {
        'fas': 'solid',
        'far': 'regular',
        'fal': 'light',
        'fad': 'duotone',
        'fab': 'brands',
        'fa': 'solid'
    };
    var STYLE_TO_PREFIX = {
        'solid': 'fas',
        'regular': 'far',
        'light': 'fal',
        'duotone': 'fad',
        'brands': 'fab'
    };
    var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
    var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
    var FONT_WEIGHT_TO_PREFIX = {
        '900': 'fas',
        '400': 'far',
        'normal': 'far',
        '300': 'fal'
    };
    var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
    var DUOTONE_CLASSES = {
        GROUP: 'group',
        SWAP_OPACITY: 'swap-opacity',
        PRIMARY: 'primary',
        SECONDARY: 'secondary'
    };
    var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function(n) {
        return "".concat(n, "x");
    })).concat(oneToTwenty.map(function(n) {
        return "w-".concat(n);
    }));

    var initial = WINDOW.FontAwesomeConfig || {};

    function getAttrConfig(attr) {
        var element = DOCUMENT.querySelector('script[' + attr + ']');

        if (element) {
            return element.getAttribute(attr);
        }
    }

    function coerce(val) {
        // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
        // We'll assume that this is an indication that it should be toggled to true
        // For example <script data-search-pseudo-elements src="..."></script>
        if (val === '') return true;
        if (val === 'false') return false;
        if (val === 'true') return true;
        return val;
    }

    if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
        var attrs = [
            ['data-family-prefix', 'familyPrefix'],
            ['data-replacement-class', 'replacementClass'],
            ['data-auto-replace-svg', 'autoReplaceSvg'],
            ['data-auto-add-css', 'autoAddCss'],
            ['data-auto-a11y', 'autoA11y'],
            ['data-search-pseudo-elements', 'searchPseudoElements'],
            ['data-observe-mutations', 'observeMutations'],
            ['data-mutate-approach', 'mutateApproach'],
            ['data-keep-original-source', 'keepOriginalSource'],
            ['data-measure-performance', 'measurePerformance'],
            ['data-show-missing-icons', 'showMissingIcons']
        ];
        attrs.forEach(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                attr = _ref2[0],
                key = _ref2[1];

            var val = coerce(getAttrConfig(attr));

            if (val !== undefined && val !== null) {
                initial[key] = val;
            }
        });
    }

    var _default = {
        familyPrefix: DEFAULT_FAMILY_PREFIX,
        replacementClass: DEFAULT_REPLACEMENT_CLASS,
        autoReplaceSvg: true,
        autoAddCss: true,
        autoA11y: true,
        searchPseudoElements: false,
        observeMutations: true,
        mutateApproach: 'async',
        keepOriginalSource: true,
        measurePerformance: false,
        showMissingIcons: true
    };

    var _config = _objectSpread({}, _default, initial);

    if (!_config.autoReplaceSvg) _config.observeMutations = false;

    var config = _objectSpread({}, _config);

    WINDOW.FontAwesomeConfig = config;

    var w = WINDOW || {};
    if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
    var namespace = w[NAMESPACE_IDENTIFIER];

    var functions = [];

    var listener = function listener() {
        DOCUMENT.removeEventListener('DOMContentLoaded', listener);
        loaded = 1;
        functions.map(function(fn) {
            return fn();
        });
    };

    var loaded = false;

    if (IS_DOM) {
        loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
        if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
    }

    function domready(fn) {
        if (!IS_DOM) return;
        loaded ? setTimeout(fn, 0) : functions.push(fn);
    }

    var PENDING = 'pending';
    var SETTLED = 'settled';
    var FULFILLED = 'fulfilled';
    var REJECTED = 'rejected';

    var NOOP = function NOOP() {};

    var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
    var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
    var asyncQueue = [];
    var asyncTimer;

    function asyncFlush() {
        // run promise callbacks
        for (var i = 0; i < asyncQueue.length; i++) {
            asyncQueue[i][0](asyncQueue[i][1]);
        } // reset async asyncQueue


        asyncQueue = [];
        asyncTimer = false;
    }

    function asyncCall(callback, arg) {
        asyncQueue.push([callback, arg]);

        if (!asyncTimer) {
            asyncTimer = true;
            asyncSetTimer(asyncFlush, 0);
        }
    }

    function invokeResolver(resolver, promise) {
        function resolvePromise(value) {
            resolve(promise, value);
        }

        function rejectPromise(reason) {
            reject(promise, reason);
        }

        try {
            resolver(resolvePromise, rejectPromise);
        } catch (e) {
            rejectPromise(e);
        }
    }

    function invokeCallback(subscriber) {
        var owner = subscriber.owner;
        var settled = owner._state;
        var value = owner._data;
        var callback = subscriber[settled];
        var promise = subscriber.then;

        if (typeof callback === 'function') {
            settled = FULFILLED;

            try {
                value = callback(value);
            } catch (e) {
                reject(promise, e);
            }
        }

        if (!handleThenable(promise, value)) {
            if (settled === FULFILLED) {
                resolve(promise, value);
            }

            if (settled === REJECTED) {
                reject(promise, value);
            }
        }
    }

    function handleThenable(promise, value) {
        var resolved;

        try {
            if (promise === value) {
                throw new TypeError('A promises callback cannot return that same promise.');
            }

            if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
                // then should be retrieved only once
                var then = value.then;

                if (typeof then === 'function') {
                    then.call(value, function(val) {
                        if (!resolved) {
                            resolved = true;

                            if (value === val) {
                                fulfill(promise, val);
                            } else {
                                resolve(promise, val);
                            }
                        }
                    }, function(reason) {
                        if (!resolved) {
                            resolved = true;
                            reject(promise, reason);
                        }
                    });
                    return true;
                }
            }
        } catch (e) {
            if (!resolved) {
                reject(promise, e);
            }

            return true;
        }

        return false;
    }

    function resolve(promise, value) {
        if (promise === value || !handleThenable(promise, value)) {
            fulfill(promise, value);
        }
    }

    function fulfill(promise, value) {
        if (promise._state === PENDING) {
            promise._state = SETTLED;
            promise._data = value;
            asyncCall(publishFulfillment, promise);
        }
    }

    function reject(promise, reason) {
        if (promise._state === PENDING) {
            promise._state = SETTLED;
            promise._data = reason;
            asyncCall(publishRejection, promise);
        }
    }

    function publish(promise) {
        promise._then = promise._then.forEach(invokeCallback);
    }

    function publishFulfillment(promise) {
        promise._state = FULFILLED;
        publish(promise);
    }

    function publishRejection(promise) {
        promise._state = REJECTED;
        publish(promise);

        if (!promise._handled && isNode) {
            global.process.emit('unhandledRejection', promise._data, promise);
        }
    }

    function notifyRejectionHandled(promise) {
        global.process.emit('rejectionHandled', promise);
    }
    /**
     * @class
     */


    function P(resolver) {
        if (typeof resolver !== 'function') {
            throw new TypeError('Promise resolver ' + resolver + ' is not a function');
        }

        if (this instanceof P === false) {
            throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
        }

        this._then = [];
        invokeResolver(resolver, this);
    }

    P.prototype = {
        constructor: P,
        _state: PENDING,
        _then: null,
        _data: undefined,
        _handled: false,
        then: function then(onFulfillment, onRejection) {
            var subscriber = {
                owner: this,
                then: new this.constructor(NOOP),
                fulfilled: onFulfillment,
                rejected: onRejection
            };

            if ((onRejection || onFulfillment) && !this._handled) {
                this._handled = true;

                if (this._state === REJECTED && isNode) {
                    asyncCall(notifyRejectionHandled, this);
                }
            }

            if (this._state === FULFILLED || this._state === REJECTED) {
                // already resolved, call callback async
                asyncCall(invokeCallback, subscriber);
            } else {
                // subscribe
                this._then.push(subscriber);
            }

            return subscriber.then;
        },
        catch: function _catch(onRejection) {
            return this.then(null, onRejection);
        }
    };

    P.all = function(promises) {
        if (!Array.isArray(promises)) {
            throw new TypeError('You must pass an array to Promise.all().');
        }

        return new P(function(resolve, reject) {
            var results = [];
            var remaining = 0;

            function resolver(index) {
                remaining++;
                return function(value) {
                    results[index] = value;

                    if (!--remaining) {
                        resolve(results);
                    }
                };
            }

            for (var i = 0, promise; i < promises.length; i++) {
                promise = promises[i];

                if (promise && typeof promise.then === 'function') {
                    promise.then(resolver(i), reject);
                } else {
                    results[i] = promise;
                }
            }

            if (!remaining) {
                resolve(results);
            }
        });
    };

    P.race = function(promises) {
        if (!Array.isArray(promises)) {
            throw new TypeError('You must pass an array to Promise.race().');
        }

        return new P(function(resolve, reject) {
            for (var i = 0, promise; i < promises.length; i++) {
                promise = promises[i];

                if (promise && typeof promise.then === 'function') {
                    promise.then(resolve, reject);
                } else {
                    resolve(promise);
                }
            }
        });
    };

    P.resolve = function(value) {
        if (value && _typeof(value) === 'object' && value.constructor === P) {
            return value;
        }

        return new P(function(resolve) {
            resolve(value);
        });
    };

    P.reject = function(reason) {
        return new P(function(resolve, reject) {
            reject(reason);
        });
    };

    var picked = typeof Promise === 'function' ? Promise : P;

    var d = UNITS_IN_GRID;
    var meaninglessTransform = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: false,
        flipY: false
    };

    function isReserved(name) {
        return ~RESERVED_CLASSES.indexOf(name);
    }

    function bunker(fn) {
        try {
            fn();
        } catch (e) {
            if (!PRODUCTION) {
                throw e;
            }
        }
    }

    function insertCss(css) {
        if (!css || !IS_DOM) {
            return;
        }

        var style = DOCUMENT.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = css;
        var headChildren = DOCUMENT.head.childNodes;
        var beforeChild = null;

        for (var i = headChildren.length - 1; i > -1; i--) {
            var child = headChildren[i];
            var tagName = (child.tagName || '').toUpperCase();

            if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
                beforeChild = child;
            }
        }

        DOCUMENT.head.insertBefore(style, beforeChild);
        return css;
    }
    var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function nextUniqueId() {
        var size = 12;
        var id = '';

        while (size-- > 0) {
            id += idPool[Math.random() * 62 | 0];
        }

        return id;
    }

    function toArray(obj) {
        var array = [];

        for (var i = (obj || []).length >>> 0; i--;) {
            array[i] = obj[i];
        }

        return array;
    }

    function classArray(node) {
        if (node.classList) {
            return toArray(node.classList);
        } else {
            return (node.getAttribute('class') || '').split(' ').filter(function(i) {
                return i;
            });
        }
    }

    function getIconName(familyPrefix, cls) {
        var parts = cls.split('-');
        var prefix = parts[0];
        var iconName = parts.slice(1).join('-');

        if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
            return iconName;
        } else {
            return null;
        }
    }

    function htmlEscape(str) {
        return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function joinAttributes(attributes) {
        return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
            return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
        }, '').trim();
    }

    function joinStyles(styles) {
        return Object.keys(styles || {}).reduce(function(acc, styleName) {
            return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
        }, '');
    }

    function transformIsMeaningful(transform) {
        return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
    }

    function transformForSvg(_ref) {
        var transform = _ref.transform,
            containerWidth = _ref.containerWidth,
            iconWidth = _ref.iconWidth;
        var outer = {
            transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        var inner = {
            transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        var path = {
            transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        return {
            outer: outer,
            inner: inner,
            path: path
        };
    }

    function transformForCss(_ref2) {
        var transform = _ref2.transform,
            _ref2$width = _ref2.width,
            width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
            _ref2$height = _ref2.height,
            height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
            _ref2$startCentered = _ref2.startCentered,
            startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
        var val = '';

        if (startCentered && IS_IE) {
            val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
        } else if (startCentered) {
            val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
        } else {
            val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
        }

        val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
        val += "rotate(".concat(transform.rotate, "deg) ");
        return val;
    }

    var ALL_SPACE = {
        x: 0,
        y: 0,
        width: '100%',
        height: '100%'
    };

    function fillBlack(abstract) {
        var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (abstract.attributes && (abstract.attributes.fill || force)) {
            abstract.attributes.fill = 'black';
        }

        return abstract;
    }

    function deGroup(abstract) {
        if (abstract.tag === 'g') {
            return abstract.children;
        } else {
            return [abstract];
        }
    }

    function makeIconMasking(_ref) {
        var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            mask = _ref.mask,
            transform = _ref.transform;
        var mainWidth = main.width,
            mainPath = main.icon;
        var maskWidth = mask.width,
            maskPath = mask.icon;
        var trans = transformForSvg({
            transform: transform,
            containerWidth: maskWidth,
            iconWidth: mainWidth
        });
        var maskRect = {
            tag: 'rect',
            attributes: _objectSpread({}, ALL_SPACE, {
                fill: 'white'
            })
        };
        var maskInnerGroupChildrenMixin = mainPath.children ? {
            children: mainPath.children.map(fillBlack)
        } : {};
        var maskInnerGroup = {
            tag: 'g',
            attributes: _objectSpread({}, trans.inner),
            children: [fillBlack(_objectSpread({
                tag: mainPath.tag,
                attributes: _objectSpread({}, mainPath.attributes, trans.path)
            }, maskInnerGroupChildrenMixin))]
        };
        var maskOuterGroup = {
            tag: 'g',
            attributes: _objectSpread({}, trans.outer),
            children: [maskInnerGroup]
        };
        var maskId = "mask-".concat(nextUniqueId());
        var clipId = "clip-".concat(nextUniqueId());
        var maskTag = {
            tag: 'mask',
            attributes: _objectSpread({}, ALL_SPACE, {
                id: maskId,
                maskUnits: 'userSpaceOnUse',
                maskContentUnits: 'userSpaceOnUse'
            }),
            children: [maskRect, maskOuterGroup]
        };
        var defs = {
            tag: 'defs',
            children: [{
                tag: 'clipPath',
                attributes: {
                    id: clipId
                },
                children: deGroup(maskPath)
            }, maskTag]
        };
        children.push(defs, {
            tag: 'rect',
            attributes: _objectSpread({
                fill: 'currentColor',
                'clip-path': "url(#".concat(clipId, ")"),
                mask: "url(#".concat(maskId, ")")
            }, ALL_SPACE)
        });
        return {
            children: children,
            attributes: attributes
        };
    }

    function makeIconStandard(_ref) {
        var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            transform = _ref.transform,
            styles = _ref.styles;
        var styleString = joinStyles(styles);

        if (styleString.length > 0) {
            attributes['style'] = styleString;
        }

        if (transformIsMeaningful(transform)) {
            var trans = transformForSvg({
                transform: transform,
                containerWidth: main.width,
                iconWidth: main.width
            });
            children.push({
                tag: 'g',
                attributes: _objectSpread({}, trans.outer),
                children: [{
                    tag: 'g',
                    attributes: _objectSpread({}, trans.inner),
                    children: [{
                        tag: main.icon.tag,
                        children: main.icon.children,
                        attributes: _objectSpread({}, main.icon.attributes, trans.path)
                    }]
                }]
            });
        } else {
            children.push(main.icon);
        }

        return {
            children: children,
            attributes: attributes
        };
    }

    function asIcon(_ref) {
        var children = _ref.children,
            main = _ref.main,
            mask = _ref.mask,
            attributes = _ref.attributes,
            styles = _ref.styles,
            transform = _ref.transform;

        if (transformIsMeaningful(transform) && main.found && !mask.found) {
            var width = main.width,
                height = main.height;
            var offset = {
                x: width / height / 2,
                y: 0.5
            };
            attributes['style'] = joinStyles(_objectSpread({}, styles, {
                'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
            }));
        }

        return [{
            tag: 'svg',
            attributes: attributes,
            children: children
        }];
    }

    function asSymbol(_ref) {
        var prefix = _ref.prefix,
            iconName = _ref.iconName,
            children = _ref.children,
            attributes = _ref.attributes,
            symbol = _ref.symbol;
        var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
        return [{
            tag: 'svg',
            attributes: {
                style: 'display: none;'
            },
            children: [{
                tag: 'symbol',
                attributes: _objectSpread({}, attributes, {
                    id: id
                }),
                children: children
            }]
        }];
    }

    function makeInlineSvgAbstract(params) {
        var _params$icons = params.icons,
            main = _params$icons.main,
            mask = _params$icons.mask,
            prefix = params.prefix,
            iconName = params.iconName,
            transform = params.transform,
            symbol = params.symbol,
            title = params.title,
            extra = params.extra,
            _params$watchable = params.watchable,
            watchable = _params$watchable === void 0 ? false : _params$watchable;

        var _ref = mask.found ? mask : main,
            width = _ref.width,
            height = _ref.height;

        var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
        var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function(c) {
            return extra.classes.indexOf(c) === -1;
        }).concat(extra.classes).join(' ');
        var content = {
            children: [],
            attributes: _objectSpread({}, extra.attributes, {
                'data-prefix': prefix,
                'data-icon': iconName,
                'class': attrClass,
                'role': extra.attributes.role || 'img',
                'xmlns': 'http://www.w3.org/2000/svg',
                'viewBox': "0 0 ".concat(width, " ").concat(height)
            })
        };

        if (watchable) {
            content.attributes[DATA_FA_I2SVG] = '';
        }

        if (title) content.children.push({
            tag: 'title',
            attributes: {
                id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
            },
            children: [title]
        });

        var args = _objectSpread({}, content, {
            prefix: prefix,
            iconName: iconName,
            main: main,
            mask: mask,
            transform: transform,
            symbol: symbol,
            styles: extra.styles
        });

        var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
            children = _ref2.children,
            attributes = _ref2.attributes;

        args.children = children;
        args.attributes = attributes;

        if (symbol) {
            return asSymbol(args);
        } else {
            return asIcon(args);
        }
    }

    function makeLayersTextAbstract(params) {
        var content = params.content,
            width = params.width,
            height = params.height,
            transform = params.transform,
            title = params.title,
            extra = params.extra,
            _params$watchable2 = params.watchable,
            watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

        var attributes = _objectSpread({}, extra.attributes, title ? {
            'title': title
        } : {}, {
            'class': extra.classes.join(' ')
        });

        if (watchable) {
            attributes[DATA_FA_I2SVG] = '';
        }

        var styles = _objectSpread({}, extra.styles);

        if (transformIsMeaningful(transform)) {
            styles['transform'] = transformForCss({
                transform: transform,
                startCentered: true,
                width: width,
                height: height
            });
            styles['-webkit-transform'] = styles['transform'];
        }

        var styleString = joinStyles(styles);

        if (styleString.length > 0) {
            attributes['style'] = styleString;
        }

        var val = [];
        val.push({
            tag: 'span',
            attributes: attributes,
            children: [content]
        });

        if (title) {
            val.push({
                tag: 'span',
                attributes: {
                    class: 'sr-only'
                },
                children: [title]
            });
        }

        return val;
    }

    function makeLayersCounterAbstract(params) {
        var content = params.content,
            title = params.title,
            extra = params.extra;

        var attributes = _objectSpread({}, extra.attributes, title ? {
            'title': title
        } : {}, {
            'class': extra.classes.join(' ')
        });

        var styleString = joinStyles(extra.styles);

        if (styleString.length > 0) {
            attributes['style'] = styleString;
        }

        var val = [];
        val.push({
            tag: 'span',
            attributes: attributes,
            children: [content]
        });

        if (title) {
            val.push({
                tag: 'span',
                attributes: {
                    class: 'sr-only'
                },
                children: [title]
            });
        }

        return val;
    }

    var noop$1 = function noop() {};

    var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
        mark: noop$1,
        measure: noop$1
    };
    var preamble = "FA \"5.12.0\"";

    var begin = function begin(name) {
        p.mark("".concat(preamble, " ").concat(name, " begins"));
        return function() {
            return end(name);
        };
    };

    var end = function end(name) {
        p.mark("".concat(preamble, " ").concat(name, " ends"));
        p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
    };

    var perf = {
        begin: begin,
        end: end
    };

    /**
     * Internal helper to bind a function known to have 4 arguments
     * to a given context.
     */

    var bindInternal4 = function bindInternal4(func, thisContext) {
        return function(a, b, c, d) {
            return func.call(thisContext, a, b, c, d);
        };
    };

    /**
     * # Reduce
     *
     * A fast object `.reduce()` implementation.
     *
     * @param  {Object}   subject      The object to reduce over.
     * @param  {Function} fn           The reducer function.
     * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
     * @param  {Object}   thisContext  The context for the reducer.
     * @return {mixed}                 The final result.
     */


    var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
        var keys = Object.keys(subject),
            length = keys.length,
            iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
            i,
            key,
            result;

        if (initialValue === undefined) {
            i = 1;
            result = subject[keys[0]];
        } else {
            i = 0;
            result = initialValue;
        }

        for (; i < length; i++) {
            key = keys[i];
            result = iterator(result, subject[key], key, subject);
        }

        return result;
    };

    function toHex(unicode) {
        var result = '';

        for (var i = 0; i < unicode.length; i++) {
            var hex = unicode.charCodeAt(i).toString(16);
            result += ('000' + hex).slice(-4);
        }

        return result;
    }

    function defineIcons(prefix, icons) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _params$skipHooks = params.skipHooks,
            skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
        var normalized = Object.keys(icons).reduce(function(acc, iconName) {
            var icon = icons[iconName];
            var expanded = !!icon.icon;

            if (expanded) {
                acc[icon.iconName] = icon.icon;
            } else {
                acc[iconName] = icon;
            }

            return acc;
        }, {});

        if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
            namespace.hooks.addPack(prefix, normalized);
        } else {
            namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
        }
        /**
         * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
         * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
         * for `fas` so we'll easy the upgrade process for our users by automatically defining
         * this as well.
         */


        if (prefix === 'fas') {
            defineIcons('fa', icons);
        }
    }

    var styles = namespace.styles,
        shims = namespace.shims;
    var _byUnicode = {};
    var _byLigature = {};
    var _byOldName = {};
    var build = function build() {
        var lookup = function lookup(reducer) {
            return reduce(styles, function(o, style, prefix) {
                o[prefix] = reduce(style, reducer, {});
                return o;
            }, {});
        };

        _byUnicode = lookup(function(acc, icon, iconName) {
            if (icon[3]) {
                acc[icon[3]] = iconName;
            }

            return acc;
        });
        _byLigature = lookup(function(acc, icon, iconName) {
            var ligatures = icon[2];
            acc[iconName] = iconName;
            ligatures.forEach(function(ligature) {
                acc[ligature] = iconName;
            });
            return acc;
        });
        var hasRegular = 'far' in styles;
        _byOldName = reduce(shims, function(acc, shim) {
            var oldName = shim[0];
            var prefix = shim[1];
            var iconName = shim[2];

            if (prefix === 'far' && !hasRegular) {
                prefix = 'fas';
            }

            acc[oldName] = {
                prefix: prefix,
                iconName: iconName
            };
            return acc;
        }, {});
    };
    build();

    function byUnicode(prefix, unicode) {
        return (_byUnicode[prefix] || {})[unicode];
    }

    function byLigature(prefix, ligature) {
        return (_byLigature[prefix] || {})[ligature];
    }

    function byOldName(name) {
        return _byOldName[name] || {
            prefix: null,
            iconName: null
        };
    }

    var styles$1 = namespace.styles;
    var emptyCanonicalIcon = function emptyCanonicalIcon() {
        return {
            prefix: null,
            iconName: null,
            rest: []
        };
    };

    function getCanonicalIcon(values) {
        return values.reduce(function(acc, cls) {
            var iconName = getIconName(config.familyPrefix, cls);

            if (styles$1[cls]) {
                acc.prefix = cls;
            } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
                acc.prefix = cls;
            } else if (iconName) {
                var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
                acc.iconName = shim.iconName || iconName;
                acc.prefix = shim.prefix || acc.prefix;
            } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
                acc.rest.push(cls);
            }

            return acc;
        }, emptyCanonicalIcon());
    }

    function iconFromMapping(mapping, prefix, iconName) {
        if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
            return {
                prefix: prefix,
                iconName: iconName,
                icon: mapping[prefix][iconName]
            };
        }
    }

    function toHtml(abstractNodes) {
        var tag = abstractNodes.tag,
            _abstractNodes$attrib = abstractNodes.attributes,
            attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
            _abstractNodes$childr = abstractNodes.children,
            children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

        if (typeof abstractNodes === 'string') {
            return htmlEscape(abstractNodes);
        } else {
            return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
        }
    }

    var noop$2 = function noop() {};

    function isWatched(node) {
        var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
        return typeof i2svg === 'string';
    }

    function getMutator() {
        if (config.autoReplaceSvg === true) {
            return mutators.replace;
        }

        var mutator = mutators[config.autoReplaceSvg];
        return mutator || mutators.replace;
    }

    var mutators = {
        replace: function replace(mutation) {
            var node = mutation[0];
            var abstract = mutation[1];
            var newOuterHTML = abstract.map(function(a) {
                return toHtml(a);
            }).join('\n');

            if (node.parentNode && node.outerHTML) {
                node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
            } else if (node.parentNode) {
                var newNode = document.createElement('span');
                node.parentNode.replaceChild(newNode, node);
                newNode.outerHTML = newOuterHTML;
            }
        },
        nest: function nest(mutation) {
            var node = mutation[0];
            var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
            // Short-circuit to the standard replacement

            if (~classArray(node).indexOf(config.replacementClass)) {
                return mutators.replace(mutation);
            }

            var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
            delete abstract[0].attributes.style;
            delete abstract[0].attributes.id;
            var splitClasses = abstract[0].attributes.class.split(' ').reduce(function(acc, cls) {
                if (cls === config.replacementClass || cls.match(forSvg)) {
                    acc.toSvg.push(cls);
                } else {
                    acc.toNode.push(cls);
                }

                return acc;
            }, {
                toNode: [],
                toSvg: []
            });
            abstract[0].attributes.class = splitClasses.toSvg.join(' ');
            var newInnerHTML = abstract.map(function(a) {
                return toHtml(a);
            }).join('\n');
            node.setAttribute('class', splitClasses.toNode.join(' '));
            node.setAttribute(DATA_FA_I2SVG, '');
            node.innerHTML = newInnerHTML;
        }
    };

    function performOperationSync(op) {
        op();
    }

    function perform(mutations, callback) {
        var callbackFunction = typeof callback === 'function' ? callback : noop$2;

        if (mutations.length === 0) {
            callbackFunction();
        } else {
            var frame = performOperationSync;

            if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
                frame = WINDOW.requestAnimationFrame || performOperationSync;
            }

            frame(function() {
                var mutator = getMutator();
                var mark = perf.begin('mutate');
                mutations.map(mutator);
                mark();
                callbackFunction();
            });
        }
    }
    var disabled = false;

    function disableObservation() {
        disabled = true;
    }

    function enableObservation() {
        disabled = false;
    }
    var mo = null;

    function observe(options) {
        if (!MUTATION_OBSERVER) {
            return;
        }

        if (!config.observeMutations) {
            return;
        }

        var treeCallback = options.treeCallback,
            nodeCallback = options.nodeCallback,
            pseudoElementsCallback = options.pseudoElementsCallback,
            _options$observeMutat = options.observeMutationsRoot,
            observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
        mo = new MUTATION_OBSERVER(function(objects) {
            if (disabled) return;
            toArray(objects).forEach(function(mutationRecord) {
                if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
                    if (config.searchPseudoElements) {
                        pseudoElementsCallback(mutationRecord.target);
                    }

                    treeCallback(mutationRecord.target);
                }

                if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
                    pseudoElementsCallback(mutationRecord.target.parentNode);
                }

                if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
                    if (mutationRecord.attributeName === 'class') {
                        var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                            prefix = _getCanonicalIcon.prefix,
                            iconName = _getCanonicalIcon.iconName;

                        if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
                        if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
                    } else {
                        nodeCallback(mutationRecord.target);
                    }
                }
            });
        });
        if (!IS_DOM) return;
        mo.observe(observeMutationsRoot, {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true
        });
    }

    function disconnect() {
        if (!mo) return;
        mo.disconnect();
    }

    function styleParser(node) {
        var style = node.getAttribute('style');
        var val = [];

        if (style) {
            val = style.split(';').reduce(function(acc, style) {
                var styles = style.split(':');
                var prop = styles[0];
                var value = styles.slice(1);

                if (prop && value.length > 0) {
                    acc[prop] = value.join(':').trim();
                }

                return acc;
            }, {});
        }

        return val;
    }

    function classParser(node) {
        var existingPrefix = node.getAttribute('data-prefix');
        var existingIconName = node.getAttribute('data-icon');
        var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
        var val = getCanonicalIcon(classArray(node));

        if (existingPrefix && existingIconName) {
            val.prefix = existingPrefix;
            val.iconName = existingIconName;
        }

        if (val.prefix && innerText.length > 1) {
            val.iconName = byLigature(val.prefix, node.innerText);
        } else if (val.prefix && innerText.length === 1) {
            val.iconName = byUnicode(val.prefix, toHex(node.innerText));
        }

        return val;
    }

    var parseTransformString = function parseTransformString(transformString) {
        var transform = {
            size: 16,
            x: 0,
            y: 0,
            flipX: false,
            flipY: false,
            rotate: 0
        };

        if (!transformString) {
            return transform;
        } else {
            return transformString.toLowerCase().split(' ').reduce(function(acc, n) {
                var parts = n.toLowerCase().split('-');
                var first = parts[0];
                var rest = parts.slice(1).join('-');

                if (first && rest === 'h') {
                    acc.flipX = true;
                    return acc;
                }

                if (first && rest === 'v') {
                    acc.flipY = true;
                    return acc;
                }

                rest = parseFloat(rest);

                if (isNaN(rest)) {
                    return acc;
                }

                switch (first) {
                    case 'grow':
                        acc.size = acc.size + rest;
                        break;

                    case 'shrink':
                        acc.size = acc.size - rest;
                        break;

                    case 'left':
                        acc.x = acc.x - rest;
                        break;

                    case 'right':
                        acc.x = acc.x + rest;
                        break;

                    case 'up':
                        acc.y = acc.y - rest;
                        break;

                    case 'down':
                        acc.y = acc.y + rest;
                        break;

                    case 'rotate':
                        acc.rotate = acc.rotate + rest;
                        break;
                }

                return acc;
            }, transform);
        }
    };

    function transformParser(node) {
        return parseTransformString(node.getAttribute('data-fa-transform'));
    }

    function symbolParser(node) {
        var symbol = node.getAttribute('data-fa-symbol');
        return symbol === null ? false : symbol === '' ? true : symbol;
    }

    function attributesParser(node) {
        var extraAttributes = toArray(node.attributes).reduce(function(acc, attr) {
            if (acc.name !== 'class' && acc.name !== 'style') {
                acc[attr.name] = attr.value;
            }

            return acc;
        }, {});
        var title = node.getAttribute('title');

        if (config.autoA11y) {
            if (title) {
                extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
            } else {
                extraAttributes['aria-hidden'] = 'true';
                extraAttributes['focusable'] = 'false';
            }
        }

        return extraAttributes;
    }

    function maskParser(node) {
        var mask = node.getAttribute('data-fa-mask');

        if (!mask) {
            return emptyCanonicalIcon();
        } else {
            return getCanonicalIcon(mask.split(' ').map(function(i) {
                return i.trim();
            }));
        }
    }

    function blankMeta() {
        return {
            iconName: null,
            title: null,
            prefix: null,
            transform: meaninglessTransform,
            symbol: false,
            mask: null,
            extra: {
                classes: [],
                styles: {},
                attributes: {}
            }
        };
    }

    function parseMeta(node) {
        var _classParser = classParser(node),
            iconName = _classParser.iconName,
            prefix = _classParser.prefix,
            extraClasses = _classParser.rest;

        var extraStyles = styleParser(node);
        var transform = transformParser(node);
        var symbol = symbolParser(node);
        var extraAttributes = attributesParser(node);
        var mask = maskParser(node);
        return {
            iconName: iconName,
            title: node.getAttribute('title'),
            prefix: prefix,
            transform: transform,
            symbol: symbol,
            mask: mask,
            extra: {
                classes: extraClasses,
                styles: extraStyles,
                attributes: extraAttributes
            }
        };
    }

    function MissingIcon(error) {
        this.name = 'MissingIcon';
        this.message = error || 'Icon unavailable';
        this.stack = new Error().stack;
    }
    MissingIcon.prototype = Object.create(Error.prototype);
    MissingIcon.prototype.constructor = MissingIcon;

    var FILL = {
        fill: 'currentColor'
    };
    var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
    };
    var RING = {
        tag: 'path',
        attributes: _objectSpread({}, FILL, {
            d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
    };

    var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
        attributeName: 'opacity'
    });

    var DOT = {
        tag: 'circle',
        attributes: _objectSpread({}, FILL, {
            cx: '256',
            cy: '364',
            r: '28'
        }),
        children: [{
            tag: 'animate',
            attributes: _objectSpread({}, ANIMATION_BASE, {
                attributeName: 'r',
                values: '28;14;28;28;14;28;'
            })
        }, {
            tag: 'animate',
            attributes: _objectSpread({}, OPACITY_ANIMATE, {
                values: '1;0;1;1;0;1;'
            })
        }]
    };
    var QUESTION = {
        tag: 'path',
        attributes: _objectSpread({}, FILL, {
            opacity: '1',
            d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: [{
            tag: 'animate',
            attributes: _objectSpread({}, OPACITY_ANIMATE, {
                values: '1;0;0;0;0;1;'
            })
        }]
    };
    var EXCLAMATION = {
        tag: 'path',
        attributes: _objectSpread({}, FILL, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
        }),
        children: [{
            tag: 'animate',
            attributes: _objectSpread({}, OPACITY_ANIMATE, {
                values: '0;0;1;1;0;0;'
            })
        }]
    };
    var missing = {
        tag: 'g',
        children: [RING, DOT, QUESTION, EXCLAMATION]
    };

    var styles$2 = namespace.styles;

    function asFoundIcon(icon) {
        var width = icon[0];
        var height = icon[1];

        var _icon$slice = icon.slice(4),
            _icon$slice2 = _slicedToArray(_icon$slice, 1),
            vectorData = _icon$slice2[0];

        var element = null;

        if (Array.isArray(vectorData)) {
            element = {
                tag: 'g',
                attributes: {
                    class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
                },
                children: [{
                    tag: 'path',
                    attributes: {
                        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
                        fill: 'currentColor',
                        d: vectorData[0]
                    }
                }, {
                    tag: 'path',
                    attributes: {
                        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
                        fill: 'currentColor',
                        d: vectorData[1]
                    }
                }]
            };
        } else {
            element = {
                tag: 'path',
                attributes: {
                    fill: 'currentColor',
                    d: vectorData
                }
            };
        }

        return {
            found: true,
            width: width,
            height: height,
            icon: element
        };
    }

    function findIcon(iconName, prefix) {
        return new picked(function(resolve, reject) {
            var val = {
                found: false,
                width: 512,
                height: 512,
                icon: missing
            };

            if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
                var icon = styles$2[prefix][iconName];
                return resolve(asFoundIcon(icon));
            }

            var headers = {};

            if (_typeof(WINDOW.FontAwesomeKitConfig) === 'object' && typeof window.FontAwesomeKitConfig.token === 'string') {
                headers['fa-kit-token'] = WINDOW.FontAwesomeKitConfig.token;
            }

            if (iconName && prefix && !config.showMissingIcons) {
                reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
            } else {
                resolve(val);
            }
        });
    }

    var styles$3 = namespace.styles;

    function generateSvgReplacementMutation(node, nodeMeta) {
        var iconName = nodeMeta.iconName,
            title = nodeMeta.title,
            prefix = nodeMeta.prefix,
            transform = nodeMeta.transform,
            symbol = nodeMeta.symbol,
            mask = nodeMeta.mask,
            extra = nodeMeta.extra;
        return new picked(function(resolve, reject) {
            picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function(_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    main = _ref2[0],
                    mask = _ref2[1];

                resolve([node, makeInlineSvgAbstract({
                    icons: {
                        main: main,
                        mask: mask
                    },
                    prefix: prefix,
                    iconName: iconName,
                    transform: transform,
                    symbol: symbol,
                    mask: mask,
                    title: title,
                    extra: extra,
                    watchable: true
                })]);
            });
        });
    }

    function generateLayersText(node, nodeMeta) {
        var title = nodeMeta.title,
            transform = nodeMeta.transform,
            extra = nodeMeta.extra;
        var width = null;
        var height = null;

        if (IS_IE) {
            var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
            var boundingClientRect = node.getBoundingClientRect();
            width = boundingClientRect.width / computedFontSize;
            height = boundingClientRect.height / computedFontSize;
        }

        if (config.autoA11y && !title) {
            extra.attributes['aria-hidden'] = 'true';
        }

        return picked.resolve([node, makeLayersTextAbstract({
            content: node.innerHTML,
            width: width,
            height: height,
            transform: transform,
            title: title,
            extra: extra,
            watchable: true
        })]);
    }

    function generateMutation(node) {
        var nodeMeta = parseMeta(node);

        if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
            return generateLayersText(node, nodeMeta);
        } else {
            return generateSvgReplacementMutation(node, nodeMeta);
        }
    }

    function onTree(root) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!IS_DOM) return;
        var htmlClassList = DOCUMENT.documentElement.classList;

        var hclAdd = function hclAdd(suffix) {
            return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
        };

        var hclRemove = function hclRemove(suffix) {
            return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
        };

        var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
        var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function(p) {
            return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
        })).join(', ');

        if (prefixesDomQuery.length === 0) {
            return;
        }

        var candidates = [];

        try {
            candidates = toArray(root.querySelectorAll(prefixesDomQuery));
        } catch (e) { // noop
        }

        if (candidates.length > 0) {
            hclAdd('pending');
            hclRemove('complete');
        } else {
            return;
        }

        var mark = perf.begin('onTree');
        var mutations = candidates.reduce(function(acc, node) {
            try {
                var mutation = generateMutation(node);

                if (mutation) {
                    acc.push(mutation);
                }
            } catch (e) {
                if (!PRODUCTION) {
                    if (e instanceof MissingIcon) {
                        console.error(e);
                    }
                }
            }

            return acc;
        }, []);
        return new picked(function(resolve, reject) {
            picked.all(mutations).then(function(resolvedMutations) {
                perform(resolvedMutations, function() {
                    hclAdd('active');
                    hclAdd('complete');
                    hclRemove('pending');
                    if (typeof callback === 'function') callback();
                    mark();
                    resolve();
                });
            }).catch(function() {
                mark();
                reject();
            });
        });
    }

    function onNode(node) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        generateMutation(node).then(function(mutation) {
            if (mutation) {
                perform([mutation], callback);
            }
        });
    }

    function replaceForPosition(node, position) {
        var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
        return new picked(function(resolve, reject) {
            if (node.getAttribute(pendingAttribute) !== null) {
                // This node is already being processed
                return resolve();
            }

            var children = toArray(node.children);
            var alreadyProcessedPseudoElement = children.filter(function(c) {
                return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
            })[0];
            var styles = WINDOW.getComputedStyle(node, position);
            var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
            var fontWeight = styles.getPropertyValue('font-weight');

            if (alreadyProcessedPseudoElement && !fontFamily) {
                // If we've already processed it but the current computed style does not result in a font-family,
                // that probably means that a class name that was previously present to make the icon has been
                // removed. So we now should delete the icon.
                node.removeChild(alreadyProcessedPseudoElement);
                return resolve();
            } else if (fontFamily) {
                var content = styles.getPropertyValue('content');
                var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
                var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
                var iconName = byUnicode(prefix, hexValue);
                var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
                // already done so with the same prefix and iconName

                if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
                    node.setAttribute(pendingAttribute, iconIdentifier);

                    if (alreadyProcessedPseudoElement) {
                        // Delete the old one, since we're replacing it with a new one
                        node.removeChild(alreadyProcessedPseudoElement);
                    }

                    var meta = blankMeta();
                    var extra = meta.extra;
                    extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
                    findIcon(iconName, prefix).then(function(main) {
                        var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
                            icons: {
                                main: main,
                                mask: emptyCanonicalIcon()
                            },
                            prefix: prefix,
                            iconName: iconIdentifier,
                            extra: extra,
                            watchable: true
                        }));
                        var element = DOCUMENT.createElement('svg');

                        if (position === ':before') {
                            node.insertBefore(element, node.firstChild);
                        } else {
                            node.appendChild(element);
                        }

                        element.outerHTML = abstract.map(function(a) {
                            return toHtml(a);
                        }).join('\n');
                        node.removeAttribute(pendingAttribute);
                        resolve();
                    }).catch(reject);
                } else {
                    resolve();
                }
            } else {
                resolve();
            }
        });
    }

    function replace(node) {
        return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
    }

    function processable(node) {
        return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
    }

    function searchPseudoElements(root) {
        if (!IS_DOM) return;
        return new picked(function(resolve, reject) {
            var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
            var end = perf.begin('searchPseudoElements');
            disableObservation();
            picked.all(operations).then(function() {
                end();
                enableObservation();
                resolve();
            }).catch(function() {
                end();
                enableObservation();
                reject();
            });
        });
    }

    var baseStyles = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

    function css() {
        var dfp = DEFAULT_FAMILY_PREFIX;
        var drc = DEFAULT_REPLACEMENT_CLASS;
        var fp = config.familyPrefix;
        var rc = config.replacementClass;
        var s = baseStyles;

        if (fp !== dfp || rc !== drc) {
            var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
            var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
            var rPatt = new RegExp("\\.".concat(drc), 'g');
            s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
        }

        return s;
    }

    var Library =
        /*#__PURE__*/
        function() {
            function Library() {
                _classCallCheck(this, Library);

                this.definitions = {};
            }

            _createClass(Library, [{
                key: "add",
                value: function add() {
                    var _this = this;

                    for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
                        definitions[_key] = arguments[_key];
                    }

                    var additions = definitions.reduce(this._pullDefinitions, {});
                    Object.keys(additions).forEach(function(key) {
                        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
                        defineIcons(key, additions[key]);
                        build();
                    });
                }
            }, {
                key: "reset",
                value: function reset() {
                    this.definitions = {};
                }
            }, {
                key: "_pullDefinitions",
                value: function _pullDefinitions(additions, definition) {
                    var normalized = definition.prefix && definition.iconName && definition.icon ? {
                        0: definition
                    } : definition;
                    Object.keys(normalized).map(function(key) {
                        var _normalized$key = normalized[key],
                            prefix = _normalized$key.prefix,
                            iconName = _normalized$key.iconName,
                            icon = _normalized$key.icon;
                        if (!additions[prefix]) additions[prefix] = {};
                        additions[prefix][iconName] = icon;
                    });
                    return additions;
                }
            }]);

            return Library;
        }();

    function ensureCss() {
        if (config.autoAddCss && !_cssInserted) {
            insertCss(css());

            _cssInserted = true;
        }
    }

    function apiObject(val, abstractCreator) {
        Object.defineProperty(val, 'abstract', {
            get: abstractCreator
        });
        Object.defineProperty(val, 'html', {
            get: function get() {
                return val.abstract.map(function(a) {
                    return toHtml(a);
                });
            }
        });
        Object.defineProperty(val, 'node', {
            get: function get() {
                if (!IS_DOM) return;
                var container = DOCUMENT.createElement('div');
                container.innerHTML = val.html;
                return container.children;
            }
        });
        return val;
    }

    function findIconDefinition(iconLookup) {
        var _iconLookup$prefix = iconLookup.prefix,
            prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
            iconName = iconLookup.iconName;
        if (!iconName) return;
        return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
    }

    function resolveIcons(next) {
        return function(maybeIconDefinition) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
            var mask = params.mask;

            if (mask) {
                mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
            }

            return next(iconDefinition, _objectSpread({}, params, {
                mask: mask
            }));
        };
    }

    var library = new Library();
    var noAuto = function noAuto() {
        config.autoReplaceSvg = false;
        config.observeMutations = false;
        disconnect();
    };
    var _cssInserted = false;
    var dom = {
        i2svg: function i2svg() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (IS_DOM) {
                ensureCss();
                var _params$node = params.node,
                    node = _params$node === void 0 ? DOCUMENT : _params$node,
                    _params$callback = params.callback,
                    callback = _params$callback === void 0 ? function() {} : _params$callback;

                if (config.searchPseudoElements) {
                    searchPseudoElements(node);
                }

                return onTree(node, callback);
            } else {
                return picked.reject('Operation requires a DOM of some kind.');
            }
        },
        css: css,
        insertCss: function insertCss$$1() {
            if (!_cssInserted) {
                insertCss(css());

                _cssInserted = true;
            }
        },
        watch: function watch() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
                observeMutationsRoot = params.observeMutationsRoot;

            if (config.autoReplaceSvg === false) {
                config.autoReplaceSvg = true;
            }

            config.observeMutations = true;
            domready(function() {
                autoReplace({
                    autoReplaceSvgRoot: autoReplaceSvgRoot
                });
                observe({
                    treeCallback: onTree,
                    nodeCallback: onNode,
                    pseudoElementsCallback: searchPseudoElements,
                    observeMutationsRoot: observeMutationsRoot
                });
            });
        }
    };
    var parse = {
        transform: function transform(transformString) {
            return parseTransformString(transformString);
        }
    };
    var icon = resolveIcons(function(iconDefinition) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$symbol = params.symbol,
            symbol = _params$symbol === void 0 ? false : _params$symbol,
            _params$mask = params.mask,
            mask = _params$mask === void 0 ? null : _params$mask,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        if (!iconDefinition) return;
        var prefix = iconDefinition.prefix,
            iconName = iconDefinition.iconName,
            icon = iconDefinition.icon;
        return apiObject(_objectSpread({
            type: 'icon'
        }, iconDefinition), function() {
            ensureCss();

            if (config.autoA11y) {
                if (title) {
                    attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
                } else {
                    attributes['aria-hidden'] = 'true';
                    attributes['focusable'] = 'false';
                }
            }

            return makeInlineSvgAbstract({
                icons: {
                    main: asFoundIcon(icon),
                    mask: mask ? asFoundIcon(mask.icon) : {
                        found: false,
                        width: null,
                        height: null,
                        icon: {}
                    }
                },
                prefix: prefix,
                iconName: iconName,
                transform: _objectSpread({}, meaninglessTransform, transform),
                symbol: symbol,
                title: title,
                extra: {
                    attributes: attributes,
                    styles: styles,
                    classes: classes
                }
            });
        });
    });
    var text = function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform2 = params.transform,
            transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
            _params$title2 = params.title,
            title = _params$title2 === void 0 ? null : _params$title2,
            _params$classes2 = params.classes,
            classes = _params$classes2 === void 0 ? [] : _params$classes2,
            _params$attributes2 = params.attributes,
            attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
            _params$styles2 = params.styles,
            styles = _params$styles2 === void 0 ? {} : _params$styles2;
        return apiObject({
            type: 'text',
            content: content
        }, function() {
            ensureCss();
            return makeLayersTextAbstract({
                content: content,
                transform: _objectSpread({}, meaninglessTransform, transform),
                title: title,
                extra: {
                    attributes: attributes,
                    styles: styles,
                    classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
                }
            });
        });
    };
    var counter = function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title3 = params.title,
            title = _params$title3 === void 0 ? null : _params$title3,
            _params$classes3 = params.classes,
            classes = _params$classes3 === void 0 ? [] : _params$classes3,
            _params$attributes3 = params.attributes,
            attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
            _params$styles3 = params.styles,
            styles = _params$styles3 === void 0 ? {} : _params$styles3;
        return apiObject({
            type: 'counter',
            content: content
        }, function() {
            ensureCss();
            return makeLayersCounterAbstract({
                content: content.toString(),
                title: title,
                extra: {
                    attributes: attributes,
                    styles: styles,
                    classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
                }
            });
        });
    };
    var layer = function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes4 = params.classes,
            classes = _params$classes4 === void 0 ? [] : _params$classes4;
        return apiObject({
            type: 'layer'
        }, function() {
            ensureCss();
            var children = [];
            assembler(function(args) {
                Array.isArray(args) ? args.map(function(a) {
                    children = children.concat(a.abstract);
                }) : children = children.concat(args.abstract);
            });
            return [{
                tag: 'span',
                attributes: {
                    class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
                },
                children: children
            }];
        });
    };
    var api = {
        noAuto: noAuto,
        config: config,
        dom: dom,
        library: library,
        parse: parse,
        findIconDefinition: findIconDefinition,
        icon: icon,
        text: text,
        counter: counter,
        layer: layer,
        toHtml: toHtml
    };

    var autoReplace = function autoReplace() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _params$autoReplaceSv = params.autoReplaceSvgRoot,
            autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
        if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
            node: autoReplaceSvgRoot
        });
    };

    function bootstrap() {
        if (IS_BROWSER) {
            if (!WINDOW.FontAwesome) {
                WINDOW.FontAwesome = api;
            }

            domready(function() {
                autoReplace();
                observe({
                    treeCallback: onTree,
                    nodeCallback: onNode,
                    pseudoElementsCallback: searchPseudoElements
                });
            });
        }

        namespace.hooks = _objectSpread({}, namespace.hooks, {
            addPack: function addPack(prefix, icons) {
                namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, icons);
                build();
                autoReplace();
            },
            addShims: function addShims(shims) {
                var _namespace$shims;

                (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));

                build();
                autoReplace();
            }
        });
    }

    bunker(bootstrap);

}());


(function() {
    'use strict';

    var _WINDOW = {};
    var _DOCUMENT = {};

    try {
        if (typeof window !== 'undefined') _WINDOW = window;
        if (typeof document !== 'undefined') _DOCUMENT = document;
    } catch (e) {}

    var _ref = _WINDOW.navigator || {},
        _ref$userAgent = _ref.userAgent,
        userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

    var WINDOW = _WINDOW;
    var DOCUMENT = _DOCUMENT;
    var IS_BROWSER = !!WINDOW.document;
    var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
    var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

    var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
    var PRODUCTION = function() {
        try {
            return "production" === 'production';
        } catch (e) {
            return false;
        }
    }();

    function bunker(fn) {
        try {
            fn();
        } catch (e) {
            if (!PRODUCTION) {
                throw e;
            }
        }
    }

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

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
            }

            ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        }

        return target;
    }

    var w = WINDOW || {};
    if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
    var namespace = w[NAMESPACE_IDENTIFIER];

    function defineIcons(prefix, icons) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _params$skipHooks = params.skipHooks,
            skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
        var normalized = Object.keys(icons).reduce(function(acc, iconName) {
            var icon = icons[iconName];
            var expanded = !!icon.icon;

            if (expanded) {
                acc[icon.iconName] = icon.icon;
            } else {
                acc[iconName] = icon;
            }

            return acc;
        }, {});

        if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
            namespace.hooks.addPack(prefix, normalized);
        } else {
            namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
        }
               if (prefix === 'fas') {
            defineIcons('fa', icons);
        }
    }

    var icons = {
        "phone-alt": [512, 512, [], "f879", "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"],
        "telegram-plane": [448, 512, [], "f3fe", "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"],
        "user-alt": [512, 512, [], "f406", "M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"],
        "chevron-right": [320, 512, [], "f054", "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"],
        "cogs": [640, 512, [], "f085", ["M638.41 387a12.34 12.34 0 0 0-12.2-10.3h-16.5a86.33 86.33 0 0 0-15.9-27.4L602 335a12.42 12.42 0 0 0-2.8-15.7 110.5 110.5 0 0 0-32.1-18.6 12.36 12.36 0 0 0-15.1 5.4l-8.2 14.3a88.86 88.86 0 0 0-31.7 0l-8.2-14.3a12.36 12.36 0 0 0-15.1-5.4 111.83 111.83 0 0 0-32.1 18.6 12.3 12.3 0 0 0-2.8 15.7l8.2 14.3a86.33 86.33 0 0 0-15.9 27.4h-16.5a12.43 12.43 0 0 0-12.2 10.4 112.66 112.66 0 0 0 0 37.1 12.34 12.34 0 0 0 12.2 10.3h16.5a86.33 86.33 0 0 0 15.9 27.4l-8.2 14.3a12.42 12.42 0 0 0 2.8 15.7 110.5 110.5 0 0 0 32.1 18.6 12.36 12.36 0 0 0 15.1-5.4l8.2-14.3a88.86 88.86 0 0 0 31.7 0l8.2 14.3a12.36 12.36 0 0 0 15.1 5.4 111.83 111.83 0 0 0 32.1-18.6 12.3 12.3 0 0 0 2.8-15.7l-8.2-14.3a86.33 86.33 0 0 0 15.9-27.4h16.5a12.43 12.43 0 0 0 12.2-10.4 112.66 112.66 0 0 0 .01-37.1zm-136.8 44.9c-29.6-38.5 14.3-82.4 52.8-52.8 29.59 38.49-14.3 82.39-52.8 52.79zm136.8-343.8a12.34 12.34 0 0 0-12.2-10.3h-16.5a86.33 86.33 0 0 0-15.9-27.4l8.2-14.3a12.42 12.42 0 0 0-2.8-15.7 110.5 110.5 0 0 0-32.1-18.6A12.36 12.36 0 0 0 552 7.19l-8.2 14.3a88.86 88.86 0 0 0-31.7 0l-8.2-14.3a12.36 12.36 0 0 0-15.1-5.4 111.83 111.83 0 0 0-32.1 18.6 12.3 12.3 0 0 0-2.8 15.7l8.2 14.3a86.33 86.33 0 0 0-15.9 27.4h-16.5a12.43 12.43 0 0 0-12.2 10.4 112.66 112.66 0 0 0 0 37.1 12.34 12.34 0 0 0 12.2 10.3h16.5a86.33 86.33 0 0 0 15.9 27.4l-8.2 14.3a12.42 12.42 0 0 0 2.8 15.7 110.5 110.5 0 0 0 32.1 18.6 12.36 12.36 0 0 0 15.1-5.4l8.2-14.3a88.86 88.86 0 0 0 31.7 0l8.2 14.3a12.36 12.36 0 0 0 15.1 5.4 111.83 111.83 0 0 0 32.1-18.6 12.3 12.3 0 0 0 2.8-15.7l-8.2-14.3a86.33 86.33 0 0 0 15.9-27.4h16.5a12.43 12.43 0 0 0 12.2-10.4 112.66 112.66 0 0 0 .01-37.1zm-136.8 45c-29.6-38.5 14.3-82.5 52.8-52.8 29.59 38.49-14.3 82.39-52.8 52.79z", "M420 303.79L386.31 287a173.78 173.78 0 0 0 0-63.5l33.7-16.8c10.1-5.9 14-18.2 10-29.1-8.9-24.2-25.9-46.4-42.1-65.8a23.93 23.93 0 0 0-30.3-5.3l-29.1 16.8a173.66 173.66 0 0 0-54.9-31.7V58a24 24 0 0 0-20-23.6 228.06 228.06 0 0 0-76 .1A23.82 23.82 0 0 0 158 58v33.7a171.78 171.78 0 0 0-54.9 31.7L74 106.59a23.91 23.91 0 0 0-30.3 5.3c-16.2 19.4-33.3 41.6-42.2 65.8a23.84 23.84 0 0 0 10.5 29l33.3 16.9a173.24 173.24 0 0 0 0 63.4L12 303.79a24.13 24.13 0 0 0-10.5 29.1c8.9 24.1 26 46.3 42.2 65.7a23.93 23.93 0 0 0 30.3 5.3l29.1-16.7a173.66 173.66 0 0 0 54.9 31.7v33.6a24 24 0 0 0 20 23.6 224.88 224.88 0 0 0 75.9 0 23.93 23.93 0 0 0 19.7-23.6v-33.6a171.78 171.78 0 0 0 54.9-31.7l29.1 16.8a23.91 23.91 0 0 0 30.3-5.3c16.2-19.4 33.7-41.6 42.6-65.8a24 24 0 0 0-10.5-29.1zm-151.3 4.3c-77 59.2-164.9-28.7-105.7-105.7 77-59.2 164.91 28.7 105.71 105.7z"]],
        "shopping-cart": [576, 512, [], "f07a", ["M552 64H159.21l52.36 256h293.15a24 24 0 0 0 23.4-18.68l47.27-208a24 24 0 0 0-18.08-28.72A23.69 23.69 0 0 0 552 64z", "M218.12 352h268.42a24 24 0 0 1 23.4 29.32l-5.52 24.28a56 56 0 1 1-63.6 10.4H231.18a56 56 0 1 1-67.05-8.57L93.88 64H24A24 24 0 0 1 0 40V24A24 24 0 0 1 24 0h102.53A24 24 0 0 1 150 19.19z"]],
        "app-store-ios": [448, 512, [], "f370", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"],
        "circle": [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"],
        "youtube": [576, 512, [], "f167", "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"],
        "facebook-square": [448, 512, [], "f082", "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"],
        "twitter-square": [448, 512, [], "f081", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"],
        "link": [512, 512, [], "f0c1", "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"],
        "hashtag": [448, 512, [], "f292", "M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"],
        "map-marker-alt": [384, 512, [], "f3c5", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"],
        "file-invoice-dollar": [384, 512, [], "f571", "M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z"],
        "comment-alt-dots": [512, 512, [], "f4a3", "M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM128 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"],
        "bars": [448, 512, [], "f0c9", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
        "home": [576, 512, [], "f015", "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"],
        "info": [192, 512, [], "f129", "M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"],
        "blog": [512, 512, [], "f781", "M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"],
        "google-play": [512, 512, [], "f3ab", "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"],
        "tools": [512, 512, [], "f7d9", ["M193.8 227.7L18.74 402.76a64 64 0 0 0 90.5 90.5l148.88-148.88a75.36 75.36 0 0 1 6.58-45.78zM64 472a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm443.73-362.9a12 12 0 0 0-20.12-5.51L413.25 178l-67.88-11.31-11.31-67.93 74.36-74.36a12 12 0 0 0-5.66-20.16 143.92 143.92 0 0 0-136.58 37.93c-39.64 39.64-50.55 97.1-34.05 147.2l-4.43 4.43 70.9 70.9a74.25 74.25 0 0 1 85.4 13.9l7.21 7.21a141.74 141.74 0 0 0 78.61-40 143.94 143.94 0 0 0 37.91-136.71z", "M501.1 395.7a37.36 37.36 0 0 1 0 52.7l-52.7 52.7a37.18 37.18 0 0 1-52.58.12l-.12-.12L278.6 384c-23.1-23.1-27.5-57.6-13.9-85.4L158.1 192H96L0 64 64 0l128 96v62.1l106.6 106.6a74.25 74.25 0 0 1 85.4 13.9z"]],
        "trees": [640, 512, [], "f724", ["M224 440.46V416h-64v24.45l-30.29 48.4A16 16 0 0 0 144 512h96a16 16 0 0 0 14.31-23.16zm410.31-62L554.42 288h30.63a22.73 22.73 0 0 0 20.78-13 22 22 0 0 0-3.28-24l-78.13-91h28.89a22.69 22.69 0 0 0 20.86-13.61 22.27 22.27 0 0 0-4.24-24.08L459.66 4.84c-6-6.45-17.28-6.45-23.32 0L341.28 106.1c11.09 15.37 14 35.3 6.34 53a54.48 54.48 0 0 1-18.26 22.68l41.54 48.32a54.56 54.56 0 0 1-6.07 76.9q-2 1.68-4.1 3.18l41.62 47.15C411 367.11 415.69 371.46 416 384v56.45l-30.29 48.4A16 16 0 0 0 400 512h96a16 16 0 0 0 14.31-23.16L480 440.46V416h136.87a23.19 23.19 0 0 0 21-13.25 22.15 22.15 0 0 0-3.56-24.25z", "M381.86 402.76a23.19 23.19 0 0 1-21 13.25H23.13a23.17 23.17 0 0 1-21-13.25 22.09 22.09 0 0 1 3.56-24.26L85.58 288H55a22.72 22.72 0 0 1-20.83-13.08 22.06 22.06 0 0 1 3.27-24L115.58 160H86.69a22.67 22.67 0 0 1-20.87-13.6 22.25 22.25 0 0 1 4.24-24.08L180.34 4.84c6-6.45 17.32-6.45 23.32 0l110.27 117.47a22.27 22.27 0 0 1 4.24 24.08A22.69 22.69 0 0 1 297.31 160h-28.89l78.13 91a22 22 0 0 1 3.28 24 22.73 22.73 0 0 1-20.78 13h-30.63l79.88 90.5a22.12 22.12 0 0 1 3.56 24.26z"]],
        "hand-pointer": [448, 512, [], "f25a", ["M408 200a40 40 0 0 0-40 40h-8v-24a40 40 0 0 0-80 0v24h-8v-40a40 40 0 0 0-80 0v40h-8V40a40 40 0 0 0-80 0v276l-31.65-43.53a40 40 0 0 0-64.7 47.06l128 176A40 40 0 0 0 168 512h208a40 40 0 0 0 38.94-30.84l32-136A40.36 40.36 0 0 0 448 336v-96a40 40 0 0 0-40-40zM224 400a16 16 0 0 1-32 0v-64a16 16 0 0 1 32 0zm64 0a16 16 0 0 1-32 0v-64a16 16 0 0 1 32 0zm64 0a16 16 0 0 1-32 0v-64a16 16 0 0 1 32 0z", "M272 320a16 16 0 0 0-16 16v64a16 16 0 0 0 32 0v-64a16 16 0 0 0-16-16zm-64 0a16 16 0 0 0-16 16v64a16 16 0 0 0 32 0v-64a16 16 0 0 0-16-16zm128 0a16 16 0 0 0-16 16v64a16 16 0 0 0 32 0v-64a16 16 0 0 0-16-16z"]],
        "tractor-x": [640, 512, [], "f722", ["M528 336a88 88 0 1 0 88 88 88 88 0 0 0-88-88zm0 112a24 24 0 1 1 24-24 24 24 0 0 1-24 24zM330 292h-7.14A152.15 152.15 0 0 0 311 263.28l5.06-5.06a22 22 0 0 0 0-31.11L284.9 196a22 22 0 0 0-31.11 0l-5.06 5.06A152.15 152.15 0 0 0 220 189.15V182a22 22 0 0 0-22-22h-44a22 22 0 0 0-22 22v7.14a152.43 152.43 0 0 0-28.73 11.91l-5-5.05a22 22 0 0 0-31.11 0L36 227.1a22 22 0 0 0 0 31.11l5.06 5.06A152.15 152.15 0 0 0 29.15 292H22a22 22 0 0 0-22 22v44a22 22 0 0 0 22 22h7.14a152.43 152.43 0 0 0 11.91 28.73l-5 5a22 22 0 0 0 0 31.11L67.1 476a22 22 0 0 0 31.11 0l5.06-5.06A152.15 152.15 0 0 0 132 482.85V490a22 22 0 0 0 22 22h44a22 22 0 0 0 22-22v-7.14A152.15 152.15 0 0 0 248.72 471l5.06 5.06a22 22 0 0 0 31.11 0L316 444.9a22 22 0 0 0 0-31.11l-5.06-5.06A152.15 152.15 0 0 0 322.85 380H330a22 22 0 0 0 22-22v-44a22 22 0 0 0-22-22zM176 416a80 80 0 1 1 80-80 80 80 0 0 1-80 80z", "M640 192v50.76a32 32 0 0 1-9.37 22.63l-50.82 50.81A118.61 118.61 0 0 0 528 304c-39.14 0-73.55 19-95.46 48H352v-38a22 22 0 0 0-22-22h-7.14A152.24 152.24 0 0 0 311 263.27l5.06-5.06a22 22 0 0 0 0-31.11L284.9 196a22 22 0 0 0-31.11 0l-5.06 5.06A151.54 151.54 0 0 0 220 189.14V182a22 22 0 0 0-22-22h110l-41.11-96H160v96h-6a22 22 0 0 0-22 22v7.14A152.15 152.15 0 0 0 103.28 201l-5.06-5a22.57 22.57 0 0 0-2.22-1.93V48a48.05 48.05 0 0 1 48-48h133.45a47.91 47.91 0 0 1 44.13 29.14L377.67 160H480v-40.2a128.16 128.16 0 0 1 29.5-81.72 16.28 16.28 0 0 1 24.7-.78l21.63 24.17c4.87 5.43 5.74 13.69 1.32 19.49A64.07 64.07 0 0 0 544 119.8V160h64a32 32 0 0 1 32 32z"]],
        "credit-card": [576, 512, [], "f09d", ["M0 432a48 48 0 0 0 48 48h480a48 48 0 0 0 48-48V256H0zm192-68a12 12 0 0 1 12-12h136a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H204a12 12 0 0 1-12-12zm-128 0a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12zM528 32H48A48 48 0 0 0 0 80v48h576V80a48 48 0 0 0-48-48z", "M576 256H0V128h576z"]],
        "times-square": [448, 512, [], "f2d3", ["M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-54.4 289.1a12 12 0 0 1 0 17L306 377.6a12 12 0 0 1-17 0L224 312l-65.1 65.6a12 12 0 0 1-17 0L102.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L280 256z", "M102.4 190.9a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L280 256l65.6 65.1a12 12 0 0 1 0 17L306 377.6a12 12 0 0 1-17 0L224 312l-65.1 65.6a12 12 0 0 1-17 0L102.4 338a12 12 0 0 1 0-17l65.6-65z"]],
        "star": [576, 512, [], "f005", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"],
        "handshake-alt": [640, 512, [], "f4c6", ["M640 143.9v191.8a16 16 0 0 1-16 16h-97.6a63.36 63.36 0 0 0-22.2-37.9L358.6 195.6l26.1-23.9a16 16 0 0 0-21.6-23.6l-27 24.7-53 48.5c-.1.1-.3.1-.4.2-21.1 18.9-46.5 7.8-56.1-2.7a39.69 39.69 0 0 1 2.1-56c.1-.1.2-.3.3-.4l98.3-90a32 32 0 0 1 21.6-8.4h85.9a31.94 31.94 0 0 1 22.6 9.4L512 128h112a16 16 0 0 1 16 15.9z", "M0 335.9V144a16 16 0 0 1 16-16h112l54.7-54.6a31.94 31.94 0 0 1 22.6-9.4h83.8l-81.8 74.9a72 72 0 0 0-4.4 101.7c14.9 16.3 61.1 41.5 101.7 4.4l30-27.5 149.3 121.2a32.06 32.06 0 0 1 4.6 45.1l-9.5 11.7a32 32 0 0 1-45 4.7l-5.4-4.4-31.4 38.6a37.16 37.16 0 0 1-52.3 5.4L327 424.3l-.2.2a64 64 0 0 1-90 9.3l-90.5-81.9H16a16 16 0 0 1-16-16z"]],
        "linkedin": [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"],
        "instagram": [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
    };

    bunker(function() {
        defineIcons('fas', icons);
    });

}());