import axios from 'axios';
import constants from '@/constants/photoAlbum';

const {
  URL_ALBUM,
  ACTIONS,
  MUTATIONS,
} = constants;

/**
 * @description loads the information of the images album
 * @param {Object} param Vuex object, destructured to use commit
 */
async function loadAlbum({ commit }) {
  commit(MUTATIONS.SET_LOADED, false);
  try {
    const result = await axios.get(URL_ALBUM);
    // modifty the state for inform that the data are loaded
    commit(MUTATIONS.SET_LOADED, true);
    // stores the requested information to the store
    commit(MUTATIONS.SET_ALBUM, result.data);
  } catch (error) {
    throw (error);
  }
}

/**
 * @description removes an image from the store
 * @param {Object} param Vuex object, destructured to use commit and state
 * @param {Number} id identificator of the image to remove
 */
function deleteItem({ commit, state }, id) {
  // searchs the index on the array of the store,
  // matching the identificators of the items with the received as a parameter
  // if found, calls the mutation to delete the image
  const index = state.album.findIndex(element => element.id === id);
  if (index > -1) {
    commit(MUTATIONS.DELETE_ITEM, index);
  }
}

export default {
  [ACTIONS.LOAD_ALBUM]: loadAlbum,
  [ACTIONS.DELETE_ITEM]: deleteItem,
};
