export default {
  URL_ALBUM: 'https://jsonplaceholder.typicode.com/photos',
  STORE_NAME: 'album',
  ACTIONS: {
    LOAD_ALBUM: 'loadAlbum',
    DELETE_ITEM: 'deleteIem',
  },
  MUTATIONS: {
    SET_ALBUM: 'setAlbum',
    SET_LOADED: 'setLoaded',
    DELETE_ITEM: 'deleteItem',
  },
  GETTERS: {
    GET_ALBUM: 'getAlbum',
    GET_ALBUM_SIZE: 'getAlbumSize',
    GET_LOADED: 'getLoaded',
  },
};
