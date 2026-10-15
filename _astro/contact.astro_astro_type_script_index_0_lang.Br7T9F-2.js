import{r as e}from"./config.DzMklsjf.js";var t=document.getElementById(`cform`);if(t){let n=e=>document.getElementById(e),r=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`),i=e=>n(e).value.trim(),a=n(`csum`);function o(){let e=i(`cName`),t=i(`cPhone`),o=n(`cAbout`).value,s=i(`cMsg`);if(!e&&!t&&!s){a.innerHTML=`Your message will appear here as you type.`;return}a.innerHTML=`<strong>`+r(e||`Your name`)+`</strong> · `+r(t||`your number`)+` · `+r(o)+(s?`<br>`+r(s):``)}[`cName`,`cPhone`,`cEmail`,`cAbout`,`cMsg`].forEach(e=>n(e).addEventListener(`input`,o)),t.addEventListener(`submit`,t=>{t.preventDefault();let r=i(`cName`),a=i(`cPhone`),o=i(`cEmail`),s=n(`cAbout`).value,c=i(`cMsg`),l=!o||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o);if(n(`wName`).classList.toggle(`err`,!r),n(`wPhone`).classList.toggle(`err`,!a),n(`wEmail`).classList.toggle(`err`,!l),!r||!a||!l)return;let u=`Hi Ceylon Carriers!
• About: `+s+`
• Name: `+r+`
• Phone: `+a+`
• Email: `+(o||`not given`)+(c?`
• Message: `+c:``)+`
• Sent from: contact page`;window.open(e(u),`_blank`,`noopener`),n(`cdone`).textContent=`WhatsApp is opening with your message. If it did not, tap the button again.`})}