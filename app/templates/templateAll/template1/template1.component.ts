import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {SectionComponent} from './components/sections.component';
import {Control} from '../../../templates/controls/control.component';
import {App,Item,Section,Page} from './../../../home/models/model';
// import {App} from './../../model/app.model';
// import {Page} from './../../model/page.model';
// import {Section} from './../../model/section.model';
// import {Item} from './../../model/item.model';


@Component({
    selector: 'Temp-1',
    directives: [Control,SectionComponent],
    viewProviders: [],
    templateUrl: 'app/templates/templateAll/template1/templatesHtml/template1.template.html',
    styleUrls: ['node_modules/materialize-css/dist/css/materialize.min.css'],
    styles: [
        `
            .p20{
              padding-bottom:20px;
            }
            .mt40
            {
              margin-top: 40px;
            }
        `
    ]
})

export class Template1Component implements OnInit
{
    //app:any = App();
    @Output() default_Template = new EventEmitter();
    @Output() selected_control = new EventEmitter();
    @Output() selected_section = new EventEmitter();
    @Output() selected_page = new EventEmitter();
    @Input() JSON_Template;
    //@Input() jsonTemplate;
    /*  ---
        default json of the template
    */

    constructor()
    {

    }

    ngOnInit(){
    /*  ---
            end json on init for initialize the json
        */
       


        if(!this.JSON_Template)
        {
            let app             = new App();
            // add pages in app
            let landingPage     = new Page('landing');
            let questionPage    = new Page('questions');
            let resultPage      = new Page('result');
            let page4           = new Page('other');
            app.addPages(landingPage,questionPage,resultPage,page4);

            //add section in landing page
            let section1  = new Section();
            let section2  = new Section();
            landingPage.addSections(section1,section2);

            // add items in section 1 in landing page
            let item1  = new Item('textfield','This is textfield','textfield help');
            let item2  = new Item('text-area','This is textfield','textfield help');       
            section1.addItems(item1,item2);

            // add items in section 2 in landing page        
            item1  = new Item('selectbox','This is textfield','textfield help');
            item2  = new Item('radio-button','This is textfield','textfield help'); 
            section2.addItems(item1,item2);

             //add section in question page
            section1  = new Section();
            section2  = new Section();
            questionPage.addSections(section1,section2);
            
            // add items in section 1 in question page
            item1  = new Item('textfield','This is textfield','textfield help');
            item2  = new Item('logo','This is textfield','textfield help');       
            section1.addItems(item1,item2);

            // add items in section 2 in question page        
            item1  = new Item('selectbox','This is textfield','textfield help');
            item2  = new Item('header','This is textfield','textfield help'); 
            section2.addItems(item1,item2);


            //add section in result page
            section1  = new Section();
            section2  = new Section();
            resultPage.addSections(section1,section2);

            // add items in section 1 in result page
            item1  = new Item('slider','This is slider','slider help');
            item2  = new Item('slider','This is textfield','textfield help');       
            section1.addItems(item1,item2);

            // add items in section 2 in result page        
            item1  = new Item('selectbox','This is textfield','textfield help');
            item2  = new Item('header','This is textfield','textfield help'); 
            section2.addItems(item1,item2);

            this.JSON_Template=app;
        }
        this.default_Template.emit(this.JSON_Template);
    }


    /*  ---
        when control is selected from particluar template then it pass to parent
        template component (i.e Template.ts) and then parent template component pass to home component
    */
    selectControl(control) {
        this.selected_control.emit(control);
    }

    selectSection(section){
       this.selected_section.emit(section);
    }

    selectpage(page)
    {
        this.selected_page.emit(page);
    }
}