<template>
  <section
    v-if="isShown"
    class="add-form"
  >
    <h2 class="visually-hidden">Add employee form</h2>
    <div
      class="overlay"
      @click="onCloseForm"
    ></div>
    <form
      v-if="isShown"
      class="add-form__form"
    >
      <div class="add-form__input-control">
        <label
          class="add-form__label"
          for="name"
        >Employee name</label>
        <input
          id="name"
          v-model="employeeName"
          class="add-form__input"
          type="text"
          placeholder="Type employee name 👨🏻‍💻" 
        />
      </div>
      <div class="add-form__input-control">
        <label
          class="add-form__label"
          for="tel-number"
        >Telephone number</label>
        <input
          id="tel-number"
          v-model="employeeTel"
          class="add-form__input"
          type="tel"
          placeholder="Type telephone number ☎️"
        />
      </div>
      <add-employee-select
        v-if="employeeList.length"
        :employee-list="employeeList"
      />
      <div class="add-form__input-control">
        <button
          class="add-form__submit"
          type="submit"
          @click.prevent="onSubmitForm"
        >
          ADD
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import eventBus from '../../js/event_bus.js';
import AddEmployeeSelect from '../AddEmployeeSelect/AddEmployeeSelect.vue';
import uniqid from 'uniqid';

export default {
  name: 'AddEmployeeForm',

  components: {
    AddEmployeeSelect,
  },

  props: ['employeeList'],

  created() {
    eventBus.$on('showAddEmployeeForm', (isShown) => {
      this.isShown = isShown;
    });
    eventBus.$on('sendDirectorID', (directorID) => {
      this.directorID = directorID;
    });
  },

  data() {
    return {
      isShown: false,
      employeeName: '',
      employeeTel: '',
      directorID: null,
    };
  },

  methods: {
    onCloseForm() {
      this.isShown = false;
    },
    onResetForm() {
      this.employeeName = '';
      this.employeeTel = '';
      this.directorID = null;
    },
    addEmployee(employee) {
      this.employeeList.push(employee);
    },
    addSubordinate(id, child) {
      this.employeeList.map((employee) => {
        if (employee.id === id) {
          employee.children.push(child);
        }
      });
    },
    onSubmitForm() {
      if (this.employeeName && this.employeeTel) {
        if (this.directorID === null) {
          this.addEmployee({
            id: uniqid(),
            name: this.employeeName,
            tel: this.employeeTel,
            children: [],
          });
        } else {
          this.addSubordinate(this.directorID, {
            id: uniqid(),
            name: this.employeeName,
            tel: this.employeeTel,
            children: [],
          });
        }
      }
      this.onCloseForm();
      this.onResetForm();
    },
  },
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
}

.add-form__form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  min-height: 450px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
}

.add-form__form {
  overflow: auto;
}

.add-form__input-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.add-form__label {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #038cd5;
}

.vs__selected {
  color: 1px solid rgba(60,60,60,.26);
}

.add-form__input {
  padding: 12px;
  font-size: 16px;
  padding-left: 10px;
  margin-bottom: 10px;
  border: 1px solid rgba(60,60,60,.26);
  font-weight: 400;
  border-radius: 4px;
}

.add-form__submit {
  margin-top: 20px;
  color: #ffffff;
  background-color: #038cd5;
  border: 2px solid #038cd5;
  border-radius: 3px;
  height: 40px;
  font-size: 18px;
}
</style>
