<template>
  <div class="container">
    <nav class="header">
      <div class="logo">
        <a href="https://github.com/danielmelolima" target="_blank" class="logo-title">Daniel Lima</a>
        <a href="https://github.com/danielmelolima" target="_blank" class="logo-desc">Micro Frontend + Web Component</a>
      </div>
      <div style="height: 100%">
        <ul class="menu-items">
          <li v-on:click="changePage(item, $event)" class="menu-item" v-for="item in items" v-bind:key="item.name" v-bind:class="{ active: item.id === page }">
            <a class="menu-item-link">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </nav>
  <div>
</template>

<script>
/* eslint-disable */
const CHANGE_CATEGORY_EVENT_NAME = 'CHANGE_CATEGORY'
const vue = {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: () => ({
    page: 1,
    items: [
      { id: 1, name: 'Animals' },
      { id: 2, name: 'Food' },
      { id: 3, name: 'Toys' },
      { id: 4, name: 'Sports' }
    ],
  }),
  methods: {
    changePage: (item, event) => {
      const liElement = event.target.tagName === 'A' ? event.target.parentElement : event.target
      const lisElements = liElement.parentElement.children
      for (let i = 0; i < lisElements.length; i++) {
        lisElements[i].classList.remove('active')
      }
      liElement.className += " active"
      window.dispatchEvent(new CustomEvent(CHANGE_CATEGORY_EVENT_NAME, { detail: item } ))
    },
  }
}
export default vue
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    width: 100vw;
    height: 62px;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid #efeeed;
  }
  .header {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
  }
  .logo-title {
    text-decoration: none;
    color: #212121;
    font-size: 24px;
    font-family: 'Rational-Medium';
  }
  .logo-desc {
    text-decoration: none;
    color: #757575;
    font-size: 16px;
    margin-left: 5px;
  }
  .menu-items {
    display: flex;
    align-items: center;
    height: 100%;
    list-style: none;
    margin: 0;
  }
  .menu-item {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .menu-item.active {
    border-bottom: 2px solid #00796B;
  }
  .menu-item-link {
    color: #212121;
    font-size: 16px;
    font-weight: 500;
    padding: 0 20px;
  }
</style>
