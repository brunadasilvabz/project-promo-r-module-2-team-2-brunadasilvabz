"use strict";const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){data.photo=fr.result,profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}fileField.addEventListener("change",getImage);const legendElement=document.querySelectorAll(".js-containerLegend"),upArrow=document.querySelector(".js-upArrow"),containerDesign=document.querySelector(".js-palettes"),upArrow1=document.querySelector(".js-upArrow1"),containerFill=document.querySelector(".js-form__contact"),upArrow2=document.querySelector(".js-upArrow2"),containerCreate=document.querySelector(".js-containerCreate"),btnCreate=document.querySelector(".js-btn-create"),shareTwitter=document.querySelector(".js-shareTwitter"),resetBtnElement=document.querySelector(".js-resetBtn"),careerInput=document.querySelector(".js-career"),nameInput=document.querySelector(".js-name"),careerCardInput=document.querySelector(".js-careerCard"),nameCardInput=document.querySelector(".js-nameCard"),mailInput=document.querySelector(".js-mailInput"),telInput=document.querySelector(".js-telInput"),linkedinInput=document.querySelector(".js-linkedinInput"),githubInput=document.querySelector(".js-githubInput"),telCard=document.querySelector(".js-telCard"),mailCard=document.querySelector(".js-mailCard"),linkedinCard=document.querySelector(".js-linkedinCard"),githubCard=document.querySelector(".js-githubCard"),fieldsetFill=document.querySelector(".js-fieldsetFill"),cardLinkElement=document.querySelector(".js-cardLink "),twitterBtn=document.querySelector(".js-twitterBtn"),paletteOption1=document.querySelector(".js-palette1"),paletteOption2=document.querySelector(".js-palette2"),paletteOption3=document.querySelector(".js-palette3"),cardDisplayContainer=document.querySelector(".js-cardDisplay__card");function addClass(e,t){e.classList.add(t)}function removeClass(e,t){e.classList.remove(t)}function toggleClass(e,t){e.classList.toggle(t)}function colapse(e){const t=e.currentTarget.nextElementSibling;toggleClass(t,"hide"),containerDesign!==t?(addClass(containerDesign,"hide"),addClass(upArrow,"rotate")):toggleClass(upArrow,"rotate"),containerFill!==t?(addClass(containerFill,"hide"),addClass(upArrow1,"rotate")):toggleClass(upArrow1,"rotate"),containerCreate!==t?(addClass(containerCreate,"hide"),addClass(upArrow2,"rotate"),addClass(shareTwitter,"hide"),removeClass(btnCreate,"btnGrey")):(toggleClass(upArrow2,"rotate"),addClass(shareTwitter,"hide"),removeClass(btnCreate,"btnGrey")),containerFill.classList.contains("hide")&&containerCreate.classList.contains("hide")&&(removeClass(containerDesign,"hide"),removeClass(upArrow,"rotate"))}function toggleLegend(){for(let e=0;e<legendElement.length;e++)legendElement[e].addEventListener("click",colapse)}toggleLegend(),btnCreate.addEventListener("click",e=>{e.preventDefault(),removeClass(shareTwitter,"hide"),addClass(btnCreate,"btnGrey")});let data={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function dataCollect(){const e=event.target;let t=e.value;data[e.name]=t,""===data.palette&&(data.palette=1)}function renderCard(){nameCardInput.innerHTML=data.name,careerCardInput.innerHTML=data.job,telCard.href=data.phone,mailCard.href=data.email,linkedinCard.href=data.linkedin,githubCard.href=data.github,""===data.name&&(nameCardInput.innerHTML="Nombre Apellido"),""===data.job&&(careerCardInput.innerHTML="Front-end developer")}fieldsetFill.addEventListener("input",e=>{e.preventDefault(),dataCollect(),renderCard()}),containerDesign.addEventListener("input",e=>{e.preventDefault(),dataCollect()});const changePalette=e=>{cardDisplayContainer.classList.remove("palette1"),cardDisplayContainer.classList.remove("palette2"),cardDisplayContainer.classList.remove("palette3"),cardDisplayContainer.classList.add("palette"+e.currentTarget.value)};function updatePreview(e){if(null!==(e=JSON.parse(localStorage.getItem("dataFromForm"))))switch(nameInput.value=e.name,careerInput.value=e.job,mailInput.value=e.email,telInput.value=e.phone,linkedinInput.value=e.linkedin,githubInput.value=e.github,nameCardInput.innerHTML=e.name,careerCardInput.innerHTML=e.job,telCard.href=e.phone,mailCard.href=e.email,linkedinCard.href=e.linkedin,githubCard.href=e.github,cardDisplayContainer.classList.remove("palette1","palette2","palette3"),cardDisplayContainer.classList.add("palette"+e.palette),e.palette){case"3":paletteOption1.removeAttribute("checked"),paletteOption2.removeAttribute("checked"),paletteOption3.setAttribute("checked","checked");break;case"2":paletteOption2.setAttribute("checked","checked"),paletteOption1.removeAttribute("checked"),paletteOption3.removeAttribute("checked");break;default:paletteOption1.setAttribute("checked","checked"),paletteOption2.removeAttribute("checked"),paletteOption3.removeAttribute("checked")}else e={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""}}function handleReset(e){e.preventDefault(),data={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},localStorage.removeItem("dataFromForm"),nameInput.value="",careerInput.value="",mailInput.value="",telInput.value="",linkedinInput.value="",githubInput.value="",nameCardInput.innerHTML="Nombre Apellido",careerCardInput.innerHTML="Front-end developer",telCard.href="tel:example",mailCard.href="mailto:example@gmail.com",linkedinCard.href="https://www.linkedin.com",githubCard.href="https://github.com/"}paletteOption1.addEventListener("click",changePalette),paletteOption2.addEventListener("click",changePalette),paletteOption3.addEventListener("click",changePalette),updatePreview(data),btnCreate.addEventListener("click",e=>{e.preventDefault(),localStorage.setItem("dataFromForm",JSON.stringify(data));const t=JSON.stringify(data);localStorage.setItem("dataFromForm",t),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:t,headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{const t=e.cardURL;if(e.success){cardLinkElement.innerHTML=t,cardLinkElement.href=t;const e=`https://twitter.com/intent/tweet?text=${"Aquí%20está%20mi%20tarjeta%20de%20visita%20creada%20con%20Awesome%20profile%20cards"}&url=${t}&hashtags=businesscard,awesomeprofilecards`;twitterBtn.href=e}else cardLinkElement.innerHTML="Rellena todos los campos",twitterBtn.href="",cardLinkElement.title=""})}),resetBtnElement.addEventListener("click",handleReset);