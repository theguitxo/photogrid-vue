import { mapActions, mapGetters } from 'vuex';
import albumConstants from '@/constants/photoAlbum';
import PhotoItem from '@/components/PhotoItem/PhotoItem.vue';

const {
  GET_ALBUM,
  GET_ALBUM_SIZE,
} = albumConstants.GETTERS;

const {
  DELETE_ITEM,
} = albumConstants.ACTIONS;

export default {
  name: 'PhotoAlbum',

  components: {
    PhotoItem,
  },

  computed: {
    ...mapGetters({
      getAlbum: `${albumConstants.STORE_NAME}/${GET_ALBUM}`,
      getAlbumSize: `${albumConstants.STORE_NAME}/${GET_ALBUM_SIZE}`,
    }),
    /**
     * @description returns if it must to show or not the photo album
     * @returns {Boolean}
     */
    showAlbum() {
      return this.getAlbumSize > 0;
    },
  },

  methods: {
    ...mapActions({
      deleteItem: `${albumConstants.STORE_NAME}/${DELETE_ITEM}`,
    }),
    /**
     * @description calls the action to remove an image of the list
     * @param {Number} id identificator of the image to remove
     */
    removeItem(id) {
      this.deleteItem(id);
    },
  },
};
