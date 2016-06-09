import { Injectable } from '@angular/core';
declare var jQuery: any;
@Injectable()
export class JSONBuilder{
	private JSONTemplate: any[];

	setTemplate(template: any[]){
		this.JSONTemplate = template;
	}
	
	reorder(order: string[]){
		for (var control in this.JSONTemplate){
			for (var index in order) {
				if(this.JSONTemplate[control].order == order[index]) {
					this.JSONTemplate[control].order = Number(index)+1;
					break;
				}
			}
		}
	}
	addNewChild(parent: any,child: any,childTemplate: any){	
		this.JSONTemplate.push(childTemplate);	
	}

	sort(order: string[]){
		this.reorder(order);
		this.JSONTemplate.sort((a, b) => ((a.order < b.order) ? -1 : ((a.order > b.order) ? 1 : 0)));
	}

	getJSONBuilt(): any[] {
		return this.JSONTemplate;
	}

    static changeControl(oldControl: any, newControl: any, template: any[]){
    	//index of old control in array
		let index = jQuery.inArray(oldControl, template);
		//replace oldControl with newControl at index
		template.splice(index, 1, newControl);
    }
    
}