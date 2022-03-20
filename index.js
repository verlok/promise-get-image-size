function getImgNaturalSize(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.addEventListener("load", (event) => {
      resolve({
        width: event.target.width,
        height: event.target.height,
      });
    });

    img.addEventListener("error", (event) => {
      reject();
    });
  });
}

const button = document.querySelector("button");
const output = document.querySelector("#output");
const url = document.querySelector("#url");

button.addEventListener("click", async function () {
  const size = await getImgNaturalSize(url.value);
  output.value = JSON.stringify(size);
}); 
