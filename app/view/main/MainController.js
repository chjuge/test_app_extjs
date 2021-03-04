/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('test_app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function () {   //sender, record
        //        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        let grid = this.lookupReference('grid');
        let item = grid.getStore().getById(22).data;
        console.log(item);
        Ext.create('Ext.window.Window', {
            requires: ['Ext.form.Panel'],
            bodyPadding: 10,
            title: 'Карточка товара',
            closable: false,
            autoShow: true,
            reference: 'cardWindow',

            items: {
                xtype: 'form',
                reference: 'cardForm',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'ID:',
                    name: 'id',
                    readOnly: true,
                    value: item.id
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Наименование:',
                    name: 'name',
                    readOnly: true,
                    value: item.name
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Цена:',
                    name: 'price',
                    value: item.price
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Кол-во:',
                    name: 'count',
                    value: item.count
                }],

                buttons: ['->',
                    {
                        text: 'Сохранить',
                        handler: 'onSave'
                    }, {
                        text: 'Отмена',
                        handler: 'onCancel'
                    }]
            }

        });
        // Ext.create('test_app.view.main.ItemsCard')
    },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //     }
    // },

    onClickButton: function () {

        localStorage.removeItem('test_app');

        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    },
    OnClickButtonItems: function () {

        let pannel = this.lookupReference('tabpanel');
        tab = pannel.add({
            title: 'Товары',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'ID:',
                reference: 'searchById',
                listeners: {
                    change: 'onKeyUpEnter'
                }
            }, {
                xtype: 'textfield',
                fieldLabel: 'Описание:',
                reference: 'searchByName',
                listeners: {
                    change: 'onKeyUpEnter2'
                }
            }, {
                xtype: 'mainlist',
                reference: 'grid'
            }]
        });
        pannel.setActiveTab(tab);
    },

    onKeyUpEnter: function () {
        let input = this.lookupReference('searchById');

        let grid = this.lookupReference('grid');
        grid.getStore().filter('id', input.value);
    },

    onKeyUpEnter2: function () {

        let input = this.lookupReference('searchByName');

        let grid = this.lookupReference('grid');
        grid.getStore().filter('name', input.value);
    },

    onSave: function () {
        let window = this.lookupReference('cardWindow');
        let form = this.lookupReference('cardForm');
        let values = form.getValues();

        let id = values.id;
        let price = values.price;
        let count = values.count;

        let grid = this.lookupReference('grid');
        let store = grid.getStore();
        let record = store.getById(id).data;
        record.price = price;
        record.count = count;

        console.log('price ' + price);
        console.log('count ' + count);
        console.log('id ' + id);
        console.log(record);
        window.close();
        store.filter('id', ''); //костыль перерисовки grid-a

        console.log(this.lookupReference('rec'));
    },

    onCancel: function () {
        let window = this.lookupReference('cardWindow');
        alert('canceled!');
        window.close();

    }
});
