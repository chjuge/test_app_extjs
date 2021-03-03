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
        alert('It works');
        Ext.create('Ext.window.Window', {
            requires: ['Ext.form.Panel'],
            bodyPadding: 10,
            title: 'Карточка товара',
            closable: false,
            autoShow: true,
            reference: 'card',

            items: {
                xtype: 'form',
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
            }, {
                xtype: 'button',
                text: 'Отфильтровать (заглушка)',
                handler: 'onKeyUpEnter'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Описание:',
                reference: 'searchByName'
            }, {
                xtype: 'button',
                text: 'Отфильтровать (заглушка)',
                handler: 'onKeyUpEnter2'
            }, {
                xtype: 'mainlist',
                reference: 'grid'
            }]
        });
        pannel.setActiveTab(tab);
    },

    onKeyUpEnter: function () {
        let input = this.lookupReference('searchById');
        alert(input.value);

        let grid = this.lookupReference('grid');
        grid.getStore().filter('id', input.value);
    },

    onKeyUpEnter2: function () {
        let input = this.lookupReference('searchByName');
        alert(input.value);

        let grid = this.lookupReference('grid');
        grid.getStore().filter('name', input.value);
    },

    onSave: function () {
        let form = this.lookupReference('card');
        alert('saved!');
        form.close();
    },

    onCancel: function () {
        let form = this.lookupReference('card');
        alert('canceled!');
        form.close();

    }
});
