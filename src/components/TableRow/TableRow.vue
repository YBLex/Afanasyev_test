<template>
  <tr class="table__row">
    <td class="table__cell table__cell--left">{{ employee.name }}</td>
    <td class="table__cell table__cell--right">{{ employee.tel }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',

  props: ['employee'],
};
</script>

<style scoped>
.table__cell {
  border: 2px solid #ff7e2a;
  text-align: center;
  padding: 10px;
  font-size: 22px;
}
</style>
