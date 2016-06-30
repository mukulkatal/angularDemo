import { Component, Input } from '@angular/core';
@Component({
    selector: 'common-editor',
    template: `
        <p class="type-head">Question:</p>
        <div class="heading-box">
            <div class="heading-box-top">
                <select class="select-default pull-right" data-width="fit" data-style="landing-dropdown">
                    <option>Variable</option>
                    <option>Variable</option>
                    <option>Variable</option>
                    <option>Variable</option>
                    <option>Variable</option>
                    <option>Variable</option>
                </select>
                <ul class="heading-editor">
                    <li><a href="javascript:void(0);"><i class="material-icons">format_bold</i></a></li>
                    <li><a href="javascript:void(0);"><i class="material-icons">format_italic</i></a></li>
                    <li><a href="javascript:void(0);"><i class="material-icons">format_color_text</i></a></li>
                </ul>
            </div>
            <textarea type="text"  class="heading-box-topinput" rows="3" [(ngModel)] = "control.config.placeholder" ></textarea>
        </div>
        <div class="lan-description">
            <span>Description:</span>
            <div class="desc-switch">
                <input type="checkbox" name="properties-checkbox" data-size="mini" data-on-color="blue">
            </div>
        </div>
    `
})
/*<input type="text" [(ngModel)] = "control.config.placeholder" />
<input type="text" [(ngModel)] = "control.props.title" />
<input type="text" [(ngModel)] = "control.props.helpText" />
<input type="text" [(ngModel)] = "control.config.type" />*/

export class CommonEditor {
    @Input() control: any;
}


 