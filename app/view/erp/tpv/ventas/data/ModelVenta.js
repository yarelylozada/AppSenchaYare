Ext.define("app.view.erp.tpv.ventas.data.ModelVenta",{
	extend:"Ext.data.Model",

	fields:[ "nameusuario", {
		name:"monto_costo",
		type: "float"
	},{
		name:"nombreterminal",
		type:"string"
	},{
		name:"timestamp",
		type:"date",
		dateFormat:'d-m-y H:i'
	}]
});