export interface IElectron {
  ping: () => Promise<string>
  chat: (input: string) => Promise<string>
}

declare global {
  interface Window {
    electron: IElectron
  }
}