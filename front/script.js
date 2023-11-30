const doc = document;

const lista = document.querySelector('#lista');

const apiURL = "http://localhost:4000/products";

const nameInput = doc.getElementById('name');
const categoryInput = doc.getElementById('category');
const priceInput = doc.getElementById('price');

const getProducts = async () => {
    lista.innerHTML = '';

    const response = await fetch(apiURL);
    const products = await response.json();

    products.map((product) => {
        lista.insertAdjacentHTML('beforeend', `
        <li>${product.name}</li>
      `)
    })
}

const submitForm = async (ev) => {
    ev.preventDefault()
    console.log('Dados enviados...');

    const product = {
        name: nameInput.value,
        category: categoryInput.value,
        price: priceInput.value
    }

    const req = new Request(`${apiURL}/add`,
        {
            method: 'POST',
            body: JSON.stringify(product),
            headers: new Headers({
                "Content-Type": "application/json"
            }),
        }
    )

    const res = await fetch(req);
    const data = await res.json();
    console.log(data);

    alert(`Produto ${data.data[0].name} cadastrado`);
}

getProducts(); 