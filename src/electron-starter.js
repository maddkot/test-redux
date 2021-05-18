const path = require('path');
const url = require('url');
const { app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow(
        {
            minWidth: 800,
            minHeight: 600
        }
    )
    
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true,
        
    });
    
    mainWindow.loadURL(startUrl);
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  .catch ((err)=>{
    console.log(err)
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })