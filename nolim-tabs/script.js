(function () {
    if ('#bullet' != '' && '#bullet' != '#') {
        if (typeof window.nlm079tabs == 'undefined') {
        window.nlm079tabs = [];
        window.nlm079tabs.push('#bullet');
        } else {
        window.nlm079tabs.push('#bullet');
        }
    }
    function t_ready(e) {
        'loading' != document.readyState
        ? e()
        : document.addEventListener
            ? document.addEventListener('DOMContentLoaded', e)
            : document.attachEvent('onreadystatechange', function () {
            'loading' != document.readyState && e();
            });
    }
    t_ready(function () {
        if ('#bullet' != '' && '#bullet' != '#') {
        function checkTabsNames() {
            for (let i = 0; i < window.nlm079tabs.length; i++) {
            window.nlm079tabs.forEach(function (item) {
                if (
                window.nlm079tabsError == undefined &&
                window.nlm079tabs[i] != item &&
                window.nlm079tabs[i].includes(item)
                ) {
                alert(
                    'Пожалуйста измените имена ссылок для табов! Они не должны быть похожи друг на друга.'
                );
                window.nlm079tabsError = true;
                }
            });
            }
        }
        checkTabsNames();
        }
        let sliderId = 373899466;
        var isAnimationOn = false;
        var myOpts;
        let slidesNotChangeYet = true;
        let blocks =
        '#rec633468549, #rec633468550, #rec633468551, #rec633468552, #rec633468553, #rec633468554, #rec633468555';
        let somebuttons = '#bullet';
        let blocksArr = blocks.replace(/\s+/g, '').split(',');
        if (typeof window.sliderBlocksList == 'undefined') {
        window.sliderBlocksList = [];
        blocksArr.forEach(function (item) {
            let block = document.querySelector(item);
            window.sliderBlocksList.push(block);
        });
        } else {
        blocksArr.forEach(function (item) {
            let block = document.querySelector(item);
            window.sliderBlocksList.push(block);
        });
        }
        let ab = setInterval(function () {
        if (window.t_animateSbs__checkIntoviewEls != undefined) {
            clearInterval(ab);
            window.t_animateSbs__checkIntoviewEls = function (s, t) {
            t &&
            t.length &&
            ((s.scrollTop = window.pageYOffset),
                t.filter(function (t) {
                let block = t.closest('.r');
                var e = s.scrollTop + t.triggerOffset,
                    a = 'blockintoview' === t.animType ? e >= t.blockTopOffset : e >= t.topOffset,
                    e = t.closest('.t396').parentElement,
                    e =
                    e.classList.contains('t397__off') ||
                    e.classList.contains('t395__off') ||
                    e.classList.contains('t400__off');
                if (!window.sliderBlocksList.includes(block)) {
                    return (
                    !(a && !t.classList.contains('t-sbs-anim_started') && !e) ||
                    (t.classList.add('t-sbs-anim_started'), !1)
                    );
                } else {
                    return !(a && !t.classList.contains('t-sbs-anim_started') && !e) || !1;
                }
                }));
            };
        } else if (window.t_animationSBS__updateIntoViewElsState != undefined) {
            clearInterval(ab);
            window.t_animationSBS__updateIntoViewElsState = function (t) {
            t &&
            t.length &&
            t.forEach(function (t) {
                let block = t.closest('.r');
                var e = window.pageYOffset + t.triggerOffset,
                e = 'blockintoview' === t.animType ? e >= t.parentRecTopPos : e >= t.topOffset,
                n = t.closest('.t396').parentElement,
                a = ['t397__off', 't395__off', 't400__off'].some(function (t) {
                    return n.classList.contains(t);
                });
                if (!window.sliderBlocksList.includes(block)) {
                !e ||
                a ||
                t.classList.contains('t-sbs-anim_started') ||
                t.classList.add('t-sbs-anim_started');
                } else {
                !e || a || t.classList.contains('t-sbs-anim_started');
                }
            });
            };
        }
        }, 10);
        let ab2 = setInterval(function () {
        if (window.t_animate__setAnimELemsState != undefined) {
            clearInterval(ab2);
            window.t_animate__setAnimELemsState = function (t, e, a) {
            t.forEach(function (t) {
                let block = t.closest('.r');
                if (!window.sliderBlocksList.includes(block)) {
                var n = t.getBoundingClientRect().top + window.pageYOffset;
                if (n < e - 500)
                    return (
                    t.classList.remove('t-animate'),
                        t.classList.remove('t-animate_no-hover'),
                    'animatednumber' === t_animate__getAttrByResBase(t, 'style') &&
                    t_animate__animateNumbers(t),
                        !0
                    );
                var i = t_animate__detectElemTriggerOffset(t, a);
                t_animate__setCustomAnimSettings(t, n, a),
                n < i &&
                (t_animate__removeNoHoverClassFromBtns(t),
                    t.classList.add('t-animate_started'),
                'animatednumber' === t_animate__getAttrByResBase(t, 'style') &&
                t_animate__animateNumbers(t)),
                n >= i && t.classList.add('t-animate_wait');
                }
            });
            };
        }
        }, 10);
        let ab3 = setInterval(function () {
        if (window.t_animateSbs__rereadElsValues != undefined) {
            clearInterval(ab3);
            window.t_animateSbs__rereadElsValues = function (opts) {
            myOpts = opts;
            var elements = opts ? opts.els : null;
            if (elements && elements.length) {
                Array.prototype.forEach.call(elements, function (element) {
                t_animateSbs__cashElsTopOffset(element, opts);
                if (element.changeType === 'scroll') {
                    t_animateSbs__updateStepsStartValues(element);
                }
                });
            }
            };
        } else if (window.t_animationSBS__changeElValues != undefined) {
            clearInterval(ab3);
            window.t_animationSBS__changeElValues = function (animatedObject) {
            myOpts = animatedObject;
            if (animatedObject) {
                animatedObject.elements.forEach(function (element) {
                t_animationSBS__setAndCacheElTopPos(element, animatedObject);
                if (element.animType !== 'scroll') return;
                t_animationSBS__updateStepsValues(element);
                });
            }
            };
        }
        }, 10);
        let blocksID = 0;
        if (window.location.hash.includes(`#${somebuttons}`)) {
            const tabId = window.location.hash.split(`#${somebuttons}=`)[1];
            if (!isNaN(tabId)) {
                blocksID = tabId - 1;
                if (blocksID < 0) {
                blocksID = 0;
                }
            }
        }
        let isCicleOn = false;
        let isScrollToTop = false;
        blocksArr.forEach(function (item, i) {
        let block = document.querySelector(item);
        block.classList.add('nolimAutoScaleFix');
        block.setAttribute('nlm079slider-id', sliderId);
        if (block.classList.contains('r_hidden')) {
            block.classList.replace('r_hidden', 'r_showed');
        }
        });
        let firstBlock = document.querySelector(blocksArr[blocksID]);
        if (window.nlm061obj && window.nlm061obj.blocksHideOnLoadPage.includes('#' + firstBlock.id)) {
        } else {
        firstBlock.classList.remove('nolimAutoScaleFix');
        }
        firstBlock.classList.add('activeSlide');
        setActiveTab();
        function removeAnimation(blk) {
        let block = document.querySelector(blk);
        let elemList = block.querySelectorAll('.t396__elem');
        elemList.forEach(function (el) {
            if (
            el.hasAttribute('data-animate-sbs-event') &&
            el.getAttribute('data-animate-sbs-event') != 'hover' &&
            el.getAttribute('data-animate-sbs-event') != 'click' &&
            el.getAttribute('data-animate-sbs-event') != 'scroll'
            ) {
            el.classList.remove('t-sbs-anim_started');
            }
            if (el.classList.contains('t-sbs-anim_reversed')) {
            el.classList.remove('t-sbs-anim_reversed');
            el.classList.remove('t-sbs-anim_started');
            }
            if (el.hasAttribute('data-animate-style')) {
            if (el.hasAttribute('data-animate-delay')) {
                el.style.transitionDelay = '0s';
            }
            if (el.hasAttribute('data-animate-duration')) {
                el.style.transitionDuration = '0s';
            }
            el.classList.remove('t-animate_started');
            }
        });
        }
        function addAnimation(blk) {
        let block = document.querySelector(blk);
        let elemList = block.querySelectorAll('.t396__elem');
        elemList.forEach(function (el) {
            if (
            el.hasAttribute('data-animate-sbs-event') &&
            el.getAttribute('data-animate-sbs-event') != 'hover' &&
            el.getAttribute('data-animate-sbs-event') != 'click' &&
            el.getAttribute('data-animate-sbs-event') != 'scroll'
            ) {
            el.classList.add('t-sbs-anim_started');
            }
            if (el.hasAttribute('data-animate-style')) {
            if (el.hasAttribute('data-animate-delay')) {
                el.style.transitionDelay = el.getAttribute('data-animate-delay') + 's';
            }
            if (el.hasAttribute('data-animate-duration')) {
                el.style.transitionDuration = el.getAttribute('data-animate-duration') + 's';
            }
            el.classList.add('t-animate_started');
            }
        });
        }
        function checkTopAndAnimate() {
        if (slidesNotChangeYet) {
            let block = document.querySelector(blocksArr[0]);
            let elemList = block.querySelectorAll('.t-animate, .t396__elem[data-animate-sbs-event]');
            elemList.forEach(function (el) {
            if (el.hasAttribute('data-animate-style')) {
                if (el.hasAttribute('data-animate-delay')) {
                el.style.transitionDelay = '0s';
                }
                if (el.hasAttribute('data-animate-duration')) {
                el.style.transitionDuration = '0s';
                }
            }
            });
            elemList.forEach(function (el) {
            let h3 = el.clientHeight / 1000;
            scrollEvent =
                window.pageYOffset >
                el.getBoundingClientRect().top +
                window.pageYOffset -
                document.documentElement.clientHeight +
                h3;
            if (scrollEvent) {
                if (
                el.hasAttribute('data-animate-sbs-event') &&
                el.getAttribute('data-animate-sbs-event') != 'hover' &&
                el.getAttribute('data-animate-sbs-event') != 'click' &&
                el.getAttribute('data-animate-sbs-event') != 'scroll'
                ) {
                el.classList.add('t-sbs-anim_started');
                }
                if (el.hasAttribute('data-animate-style')) {
                el.classList.add('t-animate_started');
                }
            }
            });
        }
        }
        window.addEventListener('scroll', function () {
        checkTopAndAnimate();
        });
        checkTopAndAnimate();
        for (let i = 1; i < blocksArr.length; i++) {
        removeAnimation(blocksArr[i]);
        }
        function setActiveTab() {
            if (document.querySelector('.active-tab')) {
            document.querySelector('.active-tab').classList.remove('active-tab');
            }
            const allTabs = [...document.querySelectorAll('.block-switch-tab')];
            const activeTab = allTabs.find((tab) => tab.querySelector(`[href="${somebuttons}${blocksID + 1}"]`));
            if (activeTab) {
            activeTab.classList.add('active-tab');
            }
        }
        function showAnotherTab() {
        if (document.querySelector('#firstBlockAnimOff')) {
            document.querySelector('#firstBlockAnimOff').remove();
            isAnimationOn = true;
        }
        setTimeout(function () {
            window.t_animateSbs__rereadElsValues
            ? t_animateSbs__rereadElsValues(myOpts)
            : t_animationSBS__changeElValues(myOpts);
        }, 0);
        for (let i = 0; i < blocksArr.length; i++) {
            if (i != blocksID) {
            removeAnimation(blocksArr[i]);
            }
        }
        addAnimation(blocksArr[blocksID]);
        blocksArr.forEach(function (item, i) {
            let block = document.querySelector(item);
            block.classList.add('nolimAutoScaleFix');
            block.classList.remove('activeSlide');
        });
        setActiveTab();
        window.history.pushState(null, null, `#${somebuttons}=${blocksID + 1}`);
        let activeBlock = document.querySelector(blocksArr[blocksID]);
        activeBlock.classList.remove('nolimAutoScaleFix');
        activeBlock.classList.add('activeSlide');
        if (typeof t_animationExt__init != 'undefined') {
            t_animationExt__init();
        }
        if (isScrollToTop) {
            let nextBlock = document.querySelector(blocksArr[blocksID]);
            function scrollSlideToTop() {
            let v = 0.8;
            let w = window.pageYOffset,
                t = nextBlock.getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step);
            function step(time) {
                if (start === null) start = time;
                let progress = time - start,
                r = t < 0 ? Math.max(w - progress / v, w + t) : Math.min(w + progress / v, w + t);
                window.scrollTo(0, r);
                if (r != w + t) {
                requestAnimationFrame(step);
                }
            }
            }
            scrollSlideToTop();
        }
        if ('y' === window.lazy) {
            t_lazyload_update();
        }
        if (typeof t_slds_updateSlider != 'undefined') {
            let blockNumber = blocksArr[blocksID].replace('#rec', '');
            t_slds_updateSlider(blockNumber);
        }
        setTimeout(function () {
            t396_allelems__renderView(document.querySelector(blocksArr[blocksID] + ' .t396__artboard'));
        }, 100);
        slidesNotChangeYet = false;
        }
        let id = document.querySelector('body');
        id.addEventListener(
        'click',
        function (e) {
            for (var target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches('[href="#next"]')) {
                e.preventDefault();
                if (blocksID + 1 == blocksArr.length && isCicleOn == true) {
                blocksID = 0;
                } else if (blocksID + 1 < blocksArr.length) {
                blocksID = blocksID + 1;
                }
                showAnotherTab();
                break;
            }
            if (target.matches('[href="#prev"]')) {
                e.preventDefault();
                if (blocksID == 0 && isCicleOn == true) {
                blocksID = blocksArr.length - 1;
                } else if (blocksID - 1 >= 0) {
                blocksID = blocksID - 1;
                }
                showAnotherTab();
                break;
            }
            if (
                somebuttons != '' &&
                somebuttons != '#' &&
                target.getAttribute('href') &&
                target.getAttribute('href').includes(`${somebuttons}=`)
            ) {
                e.preventDefault();
                e.stopPropagation();
                console.log(target.getAttribute('href'));
                const num = target.getAttribute('href').split(`${somebuttons}=`)[1];
                console.log(num);
                blocksID = num - 1;
                showAnotherTab();
                break;
            }
            }
        },
        false
        );
    });
})();