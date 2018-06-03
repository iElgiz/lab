people = [];

class Login {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

class Person extends Login {
    constructor(name, email, password) {
        super(email,password);
        this.name = name;

    }
}

function $(id) {
    return document.getElementById(id);
}

function register() {

    let name = $('name').value;
    let email = $('email').value;
    let password = $('password').value;
    let person = new Person(name, email, password);

    people.push(person);
    return false;

}

function daxilOl(login_email, login_password) {
    let email = $('login_email').value;
    let password = $('login_password').value;
    let finded = false;
    let loginedUser = null;
    for (let k of people) {
        if (email == k.email && password == k.password){
            finded = true;
            loginedUser = k;
        } 
    }

    if (finded == true){
        localStorage.User = JSON.stringify(loginedUser);
        location.href = "adds.html";
    }  
    else
        alert('not founded')

}

class Products {
    constructor(name,model,color,price){
        this._name = name;
        this._model = model;
        this._color = color;
        this._price = price;

    }

    set Name (name){
        this._name=name;
    }

    get Name () {
         return this._name = name;
    }

    set Model(model) {
        this._model = model;
    }

    get Model() {
        return this._model = model;
    }

    set Color(color) {
        this._color = color;
    }

    get Color() {
        return this._color = color;
    }

    set Price(price) {
        this._price = price;
    }

    get Price() {
        return this._price = price;
    }
}



let pd1 = new Products ("hp8","HP","red",1202);
let pd2 = new Products("acer08", "Acer", "red", 1201);
let pd3 = new Products("mac08", "Apple", "red", 1200);
let pd4 = new Products("Asus08", "ASUS", "red", 1203);

let prodcuts = [pd1, pd2, pd3, pd4];

function Create (){

    let container = document.createElement ("div")
    container.className = "container"; 
    document.body.appendChild(container);
    let btn = document.createElement("BUTTON");
    btn.className ="Button";
    btn.innerText= "Log Out";
    btn.onclick= function(){
        document.location.href = "index.html";
    }
    document.body.appendChild(btn);
    let btn1 = document.createElement("BUTTON");
    btn1.className = "Button1";
    btn1.innerText = "Add Product";
    btn1.onclick = function () {
        document.location.href = "products.html";
    }
    document.body.appendChild(btn1);
    for (let k of prodcuts) {
        let div = document.createElement("div");
        div.style.width= "200px";
        div.style.height = "200px";
        div.style.background = "red";
        div.style.border ="2px solid blue"
        div.className ="Products"
        container.appendChild(div);

        let p = document.createElement("p");
        p.innerText = "Name";
        div.appendChild(p);
        let p1 = document.createElement("p");
        p1.innerText = "Model";
        div.appendChild(p1);
        let p2 = document.createElement("p");
        p2.innerText = "Color";
        div.appendChild(p2);
        let p3= document.createElement("p");
        p3.innerText = "Price";
        div.appendChild(p3);
    }
}


