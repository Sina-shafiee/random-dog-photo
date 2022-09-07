const imgDivEl = document.getElementById("img-container");
const toggleBtn = document.getElementById("btn");
const linkEl = document.getElementById("link");

toggleBtn.onclick = () => changeImg();

const changeImg = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      imgDivEl.innerHTML = `<img src="${json.message}"/>`;
      linkEl.innerHTML = `<a href="${json.message}" download>image link</a>`;
    });
};

changeImg();
