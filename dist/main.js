(()=>{"use strict";var e={818:(e,t,n)=>{e.exports=n.p+"f7be6cccbb6b5531cebc.jpg"}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(818);const t=()=>{const t=document.createElement("div"),n=document.createElement("img"),r=document.createElement("h1"),c=document.createElement("p");return n.src=e,r.innerHTML="The Odin Restaurant",c.innerHTML="You will find the best food in asgard here! Don't waste time and make your reservations RIGHT NOW!",t.append(n,r,c),t},r=document.getElementById("content"),c=document.createElement("ul"),i=document.createElement("div"),a=document.createElement("li");a.innerHTML="Home";const o=document.createElement("li");o.innerHTML="Menu";const d=document.createElement("li");d.innerHTML="Contact",a.addEventListener("click",(()=>{i.innerHTML="",i.appendChild(t())})),o.addEventListener("click",(()=>{i.innerHTML="",i.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p");return t.innerHTML="Menu",n.innerHTML="This is a test for the menu paragraph!",e.append(t,n),e})())})),d.addEventListener("click",(()=>{i.innerHTML="",i.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p");return t.innerHTML="Contact",n.innerHTML="This is a test for the contact paragraph!",e.append(t,n),e})())})),c.append(a,o,d),r.appendChild(c),r.appendChild(i),i.appendChild(t())})()})();