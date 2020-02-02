import constants from '@/constants/overlay';

const { VISIBLE } = constants.MUTATIONS;

/**
 * @description modify the value 'visible' of the state
 * @param {Object} state state for the store 'overlay'
 * @param {Boolean} payload new value for 'visible'
 */
function visible(state, payload) {
  state.visible = payload;
}

export default {
  [VISIBLE]: visible,
};
