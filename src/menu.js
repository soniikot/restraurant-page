export  function createMenuPage(){
console.log('I am working');
const menuArray = [];
const content = document.getElementById('content');
content.innerHTML=' ';
class MenuItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  
  info() {
    return `${this.title} .....$ ${this.price}`;
  }
}

const truffle = new MenuItem('Truffle ham and eggs sandwich', 14);
const salmonSandwich = new MenuItem('Norwegian salmon sandwich', 14);
const croissant = new MenuItem('Croissant with bacon, egg, porcini mushroom sauce and parmesan shavings', 15);
const salmonQuiche = new MenuItem('Salmon and spinach quiche', 20);
const veggies = new MenuItem('Grilled vegetables with buffalo mozzarella served with extra virgin olive oil and basil', 25);
const lasagna = new MenuItem('Florian Lasagna with meat ragù and béchamel sauce', 26);

function addMenuItem(...menuItems) {
  menuArray.push(...menuItems);
}

addMenuItem(truffle, salmonSandwich, croissant, salmonQuiche, veggies, lasagna);

const menuCard = document.createElement("div");
menuCard.classList.add("menuCard");

for (let i = 0; i < menuArray.length; i++) {
  const menuItem = menuArray[i];
  const menuItemElement = document.createElement("div");
  menuItemElement.textContent = menuItem.info();
  menuCard.appendChild(menuItemElement);
}

content.appendChild(menuCard);
}