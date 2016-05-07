import Dispatcher from "./Dispatcher";
var assign = require("object-assign");

var AppDispatcher = assign({}, Dispatcher.prototype, {
  handleBlockAction: function(action) {
    this.dispatch({
      source: "BLOCK_ACTION",
      action: action
    });
  }
});

module.exports = AppDispatcher;
