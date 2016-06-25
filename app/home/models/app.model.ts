import {Page} from './page.model';

export class App {
	description: string = "";
	public pages: Page[] = [];

constructor(){}
	//add a page
	public addPages(...pages)
	{
		for(let page in pages)
			this.pages.push(pages[page]);
	}
}

