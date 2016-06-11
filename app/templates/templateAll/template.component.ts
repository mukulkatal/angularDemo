import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import {TEMPLATES} from './templates'

@Component({
selector :"Temp",
directives: [TEMPLATES],
template : `     
         <div [ngSwitch]="Temp_name">
            <Temp-1 *ngSwitchWhen="'Temp-1'" *ngSwitchDefault  (default_Template)="bind_Template_Json($event)" (selected_control)="selectControl($event)" (selected_section)="selectSection($event)"  ></Temp-1>
            <Temp-2 *ngSwitchWhen="'Temp-2'" ></Temp-2>
       </div>
        
      `,  
})

export class Template implements OnInit
{
    @Input('TempName') Temp_name; 
    
    @Output() default_Template = new EventEmitter();
    @Output() control_selected = new EventEmitter();  
    @Output() section_selected = new EventEmitter();  
    
    ngOnInit(){     
    }
    
    // bind Template Json from template parent
     bind_Template_Json(data: any)
     {
         this.default_Template.emit({defaulttemp:data});    
     }
 
    /*  ---
           this is passed from the particluar templat component (eg . Template1.component.ts) 
           and now we have to pass it to parent template component i.e home component
    */
    selectControl(control) {
        this.control_selected.emit(control);
    }
    
     selectSection(section) {
         //console.log(section);
        this.section_selected.emit(section);
    }

}