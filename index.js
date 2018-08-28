//Index.js
var express = require('express');
var app = express();
app.listen(process.env.PORT || 4000,()=>{ console.log('Node Running') });
app.post('/',function(req,res){
    var resp = {
        "Request Type":"POST",
        "Custom Message":"/ ROUTE IS CALLED AND RETURNED A RESPONSE SUCCESSFULLY",
        "fulfillmentText": "This is a text response",
        "fulfillmentMessages": [
          {
            "card": {
              "title": "card title",
              "subtitle": "card text",
              "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
              "buttons": [
                {
                  "text": "button text",
                  "postback": "https://assistant.google.com/"
                }
              ]
            }
          }
        ],
        "source": "example.com",
        "payload": {
          "google": {
            "expectUserResponse": true,
            "richResponse": {
              "items": [
                {
                  "simpleResponse": {
                    "textToSpeech": "this is a simple response"
                  }
                }
              ]
            }
          },
          "facebook": {
            "text": "Hello, Facebook!"
          },
          "slack": {
            "text": "This is a text response for Slack."
          }
        },
        "outputContexts": [
          {
            "name": "projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name",
            "lifespanCount": 5,
            "parameters": {
              "param": "param value"
            }
          }
        ],
        "followupEventInput": {
          "name": "event name",
          "languageCode": "en-US",
          "parameters": {
            "param": "param value"
          }
        }
      }
    res.json(resp);
});


app.get('/check',function(req,res){
    var resp = {
        "Request Type":"GET",
        "Custom Message":"/check ROUTE IS CALLED AND RETURNED A RESPONSE SUCCESSFULLY",
        "fulfillmentText": "This is a text response",
        "fulfillmentMessages": [
          {
            "card": {
              "title": "card title",
              "subtitle": "card text",
              "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
              "buttons": [
                {
                  "text": "button text",
                  "postback": "https://assistant.google.com/"
                }
              ]
            }
          }
        ],
        "source": "example.com",
        "payload": {
          "google": {
            "expectUserResponse": true,
            "richResponse": {
              "items": [
                {
                  "simpleResponse": {
                    "textToSpeech": "this is a simple response"
                  }
                }
              ]
            }
          },
          "facebook": {
            "text": "Hello, Facebook!"
          },
          "slack": {
            "text": "This is a text response for Slack."
          }
        },
        "outputContexts": [
          {
            "name": "projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name",
            "lifespanCount": 5,
            "parameters": {
              "param": "param value"
            }
          }
        ],
        "followupEventInput": {
          "name": "event name",
          "languageCode": "en-US",
          "parameters": {
            "param": "param value"
          }
        }
      }
    res.json(resp);
});

app.post('/check',function(req,res){
    console.log("Post Block");
    
    var resp = {
        "Request Type":"POST",
        "Custom Message":"/check ROUTE IS CALLED AND RETURNED A RESPONSE SUCCESSFULLY",
        "fulfillmentText": "This is a text response",
        "fulfillmentMessages": [
          {
            "card": {
              "title": "card title",
              "subtitle": "card text",
              "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
              "buttons": [
                {
                  "text": "button text",
                  "postback": "https://assistant.google.com/"
                }
              ]
            }
          }
        ],
        "source": "example.com",
        "payload": {
          "google": {
            "expectUserResponse": true,
            "richResponse": {
              "items": [
                {
                  "simpleResponse": {
                    "textToSpeech": "this is a simple response"
                  }
                }
              ]
            }
          },
          "facebook": {
            "text": "Hello, Facebook!"
          },
          "slack": {
            "text": "This is a text response for Slack."
          }
        },
        "outputContexts": [
          {
            "name": "projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name",
            "lifespanCount": 5,
            "parameters": {
              "param": "param value"
            }
          }
        ],
        "followupEventInput": {
          "name": "event name",
          "languageCode": "en-US",
          "parameters": {
            "param": "param value"
          }
        }
      }
    res.json(resp);
});