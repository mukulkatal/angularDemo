import { Injectable } from '@angular/core';
declare var jQuery: any;
@Injectable()
export class JSONElement{
	private JSONTemplate: any[];

	// setTemplate(template: any[]){
	// 	this.JSONTemplate = template;
	// }
	
	
	allAvailableElements(){
		var all_elems: any[] = ['textfield','text-area'];
		// console.log(this.JSONTemplate);
        return all_elems;
	}

	
    getJsonOfElem(elem_name:any)
    {       
       var elemJson: any;
        
      
        elemJson ={
                // Json conditions
                /*
                   ---  Field : textfield    ----            
                   
                */ 
                "textfield" : {
                                order: 1,
                                type: "textfield",
                                "props": {
                                        "title": "This is text field control",
                                        helpText: "SOME HELPER TEXT"
                                       },
                                config: {
                                            type: "text",
                                            attr: [{
                                                    class: "customeClass",
                                                    style: "heightcolorred"
                                                   }],
                                            validations: [  
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error"
                                                            },
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error",
                                                                min: "0",
                                                                max: "100"
                                                            }
                                                        ],
                                            maxSelections: 1,
                                            direction: "horizontal",
                                            placeholder: "this willgo in placeholder",
                                            defaultvalue: "Default Value"
                                        },
                                options: [
                                            {
                                                type: "toggel",
                                                lable: "OPTION 1",
                                                value: "10",
                                                selected: false,
                                                icon: "http://test.com/jd.png",
                                                attr: {
                                                        class: "customeClass",
                                                        style: "height:100;color:red;"
                                                      }
                                            }
                                        ]
                },

                // Json conditions
                /*
                   ---  Field : textArea   ----            
                   
                */    
                "text-area" : {
                                
                                order: 1,
                                type: "text-area",
                                props: {
                                        title: "This is text area control",
                                        helpText: "SOME HELPER TEXT"
                                       },
                                config: {
                                            type: "text",
                                            attr: [{
                                                    class: "customeClass",
                                                    style: "heightcolorred"
                                                   }],
                                            validations: [  
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error"
                                                            },
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error",
                                                                min: "0",
                                                                max: "100"
                                                            }
                                                        ],
                                            maxSelections: 1,
                                            direction: "horizontal",
                                            placeholder: "this willgo in placeholder",
                                            defaultvalue: "Default Value"
                                        },
                                options: [
                                            {
                                                type: "toggel",
                                                lable: "OPTION 1",
                                                value: "10",
                                                selected: false,
                                                icon: "http://test.com/jd.png",
                                                attr: {
                                                        class: "customeClass",
                                                        style: "height:100;color:red;"
                                                      }
                                            }
                                        ]
                    
                },
                  
                 /*  required control*/
                 "select-box" : {
                                order: 1,
                                type: "select-box",
                                props: {
                                        title: "this is drop down control",
                                        helpText: "SOME HELPER TEXT"
                                       },
                                config: {
                                            type: "text",
                                            attr: [{
                                                    class: "customeClass",
                                                    style: "heightcolorred"
                                                   }],
                                            validations: [  
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error"
                                                            },
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error",
                                                                min: "0",
                                                                max: "100"
                                                            }
                                                        ],
                                            maxSelections: 1,
                                            direction: "horizontal",
                                            placeholder: "this willgo in placeholder",
                                            defaultvalue: "Default Value"
                                        },
                                options: [
                                            {
                                                type: "toggel",
                                                lable: "OPTION 1",
                                                value: "10",
                                                selected: false,
                                                icon: "http://test.com/jd.png",
                                                attr: {
                                                        class: "customeClass",
                                                        style: "height:100;color:red;"
                                                      }
                                            }
                                        ]
                    }
            };
                
                
        
         return elemJson[elem_name];               
    }

	getJSONBuilt(): any[] {
		return this.JSONTemplate;
	}
}