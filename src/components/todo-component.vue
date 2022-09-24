<script lang="ts" setup>
const props = defineProps({
  value: String,
});
</script>
<template>
  <li>
    <div>
      {{ value }}
    </div>
  </li>
</template>
