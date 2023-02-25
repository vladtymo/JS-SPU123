// get elements from document
const createBtn = document.getElementById('create-btn');
const tableBody = document.getElementById('table-body');

const nameInput = document.getElementById('nameInput');
const priceInput = document.getElementById('priceInput');

let count = 0;
// products array
const products = [];

// set event handler
createBtn.onclick = () => {

    console.log("Button clicked!");

    const newProduct = {
        id: ++count,
        name: nameInput.value,
        price: priceInput.value
    }
    products.push(newProduct);

    addProduct(newProduct);

    clearInputs();
}

function clearInputs() {
    nameInput.value = '';
    priceInput.value = '';
}

function addProduct(product) {
    tableBody.innerHTML += `<tr class="table-secondary">
                                <th scope="row">${product.id}</th>
                                <td>${product.name}</td>
                                <td>${product.price}$</td>
                            </tr>`
}