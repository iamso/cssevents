const el = document.createElement('div');
let t;

const transitions = {
  'transition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'MozTransition': 'transitionend',
  'msTransition': 'MSTransitionEnd',
  'WebkitTransition': 'webkitTransitionEnd',
};

const animations = {
  'animation': 'animationend',
  'OAnimation': 'oAnimationEnd',
  'MozAnimation': 'animationend',
  'msAnimation': 'MSAnimationEnd',
  'WebkitAnimation': 'webkitAnimationEnd',
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

export const transitionEnd = window.transitionEnd;
export const animationEnd = window.animationEnd;
