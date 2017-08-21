/*!
 * cssevents - version 0.1.2
 *
 * Made with ❤ by Steve Ottoz so@dev.so
 *
 * Copyright (c) 2017 Steve Ottoz
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.cssevents = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var el = document.createElement('div');
  var t = void 0;

  var transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'msTransition': 'MSTransitionEnd',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  var animations = {
    'animation': 'animationend',
    'OAnimation': 'oAnimationEnd',
    'MozAnimation': 'animationend',
    'msAnimation': 'MSAnimationEnd',
    'WebkitAnimation': 'webkitAnimationEnd'
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      window.transitionEnd = transitions[t];
      break;
    }
  }

  for (t in animations) {
    if (el.style[t] !== undefined) {
      window.animationEnd = animations[t];
      break;
    }
  }

  var transitionEnd = exports.transitionEnd = window.transitionEnd;
  var animationEnd = exports.animationEnd = window.animationEnd;
});