const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 80;

app.use(express.json());
app.use(cookieParser());

// ---------- Serve website-related URLs ----------
app.use("/static", express.static("build/static"));
app.use("/styles", express.static("build/styles"));
app.use("/scripts", express.static("build/scripts"));

// Redirect ".html" or ".htm"
app.use("/", function (req, res, next) {
  if (req.url.slice(-5) == ".html" || req.url.slice(-4) == ".htm") {
    return res.redirect(301, req.url.slice(0, -5));
  }
  next();
});

// Serve HTML files
app.use(function (req, res) {
  res.status(200).sendFile(req.url + ".html", { root: __dirname + "/build" });
});

// Start server
app.listen(port, () => console.log(`Server listening on port: ${port}`));
