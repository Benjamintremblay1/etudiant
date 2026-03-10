const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener("click", openModal);
}

function openModal() {
  const path = this.previousElementSibling.src;
  const image = document.createElement("img");
  image.src = path;
}
