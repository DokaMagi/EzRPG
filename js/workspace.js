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
    
    var infos = getInformation("characters")
    block = createContent("Seus Personagens")
    container = createContainer("Criar Novo Personagem", "./imgs/plus.svg")
    container.firstChild.style.backgroundSize = "50px"
    container.addEventListener('click', function() {
        
    })
    block.append(container)

})

function getInformation(path) {
    var path = "./data/user/" + path
    var files = fs.readdirSync(path)
    var res = []
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
    title.innerText = title_text
    var block = document.createElement("div")
    block.setAttribute("class", "block")
    box.append(title)
    box.append(block)
    $('#desktop').append(box)
    return block
}

function createContainer(title, background) {
    var container = document.createElement("div")
    container.setAttribute("class", "container")
    var thumb = document.createElement('div')
    thumb.setAttribute('class', 'thumb')
    thumb.style.backgroundImage = 'url(' + background + ')'
    var span = document.createElement('span')
    span.innerText = title
    container.append(thumb)
    container.append(span)
    return container
}