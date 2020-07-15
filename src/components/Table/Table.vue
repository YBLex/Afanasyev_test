<template>
  <section class="table">
    <add-employee-button></add-employee-button>
    <div
      v-if="employeeList.length"
      key="app-table"
      class="table__main"
    >
      <div class="table__header table__row">
        <div class="table__cell table__cell--left">Name</div>
        <div class="table__cell table__cell--right">Contact</div>
      </div>
      <table-row
        v-for="(employee, index) in employeeList"
        :key="index"
        :employee="employee"
        :depth="1"
      />
    </div>
    <div
      v-else
      key="app-description"
      class="start-use"
    >
      Create your first table! Press the <span class="highlight-blue">Add Button</span>!
    </div>
  </section>
</template>

<script>
import TableRow from '../TableRow/TableRow.vue';
import AddEmployeeButton from '../AddEmployeeButton/AddEmployeeButton.vue';
import { writeLocalData } from '../../js/local_storage.js';

export default {
  name: 'AppTable',

  components: {
    TableRow,
    AddEmployeeButton,
  },

  props: ['employeeList'],

  watch: {
    employeeList: {
      handler() {
        writeLocalData(this.employeeList);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.table {
  width: 800px;
  margin: 0 auto;
}

.table__main {
  width: 100%;
}

.table__cell--main {
  cursor: pointer;
}

.table__row {
  display: flex;
}

.table__cell {
  border: 2px solid #ff7e2a;
  color: #8a8a8a;
}

.table__cell {
  text-align: center;
  padding: 10px;
  font-size: 26px;
}

.table__cell--left {
  width: 40%;
  border-right: none;
  border-left: none;
}

.table__cell--right {
  border-right: none;
  width: 60%;
}

.start-use {
  font-size: 28px;
  text-align: right;
}

.highlight-blue {
  color: #038cd5;
}
</style>
