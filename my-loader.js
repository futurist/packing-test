module.exports = function (source, map) {
    // better use below to get query object
    // require('loader-utils').getOptions(this)
    const {fn} = this.query
    return typeof fn === 'function' ? fn.call(this, source, map) : source
}
