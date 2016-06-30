import {Serializable} from './serializeable.interface';
import {Item} from './item.model';

export class Section implements Serializable<Section>{
	description: string = "";
	order: string = "";
	items: Item[] = [];

	//add items to page
	public addItems(...items)
	{
		for(let item in items)
		{
			items[item].order	=	Number(item)+1;
			this.items.push(items[item]);
		}
	}

	deserialize(input): Section{
		for(let prop in input){
			if(typeof input[prop] === 'object'){
				for(let item in input[prop]){
					this.items.push(new Item().deserialize(input[prop][item]));
				}
			}
			else
				this[prop] = input[prop] || this[prop];
		}
        return this;
    }

}