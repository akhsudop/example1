!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("1WSnx"),a="feedback-form-state",l=document.querySelector(".feedback-form");l.addEventListener("input",(0,n.throttle)((function(e){localStorage.setItem(a,JSON.stringify({message:e.currentTarget.message.value,email:e.currentTarget.email.value}))}),500));l.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(a))),console.log(JSON.parse(localStorage.getItem(a)).entries),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.3135bef0.js.map