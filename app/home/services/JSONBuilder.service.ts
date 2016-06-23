
import { Injectable } from '@angular/core';
declare var jQuery: any;
@Injectable()
export class JSONBuilder{

	private JSONTemplate: any;
	private selectedControl: any;
	private _selectedSection: any;
	private _selectedPage: any;


	setTemplate(template: any[]){
		this.JSONTemplate = template;
	}
	
	reorder(order: string[]){
		var sectionItems: any[] = this._selectedSection.items;
		for (var control in sectionItems) {
			for(var index in order) {
				if (sectionItems[control].order == order[index]) {
					sectionItems[control].order = Number(index) + 1;
					break;
				}
			}
		}
	}
	
	addNewChild(childTemplate: any){	
		this._selectedSection.items.push(childTemplate);
	}

	sort(order: string[]){
		this.reorder(order);
		this._selectedSection.items.sort((a, b) => ((a.order < b.order) ? -1 : ((a.order > b.order) ? 1 : 0)));
	}

	getJSONBuilt(): any {
		return this.JSONTemplate;
	}

	setSelectedControl(control: any){
       this.selectedControl = control;
	}

	setSelectedSection(section: any) {
		this._selectedSection = section;
	}

	setSelectedPage(page: any) {
		this._selectedPage = page;
	}

	getSelectedSection():any{
		return this._selectedSection;
	}

	getSelectedPage():any{
		return this._selectedPage;
	}


	getSelectedControl() {
		return this.selectedControl;
	}

    changeControl(newControl: any){
    	//index of old control in array
		let index = jQuery.inArray(this.selectedControl, this._selectedSection.items);
		//replace oldControl with newControl at index	
		this._selectedSection.items[index].type = newControl;
	}

	deleteControl() {
		//index of old control in arra
		let index = jQuery.inArray(this.selectedControl, this._selectedSection.items);
		//replace oldControl with newControl at index		
		this._selectedSection.items.splice(index, 1);

		// choose the next selected element from template section    
        if (this._selectedSection.items.length > 0)
            this.selectedControl = this._selectedSection.items[0];
        else
            this.selectedControl = ''; 
	}
	
	multiSectionSort(sectionIndex: number,itemIndex: number,order: string[]) {	
		var sectionItems: any[] = this._selectedPage.sections[sectionIndex - 1].items;
		sectionItems.splice(itemIndex, 0, this.selectedControl);
		// delete control from out section
		this.deleteControl();	
		//sort the parent array	
		this.sort;
		// sort the result section
		jQuery.each(sectionItems, function(key, item) {
			item.order = key+1;
		});
		
	}

}