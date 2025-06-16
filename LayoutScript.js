function updateImageSize(image, referenceText) {
  // hidden element to measure title height
  const measureSpan = document.createElement('span');
  measureSpan.className = 'measure-span';
  measureSpan.style.font = window.getComputedStyle(referenceText).font;
  measureSpan.textContent = 'Hg';
  document.body.appendChild(measureSpan);

  const textHeight = measureSpan.offsetHeight;
  document.body.removeChild(measureSpan);

  const aspectRatio = image.naturalWidth / image.naturalHeight;
  image.style.height = `${textHeight}px`;
  image.style.width = `${textHeight * aspectRatio}px`;
}

function observeTextResize(imageId, referenceTextSelector) {
  const referenceText = document.querySelector(referenceTextSelector);
  const image = document.getElementById(imageId);

  const resizeObserver = new ResizeObserver(() => {
    updateImageSize(image, referenceText);
  });

  resizeObserver.observe(referenceText);
  updateImageSize(image, referenceText); //initial call
}

window.onload = () => {
  observeTextResize('imageToResize', '#textContainer');
};