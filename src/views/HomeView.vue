<template>
  <div>
    <h1>INTEUD</h1>
    <hr class="divider" />
    <p>
      <strong>
        El Area de investigación Tecnológica de la Universidad
        Distrital
      </strong>, es una iniciativa educativa enfocada en el desarrollo e investigación
      de herramientas tecnológicas implementado software y hardware de
      vanguardia en cada uno de los proyectos personales y grupales
    </p>
    <hr class="spacer" />
    <h1>AREAS</h1>
    <hr class="divider" />
    <div class="links">
      <CardLink
        v-for="(link, key) in links"
        :key="key"
        :title="link.title"
        :icon="link.icon"
        :to="link.to"
        :style="link.style"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardLink from "@/components/cardLink.vue";

const domain = ref("https://inteud.github.io/");
const styles = "width: calc(calc(100% / 3) - 1rem)";
const links = ref([
  { title: "Hidraulica", icon: "hydro-power", to: "hydro", style: `${styles}` },
  { title: "Canales", icon: "eye-circle-outline", to: "/#/comming", style: `${styles}` },
  { title: "Ancantarillados", icon: "hexagon-multiple", to: "/#/comming", style: `${styles}` },
  { title: "Hidrologia", icon: "hexagon-multiple", to: "/#/comming", style: `${styles}` },
  { title: "Proyectos", icon: "wall", to: "/#/comming", style: `${styles}` },
  { title: "Obras hidraulicas", icon: "tower-fire", to: "/#/comming", style: `${styles}` },
  { title: "Software", icon: "desktop-classic", to: "/comming", style: `${styles}` },
  { title: "IOT", icon: "desktop-classic", to: "hydro/#/iot", style: `${styles};background: #2962FF; color: white` },
]);
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.iot-link {
  background: #2d2d2d !important;
}
</style>
