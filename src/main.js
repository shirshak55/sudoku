const { app, BrowserWindow, ipcMain } = require('electron')

let mainWindow = null

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('ready', async () => {
    mainWindow = new BrowserWindow({
        show: false,
        width: 600,
        height: 600,
        resizable: false,
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.webContents.on('did-finish-load', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined')
        }
        if (process.env.START_MINIMIZED) {
            mainWindow.minimize()
        } else {
            mainWindow.show()
            mainWindow.focus()
        }
    })

    mainWindow.on('closed', () => {
        mainWindow = null
    })
})
