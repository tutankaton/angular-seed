'use strict';

var info;

function cargar(){
  var url = "data.xlsx";

  var oReq;
  if(window.XMLHttpRequest) oReq = new XMLHttpRequest();
  else if(window.ActiveXObject) oReq = new ActiveXObject('MSXML2.XMLHTTP.3.0');
  else throw "XHR unavailable for your browser";

  oReq.open("GET", url, true);

  if(typeof Uint8Array !== 'undefined') {
    oReq.responseType = "arraybuffer";
    oReq.onload = function(e) {
      var arraybuffer = oReq.response;
      var data = new Uint8Array(arraybuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var wb = XLSX.read(arr.join(""), {type:"binary"});
      process_wb(wb);
    };
  } else {
    oReq.setRequestHeader("Accept-Charset", "x-user-defined");  
    oReq.onreadystatechange = function() { if(oReq.readyState == 4 && oReq.status == 200) {
      var ff = convertResponseBodyToText(oReq.responseBody);
      if(typeof console !== 'undefined') console.log("onload", new Date());
      var wb = XLSX.read(ff, {type:"binary"});
      process_wb(wb);
    } };
  }

  oReq.send();
}

function subir(){


  var aaa = JSON.stringify(info);
    $.ajax({
       type: "POST",
       url: "http://www.tablero.hostingbahia.com.ar/upload.php",
       dataType: "text",
       success: function (msg) {
         if (msg) {
             console.log(msg);
         } else {
              console.log("Cannot");
         }
       },

       data: {json: aaa}
    });
  
}


function to_csv(workbook) {
  var result = [];
  workbook.SheetNames.forEach(function(sheetName) {
    var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
    if(csv.length > 0){
      result.push("SHEET: " + sheetName);
      result.push("");
      result.push(csv);
    }
  });
  return result.join("\n");
}

function to_json(workbook) {
  var result = {};
  workbook.SheetNames.forEach(function(sheetName) {
    var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    if(roa.length > 0){
      result[sheetName] = roa;
    }
  });
  return result;
}

function process_wb(wb) {
  var output = to_json(wb);
  info = output;
  console.log(output);
  window.alert("cargado!");
}