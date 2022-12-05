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

  while (counter < Math.abs(numB)) {
    counter++
    product = product + Math.abs(numA)
  }

  if ((numA < 0 && numB > 0) || (numB < 0 && numA > 0))
    document.getElementById("multiplication-product").innerHTML =
      "The product is equal to - " + product + "."
  else
    document.getElementById("multiplication-product").innerHTML =
      "The product is equal to " + product + "."
}
for (let i = 0; i < 5; i++) {
  document.getElementById("multiplication-product").innerHTML = "The number is " + product + "<br>";
}