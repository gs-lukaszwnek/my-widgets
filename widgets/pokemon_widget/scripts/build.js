import { readFileSync, writeFileSync, copyFileSync, unlinkSync } from "fs";
import { execSync } from "child_process";

copyFileSync("index.html", "index.html.bak");

execSync("vite build", { stdio: "inherit" });

const html = readFileSync("index.html", "utf-8");
const css = readFileSync("src/styles.css", "utf-8");

const scriptMatch = html.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
const scriptContent = scriptMatch ? scriptMatch[1] : "";

const contentHtml = `<style>${css}</style>
<pokemon-widget></pokemon-widget>
<script>${scriptContent}</script>`;

writeFileSync("content.html", contentHtml);

unlinkSync("index.html");
copyFileSync("index.html.bak", "index.html");
unlinkSync("index.html.bak");

console.log("✓ Built content.html");
