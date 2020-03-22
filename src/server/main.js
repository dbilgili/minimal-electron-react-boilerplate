// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow } = require('electron');
const { is } = require('electron-util');

const path = require('path');

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    backgroundColor: '#fff',
    width: 500,
    height: 250,
    webPreferences: {
      devTools: is.development,
      nodeIntegration: true,
      backgroundThrottling: false
    }
  });

  if (is.development) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../../build/index.html')}`);
  }
};

app.on('ready', () => {
  createMainWindow();
});
