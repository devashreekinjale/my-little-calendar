const { app, BrowserWindow, ipcMain } = require('electron');
ipcMain.on("close-app", () => {
    app.quit();
});

function createWindow() {
  const win = new BrowserWindow({
    title: "My little calendar",
    width: 300,
    height: 400,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    background: "#00000000",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
