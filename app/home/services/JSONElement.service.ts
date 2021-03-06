import { Injectable } from '@angular/core';
import {ControlTemplates} from '../../templates/controls/controlTemplates.store';
declare var jQuery: any;
@Injectable()
export class JSONElement{
	private JSONTemplate: any[];

	// setTemplate(template: any[]){
	// 	this.JSONTemplate = template;
	// }
	
	
	allAvailableElements(){
		var all_elems: any[] = ['textfield','text-area','selectbox','radio-button'];
        return all_elems;
	}   
 
	
    getJsonOfElem(elem_name:any)
    {
		let element = ControlTemplates[elem_name];
		//assign a random order to element
		element.order = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
		//return a deep copy of object
		return JSON.parse(JSON.stringify(element)); 
    }

	getJSONBuilt(): any[] {
		return this.JSONTemplate;
	}
}