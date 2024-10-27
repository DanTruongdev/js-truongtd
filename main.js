//Bai 9
//Product class
class Product {
  constructor(id, name, categoryId, saleDate, quantity, isDelete) {
    this.id = id
    this.name = name
    this.categoryId = categoryId
    this.saleDate = saleDate
    this.quantity = quantity
    this.isDelete = isDelete
  }
}

//Bai 10
//khoi tao product list gom 10 phan tu product
const initProductList = () => {
  const productList = [
    new Product(1, 'Laptop', 101, '2024-07-25', 5, false),
    new Product(2, 'Smartphone', 102, '2024-07-20', 10, false),
    new Product(3, 'Headphones', 103, '2024-07-22', 15, false),
    new Product(4, 'Monitor', 101, '2024-07-21', 7, false),
    new Product(5, 'Keyboard', 104, '2024-07-23', 20, false),
    new Product(6, 'Mouse', 104, '2024-07-19', 25, true),
    new Product(7, 'Printer', 105, '2024-07-18', 8, false),
    new Product(8, 'Tablet', 102, '2024-07-24', 12, false),
    new Product(9, 'Smartwatch', 103, '2024-07-17', 5, true),
    new Product(10, 'External Hard Drive', 106, '2024-07-15', 10, false),
    new Product(13, 'External Hard Drive 2', 110, '2024-07-15', 10, false),
    new Product(12, 'External Hard Drive 2', 110, '2024-07-15', 10, false),
  ]
  return productList
}
const _productList = initProductList()
//console.log(_productList)

//Bai 11
///tim kiem ten product theo id es6
const filterProductByIdES6 = (productList, idProduct) => {
  let result = productList.find((value, index, array) => {
    return index === idProduct
  })
  return result.name
}

//tim kiem ten product dung for-loop
const filterProductById = (productList, idProduct) => {
  for (let product of productList) {
    if (product.id === idProduct) return product.name
  }
}

// console.log(filterProductByIdES6(_productList, 3))
// console.log(filterProductById(_productList, 5))

//Bai 12
//tim kiem phan tu co quantity > 0 va chua bi xoa ES6
const productByQuantityAndDeleteES6 = (productList) => {
  return productList.filter((product) => {
    return product.quantity > 0 && !product.isDelete
  })
}

//tim kiem phan tu co quantity > 0 va chua bi xoa for-loop
const productByQuantityAndDelete = (productList) => {
  let results = []
  for (let product of productList) {
    if (product.quantity > 0 && !product.isDelete) results.push(product)
  }
  return results
}
//console.log(productByQuantityAndDelete(_productList))

//Bai 13
//function trả về array tên product có saleDate > ngày hiện tại và chưa bị xóa ES6
const productByDateAndDeleteES6 = (productList) => {
  const currentDate = new Date()
  return productList
    .filter(
      (product) => new Date(product.saleDate) < currentDate && !product.isDelete
    )
    .map((product) => product.name)
}

const productByDateAndDelete = (productList) => {
  const currentDate = new Date()
  let results = []
  for (let product of productList) {
    if (new Date(product.saleDate) < currentDate && !product.isDelete) {
      results.push(product.name)
    }
  }
  return results
}

// console.log(productByDateAndDeleteES6(_productList))
// console.log(productByDateAndDelete(_productList))

//Bai 14
//Viết function trả về tổng số product ( tổng qulity) chưa bị xóa
const totalProductReduce = (productList) => {
  productsNotDelete = productList.filter((product) => {
    return !product.isDelete
  })
  return productsNotDelete.reduce(
    (total, product) => total + product.quantity,
    0
  )
}
const totalProduct = (productList) => {
  let sum = 0
  for (let product of productList) {
    if (!product.isDelete) sum += product.quantity
  }
  return sum
}
// console.log(totalProductReduce(_productList))
// console.log(totalProduct(_productList));

//Bài 15
//Viết function trả về true nếu có product thuộc category
const isHaveProductInCategoryES6 = (productList, categoryId) => {
  let productExisting = productList.find(
    (product) => product.categoryId == categoryId
  )
  if (productExisting) return true
  return false
}

const isHaveProductInCategory = (productList, categoryId) => {
  for (let product of productList) {
    if (product.categoryId == categoryId) return true
  }
  return false
}

// console.log(isHaveProductInCategoryES6(_productList, 102))
// console.log(isHaveProductInCategory(_productList, 12))

//Bai 16
const filterProductBySaleDate = (productList) => {
  const currentDate = new Date()
  let results = []
  for (let product of productList) {
    if (new Date(product.saleDate) < currentDate && product.quantity > 0)
      results.push({ id: product.id, name: product.name })
  }
  return results
}

const filterProductBySaleDateES6 = (productList) => {
  const currentDate = new Date()
  return productList.filter(
    (product) =>
      new Date(product.saleDate) < currentDate && product.quantity > 0
  )
  .map((product) => ({id: product.id, name: product.name}))
}

console.log(filterProductBySaleDateES6(_productList))
console.log(filterProductBySaleDate(_productList))
