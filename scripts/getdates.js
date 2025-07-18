const year = document.querySelector("#currentyear");
const short = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = today.getFullYear();
short.innerHTML = document.lastModified;