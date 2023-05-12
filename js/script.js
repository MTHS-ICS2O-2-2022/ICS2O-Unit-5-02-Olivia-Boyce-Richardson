// Copyright (c) 2023 Olivia B-R All rights reserved
//
// Created by: Olivia B-R
// Created on: june 2023
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  alwaysOnButtonChecked = document.getElementById('on-check').checked

  if (alwaysOnButtonChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
    "<p>Value is: On</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
    "<p>Value is: Off</p>"
  }
}