Ext.define("app.view.core.login.WindowLoginCtr",{
	extend:"Ext.app.ViewController",

	alias:"controller.windowloginctr",


	padre: this,

	onIngresar: function (){
		let formulario = this.lookup("formulario");

		if( formulario.isValid() ){
		//si el usuario es valido...	
			this.getView().mask("Por favor espere...");

			//let me = this;
			
			Ext.Ajax.request({//formulario.submit
				//async: false,
			    url: 'server/login/login.json',
		    	params: formulario.getValues(),
		    	scope: this,
			    success: function(response, opts) {
			         var obj = Ext.decode(response.responseText);
			         console.dir(obj);

			        if( obj.success ){
			        	Ext.Msg.alert("Bienvenido "+ obj.usuario.nombre,"Presione Enter para continuar", function (){
			        		this.getView().close();
			        	}, this ) ;
			        }else{
			        	this.getView().unmask();
						Ext.Msg.alert("Mensaje del sistema", obj.msg );
			        }
			    },

			    failure: function(response, opts) {
			         console.log('server-side failure with status code ' + response.status);
			    }
			 });
		}
	}
});