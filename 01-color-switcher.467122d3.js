!function(){var t={saveBtn:document.querySelector("button[data-start]"),closeBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.saveBtn.addEventListener("click",(function(){e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.saveBtn.disabled=!0,t.closeBtn.disabled=!1})),t.closeBtn.addEventListener("click",(function(){clearInterval(e),t.saveBtn.disabled=!1,t.closeBtn.disabled=!0}));var e=null}();
//# sourceMappingURL=01-color-switcher.467122d3.js.map
