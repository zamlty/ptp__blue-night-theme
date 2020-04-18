"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// ==UserScript==
// @name         Blue Night+
// @namespace    http*://*passthepopcorn.me/*
// @version      0.1
// @description  Add some visual enhancements to the Blue Night Stylesheet
// @author       PuNkFuSe
// @match        http*://*passthepopcorn.me/*
// @run-at       document-body
// @icon        https://gitcdn.xyz/repo/datFunc/ptp__blue-night-theme/master/icons/post-topic-unread.svg
// ==/UserScript==
// [START - TO-DO] *********************************************************************************
// 1. Fix bugs.
// 2. Add new features.
// 3. Refactor.
// 4. Have fun!
// [END - TO-DO] ***********************************************************************************
(function () {
    'use strict'; // Create reusable elements and selectors.

    var elementsFactory = function () {
        var initElementsController = function initElementsController() {
            var _ref;

            var selectors = ['head', 'body'].map(function (selector) {
                return selector = document.querySelector(selector);
            });

            var _selectors = _slicedToArray(selectors, 2),
                documentHead = _selectors[0],
                documentBody = _selectors[1];

            var elements = ['link', 'style', 'div', 'img', 'p'].map(function (element) {
                return element = document.createElement(element);
            });

            var _elements = _slicedToArray(elements, 5),
                linkElement = _elements[0],
                styleElement = _elements[1],
                divElement = _elements[2],
                imgElement = _elements[3],
                paraElement = _elements[4];

            var initElementBuild = function initElementBuild(parentElement, newElement, newElementID) {
                _classCallCheck(this, initElementBuild);

                this.parentElement = parentElement;
                this.newElement = newElement;
                this.newElement.id = newElementID;
            };

            ;
            return _ref = {
                documentHead: documentHead,
                documentBody: documentBody
            }, _defineProperty(_ref, "documentBody", documentBody), _defineProperty(_ref, "linkElement", linkElement), _defineProperty(_ref, "styleElement", styleElement), _defineProperty(_ref, "divElement", divElement), _defineProperty(_ref, "imgElement", imgElement), _defineProperty(_ref, "paraElement", paraElement), _defineProperty(_ref, "initElementBuild", initElementBuild), _ref;
        };

        return {
            initElementsController: initElementsController
        };
    }(); // Create a scroll to top element.


    var scrollToTop = function () {
        var element = elementsFactory.initElementsController();

        var initElement = function initElement() {
            var classInit = new element.initElementBuild(element.documentBody, element.divElement, 'scrollToTop');
            return {
                classInit: classInit
            };
        };

        var initElementStyle = function initElementStyle() {
            var elementStyle = element.styleElement;
            elementStyle.innerHTML = "\n                #scrollToTop {\n                    visibility: hidden;\n                    opacity: 0;\n                    box-sizing: border-box;\n                    position: fixed;\n                    bottom: 30px;\n                    right: 30px;\n                    width: 55px;\n                    height: 55px;\n                    background-color: #2f3447;\n                    -webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);\n                    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);\n                    border-radius: 50%;\n                    cursor: pointer;\n                    -webkit-transition: all .3s;\n                    -o-transition: all .3s;\n                    -moz-transition: all .3s;\n                    transition: all .3s;\n                }\n\n                #arrowUpImg {\n                    opacity: .55;\n                    position: relative;\n                    top: 50%;\n                    left: 50%;\n                    -webkit-transform: translate(-50%, -50%);\n                    transform: translate(-50%, -50%);\n                    vertical-align: initial;\n                    width: 20px; height: 20px;\n                    -webkit-transition: all .3s;\n                    -o-transition: all .3s;\n                    -moz-transition: all .3s;\n                    transition: all .3s;\n                }";
            return {
                elementStyle: elementStyle
            };
        };

        var applyStyling = function applyStyling() {
            var callScrollToTopStyling = initElementStyle().elementStyle;
            element.documentHead.append(callScrollToTopStyling.cloneNode(true));
        };

        var initElementBuild = function initElementBuild() {
            initElement();
            element.documentBody.append(element.divElement);
            var scrollToTop = document.getElementById('scrollToTop');

            if (scrollToTop) {
                scrollToTop.append(element.imgElement);
                element.imgElement.setAttribute('id', 'arrowUpImg');
                var arrowUpImg = document.getElementById('arrowUpImg');
                arrowUpImg.src = 'https://gitcdn.xyz/repo/datFunc/ptp__blue-night-theme/master/icons/arrow-up-white.svg';
                scrollToTop.addEventListener('click', function () {
                    return window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
                scrollToTop.addEventListener('mouseover', function () {
                    arrowUpImg.style.opacity = '1';
                });
                scrollToTop.addEventListener('mouseout', function () {
                    arrowUpImg.style.opacity = '.55';
                });
            }

            ;
            window.addEventListener('scroll', function () {
                var y = window.scrollY;

                if (y >= 300) {
                    scrollToTop.style.visibility = 'visible';
                    scrollToTop.style.opacity = '1';
                } else {
                    scrollToTop.style.visibility = 'hidden';
                    scrollToTop.style.opacity = '0';
                }

                ;
            });
        };

        var initElementAction = function initElementAction() {
            initElementBuild();
        };

        var init = function init() {
            initElementAction();
            applyStyling();
        };

        return {
            init: init
        };
    }(); // Replace the default favicon.


    var replaceFavicon = function () {
        var element = elementsFactory.initElementsController();

        var initElement = function initElement() {
            var classInit = new element.initElementBuild(element.documentHead, element.linkElement, 'favicon');
            return {
                classInit: classInit
            };
        };

        var initElementBuild = function initElementBuild() {
            initElement();
            element.documentHead.append(element.linkElement);
            var favicon = document.getElementById('favicon');
            var faviconImg = 'https://gitcdn.xyz/repo/datFunc/ptp__blue-night-theme/master/icons/post-topic-unread.svg';
            favicon.setAttribute('rel', 'shortcut icon');
            favicon.setAttribute('href', faviconImg);
            favicon.setAttribute('type', 'image/x-icon');
        };

        var initElementAction = function initElementAction() {
            initElementBuild();
        };

        var init = function init() {
            initElementAction();
        };

        return {
            init: init
        };
    }(); // Display a loader/spinner while pages are loading.


    var pagesLoader = function () {
        var element = elementsFactory.initElementsController();

        var initElement = function initElement() {
            var classInit = new element.initElementBuild(element.documentBody, element.divElement, 'loader');
            return {
                classInit: classInit
            };
        };

        var initElementStyle = function initElementStyle() {
            var elementStyle = element.styleElement;
            elementStyle.innerHTML = "\n                #wrapper {\n                    visibility: hidden;\n                    opacity: 0;\n                    -webkit-transition: all .3s;\n                    -o-transition: all .3s;\n                    -moz-transition: all .3s;\n                    transition: all .3s;\n                }\n                #loader {\n                    position: absolute;\n                    top: 50%;\n                    left: 50%;\n                    -webkit-transform: translate(-50%, -50%);\n                    transform: translate(-50%, -50%);\n                    z-index: 99;\n                    width: 150px;\n                    height: 150px;\n                    margin: -75px 0 0 -75px;\n                    border: 16px solid #586179;\n                    border-radius: 50%;\n                    border-top: 1rem solid #4281da;\n                    width: 120px;\n                    height: 120px;\n                    -webkit-transition: all .3s;\n                    -o-transition: all .3s;\n                    -moz-transition: all .3s;\n                    transition: all .3s;\n                    -webkit-animation: spin 1s linear infinite;\n                    animation: spin 1s linear infinite;\n                }\n                \n                @-webkit-keyframes spin {\n                    0% { -webkit-transform: rotate(0deg); }\n                    100% { -webkit-transform: rotate(360deg); }\n                }\n\n                @keyframes spin {\n                    0% { transform: rotate(0deg); }\n                    100% { transform: rotate(360deg); }\n                }";
            return {
                elementStyle: elementStyle
            };
        };

        var applyStyling = function applyStyling() {
            var loaderStyling = initElementStyle().elementStyle;
            element.documentHead.appendChild(loaderStyling.cloneNode(true));
        };

        var initElementBuild = function initElementBuild() {
            initElement();
            element.documentBody.append(element.divElement);
            var loader = document.getElementById('loader');

            if (loader) {
                loader.style.visibility = 'visible';
                loader.style.opacity = '1';
            }

            ;
        };

        var initElementDestroy = function initElementDestroy() {
            initElement();
            var loader = document.getElementById('loader');
            setTimeout(function () {
                if (loader) {
                    loader.style.visibility = 'hidden';
                    loader.style.opacity = '0';
                    loader.remove();
                    loader = null;
                }

                ;
            }, 250);
        };

        var initElementAction = function initElementAction() {
            var wrapper = document.getElementById('wrapper');
            window.addEventListener('load', function (event) {
                setTimeout(function () {
                    wrapper.style.visibility = 'visible';
                    wrapper.style.opacity = '1';
                }, 250);
                initElementDestroy();
            });
            document.addEventListener('readystatechange', function (event) {
                if (event.target.readyState === 'interactive' || 'complete') {
                    initElementBuild();
                    wrapper.style.visibility = 'hidden';
                    wrapper.style.opacity = '0';
                }

                ;
            });
        };

        var init = function init() {
            initElementAction();
            applyStyling();
        };

        return {
            init: init
        };
    }(); // Replace the unicode characters in tables with the stylesheet icons.


    var tablesUnicodeCharToImg = function () {
        var element = elementsFactory.initElementsController();

        var initElement = function initElement() { };

        var initElementStyle = function initElementStyle() {
            var elementStyle = element.styleElement;
            elementStyle.innerHTML = "\n                .torrentStatus {\n                    width: 12px;\n                }";
            return {
                elementStyle: elementStyle
            };
        };

        var applyStyling = function applyStyling() {
            var statusIcon = initElementStyle().elementStyle;
            element.documentHead.appendChild(statusIcon.cloneNode(true));
        };

        var initElementBuild = function initElementBuild() {
            initElement();

            var replaceUnicodeChars = function replaceUnicodeChars(value, key, map) {
                var unicodeCharsRegExp = new RegExp(key, 'gi');
                var tableRows = '.basic-movie-list__torrent-row > *, .compact-movie-list__torrent-row > *, .huge-movie-list__movie__torrent-summary__latest-row > span:nth-child(2)';
                var targetedElements = document.querySelectorAll(tableRows);
                targetedElements.forEach(function (element) {
                    element.innerHTML = element.innerHTML.replace(unicodeCharsRegExp, value);
                });
            };

            new Map([['☐' || '&#9744;', "<img src=\"https://rawcdn.githack.com/datFunc/ptp__blue-night-theme/baca928290b62658e2d1cb73521351ea9a331ff9/icons/not-approved_alt.svg\" class=\"torrentStatus\">"], ['☑' || '&#9745;', "<img src=\"https://gitcdn.xyz/repo/datFunc/ptp__blue-night-theme/master/icons/badge-checker.svg\" class=\"torrentStatus\">"], ['✿' || '&#10047;', "<img src=\"https://gitcdn.xyz/repo/datFunc/ptp__blue-night-theme/master/icons/gold-encode-checker.svg\" class=\"torrentStatus\">"]]).forEach(replaceUnicodeChars);
        };

        var initElementAction = function initElementAction() {
            initElementBuild();
        };

        var init = function init() {
            initElementAction();
            applyStyling();
        };

        return {
            init: init
        };
    }(); // Display a modal when adding/removing a movie to bookmarks.


    var bookmarksModal = function () {
        var element = elementsFactory.initElementsController();

        var initElement = function initElement() {
            var classInit = new element.initElementBuild(element.documentBody, element.divElement, 'bookmarksModal');
            return {
                classInit: classInit
            };
        };

        var initElementStyle = function initElementStyle() {
            var elementStyle = element.styleElement;
            elementStyle.innerHTML = "\n            #bookmarksModal {\n                visibility: hidden;\n                opacity: 0;\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n                width: 420px;\n                height: 110px;\n                z-index: 999;\n                -webkit-backdrop-filter: blur(10px);\n                backdrop-filter: blur(10px);\n                background-color: rgba(7,11,22,.65);\n                border-radius: 5px;\n                -webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);\n                box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);\n                -webkit-transition: all .3s;\n                -o-transition: all .3s;\n                -moz-transition: all .3s;\n                transition: all .3s;\n            }\n            .bookmarkModalContent {\n                color: #ffffff;\n                text-align: center;\n                font-size: 1.2rem;\n                position: relative;\n                top: 50%;\n                left: 50%;\n                -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n            }";
            return {
                elementStyle: elementStyle
            };
        };

        var applyStyling = function applyStyling() {
            var bookmarksModalStyling = initElementStyle().elementStyle;
            element.documentHead.appendChild(bookmarksModalStyling.cloneNode(true));
        };

        var initElementBuild = function initElementBuild() {
            var getURL = window.location.href;

            if (getURL.includes('id=')) {
                initElement();
                element.documentBody.append(element.divElement);

                var _bookmarksModal = document.getElementById('bookmarksModal');

                var bookmarkModalContent = element.paraElement;
                bookmarkModalContent.setAttribute('class', 'bookmarkModalContent');

                _bookmarksModal.append(bookmarkModalContent);

                var parentDOM = document.querySelector('.linkbox:first-of-type');
                var bookmarkLink = parentDOM.getElementsByClassName('linkbox__link')[2];
                bookmarkLink.addEventListener('click', function () {
                    var bookmarkModalToggle = function bookmarkModalToggle() {
                        _bookmarksModal.style.visibility = 'visible';
                        _bookmarksModal.style.opacity = '1';
                        setTimeout(function () {
                            _bookmarksModal.style.visibility = 'hidden';
                            _bookmarksModal.style.opacity = '0';
                        }, 500);
                    };

                    if (bookmarkLink.innerHTML === '[Bookmark]') {
                        bookmarkModalToggle();
                        bookmarkModalContent.textContent = 'Added to bookmarks';
                    } else {
                        bookmarkModalToggle();
                        bookmarkModalContent.textContent = 'Removed from bookmarks';
                    }
                });
            }

            ;
        };

        var initElementAction = function initElementAction() {
            initElementBuild();
        };

        var init = function init() {
            initElementAction();
            applyStyling();
        };

        return {
            init: init
        };
    }();

    scrollToTop.init();
    replaceFavicon.init();
    pagesLoader.init();
    tablesUnicodeCharToImg.init();
    bookmarksModal.init();
})();