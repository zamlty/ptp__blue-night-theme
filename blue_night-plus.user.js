// ==UserScript==
// @name         Blue Night+
// @namespace    https://github.com/datFunc/
// @version      0.1
// @description  Add some visual enhancements to the Blue Night Stylesheet
// @author       PuNkFuSe
// @updateURL    https://github.com/datFunc/ptp__blue-night-theme/raw/master/blue_night-plus.user.js
// @downloadURL  https://github.com/datFunc/ptp__blue-night-theme/raw/master/blue_night-plus.user.js
// @grant        none
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

(() => {
    'use strict'

    // Create reusable elements and selectors.
    const elementsFactory = (() => {

        const initElementsController = () => {

            const selectors = ['head', 'body'].map((selector) => (selector = document.querySelector(selector)));
            const [documentHead, documentBody] = selectors;
            const elements = ['link', 'style', 'div', 'img', 'p'].map((element) => (element = document.createElement(element)));
            const [linkElement, styleElement, divElement, imgElement, paraElement] = elements;

            class initElementBuild {
                constructor(parentElement, newElement, newElementID) {
                    this.parentElement = parentElement;
                    this.newElement = newElement;
                    this.newElement.id = newElementID;
                };
            };

            return {
                documentHead: documentHead,
                documentBody, documentBody,
                linkElement: linkElement,
                styleElement: styleElement,
                divElement: divElement,
                imgElement: imgElement,
                paraElement: paraElement,
                initElementBuild: initElementBuild
            };

        };

        return {
            initElementsController: initElementsController
        };

    })();

    // Create a scroll to top element.
    const scrollToTop = (() => {

        const element = elementsFactory.initElementsController();
        const initElement = () => {
            const classInit = new element.initElementBuild(element.documentBody, element.divElement, 'scrollToTop');
            return {
                classInit: classInit
            }
        };

        const initElementStyle = () => {

            const elementStyle = element.styleElement;
            elementStyle.innerHTML = `
                #scrollToTop {
                    visibility: hidden;
                    opacity: 0;
                    box-sizing: border-box;
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 55px;
                    height: 55px;
                    background-color: #2f3447;
                    -webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
                    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
                    border-radius: 50%;
                    cursor: pointer;
                    -webkit-transition: all .3s;
                    -o-transition: all .3s;
                    -moz-transition: all .3s;
                    transition: all .3s;
                }

                #arrowUpImg {
                    opacity: .55;
                    position: relative;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    vertical-align: initial;
                    width: 20px; height: 20px;
                    -webkit-transition: all .3s;
                    -o-transition: all .3s;
                    -moz-transition: all .3s;
                    transition: all .3s;
                }`;
            return {
                elementStyle: elementStyle
            };
        };

        const applyStyling = () => {
            const callScrollToTopStyling = initElementStyle().elementStyle;
            element.documentHead.append(callScrollToTopStyling.cloneNode(true));
        };

        const initElementBuild = () => {
            initElement();
            element.documentBody.append(element.divElement);
            let scrollToTop = document.getElementById('scrollToTop');
            if (scrollToTop) {
                scrollToTop.append(element.imgElement);
                element.imgElement.setAttribute('id', 'arrowUpImg');
                let arrowUpImg = document.getElementById('arrowUpImg');
                arrowUpImg.src = 'https://gitcdn.xyz/repo/datFunc/ptp__blue-night-theme/master/icons/arrow-up-white.svg';
                scrollToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
                scrollToTop.addEventListener('mouseover', () => { arrowUpImg.style.opacity = '1' });
                scrollToTop.addEventListener('mouseout', () => { arrowUpImg.style.opacity = '.55' });
            };
            window.addEventListener('scroll', () => {
                const y = window.scrollY;
                if (y >= 300) {
                    scrollToTop.style.visibility = 'visible';
                    scrollToTop.style.opacity = '1';
                } else {
                    scrollToTop.style.visibility = 'hidden';
                    scrollToTop.style.opacity = '0';
                };
            });
        };

        const initElementAction = () => {
            initElementBuild();
        };

        const init = () => {
            initElementAction();
            applyStyling();
        };

        return {
            init: init
        };

    })();

    // Replace the default favicon.
    const replaceFavicon = (() => {
        const element = elementsFactory.initElementsController();
        const initElement = () => {
            const classInit = new element.initElementBuild(element.documentHead, element.linkElement, 'favicon');
            return {
                classInit: classInit
            }
        };

        const initElementBuild = () => {
            initElement();
            element.documentHead.append(element.linkElement);
            let favicon = document.getElementById('favicon');
            let faviconImg = 'https://gitcdn.xyz/repo/datFunc/ptp__blue-night-theme/master/icons/post-topic-unread.svg';
            favicon.setAttribute('rel', 'shortcut icon');
            favicon.setAttribute('href', faviconImg);
            favicon.setAttribute('type', 'image/x-icon');
        };

        const initElementAction = () => {
            initElementBuild();
        };

        const init = () => {
            initElementAction();
        };

        return {
            init: init
        };

    })();

    // Display a loader/spinner while pages are loading.
    const pagesLoader = (() => {
        const element = elementsFactory.initElementsController();
        const initElement = () => {
            const classInit = new element.initElementBuild(element.documentBody, element.divElement, 'loader');
            return {
                classInit: classInit
            }
        };

        const initElementStyle = () => {

            const elementStyle = element.styleElement;
            elementStyle.innerHTML = `
                #wrapper {
                    visibility: hidden;
                    opacity: 0;
                    -webkit-transition: all .3s;
                    -o-transition: all .3s;
                    -moz-transition: all .3s;
                    transition: all .3s;
                }
                #loader {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    z-index: 99;
                    width: 150px;
                    height: 150px;
                    margin: -75px 0 0 -75px;
                    border: 16px solid #586179;
                    border-radius: 50%;
                    border-top: 1rem solid #4281da;
                    width: 120px;
                    height: 120px;
                    -webkit-transition: all .3s;
                    -o-transition: all .3s;
                    -moz-transition: all .3s;
                    transition: all .3s;
                    -webkit-animation: spin 1s linear infinite;
                    animation: spin 1s linear infinite;
                }

                @-webkit-keyframes spin {
                    0% { -webkit-transform: rotate(0deg); }
                    100% { -webkit-transform: rotate(360deg); }
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }`;
            return {
                elementStyle: elementStyle
            };
        };

        const applyStyling = () => {
            const loaderStyling = initElementStyle().elementStyle;
            element.documentHead.appendChild(loaderStyling.cloneNode(true));
        };

        const initElementBuild = () => {
            initElement();
            element.documentBody.append(element.divElement);
            let loader = document.getElementById('loader');
            if (loader) {
                loader.style.visibility = 'visible';
                loader.style.opacity = '1';
            };
        };

        const initElementDestroy = () => {
            initElement();
            let loader = document.getElementById('loader');
            setTimeout(() => {
                if (loader) {
                    loader.style.visibility = 'hidden';
                    loader.style.opacity = '0';
                    loader.remove();
                    loader = null;
                };
            }, 250);
        };

        const initElementAction = () => {
            const wrapper = document.getElementById('wrapper');
            window.addEventListener('load', (event) => {
                setTimeout(() => {
                    wrapper.style.visibility = 'visible';
                    wrapper.style.opacity = '1';
                }, 250);
                initElementDestroy();
            });
            document.addEventListener('readystatechange', (event) => {
                if (event.target.readyState === 'interactive' || 'complete') {
                    initElementBuild();
                    wrapper.style.visibility = 'hidden';
                    wrapper.style.opacity = '0';
                };
            });

        };

        const init = () => {
            initElementAction();
            applyStyling();
        };

        return {
            init: init
        };

    })();

    // Replace the unicode characters in tables with the stylesheet icons.
    const tablesUnicodeCharToImg = (() => {
        const element = elementsFactory.initElementsController();
        const initElement = () => { }

        const initElementStyle = () => {

            const elementStyle = element.styleElement;
            elementStyle.innerHTML = `
                .torrentStatus {
                    width: 12px;
                }`;
            return {
                elementStyle: elementStyle
            };
        };

        const applyStyling = () => {
            const statusIcon = initElementStyle().elementStyle;
            element.documentHead.appendChild(statusIcon.cloneNode(true));
        };

        const initElementBuild = () => {
            initElement();
            const replaceUnicodeChars = (value, key, map) => {
                const unicodeCharsRegExp = new RegExp(key, 'gi');
                const tableRows = '.basic-movie-list__torrent-row > *, .compact-movie-list__torrent-row > *, .huge-movie-list__movie__torrent-summary__latest-row > span:nth-child(2)';
                const targetedElements = document.querySelectorAll(tableRows);
                targetedElements.forEach((element) => {
                    element.innerHTML = element.innerHTML.replace(unicodeCharsRegExp, value)
                });
            };

            new Map([
                ['☐' || '&#9744;', `<img src="https://rawcdn.githack.com/datFunc/ptp__blue-night-theme/baca928290b62658e2d1cb73521351ea9a331ff9/icons/not-approved_alt.svg" class="torrentStatus">`]
                , ['☑' || '&#9745;', `<img src="https://gitcdn.xyz/repo/datFunc/ptp__blue-night-theme/master/icons/badge-checker.svg" class="torrentStatus">`],
                ['✿' || '&#10047;', `<img src="https://gitcdn.xyz/repo/datFunc/ptp__blue-night-theme/master/icons/gold-encode-checker.svg" class="torrentStatus">`]]).forEach(replaceUnicodeChars);
        };

        const initElementAction = () => {
            initElementBuild();
        };

        const init = () => {
            initElementAction();
            applyStyling();
        };

        return {
            init: init
        };

    })();

    // Display a modal when adding/removing a movie to bookmarks.
    const bookmarksModal = (() => {
        const element = elementsFactory.initElementsController();
        const initElement = () => {
            const classInit = new element.initElementBuild(element.documentBody, element.divElement, 'bookmarksModal');
            return {
                classInit: classInit
            }
        };

        const initElementStyle = () => {

            const elementStyle = element.styleElement;
            elementStyle.innerHTML = `
            #bookmarksModal {
                visibility: hidden;
                opacity: 0;
                position: fixed;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                width: 420px;
                height: 110px;
                z-index: 999;
                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                background-color: rgba(7,11,22,.65);
                border-radius: 5px;
                -webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
                box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
                -webkit-transition: all .3s;
                -o-transition: all .3s;
                -moz-transition: all .3s;
                transition: all .3s;
            }
            .bookmarkModalContent {
                color: #ffffff;
                text-align: center;
                font-size: 1.2rem;
                position: relative;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
            }`;
            return {
                elementStyle: elementStyle
            };
        };

        const applyStyling = () => {
            const bookmarksModalStyling = initElementStyle().elementStyle;
            element.documentHead.appendChild(bookmarksModalStyling.cloneNode(true));
        };

        const initElementBuild = () => {
            const getURL = window.location.href;
            if ((getURL.includes('id='))) {
                initElement();
                element.documentBody.append(element.divElement);
                const bookmarksModal = document.getElementById('bookmarksModal');
                const bookmarkModalContent = element.paraElement;
                bookmarkModalContent.setAttribute('class', 'bookmarkModalContent');
                bookmarksModal.append(bookmarkModalContent);
                const parentDOM = document.querySelector('.linkbox:first-of-type');
                const bookmarkLink = parentDOM.getElementsByClassName('linkbox__link')[2];
                bookmarkLink.addEventListener('click', () => {
                    const bookmarkModalToggle = () => {
                        bookmarksModal.style.visibility = 'visible';
                        bookmarksModal.style.opacity = '1';
                        setTimeout(() => {
                            bookmarksModal.style.visibility = 'hidden';
                            bookmarksModal.style.opacity = '0';
                        }, 500);
                    }
                    if (bookmarkLink.innerHTML === '[Bookmark]') {
                        bookmarkModalToggle();
                        bookmarkModalContent.textContent = 'Added to bookmarks';
                    } else {
                        bookmarkModalToggle();
                        bookmarkModalContent.textContent = 'Removed from bookmarks';
                    }
                });
            };
        };

        const initElementAction = () => {
            initElementBuild();
        };

        const init = () => {
            initElementAction();
            applyStyling();
        };

        return {
            init: init
        };

    })();

    scrollToTop.init();
    replaceFavicon.init();
    pagesLoader.init();
    tablesUnicodeCharToImg.init();
    bookmarksModal.init();

})();