const express = require('express');
const path = require('path');
const { textToSpeech } = require('./azure-cognitiveservices-speech');

// ignore request for FavIcon. so there is no error in browser
const ignoreFavicon = (req, res, next) => {
    if (req.originalUrl.includes('favicon.ico')) {
        res.status(204).end();
    }
    next();
};

// fn to create express server
const create = async () => {

    // server
    const app = express();

    // configure nonFeature
    app.use(ignoreFavicon);

    // root route - serve static file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/client.html'));
    });

    // creates a temp file on server, the streams to client
    /* eslint-disable no-unused-vars */
    app.get('/text-to-speech', async (req, res, next) => {
        const { key, region, phrase, file, textLang, voiceName } = req.query;
        
        if (!key || !region || !phrase) res.status(404).send('Invalid query string');
        
        let fileName = null;
        
        // stream from file or memory
        if (file && file === true) {
            fileName = `./temp/stream-from-file-${timeStamp()}.mp3`;
        }
        
        const audioStream = await textToSpeech(key, region, phrase, fileName, textLang, voiceName);
        res.set({
            'Content-Type': 'audio/mpeg',
            'Transfer-Encoding': 'chunked'
        });
        audioStream.pipe(res);
    });

    // Error handler
    /* eslint-disable no-unused-vars */
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    return app;
};

module.exports = {
    create
};
