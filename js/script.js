// Copyright (c) 2023 Olivia B-R All rights reserved
//
// Created by: Olivia B-R
// Created on: june 2023
// This file contains the JS functions for index.html

const randomNumberPos = Math.floor(Math.random() * 6) + 1
const randomNumberNeg = Math.floor(Math.random() * -6) + 1

/**
 * This function displays positive and negative number
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById("positive.").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "Your number is: " + randomNumberPos + "."
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "Your number is: " + randomNumberNeg + "."
  }
}
