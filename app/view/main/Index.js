/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Project.view.main.Index', {
    extend: 'Ext.tab.Panel',
    xtype: 'index',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Project.view.main.MainController',
        'Project.view.main.MainModel',
        'Project.view.main.List',

        'Project.store.User',
        'Project.store.UserLoad'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },

        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onClickButton'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },
 defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
       /* items: [{
            xtype: 'mainlist'
        }]*/
    }, {
        title: 'Users',
        iconCls: 'fa-user',    
        items: [{
            xtype: 'panel',
            items: [{
                xtype: 'gridpanel',
                border: true,
                columns: [{
                    text: 'Name', 
                    dataIndex: 'name',
                    width: 200
                }, { 
                    text: 'User Name', 
                    dataIndex: 'user_name', 
                    width: 120
                }, {
                    text: 'Email', 
                    dataIndex: 'mail',
                    width: 120
                }, { 
                    text: 'Address', 
                    dataIndex: 'address', 
                    width: 120
                }],
                dockedItems: [{
                    xtype: 'pagingtoolbar',
                    store: {
                        type: 'userload', 
                    },// same store GridPanel is using
                    dock: 'bottom',
                    displayInfo: true
                }],
                store: {
                    type: 'userload'
                },
                height: 300,
                title: 'Daftar User',
                width: 800
            }]
        }]
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: ''+localStorage.getItem('user_name')+''
        }
    }]

});
