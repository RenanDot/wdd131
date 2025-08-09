const year = document.getElementById("currentYear");
const short = document.getElementById("lastModified");

const hamButton = document.getElementById('menu');
const navigation = document.getElementById('navigation');

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
  },
  {
    templeName: "Brazil Campinas",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
  }
];

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});

const currentYear = new Date().getFullYear();

year.textContent = currentYear;
short.textContent = document.lastModified;

const home = document.getElementById("home");
const old = document.getElementById("old");
const newTemple = document.getElementById("new");
const large = document.getElementById("large");
const small = document.getElementById("small");
const templeGrid = document.getElementById("templeGrid");
const header1 = document.getElementById("header1");

const defaultDisplay = () => {
  temples.forEach(temple => {
    templeGrid.innerHTML += layoutImages(temple);
  });
};

defaultDisplay();


home.addEventListener('click', () => { 
  header1.textContent = "Home";
  templeGrid.innerHTML = "";
  temples.forEach(temple => {
    templeGrid.innerHTML += layoutImages(temple);
});});

old.addEventListener('click', () => {
  header1.textContent = "Old Temples";
  templeGrid.innerHTML = "";
  const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('2000-01-01'));
  oldTemples.forEach(temple => {
    templeGrid.innerHTML += layoutImages(temple);
  });
});

newTemple.addEventListener('click', () => {
  header1.textContent = "New Temples";
  templeGrid.innerHTML = "";
  const newTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
  newTemples.forEach(temple => {
    templeGrid.innerHTML += layoutImages(temple);
  });
});

large.addEventListener('click', () => {
  header1.textContent = "Large Temples";
  templeGrid.innerHTML = "";
  const largeTemples = temples.filter(temple => temple.area > 90000);
  largeTemples.forEach(temple => {
    templeGrid.innerHTML += layoutImages(temple);
  });
});

small.addEventListener('click', () => {
  header1.textContent = "Small Temples";
  templeGrid.innerHTML = "";
  const smallTemples = temples.filter(temple => temple.area < 10000);
  smallTemples.forEach(temple => {
    templeGrid.innerHTML += layoutImages(temple);
  });
});

function layoutImages(temple) {
	return `<figure>
            <figcaption><h2>${temple.templeName}</h2></figcaption>
            <figcaption>Location: ${temple.location}</figcaption>
            <figcaption>Dedicated: ${temple.dedicated}</figcaption>
            <figcaption>Size: ${temple.area} sq ft</figcaption>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" class="temple-image">
          </figure>`
} 



