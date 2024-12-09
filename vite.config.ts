import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const jsToBottomNoModule = () => {
  return {
    name: "no-attribute",
    transformIndexHtml(html: string ) {
      html = html.replace(`type="module" crossorigin`, "")
      let scriptTag = html.match(/<script[^>]*>(.*?)<\/script[^>]*>/)![0]
      console.log("\n SCRIPT TAG", scriptTag, "\n")
      html = html.replace(scriptTag, "")
      html = html.replace("<!-- # INSERT SCRIPT HERE -->", scriptTag)
      return html;
    }
  }
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // jsToBottomNoModule()
  ],
})
