function showImage(id) {
  const image = document.getElementById(id);
  image.style.display = "block";
}

export default function imageCarousel(imgLinks) {
  let currentSelected = 0;
  imgLinks.forEach((element, index) => {
    let image = document.createElement("img");
    image.src = element;
    image.style.display = "none";
    image.id = index;
    document.body.appendChild(image);
  });
  imgLinks.forEach((e, index) => {
    let point = document.createElement("button");
    point.style.cssText = `
			border-radius: 360em;
			border: 1px solid black;
			width: 1em;
			height: 1em;
			background-color: gray;
		`;
    point.id = index;
    point.addEventListener("click", (e) => {
      document.getElementById(currentSelected).style.display = "none";
      currentSelected = Number(e.target.id);
      showImage(currentSelected);

      document.querySelectorAll("button").forEach((btn) => {
        btn.style.backgroundColor = btn.id == currentSelected ? "blue" : "gray";
      });
    });
    document.body.appendChild(point);
  });

  showImage(currentSelected);
  document.querySelectorAll("button")[0].style.backgroundColor = "blue";
  setInterval(() => {
    document.getElementById(currentSelected).style.display = "none";

    if (currentSelected === imgLinks.length - 1) {
      currentSelected = 0;
    } else {
      currentSelected++;
    }

    showImage(currentSelected);

    document.querySelectorAll("button").forEach((btn) => {
      btn.style.backgroundColor = btn.id == currentSelected ? "blue" : "gray";
    });
  }, 5000);
}
