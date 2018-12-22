const fs = require("fs")
selected_list = null

//buttons color change
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

$("#playerCharacters").click(function() {
    clearDesktop()
    createTitle("Seus Personagens")
    createContainer('abc')
    var infos = getInformation("characters")
    if (infos == []) {
        createContainer()
    }

})

function getInformation(path) {
    var path = "./data/user/" + path
    var files = fs.readdirSync(path)
    var res = []
    console.log(files)
    files.forEach(function(file) {
        var obj = JSON.parse(fs.readFileSync(path + '\\' + file, 'utf8'));
        res.push(obj)
    })
    return res
}

function clearDesktop() {
    var desktop = $("#desktop")[0]
    while (desktop.firstChild) {
        desktop.removeChild(desktop.firstChild)
    }
}

function createContent(title_text) {
    var box = document.createElement('div')
    box.setAttribute("class", "content-box")
    var title = document.createElement("h1")
    title.setAttribute("class", "menu-title")
    title.innerHTML = title_text
    $('#desktop').append(div)
}

function createContainer(title) {
    var container = document.createElement("div")
    container.setAttribute("class", "container")
    var thumb = document.createElement('div')
    thumb.setAttribute('class', 'thumb')
    var span = document.createElement('dspaniv')
    span.innerText = title
    container.append(thumb)
    container.append(span)
    $('#desktop').append(container)
}