const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

async function main() {
  const userText = await ask("Введите текст: ");

  try {
    fs.writeFileSync("output.txt", userText, "utf8");
    console.log('Текст сохранен в "output.txt".');
  } catch (err) {
    console.error("Ошибка сохранения в output.txt:", err.message);
  }

  console.log('\n2) Анализ файла "output.txt"...');

  try {
    const content = fs.readFileSync("output.txt", "utf8");

    const lineCount =
      content === "" ? 0 : content.split(/\r?\n/).length;

    const charCount = content.replace(/\r/g, "").length;

    console.log(`Количество строк: ${lineCount}`);
    console.log(`Количество символов: ${charCount}`);
  } catch (err) {
    console.error(
      'Невозможно прочитать "output.txt". Убедитесь, что файл существует.',
      "\n Ошибка:",
      err.message
    );
  }

  console.log(
    '\n3) Ввод строк для записи в "log.txt". ' +
      'Каждая строка будет добавлена в конец файла.'
  );
  console.log('Чтобы завершить, введите команду: stop\n');

  startLogLoop();
}

function startLogLoop() {
  process.stdout.write("> ");

  rl.on("line", (input) => {
    const trimmed = input.trim();

    if (trimmed.toLowerCase() === "stop") {
      console.log("Программа завершена.");
      rl.close();
      return;
    }

    fs.appendFile("log.txt", input + "\n", (err) => {
      if (err) {
        console.error("Ошибка сохранения в log.txt:", err.message);
      }
    });

    process.stdout.write("> ");
  });
}

main();
