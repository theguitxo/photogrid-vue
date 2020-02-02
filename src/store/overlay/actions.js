import constants from '@/constants/overlay';

const { SHOW_OVERLAY, HIDE_OVERLAY } = constants.ACTIONS;

/**
 * @description shows the overlay used while loading data
 * @param {Object} param Vuex object, destructured to use commit
 */
function showOverlay({ commit }) {
  commit('visible', true);
}

/**
 * @description hides the overlay used while loading data
 * @param {Object} param Vuex object, destructured to use commit
 */
function hideOverlay({ commit }) {
  commit('visible', false);
}

export default {
  [SHOW_OVERLAY]: showOverlay,
  [HIDE_OVERLAY]: hideOverlay,
};
