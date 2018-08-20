var myLib = (function (exports) {
    'use strict';

    function getResult(...args) {
        Promise.resolve().then(function () { return mylib_esm$1; }).then(m=>{
            console.log('mylib_esm', m);
        });
        Promise.resolve().then(function () { return mylib_cjs; }).then(m=>{
            console.log('mylib_cjs', m);
        });
    }
    getResult();

    var mylib_esm = 42;

    var mylib_esm$1 = /*#__PURE__*/Object.freeze({
        default: mylib_esm
    });

    module.exports = 42;

    var mylib_cjs = /*#__PURE__*/Object.freeze({

    });

    exports.getResult = getResult;

    return exports;

}({}));
