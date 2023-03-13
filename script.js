"use strict";
exports.__esModule = true;
function layTen() {
    var input = document.getElementById("fullname");
    var ten = input.value;
    var result = "Hi, " + ten + "!";
    var p = document.getElementById("result-content");
    p.innerHTML = result;
}
