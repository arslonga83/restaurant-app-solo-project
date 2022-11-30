import { menuArray } from '/data.js'

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


function addMenuItem(itemId) {
  const menuItem = menuArray.filter((item) => {
    return item.id == itemId
  })[0]
  console.log(menuItem)
}


function render() {
  const menuContainer = document.querySelector('#menu-container');
  menuContainer.innerHTML = getMenuHtml();
}

render()