(function($) {
    Drupal.behaviors.infusion_uio = {
        attach: function(context, settings) {
            
            demo.initSettingsStore();
                demo.initPageEnhancer("uio-demo-theme");
                demo.initFatPanel(".flc-uiOptions-fatPanel");

        }
    };
})(jQuery);


