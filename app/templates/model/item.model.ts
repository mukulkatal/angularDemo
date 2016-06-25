export class Item {

    order:string="";
    type:string="";
    props: any = {
		title: "",
		helpText : "",
	};
    config: any = {
       type:"",
       showHelp:"",
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
    options:[
       {
        type:"",
         label:"",
          value:"",
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
}