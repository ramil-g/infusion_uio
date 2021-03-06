/*
 Copyright 2011 OCAD University
 Copyright 2011 Lucendo Development Ltd.
 
 Licensed under the Educational Community License (ECL), Version 2.0 or the New
 BSD license. You may not use this file except in compliance with one these
 Licenses.
 
 You may obtain a copy of the ECL 2.0 License and BSD License at
 https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
 */

// Declare dependencies
/*global infusionUIOModule:true, fluid, jQuery, window*/

// JSLint options 
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

var infusionUIOModule = infusionUIOModule || {};
(function($, fluid) {

    // Register into the environment the fact that the environment includes the Drupal UIO module
    fluid.staticEnvironment["drupal--uio--module"] = fluid.typeTag("drupal.uio.module");

    // tell the iFrame renderer to use my custom file when we're in environment of the module
    fluid.demands("fluid.uiOptions.fatPanel.renderIframe", ["drupal.uio.module"], {
        options: {
            markupProps: {
                src: Drupal.settings.infusion_uio.fatpanel_frame
            }
        }
    });

    /**
     * The UI Options interface is defined by several HTML templates. The component
     * needs to know where those templates are. This variable will be used by all
     * versions of the component.
     */

    var pathToTemplates = Drupal.settings.infusion_uio.library_path + "/components/uiOptions/html/";

    /**
     * The UI Enhancer's Table of Contents uses a template. This path variable is used by all
     * three versions of the component, as well as by the UI Enhancer present in the Preview
     * itself.
     */
    var pathToTocTemplate = Drupal.settings.infusion_uio.library_path + "/components/tableOfContents/html/TableOfContents.html";

    /**
     * Initialize a settings store for the page.
     */
    infusionUIOModule.initSettingsStore = function() {
        fluid.globalSettingsStore();
    };

    /**
     * Initialize UI Enhancer for the page. This function is used by the two full-page
     * UI Options pages as well as by the demo page itself.
     */
    infusionUIOModule.initPageEnhancer = function(customThemeName) {
        fluid.pageEnhancer({
            gradeNames: ["fluid.uiEnhancer.starterEnactors"],
            tocTemplate: pathToTocTemplate,
            classnameMap: {
                theme: {
                    "default": customThemeName
                }
            }
        });
    };

    var commonOpts = {
        gradeNames: ["fluid.uiOptions.transformDefaultPanelsOptions"],
        // Tell UIOptions where to find all the templates, relative to this file
        prefix: pathToTemplates,
        templateLoader: {
            options: {
                gradeNames: ["fluid.uiOptions.starterTemplateLoader"]
            }
        },
        uiOptions: {
            options: {
                gradeNames: ["fluid.uiOptions.starterPanels", "fluid.uiOptions.rootModel.starter", "fluid.uiOptions.uiEnhancerRelay"]
            }
        }
    };

    /**
     * The basic options for configuring the full-page versions of UI Options are the same,
     * regardless of whether or not the Preview is used. These settings used by both
     * full-page version, with and without Preview.
     */
    var basicFullPageOpts = {
        // Tell UIOptions where to redirect to if the user cancels the operation
        uiOptions: {
            options: {
                listeners: {
                    onCancel: function() {
                        parent.history.back();
                    }
                }
            }
        }
    };

    /**
     * Options for the Full Page with Preview telling it where the html for the preview is located.
     */
    var previewOpts = {
        preview: {
            options: {
                templateUrl: Drupal.settings.infusion_uio.full_preview_iframe
            }
        }
    };

    /**
     * Options for the "Fat Panel". Customize the "show/hide" button text.
     */
    var panelOpts = {
        slidingPanel: {
            options: {
                strings: {
                    showText: "v " + Drupal.settings.infusion_uio.fp_show_btn,
                    hideText: "^ " + Drupal.settings.infusion_uio.fp_hide_btn
                }
            }
        }
    };

    /**
     * Initialize UI Options on the "Fat Panel" version. This version of UI Options uses the
     * page itself as a live preview.
     */
    infusionUIOModule.initFatPanel = function(container, options) {
        fluid.uiOptions.fatPanel(container, $.extend(true, {}, commonOpts, panelOpts, options));
    };

    /**
     * Initialize UI Options on the "Full Page, No Preview" version.
     */
    infusionUIOModule.initFullNoPreview = function(container, options) {
        fluid.uiOptions.fullNoPreview(container, $.extend(true, {}, commonOpts, basicFullPageOpts, options));
    };

    /**
     * Initialize UI Options on the "Full Page, With Preview" version.
     */
    infusionUIOModule.initFullWithPreview = function(container, options) {
        fluid.uiOptions.fullPreview(container, $.extend(true, {}, commonOpts, basicFullPageOpts, previewOpts, options));
    };

})(jQuery, fluid);