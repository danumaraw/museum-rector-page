function scaleTextToFit(containerSelector, textSelector) {
    const container = document.querySelector(containerSelector);
    const text = container.querySelector(textSelector);

    let fontSize = 10;
    text.style.fontSize = fontSize + "px";

  while (text.scrollWidth <= container.clientWidth && text.scrollHeight <= container.clientHeight) {
    fontSize += 1;
    text.style.fontSize = fontSize + "px";
  }

    text.style.fontSize = (fontSize - 1) + "px";
}

window.addEventListener('load', () => {
    scaleTextToFit('.nav-title', '.scale-title');
});
window.addEventListener('resize', () => {
    scaleTextToFit('.nav-title', '.scale-title');
});