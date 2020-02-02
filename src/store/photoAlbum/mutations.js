import constants from '@/constants/photoAlbum';

const {
  SET_ALBUM,
  SET_LOADED,
  DELETE_ITEM,
} = constants.MUTATIONS;

/**
 * @description modify the value 'album' of the state
 * @param {Object} state state for the store 'album'
 * @param {Array} payload new list of items for the album
 */
function setAlbum(state, payload) {
  state.album = payload;
}

/**
 * @description modify the value 'loaded' of the state
 * @param {Object} state state for the store 'album'
 * @param {Boolean} payload a value to indicate if it's loaded or not
 */
function setLoaded(state, payload) {
  state.loaded = payload;
}

/**
 * @description removes an item of the album list
 * @param {Object} state state for the store 'album'
 * @param {Number} payload the index in the album array to remove
 */
function deleteItem(state, payload) {
  state.album.splice(payload, 1);
}

export default {
  [SET_ALBUM]: setAlbum,
  [SET_LOADED]: setLoaded,
  [DELETE_ITEM]: deleteItem,
};
