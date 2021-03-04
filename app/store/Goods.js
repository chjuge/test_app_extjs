Ext.define('test_app.store.Goods', {
    extend: 'Ext.data.Store',

    alias: 'store.goods',

    fields: [
        'id', 'name', 'description', 'price', 'count'],

    storeId: 'mainStore',

    data: {
        items: [
            { id: '1', name: 'Мышь Bloody j90s', description: 'Мышь компьютерная проводная A4Tech Bloody, новая', price: '1900', count: '15'},
            { id: '22',  name: 'Мышь Logintech G102 Prodigy', description: 'Мышь компьютерная проводная Logintech G102 Prodigy, подерженная', price: '890', count: '40'},
            { id: '32',  name: 'Клавиатура Keychrone K1', description: 'Китайская механическая клавиатура Keycrone K1, brown switches', price: '7900', count: '1'},
            { id: '4',  name: 'Клавиатура Cooler Master 650', description: 'Китайская механическая клавиатура Cooler Master 650, Cherry red LP switches', price: '12599', count: '0'}
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
