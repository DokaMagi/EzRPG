const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Criar uma janela de navegação.
  win = new BrowserWindow({ width: 800, height: 600, frame: false })

  win.loadFile('index.html')

  win.webContents.openDevTools()
  win.setMenu(null)
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)