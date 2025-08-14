const products = [
    {
        productName: "Silver Bracelet",
        price: "20.00",
        code: "1",
        image: "images/bracelet1.webp",
        description: "A beautiful silver bracelet with intricate heart design."
    },
    {
        productName: "Silver and Black Bracelet",
        price: "25.00",
        code: "2",
        image: "images/bracelet2.webp",
        description: "A stylish silver and black bracelet perfect for any occasion."
    },
    {
        productName: "Silver Chain Bracelet",
        price: "22.00",
        code: "3",
        image: "images/bracelet3.webp",
        description: "A classic silver chain bracelet that adds elegance to your outfit."
    },
    {
        productName: "Diamond Silver Earrings",
        price: "45.00",
        code: "4",
        image: "images/earring1.webp",
        description: "Elegant diamond silver earrings that sparkle with every movement."
    },
    {
        productName: "Diamond Golden Earrings",
        price: "70.00",
        code: "5",
        image: "images/earring2.webp",
        description: "Stunning diamond golden earrings that catch the light beautifully."
    },
    {
        productName: "Silver Pearl Earrings",
        price: "40.00",
        code: "6",
        image: "images/earring3.webp",
        description: "Classic silver pearl earrings that add a touch of sophistication."
    },
    {
        productName: "Silver Necklace",
        price: "40.00",
        code: "7",
        image: "images/necklace1.webp",
        description: "A delicate silver necklace with a minimalist design."
    },
    {
        productName: "Golder Chain Necklace",
        price: "55.00",
        code: "8",
        image: "images/necklace2.webp",
        description: "A bold golden chain necklace that makes a statement."
    },
    {
        productName: "Triple Chain Necklace",
        price: "70.00",
        code: "9",
        image: "images/necklace3.webp",
        description: "A unique triple chain necklace that combines silver and gold for a modern look."
    }
];

const checkboxGroup = document.getElementById("checkboxGroup");

const defaultDisplay = () => {
    products.forEach(product => {
        checkboxGroup.innerHTML += layoutImages(product);
    });
}

defaultDisplay();

function layoutImages(product) {
	return `<label class="checkbox"><input type="checkbox" id="prod${product.code}" name="products" value="${product.productName.toLowerCase()}">${product.productName}</label>`
} 