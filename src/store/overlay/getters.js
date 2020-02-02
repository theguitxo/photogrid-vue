import constants from '@/constants/overlay';

const { GET_VISIBLE } = constants.GETTERS;

/**
 * @description returns the value for the property 'visible' of the overlay
 * @param {Object} state State of the store 'overlay'
 * @returns {Boolean}
 */
const getVisible = state => state.visible;

export default {
  [GET_VISIBLE]: getVisible,
};
