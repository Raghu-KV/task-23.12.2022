import express from "express";
import * as dotenv from "dotenv";
import fs from "fs";
const app = express();

dotenv.config();
const PORT = process.env.PORT;

const fileName = "fs-task";
const date = new Date();

const foramttDate = `${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()}`;

const formattTime = `${date.getHours()}-${date.getMinutes()}`;

app.get("/", (req, res) => {
  res.send({
    message: "once create please delete else it shows error",
    toCreate: "to create file with date and time go to - /create",
    toRead: "to read file content go to - /read",
    toDelete: "to delete the folder go to - /delete",
  });
});

app.post("/create", (req, res) => {
  try {
    fs.mkdirSync(fileName);

    fs.writeFileSync(
      `${fileName}/${foramttDate} Tme-${formattTime}.txt`,
      `${date}`
    );
    res.send(
      `text file created in the name ${fileName}/${foramttDate} Tme-${formattTime}`
    );
  } catch (error) {
    // console.log("Something went Wrong");
    // console.log(error);
    res.send({ message: "Something went wrong", error: error });
  }
});

app.get("/read", (req, res) => {
  try {
    const content = fs.readFileSync(
      `./${fileName}/${foramttDate} Tme-${formattTime}.txt`,
      "utf-8"
    );
    res.send(content);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/delete", (req, res) => {
  try {
    fs.rmSync(`./${fileName}`, { recursive: true });
    res.send("done");
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => console.log(`Running in the port ${PORT}`));
