var post = decodeURIComponent(window.location.search).split("?")[1].split("&");
var id = post[0].split("=")[1];
var name = post[1].split("=")[1];
var email = post[2].split("=")[1];

$(".id").text(id);
$(".name").text(name);
$(".email").text(email);