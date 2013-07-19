/**
* @file
* The javascript file for the Fat Panel UIO.
*/

(function($) {
    Drupal.behaviors.infusion_uio = {
        attach: function(context, settings) {

            demo.initSettingsStore();
            demo.initPageEnhancer("uio-demo-theme");
            if ((Drupal.settings.infusion_uio.uio_interface == 'Fat Panel Options') && ($('*').hasClass('flc-uiOptions-fatPanel'))) {
                demo.initFatPanel(".flc-uiOptions-fatPanel");
            }
        }
    };
})(jQuery);


