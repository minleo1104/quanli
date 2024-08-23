
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
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" alt="" style="width: 50px; height: 50px; "></td>
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
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" alt="" style="width: 100px; height: 100px;"></td>
        </tr>
      `
    }
    document.getElementById("list-product").innerHTML = html;
}

getAll();

