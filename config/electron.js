const {app, BrowserWindow} = require('electron');

let win = null;

function initialize(){
    function createWindow(){
        const windowOptions = {
            // width: 1080,
            // minWidth: 680,
            // height: 840,
            // title: app.getName,
            frame: true,
            transparent: true,
            webPreferences: {
              nodeIntegration: true
            }
        }
        win = new BrowserWindow(windowOptions);
        win.setMenuBarVisibility(false);
        win.loadURL('http://localhost:3000');

        win.on('closed', () => {
            win = null;
        })
    }
    app.on('ready', () => {
        createWindow();
    })
    app.on('window-all-closed', () => {
        if(process.platform !== 'darwin'){
            app.quit();
        }
    })
    app.on('activate', () => {
        if(win === null){
            createWindow();
        }
    })
}

initialize();