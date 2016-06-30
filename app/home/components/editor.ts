import { EditorSelectBox } from './editors/selectbox/editor_selectbox.component';
import { EditorTextField } from './editors/textfield/editor_textfield.component';
import { EditorHeader } from './editors/header/editor_header.component';
import { EditorButton } from './editors/button/editor_button.component';
import { EditorLogo } from './editors/logo/editor_logo.component';
import { EditorSlider } from './editors/slider/editor_slider.component';
import { CommonEditor } from './editors/common/common_properties.component';
// import { EditorPage } from './editors/page/editor_page.component';

export const EDITORS: any[] = [
	EditorSelectBox,
	EditorTextField,
	EditorHeader,
	EditorButton,
	EditorLogo,
	EditorSlider,
	CommonEditor
];