<template>
  <div class="table__row">
    <div class="table__row-content">
      <div class="table__cell table__cell--left">{{ employee.name }}</div>
      <div class="table__cell table__cell--right">{{ employee.tel }}</div>
    </div>
    <div
      class="table__row-children"
      :style="shift"
      v-if="employee.children && employee.children.length"
    >
      <table-row
        v-for="child in employee.children"
        :key="child.id"
        :employee="child"
        :depth="depth + 1"
      />
    </div>
  </div>
</template>

<script>
import {SHIFT_DISTANCE} from '../../js/consts.js';

export default {
  name: 'TableRow',

  props: ['employee', 'depth'],

  computed: {
    shift() {
      return {
        'margin-left': `${this.depth * SHIFT_DISTANCE}px`,
      };
    },
  },
};
</script>

<style scoped>
.table__row {
  display: flex;
  flex-direction: column;
}

.table__row-content {
  display: flex;
}

.table__cell {
  border-bottom: 2px solid #ff7e2a;
  text-align: center;
  padding: 10px;
  font-size: 22px;
}
.table__cell--left {
  width: 40%;
}

.table__cell--right {
  border-left: 2px solid #ff7e2a;
  width: 60%;
}
</style>
