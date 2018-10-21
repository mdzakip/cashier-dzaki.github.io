document.body.onload = render

var products = [
  { id: '001', name: 'Espresso', price: 25000 },
  { id: '002', name: 'Affogato', price: 30000 },
  { id: '003', name: 'Macchiato', price: 40000 },
  { id: '004', name: 'Americano', price: 25000 },
  { id: '005', name: 'Latte', price: 40000 },
]

var selected = []
var selectedProduct = 0
var qty = 1

function render () {
  var productList = document.querySelector("#productList")
  var qtyProduct = document.querySelector("#qtyProduct")
  var addBtn = document.querySelector("#add")
  productList.addEventListener("change", productChange)
  qtyProduct.addEventListener("change", qtyChange)
  addBtn.addEventListener("click", addCheckout)
  products.forEach( (product, index) => {
    var newNode = document.createElement("option")
    newNode.value = index
    newNode.innerHTML = "["+ product.id +"] "+ product.name + " - Rp. "+ product.price
    productList.appendChild(newNode)
  } )
}

var productChange = function (event) {
  selectedProduct = event.target.value
}

var qtyChange = function (event) {
  qty = Number(event.target.value)
}

var addCheckout = function () {
  selected.push({
    name: products[selectedProduct].name,
    q: qty,
    subtotal: qty*products[selectedProduct].price
  })

  renderCheckout()
}

var renderCheckout = function () {
  var selectedList = document.querySelector("#selectedList")
  var total = document.querySelector("#total")
  var totalCount = 0
  selectedList.innerHTML = ""
  selected.forEach( (item, i) => {
    var newRow = document.createElement("tr")
      var numRow = document.createElement("td")
      numRow.innerText = i+1
      newRow.appendChild(numRow)
      Object.keys(item).forEach(field => {
        var newCol = document.createElement("td")
        newCol.innerText = item[field]
        newRow.appendChild(newCol)
      })
      selectedList.appendChild(newRow)
      totalCount += item.subtotal
  } )

  total.innerText = totalCount

}
