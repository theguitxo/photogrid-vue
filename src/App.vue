<template>
  <v-app>
    <v-content>
      <PhotoAlbum
        v-if="albumLoaded"
      />
    </v-content>

    <v-overlay
      :value="getShowOverlay"
    >
      <v-progress-circular
        :size="100"
        :width="10"
        color="white"
        indeterminate
      ></v-progress-circular>
    </v-overlay>

    <v-snackbar
      :value="showSnackBar"
      bottom
      left
    >
      {{ errorMessage }}
      <v-btn
        dark
        text
        @click="closeSnackBar"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script src="./App.js"></script>
