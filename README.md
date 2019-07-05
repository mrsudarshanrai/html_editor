# HTML_editor


## Introduction

//It's a simple HTML editor web application.It can render HTML in built in HTML Iframe.

This project is under development ,so output not much comfortable.

## Code Samples

```javascript
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
```





## Installation

@download all source code and run on browser

*INTERNET REQUIRED to import fonts
