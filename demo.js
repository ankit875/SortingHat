const express = require("express");
const app = express();
const port = 6006;

const dummyData = [
  [1, "B", "V"],
  [2, "A", "V"],
  [3, "A", "V"],
  [4, "B", "NV"],
  [5, "B", "V"],
  [6, "A", "NV"],
  [7, "A", "V"],
  [8, "A", "NV"],
  [9, "B", "NV"],
  [10, "B", "V"],
  [11, "A", "NV"],
  [12, "B", "NV"]
];

app.get("/", (req, res) => {
  let AV = [],
    BV = [],
    ANV = [],
    BNV = [];
  for (let i = 0; i < dummyData.length; i++) {
    const section = dummyData[i][1];
    const food = dummyData[i][2];
    if (section === "A" && food === "V") {
      AV = [...AV, dummyData[i][0]];
    } else if (section === "A" && food === "NV") {
      ANV = [...ANV, dummyData[i][0]];
    } else if (section === "B" && food === "V") {
      BV = [...BV, dummyData[i][0]];
    } else if (section === "B" && food === "NV") {
      BNV = [...BNV, dummyData[i][0]];
    }
  }
  console.log(`AV: ${AV}`, `BV: ${BV}`, `ANV: ${ANV}`, `BNV: ${BNV}`);
  res.send("Hello World !");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
