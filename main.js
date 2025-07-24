const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');

let server;
const PORT = 3000;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  const startUrl = process.env.ELECTRON_START_URL || `http://localhost:${PORT}`;
  win.loadURL(startUrl);
}

app.whenReady().then(() => {
  // Start express server to serve the static out folder
  const expressApp = express();
  expressApp.use(express.static(path.join(__dirname, 'out')));

  server = expressApp.listen(PORT, () => {
    console.log(`Static server running at http://localhost:${PORT}`);
    createWindow();
  });
});

app.on('window-all-closed', () => {
  if (server) {
    server.close();
  }
  if (process.platform !== 'darwin') app.quit();
});
