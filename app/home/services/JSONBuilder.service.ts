
import { Injectable } from '@angular/core';
import {App,Item,Section,Page} from './../models/model';

declare var jQuery: any;
@Injectable()
export class JSONBuilder{
	
	private JSONTemplate: App;
	private selectedControl: Item;
	private selectedSection: Section;
	private selectedPage: Page;
	private selectedModel: any;

	setTemplate(template: App){
		this.JSONTemplate = template;
	}
	
	reorder(order: string[]){
		var sectionItems: any[] = this.selectedSection.items;
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
		this.selectedSection.items.push(childTemplate);	
	}

	sort(order: string[]){
		this.reorder(order);
		this.selectedSection.items.sort((a, b) => ((a.order < b.order) ? -1 : ((a.order > b.order) ? 1 : 0)));
	}

	getJSONBuilt(): any {
		return this.JSONTemplate;
	}

	setSelectedControl(control: Item){
		this.selectedControl = control;
	}

	setSelectedSection(section: Section) {
		this.selectedSection = section;
	}

	setSelectedPage(page: Page) {
		this.selectedPage = page;
	}

	getSelectedControl() {
		return this.selectedControl;
	}

	getSelectedSection() {
		return this.selectedSection;
	}

	getSelectedPage() {
		return this.selectedPage;
	}

    changeControl(newControl: any){
    	//index of old control in array
		let index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
		//replace oldControl with newControl at index	
		this.selectedSection.items[index].type = newControl;
	}

	deleteControl() {
		//index of old control in arra
		let index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
		//replace oldControl with newControl at index		
		this.selectedSection.items.splice(index, 1);

		//choose the next selected element from template section    
        if (this.selectedSection.items.length > 0)
            this.selectedControl = this.selectedSection.items[0];
        else
            this.selectedControl = undefined; 
	}
	
	multiSectionSort(sectionIndex: number,itemIndex: number,order: string[]) {	
		var sectionItems: any = this.selectedPage.sections[sectionIndex - 1].items;
		sectionItems.splice(itemIndex, 0, this.selectedControl);
		// delete control from out section
		let index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
		//replace oldControl with newControl at index		
		this.selectedSection.items.splice(index, 1);
		//sort the parent array	
		this.sort;
		// sort the result section
		jQuery.each(sectionItems, function(key, item) {
			item.order = key+1;
		});
	}

	duplicateControl() {	
		// var sectionItems: any =	this.selectedSection;
		let index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
		this.selectedSection.items.splice(index+1, 0, this.selectedControl);
		//sort the parent array	
		this.sort;
		// sort the result section
		jQuery.each(this.selectedSection.items, function(key, item) {
			item.order = key+1;
		});
	}

	setSelectedModel(type: any){
		this.selectedModel = type;
	}

	getSelectedModel() {
		return this.selectedModel;
	}

}