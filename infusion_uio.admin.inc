<?php

/**
 * @file
 * Admin page callback for the Infusion UIO module.
 */

/**
 * Menu callback: configure the Infusion UIO module.
 */
function infusion_ui_settings_form($node, &$form_state) {

  $defaultvalue = variable_get('infusion_uio_interface', 'Fat Panel Options');
  $uio_options = array(t('Fat Panel Options'), t('Full Page'), t('Full Page With Preview'));
  $form['infusion_uio_interface'] = array(
    '#type' => 'radios',
    '#title' => t('Select the default UIO interface'),
    '#default_value' => variable_get('infusion_uio_interface', 'Fat Panel Options'),
    '#options' => drupal_map_assoc($uio_options),
    '#ajax' => array(
      'callback' => 'infusion_uio_moreoptions_ajax',
      'wrapper' => 'infusion_uio_moreoptions',
      'method' => 'replace',
    )
  );
  $form['infusion_uio_more'] = array(
    '#type' => 'markup',
    '#prefix' => '<div id="infusion_uio_moreoptions">',
    '#suffix' => '</div>',
  );
  //Check which value was selected from above and present users with more options according to their choice.
  if ($defaultvalue == 'Fat Panel Options' && empty($form_state['values']['infusion_uio_interface'])) {
    $form['infusion_uio_more']['#type'] = 'fieldset';
    $form['infusion_uio_more']['#title'] = t('Additional Settings for !uio', array('!uio' => $defaultvalue));
    $form['infusion_uio_more']['infusion_uio_show_btn'] = array(
      '#type' => 'textfield',
      '#default_value' => variable_get('infusion_uio_show_btn', 'Open Display Preferences'),
      '#maxlength' => 128,
      '#required' => TRUE,
      '#title' => t('Show Button'),
      '#description' => t('Enter a custom text for the \'Show\' button'),
    );
    $form['infusion_uio_more']['infusion_uio_hide_btn'] = array(
      '#type' => 'textfield',
      '#default_value' => variable_get('infusion_uio_hide_btn', 'Close Display Preferences'),
      '#maxlength' => 128,
      '#required' => TRUE,
      '#title' => t('Hide Button'),
      '#description' => t('Enter a custom text for the \'Hide\' button'),
    );
  }
  elseif ($defaultvalue == 'Full Page' && empty($form_state['values']['infusion_uio_interface'])) {
    $form['infusion_uio_more']['#type'] = 'fieldset';
    $form['infusion_uio_more']['#title'] = t('Additional Settings for !uio', array('!uio' => $defaultvalue));
    $form['infusion_uio_more']['infusion_uio_fullpage_block'] = array(
      '#type' => 'checkbox',
      '#title' => t('Use block for the link to the Full Page UI Options'),
      '#description' => t('You can use a block for the link to the Full Page UI Options and configure where you want to place it in the block settings page'),
      '#default_value' => variable_get('infusion_uio_fullpage_block', 0),
    );
  }
  elseif ($defaultvalue == 'Full Page With Preview' && empty($form_state['values']['infusion_uio_interface'])) {
    $form['infusion_uio_more']['#type'] = 'fieldset';
    $form['infusion_uio_more']['#title'] = t('Additional Settings for !uio', array('!uio' => $defaultvalue));
    $form['infusion_uio_more']['infusion_uio_fullpagepreview_block'] = array(
      '#type' => 'checkbox',
      '#title' => t('Use block for the link to the Full Page UI Options'),
      '#description' => t('You can use a block for the link to the Full Page with Preview UI Options and configure where you want to place it in the block settings page'),
      '#default_value' => variable_get('infusion_uio_fullpagepreview_block', 0),
    );
  }
  //Populate the more options for the ajax callback
  if (!empty($form_state['values']['infusion_uio_interface']) && $form_state['values']['infusion_uio_interface'] == 'Fat Panel Options') {
    $form['infusion_uio_more']['#type'] = 'fieldset';
    $form['infusion_uio_more']['#title'] = t('Additional Settings for !uio', array('!uio' => $form_state['values']['infusion_uio_interface']));
    $form['infusion_uio_more']['infusion_uio_show_btn'] = array(
      '#type' => 'textfield',
      '#default_value' => variable_get('infusion_uio_show_btn', 'Preferences'),
      '#maxlength' => 128,
      '#required' => TRUE,
      '#title' => t('Show Button'),
      '#description' => t('Enter a custom text for the \'Show\' button'),
    );
    $form['infusion_uio_more']['infusion_uio_hide_btn'] = array(
      '#type' => 'textfield',
      '#default_value' => variable_get('infusion_uio_hide_btn', 'Preferences'),
      '#maxlength' => 128,
      '#required' => TRUE,
      '#title' => t('Hide Button'),
      '#description' => t('Enter a custom text for the \'Hide\' button'),
    );
  }
  elseif (!empty($form_state['values']['infusion_uio_interface']) && $form_state['values']['infusion_uio_interface'] == 'Full Page') {
    $form['infusion_uio_more']['#type'] = 'fieldset';
    $form['infusion_uio_more']['#title'] = t('Additional Settings for !uio', array('!uio' => $form_state['values']['infusion_uio_interface']));
    $form['infusion_uio_more']['infusion_uio_fullpage_block'] = array(
      '#type' => 'checkbox',
      '#title' => t('Use block for the link to the Full Page UI Options'),
      '#description' => t('You can use a block for the link to the Full Page UI Options and configure where you want to place it in the block settings page'),
      '#default_value' => variable_get('infusion_uio_fullpage_block', 0),
    );
  }
  elseif (!empty($form_state['values']['infusion_uio_interface']) && $form_state['values']['infusion_uio_interface'] == 'Full Page With Preview') {

    $form['infusion_uio_more']['#type'] = 'fieldset';
    $form['infusion_uio_more']['#title'] = t('Additional Settings for !uio', array('!uio' => $form_state['values']['infusion_uio_interface']));
    $form['infusion_uio_more']['infusion_uio_fullpagepreview_block'] = array(
      '#type' => 'checkbox',
      '#title' => t('Use block for the link to the Full Page with Preview UI Options'),
      '#description' => t('You can use a block for the link to the Full Page with Preview UI Options and configure where you want to place it in the block settings page'),
      '#default_value' => variable_get('infusion_uio_fullpagepreview_block', 0),
    );
  }

  return system_settings_form($form);
}

/**
 * Ajax  callback for admin settings form.
 */
function infusion_uio_moreoptions_ajax($form, $form_state) {
  return $form['infusion_uio_more'];
}