Ext.define('Project.store.UserLoad', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    alias: 'store.userload',
    requires: [
        'Project.model.User'
    ],
    storeId: 'userLoadDataStore',
    model: 'Project.model.User',
    proxy: {
        timeout: 500000000000,
        limitParam: '',
        startParam: '',
        pageParam: '',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        type: 'ajax',
        url: 'app/logic/user.php?pagging'
    }
});
