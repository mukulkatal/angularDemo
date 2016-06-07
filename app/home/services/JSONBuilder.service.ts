import { Injectable } from '@angular/core';
declare var jQuery: any;
@Injectable()
export class JSONBuilder{
	private JSONTemplate: any[];

	setTemplate(template: any[]){
		this.JSONTemplate = template;
	}
	
	reorder(parent: any){
			console.log('sorty');
		var i = 1;
		var order: any[] = [];
		parent.find('.child').each(function() {
			var currentOrder = jQuery(this).parent().data('order');
			order.push({
				oldOrder: currentOrder,
				newOrder: i++
			});
		});

		for (var control in this.JSONTemplate){
			for (var element in order) {
				if(this.JSONTemplate[control].order == order[element].oldOrder) {
					this.JSONTemplate[control].order = order[element].newOrder;
					break;
				}
			}
		}
	}
	addNewChild(parent: any,child: any,childTemplate: any){	
		this.JSONTemplate.push(childTemplate);
		this.sort(parent);		
		//jQuery(child).remove();		
	}

	sort(parent: any){				
		this.reorder(parent);		
		this.JSONTemplate.sort((a, b) => ((a.order < b.order) ? -1 : ((a.order > b.order) ? 1 : 0)));
		console.log(this.JSONTemplate);
	}

	getJSONBuilt(): any[] {
		return this.JSONTemplate;
	}	
	
	/* 
		--  FIND THE INDEX OF OBJECT IN ARRAY
	 */
	getObject_Index_InArray(Array:any[],Object:any)
    {        
        return jQuery.inArray(Object, Array);
    }
    
}