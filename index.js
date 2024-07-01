const express = require('express');
const path = require('path');
const staticRoute = require("./routes/staticRouter.js")
const {connectToMongoDB} = require("./connect.js");
const urlRoute = require("./routes/url.js");
const URL = require("./models/url.js")
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://{USE YOUR IP ADDRESS}/short-url").then((console.log("MongoDB connected")))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/url", urlRoute);

app.use("/", staticRoute);

app.get("/:shortId", async (req, res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
        shortId,
    }, { $push: {
        visitHistory: {
            timestamp: Date.now(),
        },
    },
    }
);
if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
}

return res.redirect(entry.redirectURL);
});

// app.get("/analytics/shortId", )

app.listen(PORT, ()=>{
    console.log(`Server started on Port: ${PORT}`);
})