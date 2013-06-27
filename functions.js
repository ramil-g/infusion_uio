(function($) {
    Drupal.behaviors.infusion_uio = {
        attach: function(context, settings) {
            
            //Start ui options
            fluid.uiOptions.fatPanel(".flc-uiOptions-fatPanel", {prefix: settings.infusion_uio.library_path + '/components/uiOptions/html/'});
            //Start the Page Enhancer
            fluid.pageEnhancer({// Specify the default theme class name 
                classnameMap: {
                    theme: {"default": "uio-demo-theme"}
                },
                // Specify the table of contents' template URL 
                tocTemplate: settings.infusion_uio.library_path + '/components/tableOfContents/html/TableOfContents.html'});

        }
    };
})(jQuery);







