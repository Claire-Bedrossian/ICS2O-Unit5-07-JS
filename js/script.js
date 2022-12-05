// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-JS/sw.js", {
    scope: "/ICS2O-Unit5-07-JS/",
  })
}

/**
 * This function ccalculates the sum of natural numbers.
 */
function myButtonClicked() {
  var numN = parseFloat(document.getElementById("integer-n").value)
  var sum = 0
  var counter = 0
  var loop = 0

  for (let loop = 0; loop < numN; loop++) {
    counter++
    sum = sum + counter
    document.getElementById("sum").innerHTML = "The sum is " + sum + ".<br>"
  }
}
