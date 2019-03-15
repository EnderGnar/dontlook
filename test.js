//Dieses Script veraendert nur das Erscheinungsbild der Website. Mit der verwendeten Eindringungsmethode koennen jedoch durchaus
//gefaehrliche Scripts auf das Gisy gelangen. Es soll nur die Aufmerksamkeit auf das Problem ziehen und in keinerlei Hinsicht Schaden anrichten.



(function(){

    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';
    s.onload=loaded;
    document.body.appendChild(s);
    function loaded(){
        loadjquery();
        $("#dontlook").remove();
        if(checkTeacher()&&new Date().getHours()<0){
            return 'never gonna let you down!';
        }
        $("title").text("GISImporved");
        if($("a:contains('Klassische Version')").length)window.location.replace($("a:contains('Klassische Version')")[0].href);
        goodtime();
        colorize();
        ytVideo();
        highqualityimage();
        loadMandelbrot();
        alertiBoi();
        ROFFLE();
        BUGBUG();
        cursedcursor();
    }

    function ytVideo(){
        $("body").append(`<iframe id="nevergonnaend" width="1" height="1" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    }
    if($('input.nav_search_input')[2].value=='u159918') alert('Die Kantonsschule Solothurn gratuliert Ihnen zum gewinnen des Sch&ouml;nheitspreises.')//Andi
    if($('input.nav_search_input')[2].value=='u283927') alert('Dis Mamut isch gruusig. PS: heb e sch&ouml;ne... :*'); //Luise

})()

var mouse={x:0,y:0};
function loadjquery(){
    jQuery.fn.rotate = function(degrees) {
            $(this).css({'-webkit-transform' : 'rotate('+ degrees +'rad)',
                  '-ms-transform-origin': '50% 50%',
                  'transform-origin': '50% 50%',
                  '-moz-transform-origin': '50% 50%',
                  '-webkit-transform-origin': '50% 50%',
                 '-moz-transform' : 'rotate('+ degrees +'rad)',
                 '-ms-transform' : 'rotate('+ degrees +'rad)',
                 'transform' : 'rotate('+ degrees +'rad)'});
            return $(this);
        };
}
function ROFFLE(){
$('div.nms_usrf_news_div').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
        $(this).css('-webkit-transform','rotate('+now+'deg)');
        $(this).css('-moz-transform','rotate('+now+'deg)');
        $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
}
function cursedcursor(){
    $('body,a,input').css({
        'cursor': 'url(http://cur.cursors-4u.net/user/use-1/use174.ani), url(http://cur.cursors-4u.net/user/use-1/use174.png), default'
    });
}
function highqualityimage(){
    $("#nav_left_outer_box").before("<img src='https://ya-webdesign.com/images/animated-fire-png-16.gif' data-alt='img/mobile-wireframe.gif' class ='explosion'>");
    $("#nav_right_outer_box").before("<img src='https://ya-webdesign.com/images/animated-fire-png-16.gif' data-alt='img/mobile-wireframe.gif' class ='explosion'>");
    $(".explosion").css({"top":"0","left":"0","width":"100%","z-index":'98'});

    $("#nav_top_center").css("border-top-color", "#FFFFFF");

    $("#nav_right_outer_box").before("<img src='https://media3.giphy.com/media/IB9foBA4PVkKA/giphy.gif' id ='pnb'>");
    $("#pnb").css({"position":"fixed","left":"0","bottom":"0"});

    $("#nav_right_outer_box").before("<img src='https://thumbs.gfycat.com/AccurateUnfinishedBergerpicard-size_restricted.gif' id ='car'>");
    $("#car").css({"position":"fixed","bottom":"0","right":"0","width":"250px","-webkit-transform": "scaleX(-1)","transform": "scaleX(-1)"});

    $(".myfoto").attr("src","https://i0.wp.com/www.treffpunkt-philosophie.ch/wordpress/wp-content/uploads/Giordano_Bruno_Quelle_https_goo.gl_imagesFwC72t.png");
}

function checkTeacher(){
       var name = $('input.nav_search_input').last()[0].value;
       return !/^u\d{6}$/.test(name);
}
function colorize(){
    $('.nav_contentbox').css('background-color','#CCCCFF');
    $(".nms_usrf_news_timestamp_div").each(function(){
        var color = $(this).css('color');
        color = color.replace(/rgb.(\d+), ?(\d+), ?(\d+)./,'rgba($1,$2,$3,1)');
        $(this).parent().css({'border-style':'solid','border-color':color,'border-size':'10px','padding':'3px','border-radius':'0.5ex','background-color':'#EEEEEE'});
    });
}
function alertiBoi(){
   $('.nav_top_center_title').html($('.nav_top_center_title').html().replace('HOME','HOME - powered by the XSS Cookiemonster'));
}


var colorcount=0;
var msgs = [{t:"30.2.420 | r&ouml;sti isch lebe", ut:"Einzig wahre SCHWERPUNKTFACH", n: "ch&ouml;mmet id mathklass"},
            {t:"3 v. Chr | Joseph Zumbrunn",ut:"MAKE GISY GREAT AGAIN",n:"Let's build a firewall."},
            {t:"2 v. Chr | Jesus Zumbrunn",ut:"You know what?",n:"KSSO will pay for it."},
            {t:"literally NOW | Marty McFly",ut:"I gump dr a Haus!!! ",n:"Hoverboards si f&uuml;r n&uuml;t!"},
            {t:"ka Wenn | Faust",ut:"I bi unschudig",n:"Sie het s ch&auml;schtli ufgmacht"},
            {t:"IMMER | Mensa",ut:"Who let the forks out?",n:"Hu, Hu, Hu"},
            {t:"Immer wennd Sch&uuml;euer ke Schueu hei | Sekretariat",ut:"Bi gschlosse",n:"Muhahahah"}
           ];

function goodtime(){
    $('.nms_adm_form').prepend('<a id="careful" href="https://www.youtube.com/user/PewDiePie"><img width="50%" id="theholy"  src="https://foysalyt.files.wordpress.com/2018/12/untitled-1.jpg"></img></a>');
    $('#theholy').css({'margin-left':'auto','margin-right':'auto','display': 'block'});
    $('.nms_usrf_news_timestamp_div').each(function(){$(this).text("3.14159265358979323")});
    for(var i=0;i<msgs.length;i++){
        $('.nav_right_inner_box').append("<div class='pinn_date'>"+ msgs[i].t+"</div> <div class='pinn_subject'><span class='pinn_title plinky'>" + msgs[i].ut + " </span> </br>" + msgs[i].n + " </div>");
    }
    imageer();
}

function imageer(){
    colorcount+=Math.floor(Math.random()*20);
    colorcount%=360;
    $('.plinky').css({'color':'hsl('+colorcount+',100%, 50%)'});
    setTimeout(imageer,200);
}




function BUGBUG(){
   $('body').append('<img id="bug" src="https://66.media.tumblr.com/88cf79015fde61be90796f4679c06c16/tumblr_n7ums3IBJC1s9px6mo1_400.gif"></img>');
   $("#bug").css({"position":"fixed","width":"100px","top":"0","left":"0","z-index":'99'});
    $('body').mousemove(function(e){
        mouse={x:e.clientX,y:e.clientY};
    });
    setInterval(buginterval,1000/60);
}


function buginterval(){
    var bug='#bug';
    $(bug).rotate(0);
    var delta={x:mouse.x-$(bug).position().left-50,y:mouse.y-$(bug).position().top-75};
    if(delta.x**2+delta.y**2>100**2){
        $(bug).css({'left':($(bug).position().left+delta.x/10)+'px','top':($(bug).position().top+delta.y/10)+'px'});
    }
    $(bug).rotate(Math.atan2(delta.y,delta.x)-Math.PI/2);
}


function loadMandelbrot(){
    var cwidth=$('#nav_top_header').find('img').width();
    var cheight=$('#nav_top_header').height()*2;
    $('#nav_top_header').find('img').css({'position':'absolute','clip':'rect(auto auto 130px auto)','margin-left':'30px'});
    $('#nav_top_header').children().append('<canvas id="myCanvas" width="'+(cheight)+'" height="'+cheight*0.6666+'">');
    $('img').first().css({'margin-left':'60px'});
    $('.nav_top_header').css({'height':'120px'});
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle='#FFFFFF';
    ctx.beginPath();
    ctx.rect(0,0,cheight,cheight);
    ctx.fill();
    ctx.fillStyle="#0066BB";
    $('#myCanvas').css({'z-index':'1', 'position':'absolute'});
    for(var x=0;x<c.height;x++) for(var y=0;y<c.height;y++){
        if(inside((x/c.width)*3-1.5,(y/c.width)*3-1)){
            ctx.beginPath();
            ctx.rect(x+40,y,1,1);
            ctx.fill();
        }
    }
    function inside(x1,y1){
        var c=y1,r=x1;
        for(var i=0;i<100;i++){
            var t=r;
            r=r*r-c*c+x1;
            c=2*t*c+y1;
        }
        return r*r+c*c<4
    }
}
