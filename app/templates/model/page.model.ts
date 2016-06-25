import {Section} from './section.model';

export class Page {
	description: string = "";
	type: string = "";
	sections: Section[] = [];

	constructor(type: string){
    	this.type = type;    	
    }

	//add sections to page
	public addSections(...sections)
	{
		for(let section in sections)
			this.sections.push(sections[section]);
	}
}