/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('test_app.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'test_app.view.main.MainController',
        'test_app.view.main.MainModel',
        'test_app.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Учет товаров'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Выход',
            margin: '10.0',
            handler: 'onClickButton'
        },
        {
            xtype: 'button',
            text: 'Товары',
            margin: '10.0',
            tooltip: 'Add Tab',
            handler: 'OnClickButtonItems'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items:
        [{
            xtype: 'tabpanel',
            reference: 'tabpanel',
            border: false,
            defaults: {
                bodyPadding: 10,
                scrollable: true,
                closable: true,
                border: false
            },
            items: []
        }]
});
