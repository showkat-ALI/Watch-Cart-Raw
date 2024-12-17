document.addEventListener("DOMContentLoaded", () => {
  fetch("shopPage.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("shopPage").innerHTML = data;
    })
    .catch((error) => console.error("Error loading external HTML:", error));
});
