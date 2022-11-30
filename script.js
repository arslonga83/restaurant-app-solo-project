import { menuArray } from '/data.js'

const menuContainer = document.querySelector('#menu-container');

function getMenuHtml() {
  let menuHtml = ''
  menuArray.forEach((item) => {
    menuHtml += `
    <div class="card">
      <h2 class="item-graphic">${item.emoji}</h2>
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>${item.ingredients}</p>
        <h4>${item.price}</h4>
      </div>
      <button class="add-item-btn">+</button>
    </div>
    `
  })
  return menuHtml;
}

function render() {
  const menuContainer = document.querySelector('#menu-container');
  menuContainer.innerHTML = getMenuHtml();
}

render()