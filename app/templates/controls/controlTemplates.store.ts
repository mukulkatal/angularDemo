export var ControlTemplates: any = 
{
// Json conditions

  "logo": {
    "order": 1000,
    "type": "logo",
    "props": {
      "url": "this checkbox section question",
      "width": "100",
      "height":"50"
    },
    "config": {
      "type": "text",
      "attr": [
        {
          "class": "customeClass",
          "style": "heightcolorred"
        }
      ],
      "validations": [
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error"
        },
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error",
          "min": "0",
          "max": "100"
        }
      ],
      "maxSelections": 1,
      "direction": "horizontal",
      "placeholder": "this logo in placeholder",
      "defaultvalue": "Default Value"
    },
    "options": [
      {
        "type": "toggel",
        "label": "OPTION 1",
        "value": "10",
        "selected": false,
        "icon": "http://test.com/jd.png",
        "attr": {
          "class": "customeClass",
          "style": "height:100;color:red;"
        }
      }
    ]
  }
            ,
            
  "header": {
    "order": 1000,
    "type": "header",
    "props": {
      "title": "this checkbox section question",
      "helpText": "SOME HELPER TEXT"
    },
    "config": {
      "type": "text",
      "attr": [
        {
          "class": "customeClass",
          "style": "heightcolorred"
        }
      ],
      "validations": [
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error"
        },
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error",
          "min": "0",
          "max": "100"
        }
      ],
      "maxSelections": 1,
      "direction": "horizontal",
      "placeholder": "this header in placeholder",
      "defaultvalue": "Default Value"
    },
    "options": [
      {
        "type": "toggel",
        "label": "OPTION 1",
        "value": "10",
        "selected": false,
        "icon": "http://test.com/jd.png",
        "attr": {
          "class": "customeClass",
          "style": "height:100;color:red;"
        }
      }
    ]
  },
           

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
      "attr": [
        {
          "class": "customeClass",
          "style": "heightcolorred"
        }
      ],
      "validations": [
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error"
        },
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error",
          "min": "0",
          "max": "100"
        }
      ],
      "maxSelections": 1,
      "direction": "horizontal",
      "placeholder": "this textfield in placeholder",
      "defaultvalue": "Default Value"
    },
    "options": [
      {
        "type": "toggel",
        "label": "OPTION 1",
        "value": "10",
        "selected": false,
        "icon": "http://test.com/jd.png",
        "attr": {
          "class": "customeClass",
          "style": "height:100;color:red;"
        }
      }
    ]
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
      "attr": [
        {
          "class": "customeClass",
          "style": "heightcolorred"
        }
      ],
      "validations": [
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error"
        },
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error",
          "min": "0",
          "max": "100"
        }
      ],
      "maxSelections": 1,
      "direction": "horizontal",
      "placeholder": "this text area in placeholder",
      "defaultvalue": "Default Value"
    },
    "options": [
      {
        "type": "toggel",
        "label": "OPTION 1",
        "value": "10",
        "selected": false,
        "icon": "http://test.com/jd.png",
        "attr": {
          "class": "customeClass",
          "style": "height:100;color:red;"
        }
      }
    ]
  }
          ,

// Json conditions
/*
   ---  Field : select -> options (Dropdown)   ----            
   
*/
  "selectbox": {
    "order": 1000,
    "type": "selectbox",
    "props": {
      "title": "this checkbox section question",
      "helpText": "SOME HELPER TEXT"
    },
    "config": {
      "type": "text",
      "attr": [
        {
          "class": "customeClass",
          "style": "heightcolorred"
        }
      ],
      "validations": [
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error"
        },
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error",
          "min": "0",
          "max": "100"
        }
      ],
      "maxSelections": 1,
      "direction": "horizontal",
      "placeholder": "this text area in placeholder",
      "defaultvalue": "Default Value"
    },
    "options": [
      {
        "type": "toggel",
        "label": "OPTION 1",
        "value": "1",
        "selected": false,
        "icon": "http://test.com/jd.png",
        "attr": {
          "class": "customeClass",
          "style": "height:100;color:red;"
        }
      }
    ]
  }
    ,
// Json conditions
/*
   ---  Field : radio button    ----            
   
*/

  "radio-button": {
    "order": 1000,
    "type": "radio-button",
    //"name": "radi1",
    "props": {
    "title": "this radio-button section question",
      "helpText": "SOME HELPER TEXT"
    },
    "config": {
      "type": "radio",
      "attr": [
        {
          "class": "customeClass",
          "style": "heightcolorred"
        }
      ],
      "validations": [
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error"
        },
        {
          "required": "true",
          "message": "This field is required",
          "errorClass": "error",
          "min": "0",
          "max": "100"
        }
      ],
      "maxSelections": 1,
      "direction": "horizontal",
      "placeholder": "this text area in placeholder",
      "defaultvalue": "Default Value"
    },
    "options": [
      {
        "type": "toggel",
        "label": "OPTION 1",
        "value": "1",
        "selected": false,
        "icon": "http://test.com/jd.png",
        "attr": {
          "class": "customeClass",
          "style": "height:100;color:red;"
        }
      }
    ]
  }
};