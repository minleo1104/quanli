
let store = new Store("Leo Store");

function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    store.add(newProduct);
    getAll();
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
}

function getByName() {
    let nameSearch = document.getElementById("name-search").value;
    let list = store.getByNameContain(nameSearch);
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html = html + `
         <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" alt="" style="width: 50px; height: 50px;"></td>
            <td><button onclick="remove(${i})">Xóa</button></td>
             <td><button onclick="showFormEdit(${i})">Sửa</button></td>
        </tr>
      `
    }
    document.getElementById("list-product").innerHTML = html;
}

function getByPrice() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let list = store.getByPrice(from, to);
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html = html + `
         <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" alt="" style="width: 50px; height: 50px;"></td>
            <td><button onclick="remove(${i})">Xóa</button></td>
             <td><button onclick="showFormEdit(${i})">Sửa</button></td>
        </tr>
      `
    }
    document.getElementById("list-product").innerHTML = html;
}

function getAll() {
    let list = store.getList();
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html = html + `
         <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" alt="" style="width: 50px; height: 50px;"></td>
            <td><button onclick="remove(${i})">Xóa</button></td>
             <td><button onclick="showFormEdit(${i})">Sửa</button></td>
              <td><button onclick="showDetail(${i})">Chi tiết</button></td>
        </tr>
      `
    }
    document.getElementById("list-product").innerHTML = html;
}

function showDetail(index) {
    let productDetail = store.getProductByIndex(index);
    document.getElementById("product-detail").innerHTML = `
        <h2>Detail</h2>
        <h3>Id: ${productDetail.id}</h3>
        <h3>Name: ${productDetail.name}</h3>
        <h3>Price: ${productDetail.price}</h3>
        <h3><img src="${productDetail.image}"></h3>
    `
    setTimeout(() => {
        document.getElementById("product-detail").innerHTML = '';
    }, 4000)
}

function showFormEdit(index) {
    let oldProduct = store.getProductByIndex(index);
    document.getElementById("id").value = oldProduct.id;
    document.getElementById("name").value = oldProduct.name;
    document.getElementById("price").value = oldProduct.price;
    document.getElementById("image").value = oldProduct.image;
    document.getElementById("btn").innerHTML = `<button onclick="edit(${index})">Lưu</button> `
}

function edit(index) {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    store.edit(index, newProduct);
    alert("Sửa thành công");
    getAll();
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
     document.getElementById("btn").innerHTML = `<button onclick="add()">Thêm mới</button> `
}

function remove(index) {
    let isConfirm = confirm("Bạn chắc chứ?")
    if (isConfirm) {
        store.remove(index);
        alert("Xóa thành công");
        getAll();
    }
}
getAll();

