const year = document.getElementById("currentYear");
const short = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();

year.textContent = currentYear;
short.textContent = document.lastModified;