var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o("kEUo3");const a=document.querySelector(".feedback-form");a.addEventListener("input",(e=>{localStorage.setItem("feedback-form-state",JSON.stringify({message:e.currentTarget.message.value,email:e.currentTarget.email.value}))}));a.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),console.log(JSON.parse(localStorage.getItem("feedback-form-state")).entries),localStorage.clear()}));
//# sourceMappingURL=03-feedback.f11662bb.js.map
