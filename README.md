# Microsoft Azure Speech Services (Text-to-Speech, TTS) Web Demo with Node.JS + Express.JS server
This is demo repo to demostrate how to make simple Text-to-Speech (TTS) web with [Speech Services SDK (Javascript)](https://docs.microsoft.com/en-us/javascript/api/microsoft-cognitiveservices-speech-sdk/?view=azure-node-latest), and using Node.JS + Express.JS as server.

This demo web able to perform TTS for 3 different languages, Cantonese (Chinese), Mandarin (Chinese) and English as well as mixed (Chinese with English). And pre-defined 28 different neural voice sounds output for selection.

* [Azure Speech Services (What is Text-to-Speech (TTS)?)](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/text-to-speech)
* [Quick Start Document of Azure Speech Services (TTS)](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/get-started-text-to-speech?tabs=script%2Cwindowsinstall&pivots=programming-language-javascript)
* [SpeechConfig class in Speech Services SDK (Javascript)](https://docs.microsoft.com/en-us/javascript/api/microsoft-cognitiveservices-speech-sdk/speechconfig?view=azure-node-latest#speechSynthesisVoiceName)
* [Azure Speech Service (TTS voices)](https://docs.microsoft.com/en-gb/azure/cognitive-services/speech-service/language-support#text-to-speech)

Readme update 1.0

## Install necessary packages
```shell
npm install
```

## Run locally
```shell
npm start
```

## Test Web locally
```shell
http://localhost:3000
```

Node.JS and Express.Js version to run code perfectly are 12.18.4 and 4.16.0.

![alt text](https://github.com/easonlai/ms-speech-services-demo-web-tts/raw/main/git_images/screenshot_1.png)