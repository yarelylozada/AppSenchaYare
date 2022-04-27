Ext.define ('app.view.erp.tpv.ventas.data.StoreVentas',{
	extend: 'Ext.data.Store',
	
	proxy : {
		type: 'ajax',
		url : 'server/ventas/ventas.json',
		reader: {
			type: 'json',
			rootProperty : 'data',
			totalProperty: "numFilas"
		}
	}
	
});