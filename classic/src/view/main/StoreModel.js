Ext.define('test_app.view.main.StoreModel', {
    extend: 'Ext.data.model',
    alias: 'model.store',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'price', type: 'float' },
        { name: 'count', type: 'int' }
    ]
});