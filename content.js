fetch(window.location.href) 
  .then(response => response.text()) 
  .then(data => { 
    var found = data.match(/<p data-caps="initial" class="article__body-text article__body-text--dropcap">[\s\S]+?(<p class="article__body-text">[\s\S]+<\/p>)<\/div><\/section>/m); 
    var parts = document.getElementsByClassName('article__body-text'); 
    parts[1].parentNode.removeChild(parts[1]); 
    parts[0].insertAdjacentHTML('afterend', found[1]); 
  }); 