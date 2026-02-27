var originalText = "Hover over an image below to display here.";

function upDate(event) {
  console.log('Event triggered!');
  
  console.log('Alt text: ' + this.alt);
  console.log('Source: ' + this.src);
  
  var image = document.getElementById('image');
  
  image.innerHTML = this.alt;
  
  image.style.backgroundImage = "url('" + this.src + "')";
}

function undo(event) {
  console.log('Undo event triggered!');
  
  var image = document.getElementById('image');
  
  image.style.backgroundImage = "url('')";
  
  image.innerHTML = "Hover over an image below to display here.";
}

function setTabIndex() {
  console.log('Page loaded - adding tabindex to images');
  
  var previewPic = document.querySelectorAll('.previewPic');
  
  for (var i = 0; i < previewPic.length; i++) {
    previewPic[i].setAttribute('tabindex', '0');
    
    console.log('Added tabindex to image: ' + previewPic[i].alt);
  }
}

function addEventListeners() {
  var previewPic = document.querySelectorAll('.previewPic');
  
  for (var i = 0; i < previewPic.length; i++) {
    previewPic[i].addEventListener('mouseover', upDate);
    previewPic[i].addEventListener('mouseout', undo);
    
    previewPic[i].addEventListener('focus', upDate);
    previewPic[i].addEventListener('blur', undo);
  }
  
  console.log('Event listeners added to all images');
}

window.addEventListener('load', function() {
  console.log('Page has loaded!');
  
  setTabIndex();
  
  addEventListeners();
});