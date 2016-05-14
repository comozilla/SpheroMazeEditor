import AppDispatcher from "../dispatcher/AppDispatcher";
import BlockConstants from "../constants/BlockConstants";

const BlockActions = {
  append: function(blockDetails) {
    AppDispatcher.handleBlockAction({
      actionType: BlockConstants.BLOCK_APPEND,
      block: blockDetails
    });
  }
};

export default BlockActions;

