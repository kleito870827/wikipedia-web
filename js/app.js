const $ = require('jquery');


$("#Go").on("click", function(){
  var resul = $("#text").val();
  $("#resp").html("");
  $.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=search&exlimit=10&exintro=1&inprop=url&callback=?&gsrsearch="+resul).then((rep, text, xhr) => {
    console.log(rep);
    for (var i in rep.query.pages){
      $("#resp").append("<li class='li jumbotron'><h1 class='h1'><IMG class='gif' "+
      "SRC='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/AnimWIKIPEDIA1.gif/120px-AnimWIKIPEDIA1.gif'></IMG><a href='"+
      rep.query.pages[i].canonicalurl+"'target='_blank'>"+rep.query.pages[i].title+
      "</a></h1><hr/><p class='zoom'>"+rep.query.pages[i].extract+"</p><hr/></li>");
    }
  });
});
$("#text").on("click", function(){
  $("#text").val("");
});
$("#text").keyup(function(e){

    if(e.keyCode == 13){
        $("#Go").click();
    }
});
