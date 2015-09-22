/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Project.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onLoginClick: function() {
        if(Ext.getCmp('loginUserNameTextField').getValue() != '' && Ext.getCmp('loginPasswordTextField').getValue() != '') {
            Ext.getCmp('loginForm').getForm().submit({
                url: 'app/logic/login.php',
                failure: function() {
                   Ext.Msg.alert('Warning', 'User Name dan Password tidak terdaftar.');
                },
                waitMsg: 'Login...',
                success: function(a, b) {
                    localStorage.setItem('user_name', b.result.session.user_name);

                    Ext.getCmp('loginWindowW').close();
                    Ext.create({
                        xtype: 'index'
                    });
                }
            });
        }
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
