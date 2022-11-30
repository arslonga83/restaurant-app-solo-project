import { menuArray } from '/data.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const orderArray = [];

document.addEventListener('click', (e) => {
  if (e.target.dataset.item) {
    addMenuItem(e.target.dataset.item)
  } else if (e.target.dataset.index) {
    console.log(e.target.dataset.index)
  }
})

function getMenuHtml() {
  let menuHtml = ''
  menuArray.forEach((item) => {
    menuHtml += `
    <div class="card">
      <h2 class="item-graphic">${item.emoji}</h2>
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>${item.ingredients}</p>
        <h4>$${item.price}</h4>
      </div>
      <button class="add-item-btn" data-item=${item.id}>+</button>
    </div>
    `
  })
  return menuHtml;
}

function getOrderHtml() {
  let totalPrice = 0;
  // title line of order section
  let orderHtml = `<h1 class="order-title">Your order</h1>`
  // add items from order array
  orderArray.forEach((item, index) => {
    orderHtml += `
      <div class="order-line">
        <h2>${item.name}</h2>
        <p class="remove-btn" data-index=${index}>remove</p>
        <h2 class="price">$${item.price}</h2>
      </div>`
      totalPrice += item.price
    })
    // add total price line and button
    orderHtml += `
    <div class="order-line total-line">
    <h2>Total price:</h2>
    <h2 class="price">$${totalPrice}</h2>
  </div>
  <button class="order-btn">Complete order</button>
    `
  return orderHtml
}

function addMenuItem(itemId) {
  orderArray.push(menuArray.filter((item) => {
    return item.id == itemId
  })[0])
  console.log(orderArray)
  renderOrder()
}

function render() {
  const menuContainer = document.querySelector('#menu-container');
  menuContainer.innerHTML = getMenuHtml();
}

function renderOrder() {
  const orderContainer = document.querySelector('#order-container')
  orderContainer.innerHTML = getOrderHtml();
}

render()