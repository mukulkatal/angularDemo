export var ControlTemplates: any = 
{
            // Json conditions
        /*
           ---  Field : textfield    ----            
           
        */ 
    "textfield": {
      "order": 1000,
      "type": "textfield",
      "props": {
        "title": "this checkbox section question",
        "helpText": "SOME HELPER TEXT"
      },
      "config": {
        "type": "text",
        "attr": [{
          "class": "customeClass",
          "style": "heightcolorred"
        }],
        "validations": [{
          "required": "true",
          "message": "This field is required",
          "errorClass": "error"
        }, {
            "required": "true",
            "message": "This field is required",
            "errorClass": "error",
            "min": "0",
            "max": "100"
          }],
        "maxSelections": 1,
        "direction": "horizontal",
        "placeholder": "this textfield in placeholder",
        "defaultvalue": "Default Value"
      },
      "options": [{
        "type": "toggel",
        "lable": "OPTION 1",
        "value": "10",
        "selected": false,
        "icon": "http://test.com/jd.png",
        "attr": {
          "class": "customeClass",
          "style": "height:100;color:red;"
        }
      }]
    }
            ,
            
           // Json conditions
        /*
           ---  Field : textArea   ----            
           
        */    
  "text-area": {
        "order": 1000,
        "type": "text-area",
        "props": {
          "title": "this checkbox section question",
          "helpText": "SOME HELPER TEXT"
        },
        "config": {
          "type": "text",
          "attr": [{
            "class": "customeClass",
            "style": "heightcolorred"
          }],
          "validations": [{
            "required": "true",
            "message": "This field is required",
            "errorClass": "error"
          }, {
              "required": "true",
              "message": "This field is required",
              "errorClass": "error",
              "min": "0",
              "max": "100"
            }],
          "maxSelections": 1,
          "direction": "horizontal",
          "placeholder": "this text area in placeholder",
          "defaultvalue": "Default Value"
        },
        "options": [{
          "type": "toggel",
          "lable": "OPTION 1",
          "value": "10",
          "selected": false,
          "icon": "http://test.com/jd.png",
          "attr": {
            "class": "customeClass",
            "style": "height:100;color:red;"
          }
        }]
      }           
    };