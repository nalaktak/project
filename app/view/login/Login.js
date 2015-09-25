/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Project.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires :[
        'Project.view.login.LoginController',
        'Ext.form.Panel'
    ],
    autoShow: true,
    closable: false,
    controller: 'login',
    defaultFocus: 'loginUserNameTextField',
    draggable: false,
    id: 'loginWindowW',
    items: {
        xtype: 'form',
        id: 'loginForm',
        items: [{
            xtype: 'textfield',
            allowBlank: false,
            fieldLabel: 'User Name',
            id: 'loginUserNameTextField',   
            name: 'user_name',
            width: 305
        }, {
            xtype: 'textfield',
            allowBlank: false,
            fieldLabel: 'Password',
            enableKeyEvents: true,
            id: 'loginPasswordTextField',
            listeners: {
                keypress: function(a, e, eOpts) {
                    if(e.keyCode == 13) {
                        console.log('tes');
                    }
                }
            },
            inputType: 'password',      
            name: 'password',
            width: 305
        }],
        padding: '10 5 0'
    },
    buttons: [{
        listeners: {
            click: 'onLoginClick'
        },
        text: 'Login'
    }],
    title: 'Silahkan Login'
});
