const shortid = require("shortid");
const URL = require("../models/url.js");

async function handleGenerateNewShortURL(req, res){

    const body = req.body;
    if(!body.url) return res.status(404).json({error: "URL is required"})

        let existingUrl = await URL.findOne({ redirectURL: body.url });
        if (existingUrl) {
            const allUrls = await URL.find({});
            return res.render("home", {
                id: existingUrl.shortId,
                message: "Short ID already exists for this URL",
                urls: allUrls,
            });
        }

    
    shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })

    const allUrls = await URL.find({});
    return res.render("home", {
        id: shortID,
        urls: allUrls,
    })
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
};