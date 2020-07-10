<template>
  <section class="table">
    <add-employee-button></add-employee-button>
    <table
      class="table__main"
      v-if="employeeList.length"
      key="app-table"
    >
      <thead>
        <tr class="table__row">
          <th class="table__cell table__cell--left table__cell--main">Name</th>
          <th class="table__cell table__cell--right table__cell--main">Contact</th>
        </tr>
      </thead>
      <tbody>
        <table-row
          v-for="(employee, index) in employeeList"
          :employee="employee"
          :key="index"
        ></table-row>
      </tbody>
    </table>
    <div
      class="start-use"
      v-else
      key="app-description"
    >
      Create your first table! Press the <span class="highlight-blue">Add Button</span>!
    </div>
  </section>
</template>

<script>
import TableRow from '../TableRow/TableRow.vue';
import AddEmployeeButton from '../AddEmployeeButton/AddEmployeeButton.vue';
import { extractLocalData, writeLocalData } from '../../js/local_storage.js';
import eventBus from '../../js/event_bus.js';

export default {
  name: 'AppTable',

  components: {
    TableRow,
    AddEmployeeButton,
  },

  created() {
    eventBus.$on('updatedEmployeeList', (employee) => {
      this.employeeList.push(employee);
    });
  },

  data() {
    return {
      employeeList: extractLocalData() || [],
    };
  },

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

.table__main,
.table__row,
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
}

.table__cell--right {
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
