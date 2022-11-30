import { menuArray } from '/data.js'

const orderArray = [];

document.addEventListener('click', (e) => {
  if (e.target.dataset.item) {
    addMenuItem(e.target.dataset.item)
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
  let orderHtml = ''
  orderHtml = `
      <h1 class="order-title">Your order</h1>
      <div class="order-line">
        <h2>Pizza</h2>
        <p>remove</p>
        <h2 class="price">$14</h2>
      </div>
      <div class="order-line">
        <h2>Beer</h2>
        <p>remove</p>
        <h2 class="price">$12</h2>
      </div>
      <div class="order-line total-line">
        <h2>Total price:</h2>
        <h2 class="price">$12</h2>
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