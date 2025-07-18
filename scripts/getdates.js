const year = document.getElementById("#currentYear");
const short = document.querySelector("#lastModified");

const currentYear = new Date().getFullYear();

year.textContent = currentYear;
short.innerHTML = document.lastModified;