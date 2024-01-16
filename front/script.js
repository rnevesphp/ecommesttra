const doc = document;

const lista = document.querySelector('#lista');

const apiURL = "http://localhost:3000/products";

const nameInput = doc.getElementById('name');
const categoryInput = doc.getElementById('category');
const priceInput = doc.getElementById('price');

const getProducts = async () => {
    lista.innerHTML = '';

    const response = await fetch(apiURL);
    const products = await response.json();

    console.log(products.name);

    products.map((product) => {
        lista.insertAdjacentHTML('beforeend', `
        <li class"col s12 m12 l3">
            <div class="">
                <div class="col s12 m4">
                    <div class="card blue-grey darken-4">
                        <div class="card-content white-text">
                            <span class="card-title">${product.name}</span>
                            <p>${product.category}</p>
                            <p>R$ ${product.price}</p>
                        </div>
                        <div class="card-action">
                            <a class="btn-small waves-effect waves-light red darken-1">
                                <i class="fa-solid fa-x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
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