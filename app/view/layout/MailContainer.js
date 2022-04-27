Ext.define("app.view.layout.MainContainer", {
	extend:"Ext.Panel",

	layout: 'border',
	requires: ['Ext.data.TreeStore'],

	tbar:["->", "Yarely", {
		text:"Cerrar Sesion"
	}],

	items: [ {
        region: 'west',
        collapsible: true,
        title: 'Navigation',
        width: 250,
        layout:"fit",
        items:[{
		    xtype: 'treelist',
		    store: {
		        root: {
		        expanded: true,
	            children: [{
	                text: 'detention',
	                leaf: true,
	                iconCls: 'x-fa fa-frown-o'
	            }, {
	                text: 'homework',
	                expanded: true,
	                iconCls: 'x-fa fa-folder',
	                children: [{
	                    text: 'book report',
	                    leaf: true,
	                    iconCls: 'x-fa fa-book'
	                }, {
	                    text: 'algebra',
	                    leaf: true,
	                    iconCls: 'x-fa fa-graduation-cap'
	                }]
	            }, {
	                text: 'buy lottery tickets',
	                leaf: true,
	                iconCls: 'x-fa fa-usd'
	            }]
		        }
		    }
		}]
        // could use a TreePanel or AccordionLayout for navigational items
    }, {
        region: 'center',
        xtype: 'container', // TabPanel itself has no title
		layout: "card", //sólo puedes ver uno
        activeTab: 0,      // First tab active by default
        items: {
            title: 'Default Tab',
            //html: 'The first tab\'s content. Others may be added dynamically'
			xtype: "tabpanelclientes"
        }
    }]
});