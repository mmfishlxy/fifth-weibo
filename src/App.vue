<template>
  <div class="app-container">
  <!-- 展示区域 -->
    <transition>
      <router-view></router-view>
    </transition>
  <!-- 展示区域 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>


</style>
