// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-JS/sw.js", {
    scope: "/ICS2O-Unit5-07-JS/",
  })
}

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  var numN = parseFloat(document.getElementById("integer-n").value)
  var product = 0
  var counter = 0

  for (let counter = 0; counter < Math.abs(numN); counter++) {
    product = product + Math.abs(numN)++ 
    document.getElementById("product").innerHTML =
     "The number is " + product + "<br>"
  } 

}

