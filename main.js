'use strict';

const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')


require('electron-reload')(__dirname);


let win

function createWindow () {
  win = new BrowserWindow(
    { 
      width: 800, 
      height: 500,
      minHeight: 400,
      minWidth: 340,
      frame: false 
    })

  win.setMenu(null)
  win.toggleDevTools()
  win.on('closed', () => {
    win = null
  })
  win.loadFile('main.html')

}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  app.quit()
})