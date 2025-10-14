export function dropdownElement(contentArray) {
  const dropdown = document.createElement("div");
  dropdown.style.cssText = `
		background-color: black;
		color: white;
		width: max-content;
		padding: 1em;
	`;
  dropdown.textContent = "Dropdown";
  document.body.appendChild(dropdown);
  contentArray.forEach((element) => {
    let option = document.createElement("div");
    option.className = "invisible";
    option.textContent = element;
    dropdown.appendChild(option);
  });
  dropdown.addEventListener("mouseover", () => {
    const invisibleElements = document.getElementsByClassName("invisible");
    for (let item of invisibleElements) {
      item.style.display = "block";
    }
  });
  dropdown.addEventListener("mouseout", () => {
    const invisibleElements = document.getElementsByClassName("invisible");
    for (let item of invisibleElements) {
      item.style.display = "none";
    }
  });
}
