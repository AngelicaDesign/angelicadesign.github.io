// https://tylercipriani.com/2014/07/12/crossbrowser-javascript-scrollbar-detection.html
// https://gist.github.com/numee/1e7a19cd26113323f1ae.js

/**
 * hasScrollbar is a JavaScript function to determine if the current
 * window is scrollable or not, on a given axe or both.
 *
 * @param {optional string} axe - The axe where the scroll is checked. Must be "x" or "y".
 * @return {boolean}
 */
var hasScrollbar = function(axe) {
    var rootElem = document.documentElement || document.body,
        overflowStyle,
        overflowYStyle;

    if (typeof rootElem.currentStyle !== 'undefined') {
        overflowStyle = rootElem.currentStyle.overflow;
        overflowYStyle = rootElem.currentStyle.overflowY;
    }
    overflowStyle = overflowStyle || window.getComputedStyle(rootElem, '').overflow;
    overflowYStyle = overflowYStyle || window.getComputedStyle(rootElem, '').overflowY;

    if (axe === 'x') {
        var contentOverflows = rootElem.scrollWidth > rootElem.clientWidth,
            overflowShown = /^(visible|auto)$/.test(overflowStyle),
            alwaysShowScroll = overflowStyle === 'scroll';
        return (contentOverflows && overflowShown) || (alwaysShowScroll);
    }
    else if (axe === 'y') {
        var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight,
            overflowShown = /^(visible|auto)$/.test(overflowYStyle),
            alwaysShowScroll = overflowYStyle === 'scroll';
        return (contentOverflows && overflowShown) || (alwaysShowScroll);
    }
    else {
        var contentOverflows = rootElem.scrollWidth > rootElem.clientWidth || rootElem.scrollHeight > rootElem.clientHeight,
            overflowShown    = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle),
            alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

        return (contentOverflows && overflowShown) || (alwaysShowScroll);
    }
}
