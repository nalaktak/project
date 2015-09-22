Ext.define('Project.store.User', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    alias: 'store.user',
    requires: [
        'Project.model.User'
    ],
    storeId: 'userDataStore',
    model: 'Project.model.User',
    proxy: {
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        type: 'ajax',
        url: 'app/logic/user.php'
    }
});

