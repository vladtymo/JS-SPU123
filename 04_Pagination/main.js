const list = document.getElementById("list");
const moreBtn = document.getElementById('more-btn');

const productsUrl = 'https://dummyjson.com/products';
let pagination = {
    total: null,
    skip: 0,
    limit: 20,

    nextPage() {
        this.skip += this.limit;
    },
    isAvailable() {
        if (this.total == null)
            return true;
        return this.skip < this.total;
    }
};

moreBtn.onclick = () => {
    loadProducts();
}

// load initialiy
loadProducts();

// --------------- functions
async function getDataFromServer(url) {
    // send HTTP request
    let response = await fetch(url);
    console.log(`Status: ${response.status}`);

    // get body in JSON
    var data = await response.json();
    console.log(data);

    return data;
}

async function loadProducts() {
    const urlWithParams = `${productsUrl}?skip=${pagination.skip}&limit=${pagination.limit}`;
    const result = await getDataFromServer(urlWithParams);

    pagination.total = result.total;
    pagination.nextPage();
    updateMoreButton();

    for (const item of result.products) {
        list.innerHTML += `
        <div class="col card product-card">
            <img src="${item.thumbnail}" class="card-img-top" alt="Product image">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.price}$</p>
                <a href="#" class="btn btn-primary">Details</a>
            </div>
        </div>
        `
    }
}

function updateMoreButton() {
    if (!pagination.isAvailable())
        moreBtn.disabled = true;
    else
        moreBtn.disabled = false;
}