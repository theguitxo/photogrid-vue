import constants from '@/constants/photoAlbum';

const {
  GET_ALBUM,
  GET_LOADED,
  GET_ALBUM_SIZE,
} = constants.GETTERS;

/**
 * @description returns the information of the images album
 * @param {Object} state State of the store 'album'
 * @returns {Array}
 */
const getAlbum = state => state.album;

/**
 * @description returns the value that indicates if the album is loaded
 * @param {Object} state State of the store 'album'
 * @returns {Boolean}
 */
const getLoaded = state => state.loaded;

/**
 * @description returns the size of the loaded album
 * @param {Object} state State of the store 'album'
 * @returns {Number}
 */
const getAlbumSize = state => state.album.length;

export default {
  [GET_ALBUM]: getAlbum,
  [GET_LOADED]: getLoaded,
  [GET_ALBUM_SIZE]: getAlbumSize,
};
