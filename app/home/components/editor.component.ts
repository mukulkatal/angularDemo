import { Component, Input,OnInit } from '@angular/core';
import { EDITORS } from './editor';
import { JSONBuilder } from '../services/JSONBuilder.service';
import {Switch} from './switch.component'

@Component({
	selector: 'editor',
	directives: [EDITORS,Switch],
	template: `
	  		<div class="main-side " for="text-input">
                <div class="sidebar-topselector">
                    <div class="card-layout">
                        title
                    </div>
                </div>
                <div class="sidebar-bottomselector">
                    <div class="type-details"  *ngIf="jsonBuilderHelper.getSelectedModel()!='Page'">
                        <div class="btn-detail-size col-xs-12 no-padding">
                            <span class="col-xs-2 no-padding">Type:</span>
                                <switch
                                    *ngIf="jsonBuilderHelper.getSelectedControl()"                                   
                                >    1
                                </switch>                           
                        </div>
                    </div>
                    <div class="col-xs-12 no-padding">
                    <!-- For page editor -->
                        <editor-page 
                            *ngIf="jsonBuilderHelper.getSelectedModel()=='Page'"
                            [control]="jsonBuilderHelper.getSelectedPage()"
                        >
                        </editor-page>      
                    <!-- ****  -->    

                        <editor-textfield 
                            *ngIf="jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='textfield'" 
                            [control]="jsonBuilderHelper.getSelectedControl()"
                        >
                        </editor-textfield>
                        <editor-textfield 
                            *ngIf="jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='text-area'" 
                            [control]="jsonBuilderHelper.getSelectedControl()"
                        >
                        </editor-textfield>
                        <editor-selectbox 
                            *ngIf="jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='selectbox'" 
                            [control]="jsonBuilderHelper.getSelectedControl()"
                        >
                        </editor-selectbox>
                        <editor-selectbox 
                            *ngIf="jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='radio-button'" 
                            [control]="jsonBuilderHelper.getSelectedControl()"
                        >
                        </editor-selectbox>
                        <editor-header
                            *ngIf="jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='header'" 
                            [control]="jsonBuilderHelper.getSelectedControl()"
                        >
                        </editor-header>
                        <editor-button 
                            *ngIf="jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='click-button'" 
                            [control]="jsonBuilderHelper.getSelectedControl()"
                        >
                        </editor-button>
                        <editor-logo 
                            *ngIf="jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='logo'" 
                            [control]="jsonBuilderHelper.getSelectedControl()"></editor-logo>
                        <editor-slider 
                            *ngIf="jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='slider'" 
                            [control]="jsonBuilderHelper.getSelectedControl()"
                            >
                        </editor-slider>                       
                    </div>
                </div>
            </div> 
	`
})

export class Editor implements OnInit{
    title : any;

	constructor(private jsonBuilderHelper: JSONBuilder){
	}

    ngOnInit()
    {
        if(this.jsonBuilderHelper.getSelectedModel() == 'Page' )
            this.title = this.jsonBuilderHelper.getSelectedPage().type;
        else if(this.jsonBuilderHelper.getSelectedModel() == 'Control')
            this.title = this.jsonBuilderHelper.getSelectedControl().type;
    }

}