import { menuArray } from '/data.js';

const orderArray = [];
const orderForm = document.querySelector('form');

document.addEventListener('click', (e) => {
  if (e.target.dataset.item) {
    addMenuItem(e.target.dataset.item)
  } else if (e.target.dataset.index) {
    deleteOrderItem(e.target.dataset.index)
  } else if (e.target.id === 'order-btn') {
    openPaymentModal();
  }
})

// this listener needs to be separate...submit instead of click so required form validation will work
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  confirmOrder();
})

function getMenuHtml() {
  let menuHtml = ''
  menuArray.forEach((item) => {
    menuHtml += `
    <div class="card">
      <h2 class="item-graphic">${item.emoji}</h2>
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>${item.ingredients.join(", ")}</p>
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
  let orderHtml = `<h1 class="order-title">Your order</h1>`;
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
  <button class="order-btn" id="order-btn">Complete order</button>
    `
  return orderHtml;
}

function addMenuItem(itemId) {
  orderArray.push(menuArray.filter((item) => {
    return item.id == itemId
  })[0]);
  renderOrder();
}

function deleteOrderItem(itemIndex) {
  orderArray.splice(itemIndex, 1);
  renderOrder();
}

function render() {
  document.querySelector('#menu-container').innerHTML = getMenuHtml();
}

function renderOrder() {
  document.querySelector('#order-container').innerHTML = getOrderHtml();
}

function openPaymentModal() {
  document.querySelector('#payment-modal').style.display = 'flex';
}

function confirmOrder() {
  let name = document.querySelector('#order-name').value;
  document.querySelector('#payment-modal').style.display = 'none'
  document.querySelector('#order-container').innerHTML = `
    <h1 class='confirmation-text'>Thanks, ${name}! Your order is on its way!<h1>
  `
}

render();