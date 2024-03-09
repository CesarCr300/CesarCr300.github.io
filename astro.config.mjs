import { defineConfig } from "astro/config";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");

const LIVE_URL = "https://cesarcr300.github.io";
let BASE_URL = LOCALHOST_URL;

if (isBuild) {
    BASE_URL = LIVE_URL;
}

console.log(BASE_URL)

export default defineConfig({
    site: BASE_URL,
});
