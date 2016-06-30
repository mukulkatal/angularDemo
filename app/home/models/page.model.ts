import {Serializable} from './serializeable.interface';
import {Section} from './section.model';

export class Page implements Serializable<Page>{
	description: string = "";
	type: string = "";
	sections: Section[] = [];

	constructor(type?: string){
    	this.type = type;    	
    }

	//add sections to page
	public addSections(...sections)
	{
		for(let section in sections)
		{
			sections[section].order	=	Number(section)+1;
			this.sections.push(sections[section]);
		}
	}

	deserialize(input): Page{
		for(let prop in input){
			if(typeof input[prop] === 'object'){
				for(let section in input[prop]){
					this.sections.push(new Section().deserialize(input[prop][section]));
				}
			}
			else
				this[prop] = input[prop] || this[prop];
		}
        return this;
    }

}