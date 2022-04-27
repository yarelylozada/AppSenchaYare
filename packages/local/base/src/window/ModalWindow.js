Ext.define("base.window.ModalWindow",{
	extend:"Ext.Window",

	alternateClassName:"base.ModalWindow",

	xtype:"modalwindow",

	layout:"fit",
	modal: true,
	draggable: false,
	resizable: false,



	//FABRICACION
	initComponent: function (){
		console.info("@PADRE ----INITCOMPONENT@");
		this.callParent();
	},

	//renderizacion
	onRender: function (){
		console.info("@@PADRE ---- onRender@");
		this.callParent();	
	},

	//destruccion
	onDestroy: function (){
		console.info("@PADRE ---- @onDestroy@");
		this.callParent();	
	}
});