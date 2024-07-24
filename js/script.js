function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('loadedText').style.display = "block";
  }, 3000);

  document.getElementById('increase-font-size').addEventListener('click', function() {
    var panelElements = document.getElementsByClassName('panel');
    for (var i = 0; i < panelElements.length; i++) {
      var currentFontSize = parseFloat(window.getComputedStyle(panelElements[i], null).getPropertyValue('font-size'));
      panelElements[i].style.fontSize = (currentFontSize + 5) + 'px';
    }
  });

  document.getElementById('decrease-font-size').addEventListener('click', function() {
    var panelElements = document.getElementsByClassName('panel');
    for (var i = 0; i < panelElements.length; i++) {
      var currentFontSize = parseFloat(window.getComputedStyle(panelElements[i], null).getPropertyValue('font-size'));
      panelElements[i].style.fontSize = (currentFontSize - 1) + 'px';
    }
  });

  // Selecionar os elementos HTML pelos IDs
  var loaderElement = document.getElementById('loader');
  var loadedTextElement = document.getElementById('loadedText');
  var increaseFontSizeElement = document.getElementById('increase-font-size');
  var decreaseFontSizeElement = document.getElementById('decrease-font-size');

  // Verificar se os elementos foram encontrados antes de executar o código
  if (loaderElement && loadedTextElement && increaseFontSizeElement && decreaseFontSizeElement) {
    // O código continua aqui
  }
});
