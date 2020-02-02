<template>
  <v-col
    xl="2"
    lg="3"
    md="4"
    cols="6"
  >
    <!-- :class="getRemovedClass" -->
    <div class="photo-frame">
      <img
        :id="photoId"
        v-lazy.container="item.url"
        @click="remove"
      />
      <div class="photo-frame--loading"></div>
    </div>
  </v-col>
</template>

<script src="./PhotoItem.js"></script>
<style lang="scss" scoped>
  @import 'PhotoItem.scss';
</style>
