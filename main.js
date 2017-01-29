const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const elemon = require('elemon')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600,
    show: false
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.loadURL(path.join('file://', __dirname, 'app/index.html'))

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()

  if (process.env.NODE_ENV === 'dev') {
    elemon({
      app: app,
      mainFile: 'main.js',
      bws: [{bw: mainWindow, res: []}]
    })
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
