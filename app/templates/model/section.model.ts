import {Item} from './item.model';

export class Section  {
	description: string = "";
	order: string = "";
	items: Item[] = [new Item,new Item, new Item, new Item];
}