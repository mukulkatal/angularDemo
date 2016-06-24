import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {SectionComponent} from './components/sections.component';
import {Control} from '../../../templates/controls/control.component';

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
    // @Output() default_Template = new EventEmitter();
    @Output() selected_control = new EventEmitter();
    @Output() selected_section = new EventEmitter();
    @Output() selected_page = new EventEmitter();
    @Input() JSON_Template;
    //@Input() jsonTemplate;
    /*  ---
        default json of the template
    */

    ngOnInit(){
    /*  ---
        end json on init for initialize the json
    */

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