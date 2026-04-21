export const qs  = (selector, parent = document) => parent.querySelector(selector);
export const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];
export const on  = (el, event, handler) => el.addEventListener(event, handler);
