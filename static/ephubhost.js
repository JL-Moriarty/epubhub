$(document).ready(function() {
  $("p").hover(function() {
    $(".eph_floater").remove();
    var included = added.indexOf( $("p").index($(this)) );
    var span = "";
    if (included < 0) {
      span = "<span class=\'eph_floater\' style=\'float:right;color:blue;\'>+</span>"
      $(this).click(function() { eph_addPara($(this)); });
    }
    else {
      span = "<span class=\'eph_floater\' style=\'float:right;color:blue;\'><a href=\'#\' style=\'text-decoration:none;\' onclick=\'eph_share();\'>SHARE THIS QUOTE</a></span>"
      $(this).click(function() { eph_subtractPara($(this)); });
    }
    $(span).insertBefore($(this));
  });
});

var added = new Array();

var eph_addPara = function(para) {
  var toAdd = $("p").index(para);
  for (var i=0; i<added.length; i++) {
    if (added[i]==toAdd)
      return;
  }
  added.push($("p").index(para))
  para.css("background-color","gainsboro");
  $(".eph_floater").html('<a href=\'#\' style=\'text-decoration:none;\' onclick=\'eph_share();\'>SHARE THIS QUOTE</a>');
  para.click(function() { eph_subtractPara($(this)); });
}

var eph_subtractPara = function(para) {
  var toRemove = $("p").index(para);
  for (var i=0; i<added.length; i++) {
    if (added[i]==toRemove)
      added.splice(i,1);
  }
  para.css("background-color","");
  $(".eph_floater").text("+");
  para.click(function() { eph_addPara($(this)); });
}

var eph_share = function() {
  html = "";
  added = added.sort();
  $("p").each(function(index) {
    if (added.indexOf(index)>=0)
      html+="<p>"+$(this).html()+"</p>\n";
  });
  alert(html);
}