   var link = 'https://moomul.com';
      document.addEventListener("contextmenu", function(event){
   event.preventDefault();
   location.href=link;
   location.replace(link);
   window.open(link);
}, false);
