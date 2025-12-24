const fs = require("fs");
const readline = require("readline");
const file = process.argv[2];
fs.readFile(file, "utf8", (err, data) => {
  console.log("Текущее содержимое файла:\n");
  console.log(data);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let input = "";
  rl.on("line", (line) => {
    input += line + "\n"; 
  });
  rl.on("close", () => {
    fs.writeFile(file, input, "utf8", (err) => {
      console.log(`Файл "${file}" успешно перезаписан.`);
    });
  });
});