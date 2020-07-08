<template>
  <section
    class="add-form"
    v-if="isShown">
    <h2 class="visually-hidden">Add employee form</h2>
    <div class="overlay" @click="onCloseForm"></div>
    <form class="add-form__form" v-if="isShown">
      <div class="add-form__input-control">
        <label
          class="add-form__label"
          for="name">Имя сотрудника</label>
        <input
          class="add-form__input"
          id="name"
          type="text"
          placeholder="Введите имя" 
          v-model="employeeName">
      </div>
      <div class="add-form__input-control">
        <label
          class="add-form__label"
          for="name">Номер телефона</label>
        <input
          class="add-form__input"
          type="tel"
          placeholder="Введите номер телефона"
          v-model="employeeTel">
      </div>
      <div class="add-form__input-control">
        <button
          type="submit"
          class="add-form__submit"
          @click.prevent="onSubmitForm">Добавить</button>
      </div>
    </form>
  </section>
</template>

<script>
import eventBus from '../../js/event_bus.js';

export default {
  name: 'AddEmployeeForm',

  created() {
    eventBus.$on('showAddEmployeeForm', (isShown) => {
      this.isShown = isShown;
    });
  },

  data() {
    return {
      isShown: false,
      employeeName: '',
      employeeTel: '',
    };
  },

  methods: {
    onCloseForm() {
      this.isShown = false;
    },
    onResetForm() {
      this.employeeName = '';
      this.employeeTel = '';
    },
    onSubmitForm() {
      if (this.employeeName && this.employeeTel) {
        eventBus.$emit('updatedEmployeeList', {
          name: this.employeeName,
          tel: this.employeeTel,
        });
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
  height: 300px;
  margin: 0 auto;
  padding: 20px;
  transform: translate(0, -50%);
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
}

.add-form__form {
  max-height: 30%;
  overflow: auto;
}

.add-form__input-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.add-form__label {
  margin-bottom: 10px;
  font-weight: bold;
}

.add-form__input {
  padding: 5px 0;
  padding-left: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #038cd5;
}

.add-form__submit {
  color: #ffffff;
  background-color: #038cd5;
  border: 2px solid #038cd5;
  border-radius: 3px;
  height: 40px;
}
</style>
