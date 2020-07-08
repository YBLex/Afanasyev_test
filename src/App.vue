<template>
  <div id="app">
    <app-header />
    <app-table />
    <add-employee-form />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Table from './components/Table/Table.vue';
import AddEmployeeForm from './components/AddEmployeeForm/AddEmployeeForm.vue';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-table': Table,
    'add-employee-form': AddEmployeeForm,
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
