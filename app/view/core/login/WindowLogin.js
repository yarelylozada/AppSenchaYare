Ext.define("app.view.core.login.WindowLogin",{
	extend: "Ext.Window",

	title:"Bienvenido usuario",

	controller:"windowloginctr",

    width: 290,
    //modal: true,
    closable: false,
    bodyPadding: 10,

	draggable: false,
    resizable: false,

    items: {
    	xtype:"form",
    	reference:"formulario",

    	defaults:{
    		allowBlank: false,
    		msgTarget:"under",
    		labelWidth:65//,
    		//labelAlign:"top"
    	},

    	defaultType:"textfield",

    	items:[{
	        fieldLabel: "Usuario",
	        name:"usuario",
	        vtype:"email",
	        emptyText:"correo@extjs.com"
	    },{
	        inputType:"password",
	        name:"pass",
	        emptyText:"******",
	        fieldLabel: "Password"
	    }],
    },

    buttons:[{
        text:"Ingresar",
        handler: "onIngresar"
    }]
});