<template>
  <div class="container">
    <button class="add-button" @click="addEmployee">
      <div class="add-button__animation-layout"></div>
      <div class="add-button__content">+</div>
    </button>
  </div>
</template>

<script>
import eventBus from '../../js/event_bus.js';

export default {
  name: 'AddEmployeeButton',

  methods: {
    addEmployee() {
      eventBus.$emit('showAddEmployeeForm', true);
    },
  },
};
</script>

<style scoped>
.add-button {
  display: inline-flex;
  height: 40px;
  width: 40px;
  border: 2px solid #038cd5;
  border-radius: 50%;
  margin: 20px 20px 20px 20px;
  color: #ffffff;
  background-color: #038cd5;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.add-button {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.add-button .add-button__content {
  position: relative;
  transition: all .45s ease-Out;
}

.add-button__animation-layout {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  transition: all .5s ease-Out;
  top: 20px;
  left: 70px;
}

.add-button:hover .add-button__animation-layout {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -20px;
  left: -20px;
}

.add-button:hover .add-button__content {
  color: #038cd5;
}

.container {
  text-align: right;
}
</style>
