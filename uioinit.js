/**
 * @file
 * The javascript file to initialize UIO.
 */

(function($) {
    Drupal.behaviors.infusion_uio = {
        attach: function(context, settings) {
            var curpath = $(location).attr('href');
            infusionmodule.initSettingsStore();
            infusionmodule.initPageEnhancer("uio-infusionmodule-theme");
            if ((Drupal.settings.infusion_uio.uio_interface == 'Fat Panel Options') && ($('*').hasClass('flc-uiOptions-fatPanel'))) {
                infusionmodule.initFatPanel(".flc-uiOptions-fatPanel");
            }
            else if (curpath.indexOf('uio_full_page') >= 0 && (Drupal.settings.infusion_uio.uio_interface == 'Full Page')) {
                infusionmodule.initFullNoPreview("#myUIOptions");
            }
            else if (curpath.indexOf('uio_full_page_preview') >= 0 && (Drupal.settings.infusion_uio.uio_interface == 'Full Page With Preview')) {
                infusionmodule.initFullWithPreview("#myUIOptions");
            }
            
            
        }
    };
})(jQuery);


