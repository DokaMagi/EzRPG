const $ = require('jquery')
const {remote} = require('electron')

win = remote.getCurrentWindow()

document.addEventListener("keydown", function (e) {
    if (e.which === 123) {
        win.toggleDevTools();
    } else if (e.which === 116) {
        location.reload();
    }
});

$('#btnClose').click(function(){
    win.close()
})

$('#btnMin').click(function() {
    win.minimize()
})

$('#btnMax').click(function() {
    win.isMaximized() ? win.unmaximize() : win.maximize();
})