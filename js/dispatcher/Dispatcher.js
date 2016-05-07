const Promise = require("es6-promise").Promise;
const assign = require("object-assign");

let callbacks = [];
let promises = [];

const Dispatcher = function() {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {
  register: function(callback) {
    callbacks.push(callback);
    return callbacks.length - 1;
  },
  dispatch: function(payload) {
    // First create array of promises for callbacks to reference.
    let resolves = [];
    let rejects = [];
    promises = callbacks.map(function(_, i) {
      return new Promise(function(resolve, reject) {
        resolves[i] = resolve;
        rejects[i] = reject;
      });
    });
    // Dispatch to callbacks and resolve/reject promises.
    callbacks.forEach(function(callback, i) {
      // Callback can return an obj, to resolve, or a promise, to chain.
      // See waitFor() for why this might be useful.
      Promise.resolve(callback(payload)).then(function() {
        resolves[i](payload);
      }, function() {
        rejects[i](new Error("Dispatcher callback unsuccessful"));
      });
    });
    promises = [];
  }
});

export default Dispatcher;
