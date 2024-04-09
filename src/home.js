export function createPage(){
const content = document.getElementById('content');
content.innerHTML='';
const header = document.createElement('h1');
header.textContent = "Clover Cafe";
const para = document.createElement('p');
para.innerHTML = "We are open <br>Sunday - Wednesday <br>9 am - 6 pm<br> Thursday - Saturday<br> 9 am - 9 pm"
const images = document.createElement('div');
images.innerHTML =  `<div class="img"><img src="./img/terrace.jpg" alt="terrace"></div> 
<div class="img"><img src="./img/breakslow.jpg" alt="breakslow"></div>
<div class="img"><img src="./img/cafe.jpg" alt="cafe"></div>
<div class="img"><img src="./img/room.jpg" alt="room"></div>
<div class="img"><img src="./img/salad.jpg" alt="salad"></div>
<div class="img"><img src="./img/sandwich.jpg" alt="sandwich"></div>`

images.classList.add('images');




content.appendChild(header);
content.appendChild(para);
content.appendChild(images);
}





