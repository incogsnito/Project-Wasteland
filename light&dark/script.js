let darkmode = localStorage.getItem("darkmode");

const doc = document.body;
const btn = document.getElementById("btn");

function enableDarkMode() {
  localStorage.setItem("darkmode", "active");
  doc.classList.add("darkmode");
}

function disableDarkMode() {
  localStorage.setItem("darkmode", null);
  doc.classList.remove("darkmode");
}

if (darkmode === "active") enableDarkMode();

btn.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
