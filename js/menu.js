selected_list = null

$("li").hover(function() {
    $(this).css("background-color", "#666")
}, function() {
    if(this == selected_list)
        $(this).css("background-color", "#444")
    else
    $(this).css("background-color", "#222")
})
$("li").click(function() {
    selected_list = this
    $("li").css("background-color", "#222")
    $(this).css("background-color", "#666")
})