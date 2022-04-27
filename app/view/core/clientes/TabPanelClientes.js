Ext.define("app.view.core.clientes.TabPanelClientes",{
	extend:"Ext.TabPanel",

	xtype:"tabpanelclientes",

	initComponent: function (){
		this.items = [{
			xtype:"panelclientes",
			listeners:{
				scope: this,
				itemdblclick: this.onRecordDblClick,
				datosguardadospanel: function (panel, codeRecord ){
					this.onRecordDblClick( null, null, Ext.create("Ext.data.Model", {
						venta_id:"Mex-232"
					}));
				}	
			}
		}];

		this.callParent();
	},

	//handler del evento dobliclick del grid
	onRecordDblClick: function ( panelclientes, grid, record){
		console.info(  record.data );

		let panel = Ext.create("Ext.Panel", {
			title: record.get("venta_id"),
			closable: true,
			bodyPading: 20,
			html : Ext.encode( record.data )
		});

		this.add(panel);
		this.setActiveTab(panel);
	}
});