Ext.define("app.view.core.clientes.PanelClientes",{
	extend:"Ext.Panel",

	xtype:"panelclientes",


	title:"Listado de clientes",

	layout:"fit",


	initComponent: function (){

		Ext.apply( this, {
				tbar:[{
					iconCls:"x-fa fa-plus-circle",
					text:"Agregar",
					scope: this,
					handler: this.onAgregarClick
				}],

				items:{
					xtype:"gridventas"
					//-- configuraciones
				}
		});

		this.callParent();
	},


	/**
	 * Cuando el panel de clientes se renderice, recuperar una referencia del grid
	 */
	afterRender: function (){
		this.callParent();

		this.grid = this.down("grid");


		//this.relayEvents( this.grid, ["itemdblclick"])
		
		///agregar un nuevo controlador al grid
		this.grid.on({
			scope: this,
			itemdblclick: function (gr, record){
				this.fireEvent("itemdblclick", this/*panel*/, gr /*grid*/, record /*registro*/ );
			}
		});
	},

	onAgregarClick: function (){
		let win = Ext.create("base.WindowForm",{
			title:"Agregar cliente",
			width: 400,

			xtypeItem: "formcliente",

			listeners: {
				scope: this,

				datosguardadosventana: function (ventana, form, respuestaServidor ){
					ventana.close();

					//recargue el
					console.log("--->", this.grid);
					this.grid.store.load();

					this.fireEvent("datosguardadospanel", this, respuestaServidor);
				}
			}
		});

		console.info(" TERMINA la construccion --------");

		//setTimeout( function (){
			console.info(" inicia la renderizacion--------");
			win.show();
		//}, 5000);
	}
});