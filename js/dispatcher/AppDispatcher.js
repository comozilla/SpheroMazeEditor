const Dispatcher = require("flux").Dispatcher;
const assign = require("object-assign");

const AppDispatcher = assign(new Dispatcher(), {
  handleBlockAction: function(action) {
    this.dispatch({
      source: "BLOCK_ACTION",
      action: action
    });
  }
});

export default AppDispatcher;

