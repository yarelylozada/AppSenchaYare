Ext.define("app.view.core.clientes.GridClientes",{
	extend:"base.GridPanelBase",

	xtype:"gridclientes",


	buildStore: function (){
		return {
	    	fields:[ 'name', 'email', 'phone'],
		    data: [
		        { name: 'Lisa', apellidos: "Simpson", email: 'lisa@simpsons.com', phone: '555-111-1224' },
		        { name: 'Bart', apellidos :"Simpson",email: 'bart@simpsons.com', phone: '555-222-1234' },
		        { name: 'Homer',apellidos :"Simpson", email: 'homer@simpsons.com', phone: '555-222-1244' },
		        { name: 'Marge', apellidos :"Simpson",email: 'marge@simpsons.com', phone: '555-222-1254' }
		    ]
	    };
	},

	buildColumnas: function (){
    	return [
	        { 
	        	text: 'Nombre', 
	        	dataIndex: 'name',
	        	width : 180,
	        	renderer: function(value,apuntadorCelda, record ) {
			        return Ext.String.format('<b>{0} {1}</b>', record.get("name"), record.get("apellidos"));
			    }
	        },
	        { text: 'Email', 
	        	dataIndex: 'email', 
	        	editor: {
	        			xtype:"textfield",
	        			vtype:"email",
			            allowBlank: false,
			            selectOnFocus: false
			        },
	        	flex: 1 },
	        { text: 'Phone', dataIndex: 'phone', editor: {
	        			xtype:"datefield",
			            allowBlank: false,
			            selectOnFocus: false
			        }, }
	    ];
    }
});