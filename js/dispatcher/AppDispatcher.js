import Dispatcher from "./Dispatcher";
const assign = require("object-assign");

const AppDispatcher = assign({}, Dispatcher.prototype, {
  handleBlockAction: function(action) {
    this.dispatch({
      source: "BLOCK_ACTION",
      action: action
    });
  }
});

export default AppDispatcher;

