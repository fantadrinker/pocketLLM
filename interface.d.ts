export interface IElectron {
  ping: () => string
  chat: (input: string) => Promise<string>
}

declare global {
  interface Window {
    electron: IElectron
  }
}