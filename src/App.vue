<template>
  <div id="app">
    <app-header />
    <app-table
      :employee-list="employeeList"
    />
    <add-employee-form
      :employee-list="employeeList"
    />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Table from './components/Table/Table.vue';
import AddEmployeeForm from './components/AddEmployeeForm/AddEmployeeForm.vue';
import { extractLocalData } from './js/local_storage.js';

export default {
  name: 'app',

  components: {
    'app-header': Header,
    'app-table': Table,
    'add-employee-form': AddEmployeeForm,
  },

  data() {
    return {
      employeeList: extractLocalData() || [],
    };
  },
};
</script>

<style>
* {
  font-family: 'Times New Roman', Times, serif;
}

.visually-hidden:not(:focus):not(:active) {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
