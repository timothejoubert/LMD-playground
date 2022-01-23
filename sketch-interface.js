/* librairie dom to image : https://github.com/tsayen/dom-to-image */
!function(a){"use strict";function b(a,b){function c(a){return b.bgcolor&&(a.style.backgroundColor=b.bgcolor),b.width&&(a.style.width=b.width+"px"),b.height&&(a.style.height=b.height+"px"),b.style&&Object.keys(b.style).forEach(function(c){a.style[c]=b.style[c]}),a}return b=b||{},Promise.resolve(a).then(function(a){return g(a,b.filter,!0)}).then(h).then(i).then(c).then(function(c){return j(c,b.width||a.scrollWidth,b.height||a.scrollHeight)})}function c(a,b){return f(a,b||{}).then(function(b){return b.getContext("2d").getImageData(0,0,a.scrollWidth,a.scrollHeight).data})}function d(a,b){return f(a,b||{}).then(function(a){return a.toDataURL()})}function e(a,b){return f(a,b||{}).then(o.canvasToBlob)}function f(a,c){function d(a){var b=document.createElement("canvas");return b.width=c.width||a.scrollWidth,b.height=c.height||a.scrollHeight,b}return b(a,c).then(o.makeImage).then(o.delay(100)).then(function(b){var c=d(a);return c.getContext("2d").drawImage(b,0,0),c})}function g(a,b,c){function d(a){return a instanceof HTMLCanvasElement?o.makeImage(a.toDataURL()):a.cloneNode(!1)}function e(a,b,c){function d(a,b,c){var d=Promise.resolve();return b.forEach(function(b){d=d.then(function(){return g(b,c)}).then(function(b){b&&a.appendChild(b)})}),d}var e=a.childNodes;return 0===e.length?Promise.resolve(b):d(b,o.asArray(e),c).then(function(){return b})}function f(a,b){function c(){function c(a,b){function c(a,b){o.asArray(a).forEach(function(c){b.setProperty(c,a.getPropertyValue(c),a.getPropertyPriority(c))})}a.cssText?b.cssText=a.cssText:c(a,b)}c(window.getComputedStyle(a),b.style)}function d(){function c(c){function d(a,b,c){function d(a){var b=a.getPropertyValue("content");return a.cssText+" content: "+b+";"}function e(a){function b(b){return b+": "+a.getPropertyValue(b)+(a.getPropertyPriority(b)?" !important":"")}return o.asArray(a).map(b).join("; ")+";"}var f="."+a+":"+b,g=c.cssText?d(c):e(c);return document.createTextNode(f+"{"+g+"}")}var e=window.getComputedStyle(a,c),f=e.getPropertyValue("content");if(""!==f&&"none"!==f){var g=o.uid();b.className=b.className+" "+g;var h=document.createElement("style");h.appendChild(d(g,c,e)),b.appendChild(h)}}[":before",":after"].forEach(function(a){c(a)})}function e(){a instanceof HTMLTextAreaElement&&(b.innerHTML=a.value),a instanceof HTMLInputElement&&b.setAttribute("value",a.value)}function f(){b instanceof SVGElement&&(b.setAttribute("xmlns","http://www.w3.org/2000/svg"),b instanceof SVGRectElement&&["width","height"].forEach(function(a){var c=b.getAttribute(a);c&&b.style.setProperty(a,c)}))}return b instanceof Element?Promise.resolve().then(c).then(d).then(e).then(f).then(function(){return b}):b}return c||!b||b(a)?Promise.resolve(a).then(d).then(function(c){return e(a,c,b)}).then(function(b){return f(a,b)}):Promise.resolve()}function h(a){return q.resolveAll().then(function(b){var c=document.createElement("style");return a.appendChild(c),c.appendChild(document.createTextNode(b)),a})}function i(a){return r.inlineAll(a).then(function(){return a})}function j(a,b,c){return Promise.resolve(a).then(function(a){return a.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(a)}).then(o.escapeXhtml).then(function(a){return'<foreignObject x="0" y="0" width="100%" height="100%">'+a+"</foreignObject>"}).then(function(a){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+b+'" height="'+c+'">'+a+"</svg>"}).then(function(a){return"data:image/svg+xml;charset=utf-8,"+a})}function k(){function a(){var a="application/font-woff",b="image/jpeg";return{woff:a,woff2:a,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:b,jpeg:b,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function b(a){var b=/\.([^\.\/]*?)$/g.exec(a);return b?b[1]:""}function c(c){var d=b(c).toLowerCase();return a()[d]||""}function d(a){return-1!==a.search(/^(data:)/)}function e(a){return new Promise(function(b){for(var c=window.atob(a.toDataURL().split(",")[1]),d=c.length,e=new Uint8Array(d),f=0;d>f;f++)e[f]=c.charCodeAt(f);b(new Blob([e],{type:"image/png"}))})}function f(a){return a.toBlob?new Promise(function(b){a.toBlob(b)}):e(a)}function g(a,b){var c=document.implementation.createHTMLDocument(),d=c.createElement("base");c.head.appendChild(d);var e=c.createElement("a");return c.body.appendChild(e),d.href=b,e.href=a,e.href}function h(){var a=0;return function(){function b(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}return"u"+b()+a++}}function i(a){return new Promise(function(b,c){var d=new Image;d.onload=function(){b(d)},d.onerror=c,d.src=a})}function j(a){var b=3e4;return new Promise(function(c){function d(){if(4===g.readyState){if(200!==g.status)return void f("cannot fetch resource: "+a+", status: "+g.status);var b=new FileReader;b.onloadend=function(){var a=b.result.split(/,/)[1];c(a)},b.readAsDataURL(g.response)}}function e(){f("timeout of "+b+"ms occured while fetching resource: "+a)}function f(a){console.error(a),c("")}var g=new XMLHttpRequest;g.onreadystatechange=d,g.ontimeout=e,g.responseType="blob",g.timeout=b,g.open("GET",a,!0),g.send()})}function k(a,b){return"data:"+b+";base64,"+a}function l(a){return a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function m(a){return function(b){return new Promise(function(c){setTimeout(function(){c(b)},a)})}}function n(a){for(var b=[],c=a.length,d=0;c>d;d++)b.push(a[d]);return b}function o(a){return a.replace(/#/g,"%23").replace(/\n/g,"%0A")}return{escape:l,parseExtension:b,mimeType:c,dataAsUrl:k,isDataUrl:d,canvasToBlob:f,resolveUrl:g,getAndEncode:j,uid:h(),delay:m,asArray:n,escapeXhtml:o,makeImage:i}}function l(){function a(a){return-1!==a.search(e)}function b(a){for(var b,c=[];null!==(b=e.exec(a));)c.push(b[1]);return c.filter(function(a){return!o.isDataUrl(a)})}function c(a,b,c,d){function e(a){return new RegExp("(url\\(['\"]?)("+o.escape(a)+")(['\"]?\\))","g")}return Promise.resolve(b).then(function(a){return c?o.resolveUrl(a,c):a}).then(d||o.getAndEncode).then(function(a){return o.dataAsUrl(a,o.mimeType(b))}).then(function(c){return a.replace(e(b),"$1"+c+"$3")})}function d(d,e,f){function g(){return!a(d)}return g()?Promise.resolve(d):Promise.resolve(d).then(b).then(function(a){var b=Promise.resolve(d);return a.forEach(function(a){b=b.then(function(b){return c(b,a,e,f)})}),b})}var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:d,shouldProcess:a,impl:{readUrls:b,inline:c}}}function m(){function a(){return b(document).then(function(a){return Promise.all(a.map(function(a){return a.resolve()}))}).then(function(a){return a.join("\n")})}function b(){function a(a){return a.filter(function(a){return a.type===CSSRule.FONT_FACE_RULE}).filter(function(a){return p.shouldProcess(a.style.getPropertyValue("src"))})}function b(a){var b=[];return a.forEach(function(a){try{o.asArray(a.cssRules||[]).forEach(b.push.bind(b))}catch(c){console.log("Error while reading CSS rules from "+a.href,c.toString())}}),b}function c(a){return{resolve:function(){var b=(a.parentStyleSheet||{}).href;return p.inlineAll(a.cssText,b)},src:function(){return a.style.getPropertyValue("src")}}}return Promise.resolve(o.asArray(document.styleSheets)).then(b).then(a).then(function(a){return a.map(c)})}return{resolveAll:a,impl:{readAll:b}}}function n(){function a(a){function b(b){return o.isDataUrl(a.src)?Promise.resolve():Promise.resolve(a.src).then(b||o.getAndEncode).then(function(b){return o.dataAsUrl(b,o.mimeType(a.src))}).then(function(b){return new Promise(function(c,d){a.onload=c,a.onerror=d,a.src=b})})}return{inline:b}}function b(c){function d(a){var b=a.style.getPropertyValue("background");return b?p.inlineAll(b).then(function(b){a.style.setProperty("background",b,a.style.getPropertyPriority("background"))}).then(function(){return a}):Promise.resolve(a)}return c instanceof Element?d(c).then(function(){return c instanceof HTMLImageElement?a(c).inline():Promise.all(o.asArray(c.childNodes).map(function(a){return b(a)}))}):Promise.resolve(c)}return{inlineAll:b,impl:{newImage:a}}}var o=k(),p=l(),q=m(),r=n(),s={toSvg:b,toPng:d,toBlob:e,toPixelData:c,impl:{fontFaces:q,images:r,util:o,inliner:p}};"undefined"!=typeof module?module.exports=s:a.domtoimage=s}(this);

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),c=e.webkitRequestFileSystem,f=e.requestFileSystem||c||e.mozRequestFileSystem,u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},d="application/octet-stream",s=0,l=4e4,v=function(e){var t=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};setTimeout(t,l)},p=function(e,t,n){t=[].concat(t);for(var o=t.length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(i){u(i)}}},w=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e},y=function(t,u,l){l||(t=w(t));var y,m,S,h=this,R=t.type,O=!1,g=function(){p(h,"writestart progress write writeend".split(" "))},b=function(){if(m&&a&&"undefined"!=typeof FileReader){var o=new FileReader;return o.onloadend=function(){var e=o.result;m.location.href="data:attachment/file"+e.slice(e.search(/[,;]/)),h.readyState=h.DONE,g()},o.readAsDataURL(t),void(h.readyState=h.INIT)}if((O||!y)&&(y=n().createObjectURL(t)),m)m.location.href=y;else{var r=e.open(y,"_blank");void 0===r&&a&&(e.location.href=y)}h.readyState=h.DONE,g(),v(y)},E=function(e){return function(){return h.readyState!==h.DONE?e.apply(this,arguments):void 0}},N={create:!0,exclusive:!1};return h.readyState=h.INIT,u||(u="download"),r?(y=n().createObjectURL(t),void setTimeout(function(){o.href=y,o.download=u,i(o),g(),v(y),h.readyState=h.DONE})):(e.chrome&&R&&R!==d&&(S=t.slice||t.webkitSlice,t=S.call(t,0,t.size,d),O=!0),c&&"download"!==u&&(u+=".download"),(R===d||c)&&(m=e),f?(s+=t.size,void f(e.TEMPORARY,s,E(function(e){e.root.getDirectory("saved",N,E(function(e){var n=function(){e.getFile(u,N,E(function(e){e.createWriter(E(function(n){n.onwriteend=function(t){m.location.href=e.toURL(),h.readyState=h.DONE,p(h,"writeend",t),v(e)},n.onerror=function(){var e=n.error;e.code!==e.ABORT_ERR&&b()},"writestart progress write abort".split(" ").forEach(function(e){n["on"+e]=h["on"+e]}),n.write(t),h.abort=function(){n.abort(),h.readyState=h.DONE},h.readyState=h.WRITING}),b)}),b)};e.getFile(u,{create:!1},E(function(e){e.remove(),n()}),E(function(e){e.code===e.NOT_FOUND_ERR?n():b()}))}),b)}),b)):void b())},m=y.prototype,S=function(e,t,n){return new y(e,t,n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return n||(e=w(e)),navigator.msSaveOrOpenBlob(e,t||"download")}:(m.abort=function(){var e=this;e.readyState=e.DONE,p(e,"abort")},m.readyState=m.INIT=0,m.WRITING=1,m.DONE=2,m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null,S)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define([],function(){return saveAs});


/*
window.setInterval(function() {
    document.querySelector('.loading').classList.add('stop-loading');
}, 2000);
*/

$( function() {

  var phoneScreen = $(window).width()<640;

  function isPhone(){
    phoneScreen = $(window).width()<640;
    console.log(phoneScreen);
    return phoneScreen;
  }

  $(window).on('resize', isPhone);
  $(window).on('resize', openParam);
  $(window).on('resize', displaySvg);
  

  $('#btn-close').on('click', function() {
    $('.explication').addClass('remove-explication');
    $(".blur").each(function(){
      $(this).removeClass('blur');
    });
  });




  // main, bg fenetre, ciel, sous fenetre, ombre
  var colorHover = "#ee0101";
  var colors = [
    ["#2d2479", "#f4f1f6", "#6c96cf", "#f0b1d0", "#949393"],
    ["#7b2148", "#f5f0a0", "#f5a88a", "#f5a88a", "#8e8598"],
    ["#284f30", "#c2e0c6", "#e04748", "#e04748", "#e04748"],
    ["#888949", "#c2b9e1", "#b0eabf", "#888949", "#8e8598"],
    ["#0908b5", "#ff6fb7", "#adaa04", "#adaa04", "#35cdff"],
    ["#00005b", "#4844ff", "#07b68a", "#07b68a", "#00005b"],
    ["#574708", "#decc84", "#fefbde", "#747411", "#9483c7"]
  ]
  
  var smallScreenPos = [
    {id: "#fenetre-titre", top: 350,left: 20, width: 200},
    {id: "#fenetre-date", top: 100, left: 10, width: 200},
    {id: "#fenetre-arche-grande", top: 200, left:60, width: 100},
    {id: "#fenetre-arche",top: 410,left: 250, width: 100},
    {id: "#fenetre-nuage-rect",top: 480, left: 225, width: 150},
    {id: "#fenetre-lmd",top: 300, left: 225, width: 150},
    {id: "#fenetre-double",top: 225, left: 190, width: 200},
    {id: "#fenetre-triple",top: 470, left: 45, width: 150},
    {id: "#formation-autres", top: 120, left: 240, width: 100},
    {id: "#formation-design",top: 40, left: 100, width: 100}
  ];
    
  var allPos = [
  [{id: "#fenetre-titre", top: 230,left: 630,width: 400},
    {id: "#fenetre-date", top: 480, left: 700, width: 250},
    {id: "#fenetre-arche-grande", top: 5, left:330, width: 250},
    {id: "#fenetre-arche",top: 450,left: 1050,width: 200},
    {id: "#fenetre-nuage-rect",top: 50, left: 1050, width: 250},
    {id: "#fenetre-lmd",top: 250, left: 1050, width: 250},
    {id: "#fenetre-double",top: 80, left: 650, width: 350},
    {id: "#fenetre-triple",top: 500, left:280, width: 350},
    {id: "#formation-autres", top: 400, left: 420, width: 150},
    {id: "#formation-design",top: 40, left: 730, width: 250}
  ],
  [{id: "#fenetre-titre", top: 50, left: 430, width: 400, zIndex: 20},
    {id: "#fenetre-date", top: 400, left: 690, width: 320, zIndex: 25},
    {id: "#fenetre-arche-grande", top: 145, left:720, width: 250},
    {id: "#fenetre-arche",top: 230,left: 740,width: 200},
    {id: "#fenetre-nuage-rect",top: 70, left: 1010, width: 250},
    {id: "#fenetre-lmd",top: 110, left: 970, width: 250},
    {id: "#fenetre-double",top: 500, left: 930, width: 350},
    {id: "#fenetre-triple",top: 430, left: 340, width: 350},
    {id: "#formation-autres", top: 360, left: 1040, width: 150},
    {id: "#formation-design",top: 380, left: 390, width: 250}
  ],
  [{id: "#fenetre-titre", top: 400, left: 330, width: 400},
    {id: "#fenetre-date", top: 180, left: 950, width: 320},
    {id: "#fenetre-arche-grande", top: 20, left:380, width: 250},
    {id: "#fenetre-arche",top: 400,left: 720,width: 200},
    {id: "#fenetre-nuage-rect",top: 30, left: 710, width: 250},
    {id: "#fenetre-lmd",top: 190, left: 670, width: 250},
    {id: "#fenetre-double",top: 470, left: 940, width: 350},
    {id: "#fenetre-triple",top: 40, left: 1000, width: 350},
    {id: "#formation-autres", top: 380, left: 950, width: 150},
    {id: "#formation-design",top: 380, left: 1090, width: 250}
  ],
  [{id: "#fenetre-titre", top: 50, left: 790, width: 400, zIndex: 20},
    {id: "#fenetre-date", top: 180, left: 1000, width: 320},
    {id: "#fenetre-arche-grande", top: 25, left:380, width: 250},
    {id: "#fenetre-arche",top: 130,left: 540,width: 200, zIndex: 20},
    {id: "#fenetre-nuage-rect",top: 330, left: 510, width: 250},
    {id: "#fenetre-lmd",top: 30, left: 1110, width: 250},
    {id: "#fenetre-double",top: 540, left: 840, width: 350},
    {id: "#fenetre-triple",top: 510, left: 640, width: 350},
    {id: "#formation-autres", top: 420, left: 780, width: 150},
    {id: "#formation-design",top: 500, left: 1030, width: 250}
  ],
  [{id: "#fenetre-titre", top: 50, left: 430, width: 400, zIndex: 20},
  {id: "#fenetre-date", top: 400, left: 690, width: 320, zIndex: 25},
  {id: "#fenetre-arche-grande", top: 145, left:720, width: 250},
  {id: "#fenetre-arche",top: 230,left: 740,width: 200},
  {id: "#fenetre-nuage-rect",top: 70, left: 1010, width: 250},
  {id: "#fenetre-lmd",top: 110, left: 970, width: 250},
  {id: "#fenetre-double",top: 500, left: 930, width: 350},
  {id: "#fenetre-triple",top: 430, left: 340, width: 350},
  {id: "#formation-autres", top: 360, left: 1040, width: 150},
  {id: "#formation-design",top: 380, left: 390, width: 250}
],
[{id: "#fenetre-titre", top: 270,left: 630,width: 400},
    {id: "#fenetre-date", top: 550, left: 720, width: 250},
    {id: "#fenetre-arche-grande", top: 5, left:330, width: 250},
    {id: "#fenetre-arche",top: 450,left: 1050,width: 200},
    {id: "#fenetre-nuage-rect",top: 50, left: 1050, width: 250},
    {id: "#fenetre-lmd",top: 250, left: 1050, width: 250},
    {id: "#fenetre-double",top: 80, left: 650, width: 350},
    {id: "#fenetre-triple",top: 550, left:280, width: 350},
    {id: "#formation-autres", top: 440, left: 420, width: 150},
    {id: "#formation-design",top: 40, left: 730, width: 250}
  ],
  [{id: "#fenetre-titre", top: 400, left: 330, width: 400},
    {id: "#fenetre-date", top: 180, left: 950, width: 320},
    {id: "#fenetre-arche-grande", top: 20, left:380, width: 250},
    {id: "#fenetre-arche",top: 400,left: 720,width: 200},
    {id: "#fenetre-nuage-rect",top: 30, left: 710, width: 250},
    {id: "#fenetre-lmd",top: 190, left: 670, width: 250},
    {id: "#fenetre-double",top: 470, left: 940, width: 350},
    {id: "#fenetre-triple",top: 40, left: 1000, width: 350},
    {id: "#formation-autres", top: 380, left: 950, width: 150},
    {id: "#formation-design",top: 380, left: 1090, width: 250}
  ]
  ];

  var gridValue = [
    {
      ecart : 50,
      colorGrid : "#f4f1f6",
      strokeGrid : 3,
    }, 
    {
      ecart : 140,
      colorGrid : "#f4f1f6",
      strokeGrid : 0,
    }, 
    {
      ecart : 5,
      colorGrid : "#f4f1f6",
      strokeGrid : 2,
    },
    {
      ecart : 70,
      colorGrid : "#f4f1f6",
      strokeGrid : 20,
    },
    {
      ecart : 4,
      colorGrid : "#f4f1f6",
      strokeGrid : 1,
    },
    {
      ecart : 10,
      colorGrid : "#f4f1f6",
      strokeGrid : 0,
    },{ 
      ecart : 60,
      colorGrid : "#f4f1f6",
      strokeGrid : 18,
    }, 
  ];
  var displayGrid = gridValue[0];


  function updateGridValue(){
    displayGrid.ecart = $("#rangeGrid").val();
    displayGrid.colorGrid = $("#color-grid").val();
    displayGrid.strokeGrid = $("#strokeGrid").val();

    createGrid();
  }
  
  function createGrid() {
    //remove all div deja existante
    $("#row").empty();
    $("#column").empty();

    var g = displayGrid;
    var rows = $(window).height() /g.ecart;
    var column = $(window).width() /g.ecart;

    var $row = $("<div/>", {class: 'row',}).css({
      height: g.ecart,
      borderTop: g.strokeGrid + "px solid " + g.colorGrid,
    });

    var $column = $("<div/>", {class: 'column'})
    .css({
      width: g.ecart,
      borderLeft: g.strokeGrid + "px solid " + g.colorGrid,
    });

    for (var i = 0; i < rows; i++) {
      $("#row").append($row.clone());
    }
    for (var i = 0; i < column; i++) {
      $("#column").append($column.clone());
    }
  }

  updateGridValue();

  //Init display of all fenetre

  function displaySvg(){
    var indexFenetre = 0;
    if(!phoneScreen){
      $(".container-fenetre").each(function() {
        $(this).css({
          top : allPos[0][indexFenetre].top +  "px",
          left : allPos[0][indexFenetre].left +"px",
          width : allPos[0][indexFenetre].width + "px",
          zIndex : allPos[0][indexFenetre].zIndex
        });
        indexFenetre ++;
      });
    }else{
      console.log("small screen");
      $(".container-fenetre").each(function() {
        $(this).css({
          top : smallScreenPos[indexFenetre].top +  "px",
          left : smallScreenPos[indexFenetre].left +"px",
          width : smallScreenPos[indexFenetre].width + "px",
        });
        indexFenetre ++;
      });
    }
  }
  displaySvg();

  //effet de drag
  $( ".draggable" ).draggable({
    containment: "#canvas",
    //grid: [displayGrid.ecart, displayGrid.ecart],
    start: function(){
      if($(this).hasClass("container-fenetre")){
        $("#prereglage p").removeClass("select-preset");
      }
    },
    stop:function(){
      console.log(displayGrid.ecart, $(this).attr('id'), $(this)[0].offsetTop, $(this)[0].offsetLeft);
    }
  });

  //toggle interfaces
  function openParam(){
    if(phoneScreen){
      $( "#controleur-interface-1 .content-interface" ).hide();
      $( "#controleur-interface-2 .content-interface" ).hide();
      console.log("close params");
    }
  }

  $( "#controleur-interface-1 .header-fenetre" ).click(function() {
    $( "#controleur-interface-1 .content-interface" ).toggle(300);
    $("#controleur-interface-1 .cross").toggleClass("active");
  });
  $( "#controleur-interface-2 .header-fenetre" ).click(function() {
    $( "#controleur-interface-2 .content-interface" ).toggle(300);
    $("#controleur-interface-2 .cross").toggleClass("active");
  });

  //effet hover 
  $(".container-fenetre").hover(function() {
    //var hoverColor = document.styleSheets[0].cssRules[0].style.getPropertyValue("--hover-color");
    $(this).find(".fenetre-ombre").animate({
      opacity: 0.3,
      fill: colorHover,
    }, 300 );
  },function (){
    //var ombreColor = document.styleSheets[0].cssRules[0].style.getPropertyValue("--ombre-color");
    $(this).find(".fenetre-ombre").animate({
      opacity: 1,
      fill: colors[0][4],
    }, 150 );
  },
  );
    
  // random pos
  $("#position-random").on('click', function() {
    $( ".container-fenetre" ).each(function() {
      $(this).css({
        left : ((Math.random() * ($('#canvas').width()-200))),
        top : ((Math.random() * ($('#canvas').height()-200)))
      });
    });
  });

  var variableCss = $("body").get(0).style;
  //changer colors
  $("#color-picker-principale").on('change, input', function(event) {
    variableCss.setProperty('--main-color', event.target.value);  
  });
  $("#color-picker-secondaire").on('change, input', function(event) {
    variableCss.setProperty('--second-color', event.target.value);  
  });
  $("#color-picker-ciel").on('change, input', function(event) {
    variableCss.setProperty('--ciel-color', event.target.value);  
  });

  //random color change
  $("#random-color").on('click', function() {
    c1 = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    variableCss.setProperty('--main-color', c1);  
    principale

    c2 = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    variableCss.setProperty('--second-color', c2);
    $("input[name=secondaire]").val(c2);

    c3 = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    variableCss.setProperty('--ciel-color', c3);
    $("input[name=ciel]").val(c3);
    
    variableCss.setProperty('--sousfenetre-color', '#' + randomColor());
    variableCss.setProperty('--ombre-color', '#' + randomColor());
    
    //initialiser ces couleurs dans les inputs colorPickers
  });

  function randomColor(){
    var color = ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    return color;
  }

  /////////// preset ///////////
  var indexPos = 0;
  for(var i =0; i < colors.length; i++){
    var nb = i +1;
    var $pre = $("<p/>", {class: i,}).html("Préset " + nb);
    $("#prereglage").append($pre.clone());
  }
  $('#prereglage p:first-child').addClass("select-preset");
  
  $("#prereglage p").on('click', function() {
    $("#prereglage p").removeClass("select-preset");
    $(this).addClass("select-preset");
    $(".container-fenetre").addClass("transition-preset");
    var selectedId = $(this).attr("class").split(' ')[0];

      if(selectedId >= 0){
        variableCss.setProperty('--main-color', colors[selectedId][0]);  
        $("input[name=principale]").val(colors[selectedId][0]);

        variableCss.setProperty('--second-color', colors[selectedId][1]);
        $("input[name=secondaire]").val(colors[selectedId][1]);

        variableCss.setProperty('--ciel-color', colors[selectedId][2]);
        $("input[name=ciel]").val(colors[selectedId][2]);

        variableCss.setProperty('--sousfenetre-color', colors[selectedId][3]);
        variableCss.setProperty('--ombre-color', colors[selectedId][4]);
        //change Pos
        var indexFenetre = 0;
        if(!phoneScreen){
          $(".container-fenetre").each(function() {
            $(this).css({
              top : allPos[selectedId][indexFenetre].top + "px",
              left : allPos[selectedId][indexFenetre].left + "px",
              width : allPos[selectedId][indexFenetre].width + "px",
              zIndex : allPos[selectedId][indexFenetre].zIndex
            });
            indexFenetre ++;
          });
  
          indexPos += 1;
          if(indexPos >= allPos.length){
            indexPos = 0;
          }
        }else{
          $(".container-fenetre").each(function() {
            $(this).css({
              top : smallScreenPos[indexFenetre].top +  "px",
              left : smallScreenPos[indexFenetre].left +"px",
              width : smallScreenPos[indexFenetre].width + "px",
            });
            indexFenetre ++;
          });
        }
        //change grid
        displayGrid = gridValue[selectedId];
        createGrid();
        $("#rangeGrid").val(gridValue[selectedId].ecart);
        $("#strokeGrid").val(gridValue[selectedId].strokeGrid);


        $(".container-fenetre").removeClass("transition-preset");
      }else{

    }
  }); 

  //ANIMATION
  var speed = 2;
  var activeSynchro = false;
  var lunchAnim = false;
  var animStyle = "translate";
  var animStep = "ease-in-out";

  function loadAnim(){
    var index = 0;

    //si anim est active
    if(lunchAnim == true){ 

      $(".container-fenetre").each(function() {
        //si synchro est active
        if(activeSynchro == false){
          index +=2;
          $(this).css({
            animationName : "anim-fenetre-"+animStyle,
            animationDuration : speed + "s",
            animationTimingFunction : animStep,
            animationDelay : index + "00ms",    
            animationDirection : "alternate",
            animationIterationCount : "infinite"
          });
        }else{
          $(this).css({
            animationName : "anim-fenetre-"+animStyle,
            animationDuration : speed + "s",
            animationTimingFunction : animStep,
            animationDelay : "0ms",    
            animationDirection : "alternate",
            animationIterationCount : "infinite"
          });
        }
      });
    } else {
      $(".container-fenetre").each(function() {
        $(this).css({
          animation : "none"
        });
      });
    }
  }
  //parametre anim
  function activAnim(){
    if($(this).val() == 'on'){
      lunchAnim = true;
    }else{
      lunchAnim = false;
    }
    console.log("activAnim " + lunchAnim);
    loadAnim();
  }
  function synchro(){
    if($(this).val() == 'on'){
      activeSynchro = true;
    }else{
      activeSynchro = false;
    }
    loadAnim();
  }
  function initSpeed(){

    speed = map($(this).val(), 0.1, 2, 2, 0.1);
    console.log('vitesse'+speed);
    loadAnim();
  }

  function initFluid(){
    if($(this).val() == 'on'){
      animStep = "ease-in-out";
    }else{
      animStep = "steps(5, end)";
    }
    loadAnim();
  }

  function newMouvment(){
    animStyle = $(this).val();
    console.log(animStyle);
    loadAnim();
  }

  function removePreset(){
    $("#prereglage p").removeClass("select-preset");
  }
  $("input").change(removePreset);
  $("button:not(#btn-close)").on('click', removePreset);

  $("input[type=radio][name=animation]").change(activAnim);
  $("input[type=radio][name=synchroniser]").change(synchro);
  $("#myRangeSpeed").change(initSpeed);
  $("input[type=radio][name=fluide]").change(initFluid);
  $("select[name=style-mouvement]").change(newMouvment);

  $(".grid-input").on('change, input', updateGridValue);
  $(window).resize(createGrid);

  //put fenetre behin when drag
  $('.draggable').bind('mousedown',function(){ bringFront($(this), '.draggable'); });
  function bringFront(elem, stack){
    // Brings a file to the stack front
    var min, group = $(stack);
    
    if(group.length < 1) return;
    min = parseInt(group[0].style.zIndex, 10) || 0;
    $(group).each(function(i) {
      this.style.zIndex = min+i;
    });
    
    if(elem == undefined) return;
    $(elem).css({'zIndex' : min+group.length});
  }

  function map(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
  }
});

var nbScreen = localStorage.getItem('nbScreen');

//init nbscreen if first stime
if(!nbScreen){
  nbScreen = 0;
}
console.log('nombre de screen : ' + nbScreen);


$("#but_screenshot").on( "click", function() {
  domtoimage.toPng(document.getElementById('capture')).then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
    //enregistrer
    var link = document.createElement("a");
    document.body.appendChild(link); // for Firefox
    link.setAttribute("href", dataUrl);
    link.setAttribute("download", "LMD-Poster-"+ nbScreen +".png");
    link.click();
    localStorage.setItem('nbScreen', nbScreen ++);
  })
  .catch(function (error) {
    console.error('oops, mes compétences en développement ne suffisent pas pour faire fonctionner l\'enregistrement', error);
  });

});