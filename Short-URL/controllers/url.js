const shortid = require('shortid');
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({
        error: "URL is required!"
    })
    const shortID = shortid.generate();
    await URL.create({
        shortID: shortID,
        redirectedURL: body.url,
        visitHistory: [],
    });

    // return res.json({ id: shortID });
    return res.render("home", {
        id: shortID,
    })
}

async function handleAnalytics(req, res) {
    const shortID = req.params.shortID;
    const analytics = await URL.findOne({shortID});
    return res.json({
        totalClicks: analytics.visitHistory.length,
        analytics: analytics.visitHistory,
    })
}

module.exports = {
    handleGenerateNewShortURL,
    handleAnalytics,
}