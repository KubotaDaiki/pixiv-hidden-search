import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  name: "Pixiv Hidden Search",
  version: "1.0.0",
  manifest_version: 3,
  description: "Pixivのブックマークにある削除済み・非公開イラストの情報を探すことができます。",
  icons: {
    "16": "icons/icon.png",
    "48": "icons/icon.png",
    "128": "icons/icon.png",
  },
  content_scripts: [
    {
      matches: ["https://www.pixiv.net/*"],
      js: ["src/content-script.ts"],
    },
  ],
  background: {
    service_worker: "src/background.ts",
  },
  permissions: ["tabs"],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
