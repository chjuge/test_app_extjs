Ext.define('test_app.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () {
         let form = this.lookupReference('form');
         let values = form.getValues();
         if (values.userName === 'admin' && values.password === 'padmin') 
         {

            localStorage.setItem('LoggedIn', true);

            this.getView().destroy();

            Ext.create({
                xtype: 'app-main'
            });
         }
         else alert('Неверно введен логин или пароль');
    }
});