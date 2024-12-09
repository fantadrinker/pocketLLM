// import { contextBridge, ipcRenderer } from 'electron'
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  ping: () => ipcRenderer.invoke('ping'),
  chat: (input) => ipcRenderer.invoke('chat', input)
})