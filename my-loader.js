module.exports = function (source, map) {
    // better use below to get query object
    // require('loader-utils').getOptions(this)
    const {before=''} = this.query
    return before + source
}
