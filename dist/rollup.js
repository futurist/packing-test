var myLib = (function (exports) {
   'use strict';

   var mylib = 42;

   function getResult(...args) {
      console.log(mylib, args);
   }
   getResult();

   exports.getResult = getResult;

   return exports;

}({}));
