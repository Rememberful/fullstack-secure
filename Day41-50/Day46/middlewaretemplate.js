const express = require("express");
const app = express();
const PORT = 4000;

// ---------------------------
// 1️⃣ Built-in Middleware
// ---------------------------
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// ---------------------------
// 2️⃣ Application-Level Middleware
// ---------------------------
app.use((req, res, next) => {
  console.log(`[App Middleware] ${req.method} request to ${req.url}`);
  next(); // Pass control to next middleware or route
});

// ---------------------------
// 3️⃣ Router-Level Middleware
// ---------------------------
const router = express.Router();

// Router middleware
router.use((req, res, next) => {
  console.log("[Router Middleware] Executed for /api routes");
  next();
});

// Routes in the router
router.get("/users", (req, res) => {
  res.send("List of users");
});

router.post("/users", (req, res) => {
  const user = req.body;
  res.send(`User added: ${JSON.stringify(user)}`);
});

// Mount router
app.use("/api", router);

// ---------------------------
// 4️⃣ Error-Handling Middleware
// ---------------------------
app.use((err, req, res, next) => {
  console.error("[Error Middleware]", err.stack);
  res.status(500).send("Something went wrong!");
});

// ---------------------------
// 5️⃣ Start Server
// ---------------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
