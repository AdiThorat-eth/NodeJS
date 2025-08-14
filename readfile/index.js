import { readFile, writeFile } from "fs/promises";

let filePath = new URL("./index.html", import.meta.url);
let contents = await readFile(filePath, { encoding: "utf-8" });

let data = {
  name: "Ghi",
  company: "ijk",
};

for (let [key, value] of Object.entries(data)) {
  contents = contents.replace(`{${key}}`, value);
}

//It will print the modified contents to the console
console.log(contents); 

//It will write the modified contents to a new file
await writeFile(new URL("./newindex.html", import.meta.url), contents);