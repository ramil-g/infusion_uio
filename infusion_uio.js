(function($) {
    Drupal.behaviors.infusion_uio = {
        attach: function(context, settings) {
            //Check which UIO is being used
            var default_uio = settings.infusion_uio.uio_interface;
            switch (default_uio) {
                case 'Fat Panel Options':
                    if ($('div#skip-link')) {
                        $('div#skip-link').after('<div id="myUIOptions" class="flc-slidingPanel-panel flc-uiOptions-iframe"></div><div class="fl-panelBar"> <button class="flc-slidingPanel-toggleButton fl-toggleButton">The show/hide button label will go here</button> </div> </div>'
                                );
                    } else {
                        $('body').prepend(
                                '<div id="myUIOptions" class="flc-slidingPanel-panel flc-uiOptions-iframe"></div><div class="fl-panelBar"> <button class="flc-slidingPanel-toggleButton fl-toggleButton">The show/hide button label will go here</button> </div> </div>'
                                );
                    }
                    //Start ui options
                    fluid.uiOptions.fatPanel(".flc-uiOptions-fatPanel", {prefix: settings.infusion_uio.library_path + 'components/uiOptions/html'});
                    break;
            }

            fluid.pageEnhancer({// Specify the default theme class name 
                classnameMap: {
                    theme: {"default": "uio-demo-theme"}
                },
                // Specify the table of contents' template URL 
                tocTemplate: settings.infusion_uio.library_path + '/components/tableOfContents/html/TableOfContents.html'});

        }
    };
})(jQuery);
