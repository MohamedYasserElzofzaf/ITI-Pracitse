$(function() {
    $("#myp").append("<p>This is appended by JQ</p>");
    $("#myp").prepend("<p>This is appended by JQ</p>");
    $("#myp").before("<p>This is appended by JQ</p>");
    $("#myp").after("<p>This is appended by JQ</p>");
    $("<p>ANother way to append</p>").appendTo("#myp");

    // ============================================
    // EVENTS
});