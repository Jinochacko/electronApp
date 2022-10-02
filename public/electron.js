const { app, BrowserWindow, Menu } = require('electron')
require('@electron/remote/main').initialize()
function createWindow () {
  // Create the browser window.
  const config = {
    title:"Employee Listing",
    // frame:false,
    width: 800,
    height: 600,
    maxHeight:600,
    maxWidth:800,
    minHeight:400,
    minWidth:600,
    backgroundColor:'#7B435B',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule:true,
      devTools: false
    }
  };
  const template = [
    {
        label:'Menu',
        submenu:[
            {role:'selectall'},
            {type:'separator'},
            {role:'reload'}
            ]
    },
    {
        label:'Open Google',
        click: function(){
          let win = new BrowserWindow({width:600,height:800})
          win.loadURL('https://www.google.com')
        }
    }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  const win = new BrowserWindow(config);
//   win.removeMenu();
  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  win.webContents.openDevTools()
  let childWin = new BrowserWindow({ parent: win, modal: true, show: false, 
    width: 400,
    height: 400, })
    childWin.loadURL('https://github.com');
    childWin.show()
 win.show()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.