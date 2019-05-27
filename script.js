/*
****************************************
 author:Shudarshan Rai
  Created on :30/March 2019
   copyright :© 2019 Shudarshan Rai
    
    info:
    _____
    Simple html editor app""
******************************************
*/

var info_place;

var info=[
 
  "&copy;",
   "2019",
    "Shudarshan Rai",

];


function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}




  info_place="<p>"+info[0]+"&nbsp;"+info[1]+"&nbsp;"+info[2]+"</p>";

  $(".info").append(info_place);

 
$("#run").click(function(){
    var content = document.getElementById('code').value;
     var iframe = document.getElementById('result');
      iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
       iframe.document.open();
        iframe.document.write(content);
         iframe.document.close();
  return false;
})
// Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();



$("#option").click(function(){
    $(".options").toggle(500)
})

//slider value control for font size
$(document).on('input', '#slider', function() {
    $('textarea').css({
        "font-size":$(this).val()+"px"
    })
});

//Default theme
$("#t1").click(function(){
  $("textarea").css({
      "background":"#fff",
       "color":"#202020"
  });
  
  $(".options").css({
      "background":"#0f97f9",
       "color":"#fff",
        "border-bottom":"0px"
        
  });
})

//Dark theme

$("#t2").click(function(){
  $("textarea").css({
      "background":"#333",
       "color":"#aaa"
  });
  
  $(".options").css({
      "background":"#333",
       "color":"#aaa",
        "border-bottom":"1px solid #fff"
        
  });
})

//Sololearn Theme

$("#t3").click(function(){
  $("textarea").css({
      "background":"#aaa",
       "color":"#404040"
  });
  
  $(".options").css({
      "background":"#546E7A",
       "color":"#aaa",
        "border-bottom":"1px solid #fff"
        
  });
})

//font style

//default font
$("#fontd").click(function(){
    $("textarea").css({
        "font-family":"'Montserrat', sans-serif"
    });
})

//font 1
$("#font1").click(function(){
    $("textarea").css({
        "font-family":"'Germania One'"
    });
})

//font2

$("#font2").click(function(){
    $("textarea").css({
        "font-family":"'Raleway'"
    });
})


