<template>
  <form @submit.prevent="onSubmit">
    <div>
      <div class="mb-5">
        <InputTextarea
          v-model="form.note"
          label="Note"
          placeholder="Please add trainer note"
          :rows="5"
        />
      </div>
      <div class="flex justify-end">
        <Btn variant="link" @fnClick="onCancel">Cancel</Btn>
        <Btn type="submit" @fnClick="onSubmit">Submit</Btn>
      </div>
    </div>
  </form>
</template>

<script>
import InputTextarea from '@/components/atoms/input/textarea'
import Btn from '@/components/atoms/btn'

export default {
  name: 'TrainerNoteForm',

  components: {
    InputTextarea,
    Btn,
  },

  data() {
    return {
      form: {
        note: '',
      },
    }
  },

  methods: {
    onCancel() {
      this.$emit('fnCancel')
    },

    onSubmit() {
      this.$emit('fnSubmit', this.form)
    },
  },
}
</script>
