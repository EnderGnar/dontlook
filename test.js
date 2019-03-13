var s = document.createElement('script');
s.type = 'text/javascript';
s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';
s.onload=loaded;
document.body.appendChild(s);

function loaded(){
  $("body").css("background-color", "pink");
  $("strong").hide();
  $("body").append(`<iframe id="nevergonnaend" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  $("#nevergonnaend").hide();
}

