(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-registration-registration-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/html-to-image/lib/applyStyleWithOptions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html-to-image/lib/applyStyleWithOptions.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function applyStyleWithOptions(clonedNode, options) {
    var style = clonedNode.style;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = options.width + "px";
    }
    if (options.height) {
        style.height = options.height + "px";
    }
    if (options.style) {
        Object.assign(style, options.style);
    }
    return clonedNode;
}
exports.default = applyStyleWithOptions;


/***/ }),

/***/ "./node_modules/html-to-image/lib/cloneNode.js":
/*!*****************************************************!*\
  !*** ./node_modules/html-to-image/lib/cloneNode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var clonePseudoElements_1 = __importDefault(__webpack_require__(/*! ./clonePseudoElements */ "./node_modules/html-to-image/lib/clonePseudoElements.js"));
function cloneSingleNode(nativeNode) {
    if (nativeNode instanceof HTMLCanvasElement) {
        return utils_1.createImage(nativeNode.toDataURL());
    }
    if (nativeNode.tagName && nativeNode.tagName.toLowerCase() === 'svg') {
        return Promise.resolve(nativeNode)
            .then(function (svg) { return utils_1.svgToDataURL(svg); })
            .then(utils_1.createImage);
    }
    return Promise.resolve(nativeNode.cloneNode(false));
}
function cloneChildren(nativeNode, clonedNode, filter) {
    var children = utils_1.toArray(nativeNode.childNodes);
    if (children.length === 0) {
        return Promise.resolve(clonedNode);
    }
    // clone children in order
    return children.reduce(function (done, child) { return done
        .then(function () { return cloneNode(child, filter); })
        .then(function (clonedChild) {
        if (clonedChild) {
            clonedNode.appendChild(clonedChild);
        }
    }); }, Promise.resolve())
        .then(function () { return clonedNode; });
}
function cloneCssStyle(nativeNode, clonedNode) {
    var source = window.getComputedStyle(nativeNode);
    var target = clonedNode.style;
    if (source.cssText) {
        target.cssText = source.cssText;
    }
    else {
        utils_1.toArray(source).forEach(function (name) {
            target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if (nativeNode instanceof HTMLTextAreaElement) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if (nativeNode instanceof HTMLInputElement) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function decorate(nativeNode, clonedNode) {
    if (!(clonedNode instanceof Element)) {
        return clonedNode;
    }
    return Promise.resolve()
        .then(function () { return cloneCssStyle(nativeNode, clonedNode); })
        .then(function () { return clonePseudoElements_1.default(nativeNode, clonedNode); })
        .then(function () { return cloneInputValue(nativeNode, clonedNode); })
        .then(function () { return clonedNode; });
}
function cloneNode(domNode, filter, isRoot) {
    if (!isRoot && filter && !filter(domNode)) {
        return Promise.resolve(null);
    }
    return Promise.resolve(domNode)
        .then(cloneSingleNode)
        .then(function (clonedNode) { return cloneChildren(domNode, clonedNode, filter); })
        .then(function (clonedNode) { return decorate(domNode, clonedNode); });
}
exports.default = cloneNode;


/***/ }),

/***/ "./node_modules/html-to-image/lib/clonePseudoElements.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-to-image/lib/clonePseudoElements.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
function formatCssText(style) {
    var content = style.getPropertyValue('content');
    return style.cssText + " content: " + content + ";";
}
function formatCssProperties(style) {
    return utils_1.toArray(style).map(function (name) {
        var value = style.getPropertyValue(name);
        var priority = style.getPropertyPriority(name);
        return name + ": " + value + (priority ? ' !important' : '') + ";";
    }).join(' ');
}
function getPseudoElementStyle(className, pseudo, style) {
    var selector = "." + className + ":" + pseudo;
    var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
    return document.createTextNode(selector + "{" + cssText + "}");
}
function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    var style = window.getComputedStyle(nativeNode, pseudo);
    var content = style.getPropertyValue('content');
    if (content === '' || content === 'none') {
        return;
    }
    var className = utils_1.uuid();
    var styleElement = document.createElement('style');
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.className = clonedNode.className + " " + className;
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode) {
    [
        ':before',
        ':after',
    ].forEach(function (pseudo) { return clonePseudoElement(nativeNode, clonedNode, pseudo); });
}
exports.default = clonePseudoElements;


/***/ }),

/***/ "./node_modules/html-to-image/lib/createSvgDataURL.js":
/*!************************************************************!*\
  !*** ./node_modules/html-to-image/lib/createSvgDataURL.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
function createSvgDataURL(clonedNode, width, height) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS('', 'width', "" + width);
    svg.setAttributeNS('', 'height', "" + height);
    foreignObject.setAttributeNS('', 'width', '100%');
    foreignObject.setAttributeNS('', 'height', '100%');
    foreignObject.setAttributeNS('', 'x', '0');
    foreignObject.setAttributeNS('', 'y', '0');
    foreignObject.setAttributeNS('', 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(clonedNode);
    return utils_1.svgToDataURL(svg);
}
exports.default = createSvgDataURL;


/***/ }),

/***/ "./node_modules/html-to-image/lib/embedImages.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-to-image/lib/embedImages.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var getBlobFromURL_1 = __importDefault(__webpack_require__(/*! ./getBlobFromURL */ "./node_modules/html-to-image/lib/getBlobFromURL.js"));
var embedResources_1 = __importDefault(__webpack_require__(/*! ./embedResources */ "./node_modules/html-to-image/lib/embedResources.js"));
function embedBackground(clonedNode, options) {
    var background = clonedNode.style.getPropertyValue('background');
    if (!background) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(background)
        .then(function (cssString) { return embedResources_1.default(cssString, null, options); })
        .then(function (cssString) {
        clonedNode.style.setProperty('background', cssString, clonedNode.style.getPropertyPriority('background'));
        return clonedNode;
    });
}
function embedImageNode(clonedNode, options) {
    if (!(clonedNode instanceof HTMLImageElement) || utils_1.isDataUrl(clonedNode.src)) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(clonedNode.src)
        .then(function (url) { return getBlobFromURL_1.default(url, options); })
        .then(function (data) { return utils_1.toDataURL(data, utils_1.getMimeType(clonedNode.src)); })
        .then(function (dataURL) { return new Promise((function (resolve, reject) {
        clonedNode.onload = resolve;
        clonedNode.onerror = reject;
        clonedNode.src = dataURL;
    })); })
        .then(function () { return clonedNode; }, function () { return clonedNode; });
}
function embedChildren(clonedNode, options) {
    var children = utils_1.toArray(clonedNode.childNodes);
    var deferreds = children.map(function (child) { return embedImages(child, options); });
    return Promise.all(deferreds).then(function () { return clonedNode; });
}
function embedImages(clonedNode, options) {
    if (!(clonedNode instanceof Element)) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(clonedNode)
        .then(function (node) { return embedBackground(node, options); })
        .then(function (node) { return embedImageNode(node, options); })
        .then(function (node) { return embedChildren(node, options); });
}
exports.default = embedImages;


/***/ }),

/***/ "./node_modules/html-to-image/lib/embedResources.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-to-image/lib/embedResources.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getBlobFromURL_1 = __importDefault(__webpack_require__(/*! ./getBlobFromURL */ "./node_modules/html-to-image/lib/getBlobFromURL.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    var doc = document.implementation.createHTMLDocument();
    var base = doc.createElement('base');
    var a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
function escape(url) {
    return url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
}
function urlToRegex(url) {
    return new RegExp("(url\\(['\"]?)(" + escape(url) + ")(['\"]?\\))", 'g');
}
function parseURLs(str) {
    var result = [];
    str.replace(URL_REGEX, function (raw, quotation, url) {
        result.push(url);
        return raw;
    });
    return result.filter(function (url) { return !utils_1.isDataUrl(url); });
}
function embed(cssString, resourceURL, baseURL, options) {
    var resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
    return Promise.resolve(resolvedURL)
        .then(function (url) { return getBlobFromURL_1.default(url, options); })
        .then(function (data) { return utils_1.toDataURL(data, utils_1.getMimeType(resourceURL)); })
        .then(function (dataURL) { return cssString.replace(urlToRegex(resourceURL), "$1" + dataURL + "$3"); })
        .then(function (content) { return content; }, function () { return resolvedURL; });
}
function shouldEmbed(string) {
    return string.search(URL_REGEX) !== -1;
}
exports.shouldEmbed = shouldEmbed;
function embedResources(cssString, baseUrl, options) {
    if (!shouldEmbed(cssString)) {
        return Promise.resolve(cssString);
    }
    return Promise.resolve(cssString)
        .then(parseURLs)
        .then(function (urls) { return urls.reduce(function (done, url) { return done.then(function (ret) { return embed(ret, url, baseUrl, options); }); }, Promise.resolve(cssString)); });
}
exports.default = embedResources;


/***/ }),

/***/ "./node_modules/html-to-image/lib/embedWebFonts.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/lib/embedWebFonts.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var embedResources_1 = __importStar(__webpack_require__(/*! ./embedResources */ "./node_modules/html-to-image/lib/embedResources.js"));
function parseCSS(source) {
    if (source === undefined) {
        return [];
    }
    var cssText = source;
    var css = [];
    var cssKeyframeRegex = '((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})';
    var combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]'
        + '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})'; // to match css & media queries together
    var cssCommentsRegex = new RegExp('(\\/\\*[\\s\\S]*?\\*\\/)', 'gi');
    // strip out comments
    cssText = cssText.replace(cssCommentsRegex, '');
    var keyframesRegex = new RegExp(cssKeyframeRegex, 'gi');
    var arr;
    while (true) {
        arr = keyframesRegex.exec(cssText);
        if (arr === null) {
            break;
        }
        css.push(arr[0]);
    }
    cssText = cssText.replace(keyframesRegex, '');
    // unified regex
    var unified = new RegExp(combinedCSSRegex, 'gi');
    while (true) {
        arr = unified.exec(cssText);
        if (arr === null) {
            break;
        }
        css.push(arr[0]);
    }
    return css;
}
function fetchCSS(url, sheet) {
    return fetch(url).then(function (res) {
        return {
            url: url,
            cssText: res.text(),
        };
    }, function (e) {
        console.log('ERROR FETCHING CSS: ', e.toString());
    });
}
function embedFonts(data) {
    return data.cssText.then(function (resolved) {
        var cssText = resolved;
        var fontLocations = cssText.match(/url\([^)]+\)/g) || [];
        var fontLoadedPromises = fontLocations.map(function (location) {
            var url = location.replace(/url\(([^]+)\)/g, '$1');
            if (!url.startsWith('https://')) {
                var source = data.url;
                url = new URL(url, source).href;
            }
            return new Promise(function (resolve, reject) {
                fetch(url)
                    .then(function (res) { return res.blob(); })
                    .then(function (blob) {
                    var reader = new FileReader();
                    reader.addEventListener('load', function (res) {
                        // Side Effect
                        cssText = cssText.replace(location, "url(" + reader.result + ")");
                        resolve([location, reader.result]);
                    });
                    reader.readAsDataURL(blob);
                })
                    .catch(reject);
            });
        });
        return Promise.all(fontLoadedPromises).then(function () { return cssText; });
    });
}
function getCssRules(styleSheets) {
    var ret = [];
    var promises = [];
    // First loop inlines imports
    styleSheets.forEach(function (sheet) {
        if ('cssRules' in sheet) {
            try {
                utils_1.toArray(sheet.cssRules).forEach(function (item) {
                    if (item.type === CSSRule.IMPORT_RULE) {
                        promises.push(fetchCSS(item.href, sheet)
                            .then(embedFonts)
                            .then(function (cssText) {
                            var parsed = parseCSS(cssText);
                            parsed.forEach(function (rule) {
                                sheet.insertRule(rule, sheet.cssRules.length);
                            });
                        })
                            .catch(function (e) {
                            console.log('Error loading remote css', e.toString());
                        }));
                    }
                });
            }
            catch (e) {
                var inline_1 = styleSheets.find(function (a) { return a.href === null; }) || document.styleSheets[0];
                if (sheet.href != null) {
                    promises.push(fetchCSS(sheet.href, inline_1)
                        .then(embedFonts)
                        .then(function (cssText) {
                        var parsed = parseCSS(cssText);
                        parsed.forEach(function (rule) {
                            inline_1.insertRule(rule, sheet.cssRules.length);
                        });
                    })
                        .catch(function (e) {
                        console.log('Error loading remote stylesheet', e.toString());
                    }));
                }
                console.log('Error inlining remote css file', e.toString());
            }
        }
    });
    return Promise
        .all(promises)
        .then(function () {
        // Second loop parses rules
        styleSheets.forEach(function (sheet) {
            if ('cssRules' in sheet) {
                try {
                    utils_1.toArray(sheet.cssRules).forEach(function (item) {
                        ret.push(item);
                    });
                }
                catch (e) {
                    console.log("Error while reading CSS rules from " + sheet.href, e.toString());
                }
            }
        });
        return ret;
    });
}
function getWebFontRules(cssRules) {
    return cssRules
        .filter(function (rule) { return rule.type === CSSRule.FONT_FACE_RULE; })
        .filter(function (rule) { return embedResources_1.shouldEmbed(rule.style.getPropertyValue('src')); });
}
function parseWebFontRules(clonedNode) {
    return new Promise(function (resolve, reject) {
        if (!clonedNode.ownerDocument) {
            reject(new Error('Provided element is not within a Document'));
        }
        resolve(utils_1.toArray(clonedNode.ownerDocument.styleSheets));
    })
        .then(getCssRules)
        .then(getWebFontRules);
}
exports.parseWebFontRules = parseWebFontRules;
function embedWebFonts(clonedNode, options) {
    return parseWebFontRules(clonedNode)
        .then(function (rules) { return Promise.all(rules.map(function (rule) {
        var baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
        return embedResources_1.default(rule.cssText, baseUrl, options);
    })); })
        .then(function (cssStrings) { return cssStrings.join('\n'); })
        .then(function (cssString) {
        var styleNode = document.createElement('style');
        var sytleContent = document.createTextNode(cssString);
        styleNode.appendChild(sytleContent);
        if (clonedNode.firstChild) {
            clonedNode.insertBefore(styleNode, clonedNode.firstChild);
        }
        else {
            clonedNode.appendChild(styleNode);
        }
        return clonedNode;
    });
}
exports.default = embedWebFonts;


/***/ }),

/***/ "./node_modules/html-to-image/lib/getBlobFromURL.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-to-image/lib/getBlobFromURL.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:max-line-length */
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
// KNOWN ISSUE
// -----------
// Can not handle redirect-url, such as when access 'http://something.com/avatar.png'
// will redirect to 'http://something.com/65fc2ffcc8aea7ba65a1d1feda173540'
var TIMEOUT = 30000;
function getBlobFromURL(url, options) {
    // cache bypass so we dont have CORS issues with cached images
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
        url += ((/\?/).test(url) ? '&' : '?') + (new Date()).getTime(); // tslint:disable-line
    }
    var failed = function (reason) {
        var placeholder = '';
        if (options.imagePlaceholder) {
            var split = options.imagePlaceholder.split(/,/);
            if (split && split[1]) {
                placeholder = split[1];
            }
        }
        var msg = "Failed to fetch resource: " + url;
        if (reason) {
            msg = typeof reason === 'string' ? reason : reason.message;
        }
        if (msg) {
            console.error(msg);
        }
        return placeholder;
    };
    var deferred = window.fetch
        // fetch
        ? window.fetch(url)
            .then(function (response) { return response.blob(); })
            .then(function (blob) { return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () { return resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }); })
            .then(utils_1.getDataURLContent)
            .catch(function () { return new Promise(function (resolve, reject) {
            reject();
        }); })
        // xhr
        : new Promise((function (resolve, reject) {
            var req = new XMLHttpRequest();
            var timeout = function () {
                reject(new Error("Timeout of " + TIMEOUT + "ms occured while fetching resource: " + url));
            };
            var done = function () {
                if (req.readyState !== 4) {
                    return;
                }
                if (req.status !== 200) {
                    reject(new Error("Failed to fetch resource: " + url + ", status: " + req.status));
                    return;
                }
                var encoder = new FileReader();
                encoder.onloadend = function () {
                    resolve(utils_1.getDataURLContent(encoder.result));
                };
                encoder.readAsDataURL(req.response);
            };
            req.onreadystatechange = done;
            req.ontimeout = timeout;
            req.responseType = 'blob';
            req.timeout = TIMEOUT;
            req.open('GET', url, true);
            req.send();
        }));
    return deferred.catch(failed);
}
exports.default = getBlobFromURL;


/***/ }),

/***/ "./node_modules/html-to-image/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-to-image/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cloneNode_1 = __importDefault(__webpack_require__(/*! ./cloneNode */ "./node_modules/html-to-image/lib/cloneNode.js"));
var embedWebFonts_1 = __importDefault(__webpack_require__(/*! ./embedWebFonts */ "./node_modules/html-to-image/lib/embedWebFonts.js"));
var embedImages_1 = __importDefault(__webpack_require__(/*! ./embedImages */ "./node_modules/html-to-image/lib/embedImages.js"));
var createSvgDataURL_1 = __importDefault(__webpack_require__(/*! ./createSvgDataURL */ "./node_modules/html-to-image/lib/createSvgDataURL.js"));
var applyStyleWithOptions_1 = __importDefault(__webpack_require__(/*! ./applyStyleWithOptions */ "./node_modules/html-to-image/lib/applyStyleWithOptions.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
function getImageSize(domNode, options) {
    if (options === void 0) { options = {}; }
    var width = options.width || utils_1.getNodeWidth(domNode);
    var height = options.height || utils_1.getNodeHeight(domNode);
    return { width: width, height: height };
}
function toSvgDataURL(domNode, options) {
    if (options === void 0) { options = {}; }
    var _a = getImageSize(domNode, options), width = _a.width, height = _a.height;
    return cloneNode_1.default(domNode, options.filter, true)
        .then(function (clonedNode) { return embedWebFonts_1.default(clonedNode, options); })
        .then(function (clonedNode) { return embedImages_1.default(clonedNode, options); })
        .then(function (clonedNode) { return applyStyleWithOptions_1.default(clonedNode, options); })
        .then(function (clonedNode) { return createSvgDataURL_1.default(clonedNode, width, height); });
}
exports.toSvgDataURL = toSvgDataURL;
function toCanvas(domNode, options) {
    if (options === void 0) { options = {}; }
    return toSvgDataURL(domNode, options)
        .then(utils_1.createImage)
        .then(utils_1.delay(100))
        .then(function (image) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var ratio = utils_1.getPixelRatio();
        var _a = getImageSize(domNode, options), width = _a.width, height = _a.height;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = "" + width;
        canvas.style.height = "" + height;
        context.scale(ratio, ratio);
        if (options.backgroundColor) {
            context.fillStyle = options.backgroundColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
        context.drawImage(image, 0, 0);
        return canvas;
    });
}
exports.toCanvas = toCanvas;
function toPixelData(domNode, options) {
    if (options === void 0) { options = {}; }
    var _a = getImageSize(domNode, options), width = _a.width, height = _a.height;
    return toCanvas(domNode, options)
        .then(function (canvas) { return (canvas.getContext('2d').getImageData(0, 0, width, height).data); });
}
exports.toPixelData = toPixelData;
function toPng(domNode, options) {
    if (options === void 0) { options = {}; }
    return toCanvas(domNode, options).then(function (canvas) { return (canvas.toDataURL()); });
}
exports.toPng = toPng;
function toJpeg(domNode, options) {
    if (options === void 0) { options = {}; }
    return toCanvas(domNode, options).then(function (canvas) { return (canvas.toDataURL('image/jpeg', options.quality || 1)); });
}
exports.toJpeg = toJpeg;
function toBlob(domNode, options) {
    if (options === void 0) { options = {}; }
    return toCanvas(domNode, options).then(utils_1.canvasToBlob);
}
exports.toBlob = toBlob;
exports.default = {
    toSvgDataURL: toSvgDataURL,
    toCanvas: toCanvas,
    toPixelData: toPixelData,
    toPng: toPng,
    toJpeg: toJpeg,
    toBlob: toBlob,
};


/***/ }),

/***/ "./node_modules/html-to-image/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/html-to-image/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WOFF = 'application/font-woff';
var JPEG = 'image/jpeg';
var mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
};
exports.uuid = (function uuid() {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    var counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    var randomFourChars = function () {
        return ("0000" + (Math.random() * (Math.pow(36, 4)) << 0).toString(36)).slice(-4);
    };
    return function () {
        counter += 1;
        return "u" + randomFourChars() + counter;
    };
}());
function parseExtension(url) {
    var match = /\.([^./]*?)$/g.exec(url);
    if (match)
        return match[1];
    return '';
}
exports.parseExtension = parseExtension;
function getMimeType(url) {
    var ext = parseExtension(url).toLowerCase();
    return mimes[ext] || '';
}
exports.getMimeType = getMimeType;
function delay(ms) {
    return function (args) { return new Promise((function (resolve) {
        setTimeout(function () {
            resolve(args);
        }, ms);
    })); };
}
exports.delay = delay;
function createImage(url) {
    return new Promise((function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.onerror = reject;
        image.crossOrigin = 'anonymous';
        image.src = url;
    }));
}
exports.createImage = createImage;
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
exports.isDataUrl = isDataUrl;
function toDataURL(content, mimeType) {
    return "data:" + mimeType + ";base64," + content;
}
exports.toDataURL = toDataURL;
function getDataURLContent(dataURL) {
    return dataURL.split(/,/)[1];
}
exports.getDataURLContent = getDataURLContent;
function toBlob(canvas) {
    return new Promise((function (resolve) {
        var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
        var len = binaryString.length;
        var binaryArray = new Uint8Array(len);
        for (var i = 0; i < len; i += 1) {
            binaryArray[i] = binaryString.charCodeAt(i);
        }
        resolve(new Blob([binaryArray], {
            type: 'image/png',
        }));
    }));
}
function canvasToBlob(canvas) {
    if (canvas.toBlob) {
        return new Promise((function (resolve) {
            canvas.toBlob(resolve);
        }));
    }
    return toBlob(canvas);
}
exports.canvasToBlob = canvasToBlob;
function toArray(arrayLike) {
    var arr = [];
    for (var i = 0, l = arrayLike.length; i < l; i += 1) {
        arr.push(arrayLike[i]);
    }
    return arr;
}
exports.toArray = toArray;
function px(node, styleProperty) {
    var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
    return parseFloat(value.replace('px', ''));
}
function getNodeWidth(node) {
    var leftBorder = px(node, 'border-left-width');
    var rightBorder = px(node, 'border-right-width');
    return node.scrollWidth + leftBorder + rightBorder;
}
exports.getNodeWidth = getNodeWidth;
function getNodeHeight(node) {
    var topBorder = px(node, 'border-top-width');
    var bottomBorder = px(node, 'border-bottom-width');
    return node.scrollHeight + topBorder + bottomBorder;
}
exports.getNodeHeight = getNodeHeight;
function getPixelRatio() {
    return (window.devicePixelRatio || 1);
}
exports.getPixelRatio = getPixelRatio;
function svgToDataURL(svg) {
    return Promise.resolve()
        .then(function () { return new XMLSerializer().serializeToString(svg); })
        .then(encodeURIComponent)
        .then(function (html) { return "data:image/svg+xml;charset=utf-8," + html; });
}
exports.svgToDataURL = svgToDataURL;
function getBlobFromImageURL(url) {
    return createImage(url).then(function (image) {
        var width = image.width, height = image.height;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var ratio = getPixelRatio();
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = "" + width;
        canvas.style.height = "" + height;
        context.scale(ratio, ratio);
        context.drawImage(image, 0, 0);
        var dataURL = canvas.toDataURL(getMimeType(url));
        return getDataURLContent(dataURL);
    });
}
exports.getBlobFromImageURL = getBlobFromImageURL;


/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/app/portal/common/validator/ird-validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/portal/common/validator/ird-validator.ts ***!
  \**********************************************************/
/*! exports provided: IrdValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrdValidators", function() { return IrdValidators; });
/* harmony import */ var _text_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-validator */ "./src/app/portal/common/validator/text-validator.ts");

var IrdValidators = /** @class */ (function () {
    function IrdValidators() {
    }
    IrdValidators.text = _text_validator__WEBPACK_IMPORTED_MODULE_0__["TextValidator"];
    return IrdValidators;
}());



/***/ }),

/***/ "./src/app/portal/common/validator/text-validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/portal/common/validator/text-validator.ts ***!
  \***********************************************************/
/*! exports provided: TextValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextValidator", function() { return TextValidator; });
/* harmony import */ var _shared_string_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/string-utility */ "./src/app/portal/shared/string-utility.ts");
/* harmony import */ var _validator_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator-utility */ "./src/app/portal/common/validator/validator-utility.ts");


/**
 * Text validator
 * @param config
 */
function TextValidator(config) {
    return function (control) {
        var text = control.value;
        if (_shared_string_utility__WEBPACK_IMPORTED_MODULE_0__["StringUtility"].isNullOrEmpty(text)) {
            return null;
        }
        if (isEnglishOnly(text)) {
            if (text.length > config.english.maxLength) {
                return _validator_utility__WEBPACK_IMPORTED_MODULE_1__["ValidatorUtility"].getValidationErrors('english', config.english);
            }
        }
        else if (isChineseOnly(text)) {
            if (getChineseTextLength(text) > config.chinese.maxLength) {
                return _validator_utility__WEBPACK_IMPORTED_MODULE_1__["ValidatorUtility"].getValidationErrors('chinese', config.chinese);
            }
        }
        else {
            return _validator_utility__WEBPACK_IMPORTED_MODULE_1__["ValidatorUtility"].getValidationErrors('char', config.char);
        }
        return null;
    };
}
function isEnglishOnly(input) {
    return null != input.match(/^[A-Za-z ]+$/);
}
function isChineseOnly(input) {
    return null != input.match(/^(?:[\u3400-\u4DBF\u4E00-\u9FFF]|[\uD840-\uD868\uD86A-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD87A[\uDC00-\uDFEF]|\uD87E[\uDC00-\uDE1F]|\uD884[\uDC00-\uDF4F])+$/);
}
function getChineseTextLength(input) {
    /**
     * String.length cannot correctly return the length of a string
     * containing characters represented as surrogate pairs
     * Reference: https://mathiasbynens.be/notes/javascript-unicode
     */
    var multibyteChars = input.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gm);
    var singleByteChars = input.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gm, '').split('');
    if (multibyteChars === null) {
        return singleByteChars.length;
    }
    else {
        return multibyteChars.concat(singleByteChars).length;
    }
}


/***/ }),

/***/ "./src/app/portal/common/validator/validator-utility.ts":
/*!**************************************************************!*\
  !*** ./src/app/portal/common/validator/validator-utility.ts ***!
  \**************************************************************/
/*! exports provided: ValidatorUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorUtility", function() { return ValidatorUtility; });
var ValidatorUtility = /** @class */ (function () {
    function ValidatorUtility() {
    }
    ValidatorUtility.getValidationErrors = function (validity, config, errors) {
        if (errors === void 0) { errors = null; }
        if (!errors) {
            errors = {};
        }
        var messageKey = (config === null || config === void 0 ? void 0 : config.messageKey) ? config.messageKey : validity;
        errors[messageKey] = true;
        if (config === null || config === void 0 ? void 0 : config.message) {
            errors[messageKey] = {
                message: config.message
            };
        }
        return errors;
    };
    return ValidatorUtility;
}());



/***/ }),

/***/ "./src/app/portal/model/ServiceType.ts":
/*!*********************************************!*\
  !*** ./src/app/portal/model/ServiceType.ts ***!
  \*********************************************/
/*! exports provided: ServiceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return ServiceType; });
var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["NewBusiness"] = 1] = "NewBusiness";
    ServiceType[ServiceType["SubmitBusinessRegistrationForms"] = 2] = "SubmitBusinessRegistrationForms";
})(ServiceType || (ServiceType = {}));


/***/ }),

/***/ "./src/app/portal/registration/registration-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/portal/registration/registration-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-guard/direct-access.guard */ "./src/app/portal/route-guard/direct-access.guard.ts");
/* harmony import */ var _step3_step3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step3/step3.component */ "./src/app/portal/registration/step3/step3.component.ts");
/* harmony import */ var _step4_step4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step4/step4.component */ "./src/app/portal/registration/step4/step4.component.ts");
/* harmony import */ var _step5_step5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step5/step5.component */ "./src/app/portal/registration/step5/step5.component.ts");
/* harmony import */ var _step6_step6_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step6/step6.component */ "./src/app/portal/registration/step6/step6.component.ts");
/* harmony import */ var _step7_step7_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step7/step7.component */ "./src/app/portal/registration/step7/step7.component.ts");










var routes = [
    {
        path: 'step3',
        canActivate: [_route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]],
        component: _step3_step3_component__WEBPACK_IMPORTED_MODULE_3__["Step3Component"]
    },
    {
        path: 'step4',
        canActivate: [_route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]],
        component: _step4_step4_component__WEBPACK_IMPORTED_MODULE_4__["Step4Component"]
    },
    {
        path: 'step5',
        canActivate: [_route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]],
        component: _step5_step5_component__WEBPACK_IMPORTED_MODULE_5__["Step5Component"]
    },
    {
        path: 'step6',
        canActivate: [_route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]],
        component: _step6_step6_component__WEBPACK_IMPORTED_MODULE_6__["Step6Component"]
    },
    {
        path: 'step7',
        canActivate: [_route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]],
        component: _step7_step7_component__WEBPACK_IMPORTED_MODULE_7__["Step7Component"]
    },
    {
        path: '**',
        redirectTo: 'step3'
    }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationRoutingModule });
    RegistrationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationRoutingModule_Factory(t) { return new (t || RegistrationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return RegistrationRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portal/registration/registration.module.ts":
/*!************************************************************!*\
  !*** ./src/app/portal/registration/registration.module.ts ***!
  \************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/portal-common.module */ "./src/app/portal/common/portal-common.module.ts");
/* harmony import */ var _route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-guard/direct-access.guard */ "./src/app/portal/route-guard/direct-access.guard.ts");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/portal/registration/registration-routing.module.ts");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/registration.service */ "./src/app/portal/registration/service/registration.service.ts");
/* harmony import */ var _step3_step3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step3/step3.component */ "./src/app/portal/registration/step3/step3.component.ts");
/* harmony import */ var _step4_step4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step4/step4.component */ "./src/app/portal/registration/step4/step4.component.ts");
/* harmony import */ var _step5_step5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./step5/step5.component */ "./src/app/portal/registration/step5/step5.component.ts");
/* harmony import */ var _step6_step6_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./step6/step6.component */ "./src/app/portal/registration/step6/step6.component.ts");
/* harmony import */ var _step7_step7_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./step7/step7.component */ "./src/app/portal/registration/step7/step7.component.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _service_language_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/language.service */ "./src/app/portal/service/language.service.ts");
/* harmony import */ var src_app_portal_service_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/portal/service/coalescing-component-factory-resolver.service */ "./src/app/portal/service/coalescing-component-factory-resolver.service.ts");















var RegistrationModule = /** @class */ (function () {
    function RegistrationModule(_translateService, _languageService, _coalescingResolver, _localResolver) {
        this._translateService = _translateService;
        this._languageService = _languageService;
        this._coalescingResolver = _coalescingResolver;
        this._localResolver = _localResolver;
        this._coalescingResolver.registerResolver(this._localResolver);
        this._languageService.register(this._translateService);
    }
    RegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationModule });
    RegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationModule_Factory(t) { return new (t || RegistrationModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__["TranslocoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_language_service__WEBPACK_IMPORTED_MODULE_12__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_portal_service_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_13__["CoalescingComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); }, providers: [
            _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"],
            _service_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"],
            _route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]
        ], imports: [[
                _common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__["PortalCommonModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"]
            ]] });
    return RegistrationModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationModule, { declarations: [_step3_step3_component__WEBPACK_IMPORTED_MODULE_6__["Step3Component"],
        _step4_step4_component__WEBPACK_IMPORTED_MODULE_7__["Step4Component"],
        _step5_step5_component__WEBPACK_IMPORTED_MODULE_8__["Step5Component"],
        _step6_step6_component__WEBPACK_IMPORTED_MODULE_9__["Step6Component"],
        _step7_step7_component__WEBPACK_IMPORTED_MODULE_10__["Step7Component"]], imports: [_common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__["PortalCommonModule"],
        _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _step3_step3_component__WEBPACK_IMPORTED_MODULE_6__["Step3Component"],
                    _step4_step4_component__WEBPACK_IMPORTED_MODULE_7__["Step4Component"],
                    _step5_step5_component__WEBPACK_IMPORTED_MODULE_8__["Step5Component"],
                    _step6_step6_component__WEBPACK_IMPORTED_MODULE_9__["Step6Component"],
                    _step7_step7_component__WEBPACK_IMPORTED_MODULE_10__["Step7Component"]
                ],
                imports: [
                    _common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__["PortalCommonModule"],
                    _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"]
                ],
                providers: [
                    _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"],
                    _service_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"],
                    _route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]
                ]
            }]
    }], function () { return [{ type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__["TranslocoService"] }, { type: _service_language_service__WEBPACK_IMPORTED_MODULE_12__["LanguageService"] }, { type: src_app_portal_service_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_13__["CoalescingComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/registration/service/registration.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/portal/registration/service/registration.service.ts ***!
  \*********************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm5/ngx-webstorage-service.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_ServiceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/ServiceType */ "./src/app/portal/model/ServiceType.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constant */ "./src/app/portal/shared/constant.ts");
/* harmony import */ var _ngx_config_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-config/core */ "./node_modules/@ngx-config/core/__ivy_ngcc__/fesm5/ngx-config-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");










var RegistrationService = /** @class */ (function () {
    function RegistrationService(_systemConfig, _httpClient, _scheduleService, _sessionStorage) {
        this._systemConfig = _systemConfig;
        this._httpClient = _httpClient;
        this._scheduleService = _scheduleService;
        this._sessionStorage = _sessionStorage;
        this.reset();
    }
    RegistrationService.prototype.reset = function () {
        this.appointment = {
            trn: '',
            qrCode: '',
            serviceType: _model_ServiceType__WEBPACK_IMPORTED_MODULE_3__["ServiceType"].NewBusiness,
            applicant: {
                idType: null,
                id: '',
                surname: ''
            },
            appointmentDate: null,
            startTime: null,
            endTime: null,
            locationEn: '',
            locationZh: '',
            registrations: []
        };
    };
    RegistrationService.prototype.enroll = function (request) {
        var _this = this;
        var observable = new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._httpClient.post(_this._systemConfig.getSettings('system.hostApi') + '/services/AppointmentManagement/Registration/enroll', request, {
                headers: _shared_constant__WEBPACK_IMPORTED_MODULE_4__["HEADERS_AJAX_JSON_REQUEST"]
            }).subscribe({
                next: function (response) {
                    if (response.resultCode === _shared_constant__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE_SUCCESS"]) {
                        _this.appointment.applicant = request.applicant;
                        _this._sessionStorage.set(_shared_constant__WEBPACK_IMPORTED_MODULE_4__["SESSION_DATA_KEY_JWT"], response.userToken);
                        _this._scheduleService.setSchedules(response.schedules);
                        observer.next();
                    }
                    else {
                        observer.error(response.resultCode);
                    }
                },
                error: function (error) {
                    observer.error('' + error.status);
                }
            });
        });
        return observable;
    };
    RegistrationService.prototype.submit = function () {
        var _this = this;
        var request = {
            registrations: this.appointment.registrations
        };
        var observable = new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._httpClient.post(_this._systemConfig.getSettings('system.hostApi') + '/services/AppointmentManagement/Registration/submit', request, {
                headers: _shared_constant__WEBPACK_IMPORTED_MODULE_4__["HEADERS_AJAX_JSON_REQUEST"]
            }).subscribe({
                next: function (response) {
                    if (response.resultCode === _shared_constant__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE_SUCCESS"]) {
                        _this.appointment = response.appointment;
                        observer.next();
                    }
                    else {
                        observer.error(response.resultCode);
                    }
                },
                error: function (error) {
                    observer.error('' + error.status);
                }
            });
        });
        return observable;
    };
    RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_config_core__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"])); };
    RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac });
    return RegistrationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngx_config_core__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"] }, { type: ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/registration/step3/step3.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/portal/registration/step3/step3.component.ts ***!
  \**************************************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/alert-box/alert-box.component */ "./src/app/portal/common/alert-box/alert-box.component.ts");
/* harmony import */ var _common_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/captcha/captcha.component */ "./src/app/portal/common/captcha/captcha.component.ts");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/splash-screen/splash-screen.component */ "./src/app/portal/common/splash-screen/splash-screen.component.ts");
/* harmony import */ var _common_validator_ird_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/validator/ird-validator */ "./src/app/portal/common/validator/ird-validator.ts");
/* harmony import */ var _model_IdType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/IdType */ "./src/app/portal/model/IdType.ts");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../heartbeat/heartbeat.service */ "./src/app/portal/heartbeat/heartbeat.service.ts");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/registration.service */ "./src/app/portal/registration/service/registration.service.ts");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");
/* harmony import */ var _service_alert_box_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service/alert-box.service */ "./src/app/portal/service/alert-box.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _common_directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/directive/master-form-group.directive */ "./src/app/portal/common/directive/master-form-group.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _common_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/error-msg/error-msg.component */ "./src/app/portal/common/error-msg/error-msg.component.ts");


























function Step3Component_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r119("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r119("systemSubheader"));
} }
function Step3Component_ng_container_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "XXX (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "error-msg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "error-msg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "error-msg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopeName", ctx_r115.scopeName)("formField", ctx_r115.userInfoForm.controls.firstChar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopeName", ctx_r115.scopeName)("formField", ctx_r115.userInfoForm.controls.middleDigits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopeName", ctx_r115.scopeName)("formField", ctx_r115.userInfoForm.controls.checkDigit);
} }
function Step3Component_ng_container_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "XXX (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Step3Component_ng_container_0_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "error-msg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var t1_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", t1_r113("lbl.passportPlaceholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopeName", ctx_r117.scopeName)("formField", ctx_r117.userInfoForm.controls.passport);
} }
function Step3Component_ng_container_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var t1_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", t1_r113("lbl.passportPlaceholder"));
} }
function Step3Component_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Step3Component_ng_container_0_ng_container_4_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Step3Component_ng_container_0_div_23_Template, 11, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, Step3Component_ng_container_0_div_24_Template, 8, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, Step3Component_ng_container_0_div_31_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, Step3Component_ng_container_0_div_32_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "error-msg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "error-msg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-captcha", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadStarted", function Step3Component_ng_container_0_Template_app_captcha_loadStarted_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.onLoadCaptchaStarted(); })("loadCompleted", function Step3Component_ng_container_0_Template_app_captcha_loadCompleted_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.onLoadCaptchaCompleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "command-bar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "splash-screen", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r113 = ctx.$implicit;
    var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("masterFormGroup", ctx_r112.userInfoForm)("formGroup", ctx_r112.userInfoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r113("lbl.step3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r113("lbl.serviceType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r113("lbl.serviceTypeRegistration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r113("lbl.serviceUserInfo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r112.IdType.HKIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r113("lbl.hkic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r112.userInfoForm.controls.idType.value === ctx_r112.IdType.HKIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r112.userInfoForm.controls.idType.value !== ctx_r112.IdType.HKIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r112.IdType.Passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r113("lbl.passport"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r112.userInfoForm.controls.idType.value === ctx_r112.IdType.Passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r112.userInfoForm.controls.idType.value !== ctx_r112.IdType.Passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopeName", ctx_r112.scopeName)("formField", ctx_r112.userInfoForm.controls.idType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r113("lbl.surname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopeName", ctx_r112.scopeName)("formField", ctx_r112.userInfoForm.controls.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx_r112.commandBarButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx_r112.splashScreenConfig.position)("status", ctx_r112.splashScreenConfig.status)("visibility", ctx_r112.splashScreenConfig.visibility)("message", ctx_r112.splashScreenConfig.message);
} }
var Step3Component = /** @class */ (function () {
    function Step3Component(_portalService, _router, _heartbeatService, _registrationService, _scheduleService, _formBuilder, _alertBoxService, _ngModuleRef) {
        var _this = this;
        this._portalService = _portalService;
        this._router = _router;
        this._heartbeatService = _heartbeatService;
        this._registrationService = _registrationService;
        this._scheduleService = _scheduleService;
        this._formBuilder = _formBuilder;
        this._alertBoxService = _alertBoxService;
        this._ngModuleRef = _ngModuleRef;
        this.scopeName = 'portal.Registration.Step3';
        this.IdType = _model_IdType__WEBPACK_IMPORTED_MODULE_8__["IdType"];
        this.commandBarButtons = [];
        this.splashScreenConfig = {
            position: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__["SplashScreenPosition"].Fixed,
            message: {
                scopeName: this.scopeName,
                label: 'loading'
            },
            visibility: false,
            status: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__["SplashScreenStatus"].Loading
        };
        this._portalService.setPageTitle(this.scopeName + '.title');
        this.commandBarButtons.push({
            type: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_5__["CommandBarButtonType"].SubmitButton,
            content: {
                scopeName: this.scopeName,
                label: 'btn.continue'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_5__["CommandBarButtonStyle"].Positive,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this.onContinueButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.abort'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_5__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this.onAbortButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
    }
    Step3Component.prototype.ngOnInit = function () {
        this._registrationService.reset();
        this._scheduleService.reset();
        this.userInfoForm = this._formBuilder.group({
            idType: ['', _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].required({ message: '0001' })],
            firstChar: ['', _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].compose({ conditionalExpression: function (x, y) { return y.idType === _model_IdType__WEBPACK_IMPORTED_MODULE_8__["IdType"].HKIC; },
                    validators: [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].required({ message: '0002' }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].pattern({ expression: { onlyAlpha: /^[A-Za-z]+$/ }, message: '0003' }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].maxLength({ message: '0004', value: 2 })]
                })
            ],
            middleDigits: ['', _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].compose({ conditionalExpression: function (x, y) { return y.idType === _model_IdType__WEBPACK_IMPORTED_MODULE_8__["IdType"].HKIC; },
                    validators: [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].required({ message: '0005' }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].digit({ message: '0006' }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].minLength({ message: '0007', value: 3 }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].maxLength({ message: '0007', value: 3 })]
                })
            ],
            checkDigit: ['', _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].compose({ conditionalExpression: function (x, y) { return y.idType === _model_IdType__WEBPACK_IMPORTED_MODULE_8__["IdType"].HKIC; },
                    validators: [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].required({ message: '0008' }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].pattern({ expression: { idCheckDigit: /^[0-9A]+$/ }, message: '0009' }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].maxLength({ message: '0010', value: 1 })]
                })
            ],
            passport: ['', _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].compose({ conditionalExpression: function (x, y) { return y.idType === _model_IdType__WEBPACK_IMPORTED_MODULE_8__["IdType"].Passport; },
                    validators: [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].required({ message: '0011' }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].alphaNumeric({ message: '0012' }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].minLength({ message: '0013', value: 5 }),
                        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].maxLength({ message: '0013', value: 5 })]
                })
            ],
            surname: ['', [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].required({ message: '0014' }),
                    _common_validator_ird_validator__WEBPACK_IMPORTED_MODULE_7__["IrdValidators"].text({
                        char: { message: '0015' },
                        english: { message: '0016', maxLength: 15 },
                        chinese: { message: '0017', maxLength: 2 }
                    })
                ]
            ]
        });
    };
    Step3Component.prototype.onLoadCaptchaStarted = function () {
        this.splashScreenConfig.visibility = true;
    };
    Step3Component.prototype.onLoadCaptchaCompleted = function (succeeded) {
        // disable the continue button when failed to load captcha
        this.commandBarButtons[0].disabled = !succeeded;
        this.splashScreenConfig.visibility = false;
    };
    Step3Component.prototype.onAbortButtonClick = function () {
        this._router.navigate(['/landing/welcome']);
    };
    Step3Component.prototype.onContinueButtonClick = function () {
        var _this = this;
        if (!this.userInfoForm.valid) {
            return;
        }
        this.splashScreenConfig.visibility = true;
        var broswerInfo = this._portalService.getBrowserInfo();
        var formValues = this.userInfoForm.value;
        var id = (formValues['idType'] === _model_IdType__WEBPACK_IMPORTED_MODULE_8__["IdType"].HKIC ? (formValues['firstChar'] + formValues['middleDigits'] + formValues['checkDigit']) : formValues['passport']);
        var request = {
            applicant: {
                id: id,
                idType: formValues['idType'],
                surname: formValues['surname']
            },
            captcha: this._captchaComponent.captchaForm.value.captcha,
            sessionId: this._captchaComponent.captcha.sessionId
        };
        this._registrationService.enroll(request).subscribe({
            next: function () {
                _this._heartbeatService.start();
                _this._router.navigate(['/registration/step4']);
            },
            error: function (errorCode) {
                _this.splashScreenConfig.visibility = false;
                _this._alertBoxService.show(_this._ngModuleRef.componentFactoryResolver, {
                    style: _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_3__["AlertBoxStyle"].Error,
                    buttons: [{ label: 'close' }],
                    message: {
                        scopeName: _this.scopeName + '.ErrorMsg',
                        label: errorCode
                    }
                });
            }
        });
    };
    Step3Component.ɵfac = function Step3Component_Factory(t) { return new (t || Step3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_9__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_11__["HeartbeatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_registration_service__WEBPACK_IMPORTED_MODULE_12__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_13__["ScheduleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxFormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_alert_box_service__WEBPACK_IMPORTED_MODULE_14__["AlertBoxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"])); };
    Step3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step3Component, selectors: [["app-step3"]], viewQuery: function Step3Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_common_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_4__["CaptchaComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._captchaComponent = _t.first);
        } }, decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [3, "masterFormGroup", "formGroup"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], [1, "form-row"], [1, "col-md-5", "form-label-bold"], [1, "col-md-7"], [1, "form-row", "my-1"], [1, "col-md-5"], [1, "form-check", "col-form-label"], ["formControlName", "idType", "type", "radio", "name", "idType", "id", "hkic", 1, "form-check-input", 3, "value"], ["for", "hkic", 1, "form-check-label"], ["class", "col-md-7 form-inline", 4, "ngIf"], ["formControlName", "idType", "type", "radio", "name", "idType", "id", "passport", 1, "form-check-input", 3, "value"], ["for", "passport", 1, "form-check-label"], ["class", "col-md-7", 4, "ngIf"], [1, "col-12", 3, "scopeName", "formField"], [1, "col-md-5", "col-form-label"], ["formControlName", "surname", "type", "text", 1, "form-control"], [3, "loadStarted", "loadCompleted"], [3, "buttons"], [3, "position", "status", "visibility", "message"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"], [1, "col-md-7", "form-inline"], ["formControlName", "firstChar", "type", "text", "placeholder", "AA", 1, "form-control", "input-two-char", "mr-2"], ["formControlName", "middleDigits", "type", "text", "placeholder", "123", 1, "form-control", "input-three-char", "mr-1"], ["formControlName", "checkDigit", "type", "text", "placeholder", "9", 1, "form-control", "input-one-char", "mx-1"], ["type", "text", "placeholder", "AA", "disabled", "", 1, "form-control", "input-two-char", "mr-2"], ["type", "text", "placeholder", "123", "disabled", "", 1, "form-control", "input-three-char", "mr-1"], ["type", "text", "placeholder", "9", "disabled", "", 1, "form-control", "input-one-char", "mx-1"], ["formControlName", "passport", "type", "text", 1, "form-control", "input-passport", 3, "placeholder"], ["type", "text", "disabled", "", 1, "form-control", "input-passport", 3, "placeholder"]], template: function Step3Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Step3Component_ng_container_0_Template, 44, 26, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_15__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_16__["PortalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _common_directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_18__["MasterFormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControlName"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _common_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_20__["ErrorMsgComponent"], _common_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_4__["CaptchaComponent"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_5__["CommandBarComponent"], _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__["SplashScreenComponent"]], styles: [".input-one-char[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.input-two-char[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.input-three-char[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.input-passport[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL3JlZ2lzdHJhdGlvbi9zdGVwMy9DOlxcVXNlcnNcXGxrYWNoXFxEb2N1bWVudHNcXEdpdFJlcG9cXGJyYnMtcG9ydGFsLXVpXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxccG9ydGFsXFxyZWdpc3RyYXRpb25cXHN0ZXAzXFxzdGVwMy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcG9ydGFsL3JlZ2lzdHJhdGlvbi9zdGVwMy9zdGVwMy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURBQTtFQUNJLFdBQUE7QUNHSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURKQTtFQUNJLFlBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9yZWdpc3RyYXRpb24vc3RlcDMvc3RlcDMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtb25lLWNoYXJcclxuICAgIHdpZHRoOiA0MHB4XHJcbi5pbnB1dC10d28tY2hhclxyXG4gICAgd2lkdGg6IDUwcHhcclxuLmlucHV0LXRocmVlLWNoYXJcclxuICAgIHdpZHRoOiA2MHB4XHJcbi5pbnB1dC1wYXNzcG9ydFxyXG4gICAgd2lkdGg6IDMwMHB4IiwiLmlucHV0LW9uZS1jaGFyIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5pbnB1dC10d28tY2hhciB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uaW5wdXQtdGhyZWUtY2hhciB7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uaW5wdXQtcGFzc3BvcnQge1xuICB3aWR0aDogMzAwcHg7XG59Il19 */"] });
    return Step3Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step3',
                templateUrl: './step3.component.html',
                styleUrls: ['./step3.component.sass']
            }]
    }], function () { return [{ type: _service_portal_service__WEBPACK_IMPORTED_MODULE_9__["PortalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_11__["HeartbeatService"] }, { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_12__["RegistrationService"] }, { type: _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_13__["ScheduleService"] }, { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxFormBuilder"] }, { type: _service_alert_box_service__WEBPACK_IMPORTED_MODULE_14__["AlertBoxService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"] }]; }, { _captchaComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_common_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_4__["CaptchaComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/registration/step4/step4.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/portal/registration/step4/step4.component.ts ***!
  \**************************************************************/
/*! exports provided: Step4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step4Component", function() { return Step4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/alert-box/alert-box.component */ "./src/app/portal/common/alert-box/alert-box.component.ts");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/splash-screen/splash-screen.component */ "./src/app/portal/common/splash-screen/splash-screen.component.ts");
/* harmony import */ var _common_timeslot_timeslot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/timeslot/timeslot.component */ "./src/app/portal/common/timeslot/timeslot.component.ts");
/* harmony import */ var _model_Meridiem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/Meridiem */ "./src/app/portal/model/Meridiem.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/constant */ "./src/app/portal/shared/constant.ts");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../heartbeat/heartbeat.service */ "./src/app/portal/heartbeat/heartbeat.service.ts");
/* harmony import */ var _service_alert_box_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/alert-box.service */ "./src/app/portal/service/alert-box.service.ts");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");
/* harmony import */ var _common_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/calendar/calendar.component */ "./src/app/portal/common/calendar/calendar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





















function Step4Component_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r134 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r134("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r134("systemSubheader"));
} }
function Step4Component_ng_container_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-timeslot", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadTimeslotStarted", function Step4Component_ng_container_0_ng_container_12_Template_app_timeslot_loadTimeslotStarted_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r135.onLoadTimeslotsStarted(); })("loadTimeslotCompleted", function Step4Component_ng_container_0_ng_container_12_Template_app_timeslot_loadTimeslotCompleted_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r137.onLoadTimeslotCompleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r126("lbl.timeslotNote"));
} }
function Step4Component_ng_container_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
var _c0 = function (a0, a1, a2, a3, a4, a5) { return { appointmentDateEn: a0, appointmentDateZh: a1, periodStartTime: a2, periodEndTime: a3, startTimeMeridiem: a4, endTimeMeridiem: a5 }; };
function Step4Component_ng_container_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var t1_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r126("lbl.appointmentDateTimeValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r131.selectedAppointmentDate.appointmentDate, "d MMM yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r131.selectedAppointmentDate.appointmentDate, "yyyy\u5E74 M\u6708 d\u65E5"), ctx_r131.getFormattedTime(ctx_r131.selectedAppointmentTimeslot.startTime), ctx_r131.getFormattedTime(ctx_r131.selectedAppointmentTimeslot.endTime), t1_r126("lbl.meridiem." + (ctx_r131.selectedAppointmentTimeslot.startTime < 1200 ? ctx_r131.Meridiem.AM : ctx_r131.Meridiem.PM)), t1_r126("lbl.meridiem." + (ctx_r131.selectedAppointmentTimeslot.endTime < 1200 ? ctx_r131.Meridiem.AM : ctx_r131.Meridiem.PM)))));
} }
function Step4Component_ng_container_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var t1_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r126("lbl.notYetSelected"));
} }
function Step4Component_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Step4Component_ng_container_0_ng_container_3_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-calendar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadSchedulesStarted", function Step4Component_ng_container_0_Template_app_calendar_loadSchedulesStarted_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r141.onLoadSchedulesStarted(); })("loadSchedulesCompleted", function Step4Component_ng_container_0_Template_app_calendar_loadSchedulesCompleted_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r143.onLoadSchedulesCompleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Step4Component_ng_container_0_ng_container_12_Template, 5, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Step4Component_ng_container_0_ng_container_16_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Step4Component_ng_container_0_ng_template_17_Template, 4, 14, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Step4Component_ng_container_0_ng_template_19_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "command-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "splash-screen", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r126 = ctx.$implicit;
    var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r126("lbl.step4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r126("lbl.calendarNote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.selectedAppointmentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r126("lbl.appointmentDateTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.selectedAppointmentDate && ctx_r125.selectedAppointmentTimeslot)("ngIfThen", _r130)("ngIfElse", _r132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx_r125.commandBarButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx_r125.splashScreenConfig.position)("status", ctx_r125.splashScreenConfig.status)("visibility", ctx_r125.splashScreenConfig.visibility)("message", ctx_r125.splashScreenConfig.message);
} }
var Step4Component = /** @class */ (function () {
    function Step4Component(_portalService, _router, _heartbeatService, _alertBoxService, _ngModuleRef, _scheduleService) {
        var _this = this;
        this._portalService = _portalService;
        this._router = _router;
        this._heartbeatService = _heartbeatService;
        this._alertBoxService = _alertBoxService;
        this._ngModuleRef = _ngModuleRef;
        this._scheduleService = _scheduleService;
        this.scopeName = 'portal.Registration.Step4';
        this.Meridiem = _model_Meridiem__WEBPACK_IMPORTED_MODULE_6__["Meridiem"];
        this.commandBarButtons = [];
        this.splashScreenConfig = {
            position: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenPosition"].Fixed,
            message: {
                scopeName: this.scopeName,
                label: 'loading'
            },
            visibility: false,
            status: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenStatus"].Loading
        };
        this._portalService.setPageTitle(this.scopeName + '.title');
        this.commandBarButtons.push({
            content: {
                scopeName: this.scopeName,
                label: 'btn.continue'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_3__["CommandBarButtonStyle"].Positive,
            hidden: false,
            disabled: true,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onContinueButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.abort'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_3__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onAbortButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
        this._heartbeatService.register(_ngModuleRef.componentFactoryResolver);
    }
    Object.defineProperty(Step4Component.prototype, "selectedAppointmentDate", {
        get: function () {
            return this._scheduleService.selectedSchedule;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Step4Component.prototype, "selectedAppointmentTimeslot", {
        get: function () {
            return this._scheduleService.selectedTimeslot;
        },
        enumerable: true,
        configurable: true
    });
    Step4Component.prototype.ngOnInit = function () { };
    Step4Component.prototype.onAbortButtonClick = function () {
        var _this = this;
        this._portalService
            .terminateUserSession()
            .subscribe({
            next: function () {
                // stop the heartbeat service
                _this._heartbeatService.stop();
                _this._router.navigate(['/landing/welcome']);
            },
            error: function (errorCode) {
                _this._alertBoxService.show(_this._ngModuleRef.componentFactoryResolver, {
                    style: _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_2__["AlertBoxStyle"].Error,
                    buttons: [{ label: 'close' }],
                    message: {
                        scopeName: _this.scopeName + '.ErrorMsg',
                        label: errorCode
                    }
                });
            }
        });
    };
    Step4Component.prototype.onContinueButtonClick = function () {
        this._router.navigate(['/registration/step5']);
    };
    Step4Component.prototype.onLoadSchedulesStarted = function () {
        this.splashScreenConfig.visibility = true;
    };
    Step4Component.prototype.onLoadSchedulesCompleted = function (resultCode) {
        this.splashScreenConfig.visibility = false;
        if (resultCode != _shared_constant__WEBPACK_IMPORTED_MODULE_7__["RESULT_CODE_SUCCESS"]) {
            this._alertBoxService.show(this._ngModuleRef.componentFactoryResolver, {
                style: _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_2__["AlertBoxStyle"].Error,
                buttons: [{ label: 'close' }],
                message: {
                    scopeName: this.scopeName + '.ErrorMsg',
                    label: resultCode
                }
            });
        }
        this.commandBarButtons[0].disabled = !this.selectedAppointmentDate || !this.selectedAppointmentTimeslot;
    };
    Step4Component.prototype.onLoadTimeslotsStarted = function () {
        this.splashScreenConfig.visibility = true;
    };
    Step4Component.prototype.onLoadTimeslotCompleted = function (resultCode) {
        this.splashScreenConfig.visibility = false;
        if (resultCode != _shared_constant__WEBPACK_IMPORTED_MODULE_7__["RESULT_CODE_SUCCESS"]) {
            this._alertBoxService.show(this._ngModuleRef.componentFactoryResolver, {
                style: _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_2__["AlertBoxStyle"].Error,
                buttons: [{ label: 'close' }],
                message: {
                    scopeName: this.scopeName + '.ErrorMsg',
                    label: resultCode
                }
            });
        }
        this.commandBarButtons[0].disabled = !this.selectedAppointmentDate || !this.selectedAppointmentTimeslot;
    };
    Step4Component.prototype.getFormattedTime = function (timeValue) {
        if (timeValue > 1200) {
            timeValue -= 1200;
        }
        var formattedTime = timeValue.toString().length === 4 ? timeValue.toString() : '0' + timeValue;
        return formattedTime.substring(0, 2) + ':' + formattedTime.substring(2, 4);
    };
    Step4Component.ɵfac = function Step4Component_Factory(t) { return new (t || Step4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_8__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_10__["HeartbeatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_alert_box_service__WEBPACK_IMPORTED_MODULE_11__["AlertBoxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_12__["ScheduleService"])); };
    Step4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step4Component, selectors: [["app-step4"]], viewQuery: function Step4Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_common_timeslot_timeslot_component__WEBPACK_IMPORTED_MODULE_5__["TimeslotComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.timeslotComponent = _t.first);
        } }, decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], [3, "loadSchedulesStarted", "loadSchedulesCompleted"], [1, "separation"], [4, "ngIf"], [1, "row"], [1, "col-md-5", "form-label-bold"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["timeslotSelected", ""], ["timeslotNotSelected", ""], [3, "buttons"], [3, "position", "status", "visibility", "message"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"], [3, "loadTimeslotStarted", "loadTimeslotCompleted"], [1, "col-md-7"]], template: function Step4Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Step4Component_ng_container_0_Template, 23, 14, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_14__["PortalHeaderComponent"], _common_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__["CalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_3__["CommandBarComponent"], _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenComponent"], _common_timeslot_timeslot_component__WEBPACK_IMPORTED_MODULE_5__["TimeslotComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9yZWdpc3RyYXRpb24vc3RlcDQvc3RlcDQuY29tcG9uZW50LnNhc3MifQ== */"] });
    return Step4Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step4',
                templateUrl: './step4.component.html',
                styleUrls: ['./step4.component.sass']
            }]
    }], function () { return [{ type: _service_portal_service__WEBPACK_IMPORTED_MODULE_8__["PortalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_10__["HeartbeatService"] }, { type: _service_alert_box_service__WEBPACK_IMPORTED_MODULE_11__["AlertBoxService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"] }, { type: _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_12__["ScheduleService"] }]; }, { timeslotComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_common_timeslot_timeslot_component__WEBPACK_IMPORTED_MODULE_5__["TimeslotComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/registration/step5/step5.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/portal/registration/step5/step5.component.ts ***!
  \**************************************************************/
/*! exports provided: Step5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step5Component", function() { return Step5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/alert-box/alert-box.component */ "./src/app/portal/common/alert-box/alert-box.component.ts");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var _common_validator_ird_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/validator/ird-validator */ "./src/app/portal/common/validator/ird-validator.ts");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/registration.service */ "./src/app/portal/registration/service/registration.service.ts");
/* harmony import */ var _heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../heartbeat/heartbeat.service */ "./src/app/portal/heartbeat/heartbeat.service.ts");
/* harmony import */ var _service_alert_box_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/alert-box.service */ "./src/app/portal/service/alert-box.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _common_directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/directive/master-form-group.directive */ "./src/app/portal/common/directive/master-form-group.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _common_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/error-msg/error-msg.component */ "./src/app/portal/common/error-msg/error-msg.component.ts");





















function Step5Component_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r148("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r148("systemSubheader"));
} }
function Step5Component_ng_container_0_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step5Component_ng_container_0_ng_container_30_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); var i_r150 = ctx.index; var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r151.removeCase(i_r150); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step5Component_ng_container_0_ng_container_30_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); var i_r150 = ctx.index; var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r153.removeCase(i_r150); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "error-msg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var i_r150 = ctx.index;
    var t1_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r145("btn.remove"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r147.businessNames.value[i_r150].seqNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopeName", ctx_r147.scopeName)("formField", ctx_r147.businessNameForm.controls.businessNames.controls[i_r150].controls.businessName);
} }
function Step5Component_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Step5Component_ng_container_0_ng_container_4_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, Step5Component_ng_container_0_ng_container_30_Template, 17, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step5Component_ng_container_0_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r155.addBusinessName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step5Component_ng_container_0_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r157.addBusinessName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "command-bar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r145 = ctx.$implicit;
    var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("masterFormGroup", ctx_r144.businessNameForm)("formGroup", ctx_r144.businessNameForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r145("lbl.step5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r145("lbl.serviceType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r145("lbl.serviceTypeRegistration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r145("lbl.casesDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r145("lbl.casesDetailsNotice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r145("lbl.number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r145("lbl.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r144.businessNames.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r145("btn.add"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx_r144.commandBarButtons);
} }
var Step5Component = /** @class */ (function () {
    function Step5Component(_portalService, _router, _formBuilder, _scheduleService, _registrationService, _heartbeatService, _alertBoxService, _ngModuleRef) {
        var _this = this;
        this._portalService = _portalService;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._scheduleService = _scheduleService;
        this._registrationService = _registrationService;
        this._heartbeatService = _heartbeatService;
        this._alertBoxService = _alertBoxService;
        this._ngModuleRef = _ngModuleRef;
        this.scopeName = 'portal.Registration.Step5';
        this.commandBarButtons = [];
        this._portalService.setPageTitle(this.scopeName + '.title');
        this.commandBarButtons.push({
            content: {
                scopeName: this.scopeName,
                label: 'btn.continue'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__["CommandBarButtonStyle"].Positive,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this.onContinueButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.back'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this.onBackButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.abort'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this.onAbortButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
        this._heartbeatService.register(_ngModuleRef.componentFactoryResolver);
        //form array
        //https://gitter.im/rxweb-project/rxweb?at=5d4c439690bba62a123df7f6
        //https://gitter.im/rxweb-project/rxweb?at=5dd725785b3db9548acaa8f1
        // this.businessNameForm = this._formBuilder.group({
        //     businessNames:  new RxFormArray([], [this.buildBusinessNameFormGroup(0)])
        // }) as RxFormGroup;
        var businessNameControls = [];
        this._registrationService.appointment.registrations.forEach(function (x) {
            businessNameControls.push(_this.buildBusinessNameFormGroup(x.seqNo, x.businessName));
        });
        if (businessNameControls.length === 0) {
            businessNameControls.push(this.buildBusinessNameFormGroup(1));
        }
        this.businessNameForm = this._formBuilder.group({
            businessNames: new _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxFormArray"]([], businessNameControls)
        });
    }
    Object.defineProperty(Step5Component.prototype, "numberOfCases", {
        get: function () {
            return this._scheduleService.selectedSchedule.numberOfCases;
        },
        enumerable: true,
        configurable: true
    });
    Step5Component.prototype.ngOnInit = function () {
        this._heartbeatService.start();
    };
    Step5Component.prototype.buildBusinessNameFormGroup = function (seqNo, businessName) {
        if (businessName === void 0) { businessName = ''; }
        return this._formBuilder.group({
            seqNo: [seqNo],
            businessName: [businessName, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].required({ message: '0022' }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].unique({ message: '0023' }),
                    _common_validator_ird_validator__WEBPACK_IMPORTED_MODULE_5__["IrdValidators"].text({
                        char: {
                            message: '0024'
                        },
                        english: {
                            message: '0025',
                            maxLength: 120
                        },
                        chinese: {
                            message: '0026',
                            maxLength: 30
                        }
                    })]
            ]
        });
    };
    Step5Component.prototype.onAbortButtonClick = function () {
        var _this = this;
        this._portalService
            .terminateUserSession()
            .subscribe({
            next: function () {
                // stop the heartbeat service
                _this._heartbeatService.stop();
                _this._router.navigate(['/landing/welcome']);
            },
            error: function (errorCode) {
                _this._alertBoxService.show(_this._ngModuleRef.componentFactoryResolver, {
                    style: _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_3__["AlertBoxStyle"].Error,
                    buttons: [{ label: 'close' }],
                    message: {
                        scopeName: _this.scopeName,
                        label: errorCode
                    }
                });
            }
        });
    };
    Step5Component.prototype.onBackButtonClick = function () {
        var _this = this;
        this._registrationService.appointment.registrations.length = 0;
        this.businessNameForm.controls.businessNames.value.forEach(function (x) {
            _this._registrationService.appointment.registrations.push(x);
        });
        this._router.navigate(['/registration/step4']);
    };
    Step5Component.prototype.onContinueButtonClick = function () {
        var _this = this;
        if (this.businessNameForm.invalid) {
            return;
        }
        this._registrationService.appointment.registrations.length = 0;
        this.businessNameForm.controls.businessNames.value.forEach(function (x) {
            _this._registrationService.appointment.registrations.push(x);
        });
        this._router.navigate(['/registration/step6']);
    };
    Object.defineProperty(Step5Component.prototype, "businessNames", {
        get: function () {
            return this.businessNameForm.get('businessNames');
        },
        enumerable: true,
        configurable: true
    });
    Step5Component.prototype.addBusinessName = function () {
        if (this.businessNames.length < this.numberOfCases) {
            this.businessNames.push(this.buildBusinessNameFormGroup(this.businessNames.length + 1));
        }
    };
    Step5Component.prototype.removeCase = function (seqNo) {
        if (this.businessNames.length > 1) {
            this.businessNames.removeAt(seqNo);
            for (var i = 0; i < this.businessNames.length; i++) {
                this.businessNames.controls[i].patchValue({ seqNo: i + 1 });
            }
        }
    };
    Step5Component.ɵfac = function Step5Component_Factory(t) { return new (t || Step5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_6__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxFormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_8__["ScheduleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_registration_service__WEBPACK_IMPORTED_MODULE_9__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_10__["HeartbeatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_alert_box_service__WEBPACK_IMPORTED_MODULE_11__["AlertBoxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"])); };
    Step5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step5Component, selectors: [["app-step5"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [3, "masterFormGroup", "formGroup"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], [1, "form-row"], [1, "col-md-2", "form-label-bold"], [1, "col-md-10"], [1, "separation"], [1, "table-responsive"], [1, "table", "table-fixed", 2, "min-width", "450px"], [1, "d-table-cell", "d-sm-none", 2, "width", "40px", "background-color", "transparent"], [1, "d-none", "d-sm-table-cell", 2, "width", "110px", "background-color", "transparent"], [2, "width", "60px"], [2, "min-width", "320px"], ["formArrayName", "businessNames"], [4, "ngFor", "ngForOf"], [1, "row", "no-gutters"], [1, "col-12"], ["type", "button", 1, "btn", "btn-normal", "add-btn-mobile", "d-block", "d-sm-none", 3, "click"], [1, "fas", "fa-plus"], ["type", "button", 1, "btn", "btn-normal", "add-btn", "d-none", "d-sm-block", 3, "click"], [1, "ml-2"], [3, "buttons"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"], [3, "formGroupName"], [1, "form-group", "d-table-cell", "d-sm-none"], ["type", "button", 1, "btn", "btn-normal", "remove-btn-mobile", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "form-group", "d-none", "d-sm-table-cell"], ["type", "button", 1, "btn", "btn-normal", "remove-btn", 3, "click"], [1, "form-group"], ["type", "text", "formControlName", "businessName", 1, "form-control"], [1, "d-table-cell"], [1, "col-12", 3, "scopeName", "formField"]], template: function Step5Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Step5Component_ng_container_0_Template, 40, 14, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_13__["PortalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _common_directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_15__["MasterFormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__["CommandBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlName"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _common_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_17__["ErrorMsgComponent"]], styles: ["td.form-group[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\ntd.form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n.add-btn[_ngcontent-%COMP%], .remove-btn[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.add-btn-mobile[_ngcontent-%COMP%], .remove-btn-mobile[_ngcontent-%COMP%] {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL3JlZ2lzdHJhdGlvbi9zdGVwNS9DOlxcVXNlcnNcXGxrYWNoXFxEb2N1bWVudHNcXEdpdFJlcG9cXGJyYnMtcG9ydGFsLXVpXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxccG9ydGFsXFxyZWdpc3RyYXRpb25cXHN0ZXA1XFxzdGVwNS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcG9ydGFsL3JlZ2lzdHJhdGlvbi9zdGVwNS9zdGVwNS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0FDRVI7QUREQTs7RUFFSSxZQUFBO0FDSUo7QURIQTs7RUFFSSxXQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvcmVnaXN0cmF0aW9uL3N0ZXA1L3N0ZXA1LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsidGQuZm9ybS1ncm91cFxyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnRcclxuICAgIGJ1dHRvblxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4XHJcbi5hZGQtYnRuLFxyXG4ucmVtb3ZlLWJ0blxyXG4gICAgd2lkdGg6IDExMHB4XHJcbi5hZGQtYnRuLW1vYmlsZSxcclxuLnJlbW92ZS1idG4tbW9iaWxlXHJcbiAgICB3aWR0aDogNDBweCIsInRkLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbnRkLmZvcm0tZ3JvdXAgYnV0dG9uIHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5hZGQtYnRuLFxuLnJlbW92ZS1idG4ge1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5hZGQtYnRuLW1vYmlsZSxcbi5yZW1vdmUtYnRuLW1vYmlsZSB7XG4gIHdpZHRoOiA0MHB4O1xufSJdfQ== */"] });
    return Step5Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step5',
                templateUrl: './step5.component.html',
                styleUrls: ['./step5.component.sass']
            }]
    }], function () { return [{ type: _service_portal_service__WEBPACK_IMPORTED_MODULE_6__["PortalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxFormBuilder"] }, { type: _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_8__["ScheduleService"] }, { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_9__["RegistrationService"] }, { type: _heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_10__["HeartbeatService"] }, { type: _service_alert_box_service__WEBPACK_IMPORTED_MODULE_11__["AlertBoxService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/registration/step6/step6.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/portal/registration/step6/step6.component.ts ***!
  \**************************************************************/
/*! exports provided: Step6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step6Component", function() { return Step6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/alert-box/alert-box.component */ "./src/app/portal/common/alert-box/alert-box.component.ts");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/splash-screen/splash-screen.component */ "./src/app/portal/common/splash-screen/splash-screen.component.ts");
/* harmony import */ var _model_IdType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/IdType */ "./src/app/portal/model/IdType.ts");
/* harmony import */ var _model_Meridiem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/Meridiem */ "./src/app/portal/model/Meridiem.ts");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../heartbeat/heartbeat.service */ "./src/app/portal/heartbeat/heartbeat.service.ts");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/registration.service */ "./src/app/portal/registration/service/registration.service.ts");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");
/* harmony import */ var _service_alert_box_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/alert-box.service */ "./src/app/portal/service/alert-box.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



















function Step6Component_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r164 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r164("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r164("systemSubheader"));
} }
function Step6Component_ng_container_0_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r161.getFormatedHKIC(ctx_r161.appointment.applicant.id));
} }
function Step6Component_ng_container_0_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r162.appointment.applicant.id);
} }
function Step6Component_ng_container_0_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var businessName_r165 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](businessName_r165.seqNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](businessName_r165.businessName);
} }
var _c0 = function (a0, a1, a2, a3, a4, a5) { return { appointmentDateEn: a0, appointmentDateZh: a1, periodStartTime: a2, periodEndTime: a3, startTimeMeridiem: a4, endTimeMeridiem: a5 }; };
function Step6Component_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Step6Component_ng_container_0_ng_container_3_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Step6Component_ng_container_0_label_27_Template, 2, 1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Step6Component_ng_container_0_label_28_Template, 2, 1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, Step6Component_ng_container_0_tr_45_Template, 5, 2, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "command-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "splash-screen", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r159 = ctx.$implicit;
    var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.step6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.serviceType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.serviceType." + ctx_r158.appointment.serviceType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.appointmentDateTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.appointmentDateTimeValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](28, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 22, ctx_r158.selectedAppointmentDate.appointmentDate, "d MMM yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 25, ctx_r158.selectedAppointmentDate.appointmentDate, "yyyy\u5E74 M\u6708 d\u65E5"), ctx_r158.getFormattedTime(ctx_r158.selectedAppointmentTimeslot.startTime), ctx_r158.getFormattedTime(ctx_r158.selectedAppointmentTimeslot.endTime), t1_r159("lbl.meridiem." + (ctx_r158.selectedAppointmentTimeslot.startTime < 1200 ? ctx_r158.Meridiem.AM : ctx_r158.Meridiem.PM)), t1_r159("lbl.meridiem." + (ctx_r158.selectedAppointmentTimeslot.endTime < 1200 ? ctx_r158.Meridiem.AM : ctx_r158.Meridiem.PM)))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.serviceUserInfo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159(ctx_r158.appointment.applicant.idType === ctx_r158.IdType.HKIC ? "lbl.hkic" : "lbl.passport"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.appointment.applicant.idType === ctx_r158.IdType.HKIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.appointment.applicant.idType === ctx_r158.IdType.Passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.surname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r158.appointment.applicant.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.casesDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r159("lbl.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r158.appointment.registrations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx_r158.commandBarButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx_r158.splashScreenConfig.position)("status", ctx_r158.splashScreenConfig.status)("visibility", ctx_r158.splashScreenConfig.visibility)("message", ctx_r158.splashScreenConfig.message);
} }
var Step6Component = /** @class */ (function () {
    function Step6Component(_portalService, _router, _heartbeatService, _registrationService, _scheduleService, _alertBoxService, _ngModuleRef) {
        var _this = this;
        this._portalService = _portalService;
        this._router = _router;
        this._heartbeatService = _heartbeatService;
        this._registrationService = _registrationService;
        this._scheduleService = _scheduleService;
        this._alertBoxService = _alertBoxService;
        this._ngModuleRef = _ngModuleRef;
        this.scopeName = 'portal.Registration.Step6';
        this.IdType = _model_IdType__WEBPACK_IMPORTED_MODULE_5__["IdType"];
        this.Meridiem = _model_Meridiem__WEBPACK_IMPORTED_MODULE_6__["Meridiem"];
        this.commandBarButtons = [];
        this.splashScreenConfig = {
            position: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenPosition"].Fixed,
            message: {
                scopeName: this.scopeName,
                label: 'loading'
            },
            visibility: false,
            status: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenStatus"].Loading
        };
        this._portalService.setPageTitle(this.scopeName + '.title');
        this.commandBarButtons.push({
            content: {
                scopeName: this.scopeName,
                label: 'btn.continue'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_3__["CommandBarButtonStyle"].Positive,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onContinueButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.back'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_3__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onBackButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.abort'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_3__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onAbortButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
        this._heartbeatService.register(_ngModuleRef.componentFactoryResolver);
    }
    Object.defineProperty(Step6Component.prototype, "appointment", {
        get: function () {
            return this._registrationService.appointment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Step6Component.prototype, "selectedAppointmentDate", {
        get: function () {
            return this._scheduleService.selectedSchedule;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Step6Component.prototype, "selectedAppointmentTimeslot", {
        get: function () {
            return this._scheduleService.selectedTimeslot;
        },
        enumerable: true,
        configurable: true
    });
    Step6Component.prototype.ngOnInit = function () { };
    Step6Component.prototype.onAbortButtonClick = function () {
        var _this = this;
        this._portalService
            .terminateUserSession()
            .subscribe({
            next: function () {
                // stop the heartbeat service
                _this._heartbeatService.stop();
                _this._router.navigate(['/landing/welcome']);
            },
            error: function (errorCode) {
                _this._alertBoxService.show(_this._ngModuleRef.componentFactoryResolver, {
                    style: _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_2__["AlertBoxStyle"].Error,
                    buttons: [{ label: 'close' }],
                    message: {
                        scopeName: _this.scopeName,
                        label: errorCode
                    }
                });
            }
        });
    };
    Step6Component.prototype.onBackButtonClick = function () {
        this._router.navigate(['/registration/step5']);
    };
    Step6Component.prototype.onContinueButtonClick = function () {
        var _this = this;
        this.splashScreenConfig.visibility = true;
        this._registrationService.submit().subscribe({
            next: function () {
                _this._heartbeatService.stop();
                _this._router.navigate(['/registration/step7']);
            },
            error: function (errorCode) {
                _this.splashScreenConfig.visibility = false;
                _this._alertBoxService.show(_this._ngModuleRef.componentFactoryResolver, {
                    style: _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_2__["AlertBoxStyle"].Error,
                    buttons: [{ label: 'close' }],
                    message: {
                        scopeName: _this.scopeName,
                        label: errorCode
                    }
                });
            }
        });
    };
    Step6Component.prototype.getFormatedHKIC = function (id) {
        var lastCharLength = id.length - 1;
        return id.substr(0, lastCharLength) + 'XXX(' + id.charAt(lastCharLength) + ')';
    };
    Step6Component.prototype.getFormattedTime = function (timeValue) {
        if (timeValue > 1200) {
            timeValue -= 1200;
        }
        var formattedTime = timeValue.toString().length === 4 ? timeValue.toString() : '0' + timeValue;
        return formattedTime.substring(0, 2) + ':' + formattedTime.substring(2, 4);
    };
    Step6Component.ɵfac = function Step6Component_Factory(t) { return new (t || Step6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_7__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_9__["HeartbeatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_registration_service__WEBPACK_IMPORTED_MODULE_10__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_11__["ScheduleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_alert_box_service__WEBPACK_IMPORTED_MODULE_12__["AlertBoxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"])); };
    Step6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step6Component, selectors: [["app-step6"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], [1, "form-row"], [1, "col-md-5", "form-label-bold"], [1, "col-md-7"], [1, "separation"], [1, "col-md-5"], ["class", "col-md-7", 4, "ngIf"], [1, "table"], [2, "width", "60px"], [4, "ngFor", "ngForOf"], [3, "buttons"], [3, "position", "status", "visibility", "message"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"]], template: function Step6Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Step6Component_ng_container_0_Template, 48, 35, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_14__["PortalHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_3__["CommandBarComponent"], _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9yZWdpc3RyYXRpb24vc3RlcDYvc3RlcDYuY29tcG9uZW50LnNhc3MifQ== */"] });
    return Step6Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step6',
                templateUrl: './step6.component.html',
                styleUrls: ['./step6.component.sass']
            }]
    }], function () { return [{ type: _service_portal_service__WEBPACK_IMPORTED_MODULE_7__["PortalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _heartbeat_heartbeat_service__WEBPACK_IMPORTED_MODULE_9__["HeartbeatService"] }, { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_10__["RegistrationService"] }, { type: _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_11__["ScheduleService"] }, { type: _service_alert_box_service__WEBPACK_IMPORTED_MODULE_12__["AlertBoxService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/registration/step7/step7.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/portal/registration/step7/step7.component.ts ***!
  \**************************************************************/
/*! exports provided: Step7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step7Component", function() { return Step7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/lib/index.js");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_to_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/splash-screen/splash-screen.component */ "./src/app/portal/common/splash-screen/splash-screen.component.ts");
/* harmony import */ var _model_IdType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/IdType */ "./src/app/portal/model/IdType.ts");
/* harmony import */ var _model_Meridiem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/Meridiem */ "./src/app/portal/model/Meridiem.ts");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/registration.service */ "./src/app/portal/registration/service/registration.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");

















var _c0 = ["acknowledgement"];
function Step7Component_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r173("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r173("systemSubheader"));
} }
function Step7Component_ng_container_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var t1_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.hkic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r170.getFormatedHKIC(ctx_r170.appointment.applicant.id));
} }
function Step7Component_ng_container_0_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var t1_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.passport"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r171.appointment.applicant.id);
} }
function Step7Component_ng_container_0_tr_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var businessName_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](businessName_r176.seqNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](businessName_r176.businessName);
} }
var _c1 = function (a0, a1, a2, a3, a4, a5) { return { appointmentDateEn: a0, appointmentDateZh: a1, periodStartTime: a2, periodEndTime: a3, startTimeMeridiem: a4, endTimeMeridiem: a5 }; };
var _c2 = function (a0, a1) { return { locationEn: a0, locationZh: a1 }; };
function Step7Component_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Step7Component_ng_container_0_ng_container_3_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, Step7Component_ng_container_0_div_45_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, Step7Component_ng_container_0_div_46_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, Step7Component_ng_container_0_tr_65_Template, 5, 2, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ol", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "command-bar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "splash-screen", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r167 = ctx.$implicit;
    var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.step7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.message"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r166.appointment.qrCode, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.transactionReferenceNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r166.appointment.trn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.serviceType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.serviceType." + ctx_r166.appointment.serviceType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.appointmentDateTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.appointmentDateTimeValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](37, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 31, ctx_r166.appointment.appointmentDate, "d MMM yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 34, ctx_r166.appointment.appointmentDate, "yyyy\u5E74 M\u6708 d\u65E5"), ctx_r166.getFormattedTime(ctx_r166.appointment.startTime), ctx_r166.getFormattedTime(ctx_r166.appointment.endTime), t1_r167("lbl.meridiem." + (ctx_r166.appointment.startTime < 1200 ? ctx_r166.Meridiem.AM : ctx_r166.Meridiem.PM)), t1_r167("lbl.meridiem." + (ctx_r166.appointment.endTime < 1200 ? ctx_r166.Meridiem.AM : ctx_r166.Meridiem.PM)))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.locationValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](44, _c2, ctx_r166.appointment.locationEn, ctx_r166.appointment.locationZh)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.serviceUserInfo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r166.appointment.applicant.idType === ctx_r166.IdType.HKIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r166.appointment.applicant.idType === ctx_r166.IdType.Passport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.surname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r166.appointment.applicant.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.casesDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r166.appointment.registrations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.noticeTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.notice1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.notice2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r167("lbl.notice3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx_r166.commandBarButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx_r166.splashScreenConfig.position)("status", ctx_r166.splashScreenConfig.status)("visibility", ctx_r166.splashScreenConfig.visibility)("message", ctx_r166.splashScreenConfig.message);
} }
var Step7Component = /** @class */ (function () {
    function Step7Component(_portalService, _router, _registrationService) {
        var _this = this;
        this._portalService = _portalService;
        this._router = _router;
        this._registrationService = _registrationService;
        this.scopeName = 'portal.Registration.Step7';
        this.IdType = _model_IdType__WEBPACK_IMPORTED_MODULE_6__["IdType"];
        this.Meridiem = _model_Meridiem__WEBPACK_IMPORTED_MODULE_7__["Meridiem"];
        this.commandBarButtons = [];
        this._portalService.setPageTitle(this.scopeName + '.title');
        this.splashScreenConfig = {
            position: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_5__["SplashScreenPosition"].Fixed,
            message: {
                scopeName: this.scopeName,
                label: 'loading'
            },
            visibility: false,
            status: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_5__["SplashScreenStatus"].Loading
        };
        this.commandBarButtons.push({
            content: {
                scopeName: this.scopeName,
                label: 'btn.print'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this.onPrintButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.save'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this.onSaveButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.exit'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this.onExitButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
    }
    Object.defineProperty(Step7Component.prototype, "appointment", {
        get: function () {
            return this._registrationService.appointment;
        },
        enumerable: true,
        configurable: true
    });
    Step7Component.prototype.ngOnInit = function () { };
    Step7Component.prototype.onExitButtonClick = function () {
        this._router.navigate(['/landing/welcome']);
    };
    Step7Component.prototype.onSaveButtonClick = function () {
        var _this = this;
        this.splashScreenConfig.visibility = true;
        html_to_image__WEBPACK_IMPORTED_MODULE_2___default.a.toPng(this.acknowledgement.nativeElement).then(function (dataUri) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(dataUri, _this.appointment.trn + ".png");
            _this.splashScreenConfig.visibility = false;
        });
    };
    Step7Component.prototype.onPrintButtonClick = function () {
        window.print();
    };
    Step7Component.prototype.getFormatedHKIC = function (id) {
        var lastCharLength = id.length - 1;
        return id.substr(0, lastCharLength) + 'XXX(' + id.charAt(lastCharLength) + ')';
    };
    Step7Component.prototype.getFormattedTime = function (timeValue) {
        if (timeValue > 1200) {
            timeValue -= 1200;
        }
        var formattedTime = timeValue.toString().length === 4 ? timeValue.toString() : '0' + timeValue;
        return formattedTime.substring(0, 2) + ':' + formattedTime.substring(2, 4);
    };
    Step7Component.ɵfac = function Step7Component_Factory(t) { return new (t || Step7Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_8__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_registration_service__WEBPACK_IMPORTED_MODULE_10__["RegistrationService"])); };
    Step7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step7Component, selectors: [["app-step7"]], viewQuery: function Step7Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.acknowledgement = _t.first);
        } }, decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], ["acknowledgement", ""], [1, "separation"], [1, "row"], [1, "col-12", "text-center", "d-block", "d-lg-none"], [1, "qrcode", 3, "src"], [1, "col-12", "separation", "d-block", "d-lg-none"], [1, "col-12", "col-lg-9"], [1, "form-row"], [1, "col-md-5", "form-label-bold"], [1, "col-md-7"], [1, "col-12", "separation"], ["class", "form-row", 4, "ngIf"], [1, "col-md-5"], [1, "col-3", "text-center", "d-none", "d-lg-block"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAYAAACrHtS+AAAF8ElEQVR4Xu3dwZLbMAwDUOf/PzqdHtuoM28NRnZS7JmiKICgKNnxPo7jeB43+Hs+z4fxeDxeVrDyt7JbLV1jmZ53Bw2/kTqP9GCECvJqymngNZbpeQfh/KerEr6ApoRvSD0FuQrPyHhReAK8hpKUQt2bdR26r+vapuPTeVUIJXzR8CUgl/AFelX4cWgFSpJvhXMVXoW//5RWhd9c4Uljc/c9bUd8SYJrSdd1UEkv4ZkiSzhehWp2q10CfNJkJfPq2qrwDacDJaOEV+HLY9mOrfPWe/gOAFSld3+q9hUlvYR7OpbwxfP1JIGqcEw+zTy1w2nH98gSjsgrkWqH05bw4zhO36UnpVCJ1HOuHnE0MRJ/Ojax03Uozrfu0vUZrybLtL+ESCWohA+f4ZW0JFl0jh2VtAoPEighsgrH15QVZC2FiT8dm9jpOjSBSOE6qdpNA6CL1aOVllbtHXS9ip/ane7SdQK1UwAS4K8am+z1ip/alfAFUtPVoYQPP6bcUZaT6lDCS/jyxkv3fy3fmmi3/qlRstdrqb7KLiEyGVvC8anadGIkpCVjS3gJT/Ln/NhpBd3d33mkspFV+P+m8OeOdjFLyj9G65FJj2/a3SYVY3D5satHCX/FcPp0ELM06KCED98T3L1glvASPlg/3uCqe3gG6tu7dG12kmXoHDvK7fT+P+7v3Z/tUjJK+PoXqiU8eMRZhR9HS3pSWjY0fFV4Fc4/slhup3/v4brnTpdHzeTpm7HkRm46lgRTxY9eYlRnSXVM5tCxeqTbAnzwenSUaFX4K3wlfDgbkwxNxlbhiy69e/h1X2zaUlnk4kUDSfbSJNF0Xq0OSS+yY6xitVxvCX/9bwo7SEvmKOFBj6H7ekLQ9NgSXsKX7763pONV6LQip/29XeHTt1FJ86QN5I45dDtQgpK16XpPPzzZEdx0oiUEKaAac3Ky0IpBvx5VZyV8/ZWkEo4ZNK2+aUVO+6vC8V9RJJVlOqkSf19BuC5C7a5SVUJkEnOyHWAhPf/GS9J5lnClx99zU4+jXboSqXaJWqYTUtWXxKxzaAU6ffGSBJIAn4CXzKuAaj+h/hKcq/DhX4UqGUmS6hxJAlFJTzJ5x1jN7mm76a1puirRS4yaZZrJJXydZpos43ZXPA+fTpZp5ao/JSNZr87BdiVc6X21U5BL+AKBBLzzlGUjk5h17Ljd2deUd+z1yWKVyuke46qYtXM//UOEEu63YNp9J0lawhG9KhwvLKrwKnz5q8arOlQU+NfEfJuSvqOJuTu5O5Je53h701bC99y0lfAFAlc1aEqGdvPJOqrw4BJIq1cJD04Cul/f6RTxcYRrwN9Chq5DO2P1p0kaVRa5Wi3h3ngl5Jbwi/ZXJa0KV6Ru3kHrMkq4IlXCGanxo9qdP5CvzUlix8ijoZ6Rp/sinffW30tPiFRlII9spsCX8A0N2lV7rmZLEp8mWhWubKCdAl+FV+H8nRY9ry+TSt5axeSOzJI9d4eqNL5puwjUlYhKuH2nbZpI9VfCgzN8sm8qQdN2JbyERzlAPyaMZsDBqoykYanC8WvKyBmb6YWKOlR/es7VJlDnTdahCa6x0BsvGrDaaXDT/kp4Fb7MqSpcpYZ2VfgaqKQCKaYt6UHXryCjDvimTRtc+gKEOtNFqL/ETmNRglRpOu8OO8WPFJ4AoIEkdgpoCcemrYRrSl1np4Kpwi96R346NUr4AtGW9C8p6UrktKqSq1qNRZWr/r6ipJdwpbsKd6TQMmlwk3tzDO/189nTJUT97bBTUBK7Eo5dcAlfp5niokn6FXt40jwlD0q0BGt8SSyaGCV8UYGUoBKODyK0q1a7qwgq4SV8/DNgmswt6cP/Fku77+l9+BLCtQNUOy3VapeAomN1bao09Te9bVDTlgSngCpQVylIMdB1qL8SHnTVSbIoQSV8gZSWarVLqoiOLeGKQAnnd9UU0qRSfdwvT5KSqUAp8Imddv3JHMvq9Wm/Hi3hWQpU4Rl+p0dX4cNP1ZLjzGkWfzCwhJfwH6TLedNfjp2UH6IXCYsAAAAASUVORK5CYII=", 1, "qrcode"], [1, "table"], [2, "width", "60px"], [4, "ngFor", "ngForOf"], [1, "text-break"], [3, "buttons"], [3, "position", "status", "visibility", "message"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"]], template: function Step7Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Step7Component_ng_container_0_Template, 78, 47, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_12__["PortalHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__["CommandBarComponent"], _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_5__["SplashScreenComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: [".qrcode[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL3JlZ2lzdHJhdGlvbi9zdGVwNy9DOlxcVXNlcnNcXGxrYWNoXFxEb2N1bWVudHNcXEdpdFJlcG9cXGJyYnMtcG9ydGFsLXVpXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxccG9ydGFsXFxyZWdpc3RyYXRpb25cXHN0ZXA3XFxzdGVwNy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcG9ydGFsL3JlZ2lzdHJhdGlvbi9zdGVwNy9zdGVwNy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9yZWdpc3RyYXRpb24vc3RlcDcvc3RlcDcuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXJjb2RlXHJcbiAgICB3aWR0aDogMjAwcHgiLCIucXJjb2RlIHtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */"] });
    return Step7Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step7',
                templateUrl: './step7.component.html',
                styleUrls: ['./step7.component.sass']
            }]
    }], function () { return [{ type: _service_portal_service__WEBPACK_IMPORTED_MODULE_8__["PortalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_10__["RegistrationService"] }]; }, { acknowledgement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['acknowledgement']
        }] }); })();


/***/ }),

/***/ "./src/app/portal/shared/string-utility.ts":
/*!*************************************************!*\
  !*** ./src/app/portal/shared/string-utility.ts ***!
  \*************************************************/
/*! exports provided: StringUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringUtility", function() { return StringUtility; });
var StringUtility = /** @class */ (function () {
    function StringUtility() {
    }
    /**
     * Convert a UTF8 array to string
     * @param data uint8 array
     */
    StringUtility.fromUTF8Array = function (data) {
        var str = '';
        for (var i = 0; i < data.length; i++) {
            var value = data[i];
            if (value < 0x80) {
                str += String.fromCharCode(value);
            }
            else if (value > 0xBF && value < 0xE0) {
                str += String.fromCharCode((value & 0x1F) << 6 | data[i + 1] & 0x3F);
                i += 1;
            }
            else if (value > 0xDF && value < 0xF0) {
                str += String.fromCharCode((value & 0x0F) << 12 | (data[i + 1] & 0x3F) << 6 | data[i + 2] & 0x3F);
                i += 2;
            }
            else {
                // surrogate pair
                var charCode = ((value & 0x07) << 18 | (data[i + 1] & 0x3F) << 12 | (data[i + 2] & 0x3F) << 6 | data[i + 3] & 0x3F) - 0x010000;
                str += String.fromCharCode(charCode >> 10 | 0xD800, charCode & 0x03FF | 0xDC00);
                i += 3;
            }
        }
        return str;
    };
    /**
     * Convert a string to array
     * @param input - input string
     */
    StringUtility.toArray = function (input) {
        var bytes = [];
        for (var i = 0; i < input.length; ++i) {
            bytes[i] = input.charCodeAt(i);
        }
        return bytes;
    };
    /**
     * Indicates whether the specified string is null or an empty string ("")
     * @param input - input string
     */
    StringUtility.isNullOrEmpty = function (input) {
        return (input === null || input === undefined || input === '');
    };
    return StringUtility;
}());



/***/ })

}]);
//# sourceMappingURL=portal-registration-registration-module.js.map