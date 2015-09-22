/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Project.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Project',
    
    requires: [
        'Project.view.login.Login',
        'Project.view.main.Index'
    ],
    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        document.getElementById('loading').style.display = 'none';
        
        Ext.create({
            xtype: (localStorage.getItem('user_name') != '') ? 'index' : 'login' 
        });
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
