import {Serializable} from './serializeable.interface';
import {Page} from './page.model';

export class App implements Serializable<App>{
	description: string = "";
	public pages: Page[] = [];

	constructor(){}
	//add a page
	public addPages(...pages)
	{
		for(let page in pages)
			this.pages.push(pages[page]);
	}

	deserialize(input): App{
		for(let prop in input){
			if(typeof input[prop] === 'object'){
				for(let page in input[prop]){
					this.pages.push(new Page('').deserialize(input[prop][page]));
				}
			}
			else
				this[prop] = input[prop] || this[prop];
		}
        return this;
    }
}

