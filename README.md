infusion_uio
============

A Drupal module that integrates Infusion's UI Options into Drupal

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

1. Download and install the required modules. Make sure to configure the jQuery Update Module and set the jQuery version to 1.7. This can be done by going to admin/config (the admin configuration page).
2. Download the module and put it in your sites/all/modules folder.
3. Download the Infusion library. This library contains a MyInfusion.js file which is a concatenation of all the library's javascript files. This has been minified but if you would like to use an uncompressed version, there is a file included called MyInfusionUnminified.js and you can just rename that to MyInfusion.js and rename the original one to something else. 
4. After downloading the Infusion library unzip it and rename it to 'infusion' and put it in your sites/all/libraries folder.
You may need to create the 'libraries' folder if it doesn't exist.
5. Enable the module by going into the admin module page.


