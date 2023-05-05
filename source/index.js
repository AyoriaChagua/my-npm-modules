const param_daysToChristmas = require('./lib/daysToChristmas')
const param_getAge = require('./lib/getAge')
const param_formValidator = require('./lib/formValidator')

if(typeof exports !== 'undefined'){
    if(typeof module !== 'undefined' && module.exports){
        exports = module.exports = {param_daysToChristmas, param_getAge, param_formValidator}
    }
    exports.param_daysToChristmas = param_daysToChristmas
    exports.param_formValidator = param_formValidator
    exports.param_getAge = param_getAge
} else {
    root.params = {param_daysToChristmas, param_getAge, param_formValidator}
}