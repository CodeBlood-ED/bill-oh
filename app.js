const {app, BrowserWindow} =  require('electron')

let appWindow

function createWindow() {
    appWindow = new BrowserWindow({
        width:1500,
        height:1000
    })
    appWindow.loadFile('dist/bill-oh/index.html');
    appWindow.on('closed', function () {
        appWindow=null
    })
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
})