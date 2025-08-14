const products = [
    {
        productName: "Silver Bracelet",
        price: "20.00",
        image: "images/bracelet1.webp",
        description: "A beautiful silver bracelet with intricate heart design."
    },
    {
        productName: "Silver and Black Bracelet",
        price: "25.00",
        image: "images/bracelet2.webp",
        description: "A stylish silver and black bracelet perfect for any occasion."
    },
    {
        productName: "Silver Chain Bracelet",
        price: "22.00",
        image: "images/bracelet3.webp",
        description: "A classic silver chain bracelet that adds elegance to your outfit."
    },
    {
        productName: "Diamond Silver Earrings",
        price: "45.00",
        image: "images/earring1.webp",
        description: "Elegant diamond silver earrings that sparkle with every movement."
    },
    {
        productName: "Diamond Golden Earrings",
        price: "70.00",
        image: "images/earring2.webp",
        description: "Stunning diamond golden earrings that catch the light beautifully."
    },
    {
        productName: "Silver Pearl Earrings",
        price: "40.00",
        image: "images/earring3.webp",
        description: "Classic silver pearl earrings that add a touch of sophistication."
    },
    {
        productName: "Silver Necklace",
        price: "40.00",
        image: "images/necklace1.webp",
        description: "A delicate silver necklace with a minimalist design."
    },
    {
        productName: "Golder Chain Necklace",
        price: "55.00",
        image: "images/necklace2.webp",
        description: "A bold golden chain necklace that makes a statement."
    },
    {
        productName: "Triple Chain Necklace",
        price: "70.00",
        image: "images/necklace3.webp",
        description: "A unique triple chain necklace that combines silver and gold for a modern look."
    }
];

const productsGrid = document.getElementById("productsGrid");
const header1 = document.getElementById("header1");

const all = document.getElementById("all");
const bracelets = document.getElementById("bracelets");
const earrings = document.getElementById("earrings");
const necklaces = document.getElementById("necklaces");

const defaultDisplay = () => {
  products.forEach(product => {
    productsGrid.innerHTML += layoutImages(product);
  });
};

defaultDisplay();

all.addEventListener('click', () => {
    header1.textContent = "All Products";
    productsGrid.innerHTML = "";
    products.forEach(product => {
        productsGrid.innerHTML += layoutImages(product);
    }
)});

bracelets.addEventListener('click', () => {
    header1.textContent = "Bracelets";
    productsGrid.innerHTML = "";
    const braceletProducts = products.filter(product => product.productName.toLowerCase().includes("bracelet"));
    braceletProducts.forEach(product => {
        productsGrid.innerHTML += layoutImages(product);
    });
});

earrings.addEventListener('click', () => {
    header1.textContent = "Earrings";
    productsGrid.innerHTML = "";
    const earringsProducts = products.filter(product => product.productName.toLowerCase().includes("earrings"));
    earringsProducts.forEach(product => {
        productsGrid.innerHTML += layoutImages(product);
    });
});

necklaces.addEventListener('click', () => {
    header1.textContent = "Necklaces";
    productsGrid.innerHTML = "";
    const necklacesProducts = products.filter(product => product.productName.toLowerCase().includes("necklace"));
    necklacesProducts.forEach(product => {
        productsGrid.innerHTML += layoutImages(product);
    });
});

function layoutImages(product) {
	return `<figure>
            <figcaption><h2>${product.productName}</h2></figcaption>
            <img src="${product.image}" alt="${product.productName}" loading="lazy" class="product-image">
            <figcaption class="highlight">Price: $${product.price}</figcaption>
            <figcaption>Description: ${product.description}</figcaption>
        </figure>`
} 

