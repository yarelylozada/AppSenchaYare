Ext.define("app.view.core.clientes.form.FormCliente",{
	extend:"Ext.FormPanel",

	xtype:"formcliente",

	bodyPadding: 15,

    defaultType: 'textfield',

    defaults: {
        anchor: '100%'
    },

    items: [{
        fieldLabel: 'First Name',
        emptyText: 'First Name',
        name: 'first'
    }, {
        fieldLabel: 'Last Name',
        emptyText: 'Last Name',
        name: 'last'
    }, {
        fieldLabel: 'Company',
        name: 'company'
    }, {
        fieldLabel: 'Email',
        name: 'email',
        vtype: 'email'
    }, {
        xtype: 'combobox',
        fieldLabel: 'State',
        name: 'state',
        store: {
            //type: 'states'
        },
        valueField: 'abbr',
        displayField: 'state',
        typeAhead: true,
        queryMode: 'local',
        emptyText: 'Select a state...'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Date of Birth',
        name: 'dob',
        allowBlank: false,
        maxValue: new Date()
    }],


	//FABRICACION
	initComponent: function (){
		console.info("@formulario ----INITCOMPONENT@");
		this.callParent();
	},

	//renderizacion
	onRender: function (){
		console.info("@@formulario ---- onRender@");
		this.callParent();	
	},

	//destruccion
	onDestroy: function (){
		console.info("@formulario ---- @onDestroy@");
		this.callParent();	
	},

	/**
	 * Metodo de acceso publico.
	 * @fecha 26 abril 2022
	 */
	guardar: function (){

		this.getForm().submit({
			url: "server/clientes/guardar.json",
			scope: this,
			success: function (form, resp){
				if( resp.result.success ){
					this.fireEvent("datosguardados", this, resp.result);
				}
			}
		});
	}
});