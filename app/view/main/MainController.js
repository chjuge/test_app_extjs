/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('test_app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (e, t) {   //sender, record
        //        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        let grid = this.lookupReference('grid');
        let id = Ext.get(t).up().dom.children[0].textContent;
        let item = grid.getStore().findRecord('id', id).data;

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
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onKeyUpEnter'
                }
            }, {
                xtype: 'textfield',
                fieldLabel: 'Описание:',
                reference: 'searchByDescription',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onKeyUpEnter2'
                }
            }, {
                xtype: 'mainlist',
                reference: 'grid'
            }]
        });
        pannel.setActiveTab(tab);
    },

    onKeyUpEnter: function (thisField, e) {
        let input = this.lookupReference('searchById');
        let id = input.value;

        let grid = this.lookupReference('grid');
        let store = grid.getStore();

        //record = store.findRecord('id', id);
        if (e.browserEvent.keyCode == 13) {
            store.clearFilter();
            store.filterBy(rec => {
                if (rec.get('id') === id || id === '') {
                    return true;
                }
                else return false;
            })
        }
    },

    onKeyUpEnter2: function (thisField, e) {
        let input = this.lookupReference('searchByDescription');
        let substring = input.value;

        let grid = this.lookupReference('grid');
        let store = grid.getStore();

        if (e.browserEvent.keyCode == 13) {
            store.clearFilter();
            store.filterBy(record => {
                if (record.get('name').includes(substring)) {
                    return true;
                }
                else return false;
            })
            // store.filter('name', substring);
        }
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


        validatePrice = +price;
        validateCount = +count;

        if (!isNaN(validatePrice) && !isNaN(validateCount) && validateCount >= 0 && validatePrice >= 0) {

            Ext.Msg.alert('', 'Данные изменены')
            
            
            record.price = validatePrice;
            record.count = validateCount;

            
            window.destroy();
            store.filter('id', ''); //костыль перерисовки grid-a
        }
        else Ext.Msg.alert('Ошибка', 'Ошибка валидации ввода')

    },

    onCancel: function () {
        let window = this.lookupReference('cardWindow');
        window.destroy();

    }
});
