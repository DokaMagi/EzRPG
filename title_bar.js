const $ = require('jquery')
const {remote} = require('electron')

win = remote.getCurrentWindow()

$('#btnClose').click(function(){
    win.close()
})

$('#btnMin').click(function() {
    win.minimize()
})

$('#btnMax').click(function() {
    win.isMaximized() ? win.unmaximize() : win.maximize();
})