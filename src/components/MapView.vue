<script setup>
import { Map, MapStyle, config, Marker } from "@maptiler/sdk";
import { shallowRef, onMounted, markRaw, onUnmounted } from "vue";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const mapContainer = shallowRef(null);
const map = shallowRef(null);
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocation is not supported by this browser.");
}
const coordinate = { lng: 0, lat: 0 };
function showPosition(position) {
  coordinate.lng = position.coords.longitude;
  coordinate.lat = position.coords.latitude;
  coordinate.acc = position.coords.accuracy;
  console.log(coordinate);
}
onMounted(() => {
  config.apiKey = "EuM9QQJGrvW9fu5g98Sm";
  const initialState = { lng: 104.888535, lat: 11.562108, zoom: 10 };
  map.value = markRaw(
    new Map({
      container: mapContainer.value,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    })
  );

  new Marker({ color: "blue" })
    .setLngLat([104.88263634569975, 11.550888202997038])
    .addTo(map.value);
  new Marker({ color: "red" })
    .setLngLat([104.91655, 11.58122])
    .addTo(map.value);
  new Marker({ color: "red" })
    .setLngLat([104.89596179152748, 11.56686895537976])
    .addTo(map.value);
});
onUnmounted(() => {
  map.value?.remove();
});
</script>
<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: calc(
    100vh - 77px
  ); /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
