const t={saveBtn:document.querySelector("button[data-start]"),closeBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.closeBtn.disabled=!0,t.saveBtn.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.saveBtn.disabled=!0,t.closeBtn.disabled=!1})),t.closeBtn.addEventListener("click",(function(){clearInterval(e),t.saveBtn.disabled=!1,t.closeBtn.disabled=!0}));let e=null;
//# sourceMappingURL=01-color-switcher.56d024f4.js.map
