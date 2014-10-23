define({ api: [
  {
    "type": "",
    "url": "{get}/user",
    "title": "Request User Information",
    "name": "Getuser",
    "group": "User",
    "version": "0.2.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>The users name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Age",
            "optional": false,
            "description": "<p>Calculated age from Birthday</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success: ",
          "content": "Example data on success: \n{\nname: 'Zach',\n  age: 28\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./example.js"
  },
  {
    "type": "",
    "url": "{get}/user",
    "title": "Request User Information",
    "name": "Getuser",
    "group": "User",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>The users name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success: ",
          "content": "Example data on success: \n{\nname: 'Zach'\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js"
  },
  {
    "type": "",
    "url": "{put}/user",
    "title": "Change User",
    "name": "Putuser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>New name of the user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NameEmptyError",
            "optional": false,
            "description": "<p>The name was empty. Minimum of <code>1</code> character is required.</p>"
          }
        ]
      }
    },
    "filename": "./example.js"
  }
] });