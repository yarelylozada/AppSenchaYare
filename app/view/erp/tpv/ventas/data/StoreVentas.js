Ext.define('app.view.erp.tpv.ventas.data.StoreVentas', {
    extend: 'Ext.data.Store',

    model:"app.view.erp.tpv.ventas.data.ModelVenta",

    proxy: {
         type: 'ajax',
         url: 'server/ventas/ventas.json',
         reader: {
             type: 'json',
             rootProperty: 'data',
             totalProperty : "numFilas"
         }
    }
});