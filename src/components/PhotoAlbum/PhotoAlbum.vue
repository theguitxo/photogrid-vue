<template>
  <v-container
    id="photoAlbum"
    fluid
  >
    <v-row v-if="showAlbum">
      <template v-for="item in getAlbum">
        <PhotoItem
          :item="item"
          :key="item.id"
          @remove="removeItem"
        />
      </template>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-alert type="warning">
          Ups! No photos found!
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./PhotoAlbum.js"></script>
