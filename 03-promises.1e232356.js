!function(){var e={form:document.querySelector("form.form")};function o(e,o){var n=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}e.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=e.form.elements,i=t.amount.value,r=t.step.value,a=t.delay.value,c=Number(a),u=1;u<=Number(i);u+=1,c+=Number(r))o(u,c).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.1e232356.js.map
