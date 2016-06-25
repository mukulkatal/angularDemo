import {Item} from './item.model';

export class Section  {
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
}