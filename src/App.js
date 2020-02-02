import { mapActions, mapGetters } from 'vuex';
import albumConstants from '@/constants/photoAlbum';
import overlayConstants from '@/constants/overlay';
import PhotoAlbum from '@/components/PhotoAlbum/PhotoAlbum.vue';

const { GET_LOADED } = albumConstants.GETTERS;
const { LOAD_ALBUM } = albumConstants.ACTIONS;

const { GET_VISIBLE } = overlayConstants.GETTERS;
const { SHOW_OVERLAY, HIDE_OVERLAY } = overlayConstants.ACTIONS;

export default {
  name: 'App',

  components: {
    PhotoAlbum,
  },

  data() {
    return {
      errorLoading: false,
      errorMessage: '',
    };
  },

  computed: {
    ...mapGetters({
      albumLoaded: `${albumConstants.STORE_NAME}/${GET_LOADED}`,
      getShowOverlay: `${overlayConstants.STORE_NAME}/${GET_VISIBLE}`,
    }),
    /**
     * @description returns a value that indicates, if it's true or not, to show the snackbar
     * @returns {Boolean}
     */
    showSnackBar() {
      return this.errorLoading;
    },
  },

  async created() {
    this.showOverlay();
    try {
      await this.loadAlbum();
    } catch (error) {
      this.errorMessage = error.toString();
      this.errorLoading = true;
    } finally {
      this.hideOverlay();
    }
  },

  methods: {
    ...mapActions({
      loadAlbum: `${albumConstants.STORE_NAME}/${LOAD_ALBUM}`,
      showOverlay: `${overlayConstants.STORE_NAME}/${SHOW_OVERLAY}`,
      hideOverlay: `${overlayConstants.STORE_NAME}/${HIDE_OVERLAY}`,
    }),
    /**
     * @description closes the snackbar that shows load errors
     */
    closeSnackBar() {
      this.errorLoading = false;
    },
  },
};
