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
		var all_elems: any[] = ['textfield','text-area'];
		// console.log(this.JSONTemplate);
        return all_elems;
	}   
 
	
    getJsonOfElem(elem_name:any)
    {       
         return ControlTemplates[elem_name];               
    }

	getJSONBuilt(): any[] {
		return this.JSONTemplate;
	}
}