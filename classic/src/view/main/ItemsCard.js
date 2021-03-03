Ext.define('test_app.view.main.ItemsCard', {
    extend: 'Ext.window.Window',
    requires: ['Ext.form.Panel'],
    xtype: 'itemsCard',

    bodyPadding: 10,
    title: 'Карточка товара',
    closable: false,
    autoShow: true,
    items: {
        xtype: 'form',
        reference: 'card',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'ID:',
            name: 'id',
            readOnly: true,
            value: '2'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Наименование:',
            name: 'name',
            readOnly: true,
            value: 'Заглушка наименования'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Цена:',
            name: 'price',
            value: '5000'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Кол-во:',
            name: 'count',
            value: '10'
        }],

        buttons: ['->', {
            text: 'Сохранить'
        }, {
                text: 'Отмена'
            }]
    }
});