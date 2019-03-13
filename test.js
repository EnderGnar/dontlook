alert('simon du bisch langwilig');
var s = document.createElement('script');
s.type = 'text/javascript';
s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';
s.onload=function(){
  alert('niggi du au');
  $('body').css('background-color:"pink"');
}
document.body.appendChild(s)

