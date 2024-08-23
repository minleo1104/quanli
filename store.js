
class Store {
    name
    listProduct

    constructor(nameInput) {
        this.name = nameInput;
        this.getStorage();
    }

    add(newProduct) {
        this.listProduct.push(newProduct);
        this.saveStorage();
    }

    getList() {
        return this.listProduct;
    }

    remove(index) {
        this.listProduct.splice(index, 1);
        this.saveStorage();
    }

    getProductByIndex(index) {
        let product = this.listProduct[index];
        return product;
    }

    edit(index, newProduct) {
        this.listProduct[index] = newProduct;
        this.saveStorage();
    }

    saveStorage() {
        localStorage.setItem("listProduct", JSON.stringify(this.listProduct));
    }

    getStorage() {
        let list = JSON.parse(localStorage.getItem("listProduct"));
        if (list == null) {
            this.listProduct = [];
        } else {
            this.listProduct = list;
        }
    }

    getByNameContain(name) {
        let newList = [];
        for(let i = 0; i < this.listProduct.length; i++) {
            let nameProduct = this.listProduct[i].name.toLowerCase();
            let nameSearch = name.toLowerCase();
            if(nameProduct.includes(nameSearch)) {
                newList.push(this.listProduct[i]);
            }
        }
        return newList;
    }

    getByPrice(from, to) {
        let newList = [];
        for(let i = 0; i < this.listProduct.length; i++) {
            let priceProduct = this.listProduct[i].price;
            if(priceProduct >= from && priceProduct <= to) {
                newList.push(this.listProduct[i]);
            }
        }
        return newList;
    }

}
