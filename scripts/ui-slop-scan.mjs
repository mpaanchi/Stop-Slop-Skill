#!/usr/bin/env node
/**
 * Stop Slop source scanner.
 * Conservative heuristic: findings are review prompts, not automatic defects.
 * Requires Node.js 18+. No external dependencies.
 */
import fs from "node:fs";
import path from "node:path";

const VERSION = "1.0.3";
const extensions = new Set([".css",".scss",".sass",".less",".html",".htm",".js",".jsx",".ts",".tsx",".vue",".svelte"]);
const ignored = new Set([".git","node_modules",".next",".nuxt","dist","build","coverage","vendor","out",".turbo",".vercel"]);
const rules = [
  ["Gradient styling",/\bbg-gradient-to-\w+\b|\b(?:linear|radial|conic)-gradient\s*\(/g,"Check whether gradients are brand-led or decorative."],
  ["Glass / backdrop blur",/\bbackdrop-blur(?:-[\w.[\]%-]+)?\b|\bbackdrop-filter\s*:/g,"Check whether blur serves a real purpose."],
  ["Pill-shaped styling",/\brounded-full\b|\bborder-radius\s*:\s*999(?:px|rem|%)?/g,"Check whether full-radius shapes represent real controls or status."],
  ["Decorative motion",/\banimate-(?!none\b)[\w.[\]/%-]+|\bhover:scale-[\w.[\]/%-]+|\btransition-all\b/g,"Check whether movement communicates state or adds visual theatre."],
  ["Wide letter spacing",/\btracking-(?:wide|wider|widest)\b|\bletter-spacing\s*:\s*(?:0\.[2-9]|[1-9])(?:px|em)/g,"Check whether tracking remains readable."],
  ["Uppercase styling",/\buppercase\b/g,"Check whether uppercase labels are necessary."],
  ["Heavy shadows",/\bshadow-(?:md|lg|xl|2xl)\b|\bbox-shadow\s*:/g,"Check whether shadows clarify elevation or are applied by default."],
  ["Opacity styling",/\btext-[\w-]+\/(?:[1-7][0-9]|[89][0-9])\b|\bopacity-(?:[1-7][0-9]|[89][0-9])\b/g,"Check whether opacity harms contrast."],
  ["Monospace styling",/\bfont-mono\b|\bfont-family\s*:[^;{}]*(?:monospace|ui-monospace)/g,"Check whether monospace is limited to suitable content."]
];
const args=process.argv.slice(2);
const strict=args.includes("--strict");
const target=args.find(a=>!a.startsWith("-"))||".";
if(args.includes("--help")||args.includes("-h")){
 console.log(`Stop Slop source scanner v${VERSION}\nUsage: node scripts/ui-slop-scan.mjs [project-path] [--strict]\nFindings are review prompts, not automatic defects.`);
 process.exit(0);
}
const root=path.resolve(target);
if(!fs.existsSync(root)||!fs.statSync(root).isDirectory()){console.error("Project path is not a directory:",root);process.exit(2);}
const files=[];
function walk(dir){
 for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
  if(ent.isDirectory()){if(!ent.name.startsWith(".")&&!ignored.has(ent.name))walk(path.join(dir,ent.name));}
  else if(ent.isFile()&&extensions.has(path.extname(ent.name).toLowerCase()))files.push(path.join(dir,ent.name));
 }
}
walk(root);
let count=0;
for(const file of files){
 if(path.basename(file)==="ui-slop-scan.mjs")continue;
 const source=fs.readFileSync(file,"utf8");
 for(const [label,regex,description] of rules){
  regex.lastIndex=0;let match;
  while((match=regex.exec(source))){
   count++;
   const line=source.slice(0,match.index).split("\n").length;
   console.log(`REVIEW: ${label} — ${path.relative(root,file)}:${line} — ${description}`);
   if(match[0].length===0)regex.lastIndex++;
  }
 }
}
console.log(`\nStop Slop scan v${VERSION}: scanned ${files.length} source files; ${count} review finding(s).`);
console.log("Review each finding in context. Legitimate product, brand, and accessibility uses should remain.");
if(strict&&count)process.exitCode=1;
