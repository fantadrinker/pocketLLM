import { app, BrowserWindow, ipcMain } from "electron"

import path from 'node:path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { chat } from "./lib/chatHelper.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // win.loadFile(path.join(__dirname, 'dist/index.html'))
  win.loadURL(`http://localhost:5173`)
}


app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')

  ipcMain.handle('chat', (input) => chat(input))

  createWindow()
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})