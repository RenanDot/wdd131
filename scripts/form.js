const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.querySelector("select");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.id = product.id;
    option.textContent = capitalizeWords(product.name);
    select.appendChild(option);
});

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let reviewCount = localStorage.getItem("reviewCount");

reviewCount = reviewCount ? parseInt(reviewCount) + 1: 1;

localStorage.setItem("reviewCount", reviewCount);

const spanCount = document.getElementById("review-counter");

if (spanCount) {
  spanCount.textContent = reviewCount;
}
