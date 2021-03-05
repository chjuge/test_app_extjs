/**
 * This view is an example list of people.
 */
Ext.define('test_app.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    model: 'model.store',
    requires: [
        'test_app.store.Goods',
    ],

    columnLines: true,

    title: 'Список товаров',

    store: {
        type: 'goods'
    },

    columns: [
        { text: 'Id', dataIndex: 'id', filter: { type: 'int' } },
        { text: 'Имя', dataIndex: 'name', filter: { type: 'string' }, listeners: { click: 'onItemSelected', }, flex: 1 },
        { text: 'Описание', dataIndex: 'description', flex: 2 },
        { text: 'Цена', dataIndex: 'price', flex: 1 },
        {
            text: 'Кол-во', dataIndex: 'count',
            renderer: function (value, meta) {
                if (parseInt(value) === 0 || value==='') {
                    meta.style = "background-color:red;";
                } 
                return value;
            }
        }
    ],


});
