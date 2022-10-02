import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webExtension from "vite-plugin-web-extension";

// https://vitejs.dev/config/
// https://vite-plugin-web-extension.aklinker1.io/
export default defineConfig({
  root: "src",
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    sourcemap: !!process.env.SOURCEMAP,
    rollupOptions: {
        output: {
            sanitizeFileName
        }
    }
  },
  plugins: [
    vue(),
    webExtension({
      manifest: "src/manifest.json",
      assets: "assets",
    }),
  ],
});

// Slightly modified sanitizer because we can't have `_` in the beginning of extension files
// https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
// https://github.com/vitejs/vite/issues/9119

// https://datatracker.ietf.org/doc/html/rfc2396
// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

function sanitizeFileName(name: string): string {
	const match = DRIVE_LETTER_REGEX.exec(name);
	const driveLetter = match ? match[0] : '';

	// A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
	// Otherwise, avoid them because they can refer to NTFS alternate data streams.
	return driveLetter + name.substr(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
}