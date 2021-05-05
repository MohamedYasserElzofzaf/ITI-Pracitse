$(function() {
    $("#myp").append("<p>This is appended by JQ</p>");
    $("#myp").prepend("<p>This is appended by JQ</p>");
    $("#myp").before("<p>This is appended by JQ</p>");
    $("#myp").after("<p>This is appended by JQ</p>");
    $("<p>ANother way to append</p>").appendTo("#myp");

    // ============================================
    // EVENTS
    $("[value=check]").click(function(e) {
        // console.log("clicked");
        $("#myp").toggleClass("myClass");
    });
    $("[value=check]").on("click", function() {
        // $("p").fadeOut(1500).delay(2000).fadeIn(2000);
        $("p").slideUp(1500).delay(2000).slideDown(2000);
    });
});