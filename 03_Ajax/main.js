const ratesApiKey = 'e50f0437a865f3c1b04789d4';
const userList = document.getElementById("list");

async function getDataFromServer(url) {
    // send HTTP request
    let response = await fetch(url);
    console.log(`Status: ${response.status}`);

    // get body in JSON
    var data = await response.json();
    console.log(data);

    return data;
}

async function showUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const users = await getDataFromServer(url);

    for (const item of users) {
        userList.innerHTML += `<li>ID: ${item.id} - ${item.name} - ${item.email}</li>`
    }
}

async function showRates() {
    const url = `https://v6.exchangerate-api.com/v6/${ratesApiKey}/latest/USD`;
    const data = await getDataFromServer(url);

    document.body.innerHTML += `<p>Conversion rate of UAH: ${data.conversion_rates.UAH}</p>`;
}

showUsers();
showRates();