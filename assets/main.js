var search = window.location.search;
var error = decodeURIComponent(search.split("?error=")[1]);
console.log(typeof error);

if (error !== "undefined") {
    $(".error").removeClass("hidden");
    $(".error .error-message").text(error);
} else if (error == "undefined") {
    $(".error").addClass("hidden");
}