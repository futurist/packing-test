var MyLibrary = (function (exports) {
   'use strict';

   var value = 42;

   function getResult(...args) {
      console.log(value, args);
   }

   exports.getResult = getResult;

   return exports;

}({}));
