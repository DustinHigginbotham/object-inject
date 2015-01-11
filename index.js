/**
 * Inject a new object into an existing object at a certain position
 *
 * @param obj      {Object} The existing object
 * @param newObj   {Object} The new object to inject
 * @param key      {String} The key from the old object to use that will be used for positioning.
 * @param position {String} 'before' or 'after' the key. Defaults to 'before'
 * @returns {Object} The new object created
 */
module.exports = function(obj, newObj, key, position) {

    if (!position) var position = 'before';

    var placeObj = function(o, n) {
        Object.keys(n).forEach(function(k) {
            o[k] = n[k];
        });
        return o;
    };

    var a = {};
    Object.keys(obj).forEach(function(k) {
        if (key == k && position == 'before') {
            placeObj(a, newObj);
        }
        a[k] = obj[k];
        if (key == k && position == 'after') {
            placeObj(a, newObj);
        }
    });

    return a;
};
