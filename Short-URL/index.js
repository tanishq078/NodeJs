const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect")
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const URL = require("./models/url");

const app = express();
const PORT = 8001;

connectToMongoDB(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected!");
}).catch(err => {
    console.error("MongoDB Connection Error:", err);
});

app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.get("/test", async (req, res) => {
//     const allURLs = await URL.find({});
//     // return res.end(`
//     // <html>
//     //     <head></head>
//     //     <body>
//     //         <ol>${allURLs.map((url) => `
//     //             <li>${url.shortID} - ${url.redirectedURL} - ${url.visitHistory.length}</li>    
//     //         `).join("")}</ol>
//     //     </body>
//     // </html>    
//     // `)
//     return res.render("home", {
//         URLs: allURLs,
//     });
// })

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/url/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    });
    res.redirect(entry.redirectedURL);
});


module.exports = app;