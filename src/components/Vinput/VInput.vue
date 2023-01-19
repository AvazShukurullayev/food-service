<template>
  <input type="text" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: "VInout",
};
</script>
