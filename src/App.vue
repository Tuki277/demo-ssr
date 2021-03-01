<template>
  <div id="app">
    Server side render for Vue
    <p>
      <router-link to="/">index</router-link>
      <router-link to="/index2">index2</router-link>
      <router-link to="/index3">index3</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
