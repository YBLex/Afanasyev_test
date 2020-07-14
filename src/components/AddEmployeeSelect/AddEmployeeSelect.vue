<template>
  <div class="add-form__input-control app-select">
    <div
      class="add-form__label"
    >Manager</div>
    <div
      class="app-select__selector"
      @click="toggle()"
    >
      <div class="app-select__label">
        <input
          class="app-select__input"
          placeholder="Select a manager 🎩"
          v-model="director"
        />
      </div>
      <div class="app-select__arrow" :class="{ expanded: visible }"></div>
      <div :class="{ hidden: !visible, visible }">
        <ul class="app-select__list">
          <li
            class="app-select__item"
            :class="{ current: employee.name === director }"
            v-for="employee in employeeList"
            :key="employee.id"
            @click="select(employee)"
          >
            {{ employee.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../../js/event_bus.js';

export default {
  name: 'AddEmployeeSelect',

  props: ['employeeList'],

  data() {
    return {
      director: '',
      visible: false,
    };
  },

  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select({id, name}) {
      this.director = name;
      eventBus.$emit('sendDirecroID', id);
    },
  },
};
</script>

<style scoped>
.add-form__label {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #038cd5;
}

.add-form__input-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.app-select__selector {
    border: 1px solid rgba(60,60,60,.26);
    border-radius: 4px;
    position: relative;
    z-index: 1;
}

.app-select__arrow {
    position: absolute;
    right: 10px;
    top: 40%;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid #888888;
    transform: rotateZ(0deg) translateY(0px);
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(.59,1.39,.37,1.01);
}

.app-select__arrow.expanded {
    transform: rotateZ(180deg) translateY(2px);
}

.app-select__label {
    display: block;
    color: #888888;
}

.app-select__input {
    width: 100%;
    border: none;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
}

.app-select__list {
    width: 100%;
    max-height: 126px;
    overflow-y: auto;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    border: 1px solid gainsboro;
    position: absolute;
    z-index: 1;
    background: #ffffff;
}

.app-select__item {
    padding: 12px;
    color: #666666;			
}

.app-select__item:hover {
    color: white;
    background: #ff7e2a;
}

.current {
    background: #038cd5;
    color: #ffffff;
}

.hidden {
    visibility: hidden;
}

.visible {
    visibility: visible;
}
</style>
