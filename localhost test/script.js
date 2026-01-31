const input = document.getElementById("enter");
document.querySelector("h2").textContent = localStorage.getItem("input");

function type() {
  localStorage.setItem("input", input.value);
  document.querySelector("h2").textContent = localStorage.getItem("input");
}

input.addEventListener("keyup", type);
