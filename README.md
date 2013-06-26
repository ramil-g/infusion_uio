infusion_uio
============

A Drupal module that integrates UI Options into Drupal

Installation Instructions:

1. Download the module and put in your sites/all/modules folder.
2. Downlaod the Infusion library from http://builder.fluidproject.org/
When you go to http://builder.fluidproject.org/ check the 'User Interface Options' and all of its dependencies will be checked also. 
You need to uncheck the following from the Third Party Modules:
jQuery
jQuery UI Core
jQuery UI Widgets
because these are already included with Drupal.
3. After downloading the Infusion library unzip it and rename it to 'infusion' and put it in sites/all/libraries folder.
You may need to create the 'libraries' folder if it doesn't exist.
4. Enable the module by going into the admin module page.