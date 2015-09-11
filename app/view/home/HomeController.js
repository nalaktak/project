Ext.define('myapp.view.home.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home',

    onHomeClick: function() {
        document.getElementById('loading').style.display = "block";
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Home Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });

    }
});
