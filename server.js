const express = require("express");
const next = require("next");
const cors = require("cors");
const axios = require("axios");

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());

  // 인터파크 베스트셀러 api를 Home 화면에 전달
  server.get(`/`, async (req, res) => {
    const {
      data: { item },
    } = await axios
      .get(`http://book.interpark.com/api/bestSeller.api`, {
        params: {
          key: process.env.NEXT_PUBLIC_INTERPARK_API_KEY,
          categoryId: 100,
          output: "json",
        },
      })
      .catch((error) => console.log(error.response));

    app.render(req, res, "/", { item });
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });
});
