/**
* @file
* The javascript file for the Full Page UIO.
*/

(function($) {
    Drupal.behaviors.infusion_uio = {
        attach: function(context, settings) {

            demo.initSettingsStore();
            demo.initPageEnhancer("uio-demo-theme");
            
            var curpath = $(location).attr('href');
            if (curpath.indexOf('uio_full_page') >= 0) {
                demo.initFullNoPreview("#myUIOptions");
            }
        }
    };
})(jQuery);


