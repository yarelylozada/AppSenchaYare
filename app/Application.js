/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
 Ext.define('app.Application', {
    extend: 'Ext.app.Application',

    quickTips: false,

    name: 'app',

    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch : function (){
        //IF( no se ha iniciado sesion)
            //this.showLogin();
        //else la sesion ya esta iniciada
            this.showAplicacion();    
    },

    showAplicacion: function (){

        let panel = Ext.create("app.view.layout.MainContainer", {
            style :"border : 5px solid green",
        });

        Ext.create('Ext.container.Viewport', {
            layout:"fit",
            //style :"border : 5px solid red",
            items: panel
        });

    },

    showLogin : function (){
        let win = Ext.create("app.view.core.login.WindowLogin",{
            //title:"Welcome user"

        });

        win.show();
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});