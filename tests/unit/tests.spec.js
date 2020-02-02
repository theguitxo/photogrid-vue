import { shallowMount, mount } from '@vue/test-utils';
import sinon from 'sinon';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import PhotoAlbum from '@/components/PhotoAlbum/PhotoAlbum.vue';
import PhotoItem from '@/components/PhotoItem/PhotoItem.vue';
import VueLazyload from 'vue-lazyload';

import stores from './stores';

const {
  storeThreeImages,
  storeNoImages,
} = stores;

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueLazyload);

describe('PhotoAlbum.vue', () => {  
  it('PhotoAlbum inserts PhotoItem component when have images to show', () => {
    const wrapper = mount(PhotoAlbum, {
      vuetify: new Vuetify(),
      store: new Vuex.Store(storeThreeImages),
    });
        
    expect(wrapper.find(PhotoItem).exists()).toBe(true);
  });

  it('PhotoAlbum inserts the correct amount of PhotoItem components', () => {
    const wrapper = mount(PhotoAlbum, {
      vuetify: new Vuetify(),
      store: new Vuex.Store(storeThreeImages),
    });

    expect(wrapper.findAll(PhotoItem).length).toBe(3);
  });

  it('PhotoAlbum shows alert if no items are loaded', () => {
    const wrapper = shallowMount(PhotoAlbum, {
      vuetify: new Vuetify(),
      store: new Vuex.Store(storeNoImages),
    });

    expect(wrapper.find({ name: 'v-alert' }).exists()).toBe(true);
  });
});

describe('PhotoItem.vue', () => {
  it('Event to remove item is called on click over image', () => {
    const removeStub = sinon.stub();

    const wrapper = shallowMount(PhotoItem, {
      vuetify: new Vuetify(),
      propsData: {
        item: {
          albumId: 1,
          id: 1,
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
      },
      listeners: {
        remove: removeStub,
      },
    });

    wrapper.find('img').trigger('click');
    expect(removeStub.called).toBe(true);
  });
});
