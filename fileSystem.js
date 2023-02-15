import fs from "fs";

const fileName = process.argv[2] || "fs-task";
const date = new Date();
const foramttDate = `${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()}`;
const formattTime = `${date.getHours()}-${date.getMinutes()}`;

try {
  fs.mkdirSync(fileName);

  fs.writeFileSync(
    `${fileName}/${foramttDate} Tme-${formattTime}.txt`,
    `${date}`
  );
} catch (error) {
  console.log("Something went Wrong");
  console.log(error);
}

const content = fs.readFileSync(
  `./${fileName}/${foramttDate} Tme-${formattTime}.txt`,
  "utf-8"
);
console.log(content);

fs.rmSync(`./${fileName}`, { recursive: true });
console.log("done");
