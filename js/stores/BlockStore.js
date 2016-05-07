const assign = require("object-assign");
const EventEmitter = require("events").EventEmitter;

import AppDispatcher from "../dispatcher/AppDispatcher";
import BlockConstants from "../constants/BlockConstants";

const CHANGE_EVENT = "change";

let BlockStore;
let blockInterface;

function BlockInterface() {
  this.blocks = [];
}
BlockInterface.prototype.append = function (blockDetails) {
  this.blocks.push(blockDetails);
};

blockInterface = new BlockInterface();
BlockStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return blockInterface.blocks;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch (action.actionType) {
    case BlockConstants.BLOCK_APPEND:
      blockInterface.append(action.block);
      BlockStore.emitChange();
      break;
    default:
      break;
    }

    return true;
  })
});

export default BlockStore;

