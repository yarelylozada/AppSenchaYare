Ext.define("base.window.WindowForm",{
	extend:"base.ModalWindow",

	alternateClassName:"base.WindowForm",

	xtype:"windowform",

	xtypeItem:"panel",//nombre del xtype del panel que estaria dentro de la ventana

	//FABRICACION
	initComponent: function (){
		console.info("@INITCOMPONENT@");

		this.items = {
			xtype: this.xtypeItem,//formulario
			listeners:{
				scope: this,

				datosguardados: function ( form, respuestaServidor){
					this.fireEvent("datosguardadosventana", this, form, respuestaServidor);
				}
			}
		};

		this.buttons = [{
				text:"Agregar",
				scope: this,
				handler: this.onAgregar
			},{
				text:"Cancelar",
				scope: this,
				handler: function (){
					this.close();
				}
			}];

		this.callParent();
	},

	//renderizacion
	onRender: function (){
		console.info("@onRender@");
		this.callParent();	
	},

	onAgregar: function (boton){
		let form = this.down( this.xtypeItem );

		if( form.isValid() ){
			//boton.disable();
			this.mask("Por favor espere....");
			form.guardar();
		}
	},

	//destruccion
	onDestroy: function (){
		console.info("@onDestroy@");
		this.callParent();	
	}
});