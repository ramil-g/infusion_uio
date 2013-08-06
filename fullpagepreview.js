/**
* @file
* The javascript file for the Full Page with Preview UIO.
*/
    
(function($) {
    Drupal.behaviors.infusion_uio = {
        attach: function(context, settings) {

            demo.initSettingsStore();
            demo.initPageEnhancer("uio-demo-theme");

            var curpath = $(location).attr('href');
            if (curpath.indexOf('uio_full_page_preview') >= 0) {
                demo.initFullWithPreview("#myUIOptions", {
                    preview: {
                        options: {
                            templateUrl: Drupal.settings.infusion_uio.full_preview_iframe
                        }
                    }
                });
            }
        }
    };
})(jQuery);


