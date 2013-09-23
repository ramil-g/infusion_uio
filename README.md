infusion_uio
============

A Drupal module that integrates Infusion's User Interface Options into Drupal. UI Options is one of Infusion's components developed by the Fluid team. It presents your site's visitors with controls which allow them to customize the user interface. To learn more about Infusion and the Fluid project go to http://fluidproject.org/.

Requirements:

1. Libraries module 
   https://drupal.org/project/libraries
2. jQuery Update module
   https://drupal.org/project/jquery_update
3. The Infusion Library
   https://github.com/ramil-g/fluid1.5
   This is a custom build based on commit 377269139b5efefd90eaba06ea3178f7d29f56a1 of the Infusion library. 
   You will need to use this library because the build from the official site (http://builder.fluidproject.org/) currently does not work with Drupal.

Installation Instructions:

1. Download and install the required modules. Make sure to configure the jQuery Update Module and set the jQuery version to 1.7. This can be done by going to Admin>Configuration. The Infusion library is not compatible with the 1.8 version of jQuery so you will need to select version 1.7.
2. Download the module and put it in your sites/all/modules folder.
3. Download the Infusion library. This library contains a MyInfusion.js file which is a concatenation of all the library's javascript files. This has been minified but if you would like to use an uncompressed version, there is a file included called MyInfusionUnminified.js and you can just rename that to MyInfusion.js and rename the original one to something else. 
4. After downloading the Infusion library unzip it and rename it to 'infusion' and put it in your sites/all/libraries folder.
You may need to create the 'libraries' folder if it doesn't exist.
5. Enable the module by going into the admin module page.

Known Issues

1. The Opera Browser is currently not supported by Infusion on Windows
2. Some of the icons on the 'Full Page' and 'Full Page w Preview' are not rendering properly in Firefox.
3. There seems to be a bug with the Page Enhancer which affects background images not being loaded when you first visit the front page except if you are using the 'Fat Panel' version of the UIO.


