export default {
  name: 'PhotoItem',

  props: {
    item: Object,
  },

  computed: {
    /**
     * @description returns the id value for an image
     * @returns {String}
     */
    photoId() {
      return `photo_${this.item.id}`;
    },
  },

  methods: {
    /**
     * @description emits an event to their parent component to remove an image
     */
    remove() {
      this.$emit('remove', this.item.id);
    },
  },
};
