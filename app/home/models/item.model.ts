import {Serializable} from './serializeable.interface';

declare var jQuery: any;
export class Item implements Serializable<Item>{

    order:string="";
    type:string="";
    props: any = {
      title: "",
      currentValue: "",
  		helpText : "",
  	};
    config: any = {
       type:"",
       showHelp:"",
       showControl:"",
       attr: {
          class:"",
          style:"",
          width:"",
          height:"",

       },
       validations:[
          {
             required:"",
             message:"",
             errorClass:"",
          },
          {
             required:"",
             message:"",
             errorClass:"",
             min:"",
             max:"",
          }
       ],
       maxSelections:"",
       direction:"",
       placeholder:"",
       defaultvalue:"",
    };
    options:any =[
       {
        type:"",
         label:"male",
          value:"1",
          selected:"true",
          icon:"",
          attr:{
             class:"",
             style:"",
          }
       },
       {
        type:"",
         label:"female",
          value:"0",
          selected:"",
          icon:"",
          attr:{
             class:"",
             style:"",
          }
       }
    ];

    constructor(type: string, title:string, helpText:string){
    	this.type = type;
    	this.props.title = title || "";
    	this.props.helpText = helpText || "";
    }

    public setItemType(type: string){
    	this.type = type;
    }

    public setTitle(title: string){
    	this.props.title = title;
    }

    public setHelptext(helpText: string){
    	this.props.helpText = helpText;
    }

    public setPlaceHolder(placeholder: string){
      this.config.placeholder = placeholder;
    }

    public setOptions(...options){
      for(let option in options)
        this.options.push(options[option]);
    }

    deserialize(input): Item{
      for(let prop in input){
        if(typeof input[prop] === 'object')
          jQuery.extend(true, this[prop], input[prop]);
        else
          this[prop] = input[prop] || this[prop];
      }
      return this;
    }
}