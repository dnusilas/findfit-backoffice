<template>
  <div class="flex justify-between p-10">
    <div>
      <div class="w-48 rounded-lg overflow-hidden">
        <img
          class="w-full h-full object-cover"
          :src="trainer.profile_image.url"
        />
      </div>
    </div>
    <div class="flex-grow">
      <div class="px-5">
        <div class="flex justify-between">
          <div class="mb-5">
            <div class="mb-4">
              <div class="text-sm">{{ startCase(trainer.role) }}</div>
              <div class="text-5xl leading-10">
                {{ startCase(trainer.display) }}
              </div>
            </div>
            <TrainerDetailList
              label="Gender"
              :value="startCase(trainer.gender)"
            />
            <TrainerDetailList
              label="Date of Birth"
              :value="dateFormat(trainer.birthdate)"
            />
            <TrainerDetailList label="Email" :value="trainer.email" />
            <TrainerDetailList
              label="Phone no"
              :value="phoneFormat(trainer.mobile)"
            />
            <!-- <TrainerDetailList
              label="Education"
              value="Bachelor Degree from Chulalongkorn university"
            /> -->
            <TrainerDetailList
              label="Performance / Type of workout"
              :value="workouts"
            />
            <!-- <TrainerDetailList label="Available course">
              <ul class="inline-flex">
                <li class="bg-orange-400 py-1 px-3 mx-1 text-xs rounded-sm">
                  Pilates 10 Times 4000 THB
                </li>
                <li class="bg-orange-400 py-1 px-3 mx-1 text-xs rounded-sm">
                  Pilates 1 Time 500 THB
                </li>
              </ul>
            </TrainerDetailList> -->
            <!-- <TrainerDetailList label="Certificates">
              <div></div>
            </TrainerDetailList> -->

            <TrainerDetailList label="Location" :value="locations" />

            <TrainerDetailList label="Bank">
              <div class="inline-flex">
                <div>
                  <div>
                    <b class="text-xs">Bank</b>
                    {{ trainer.bank.name }}
                  </div>
                  <div>
                    <b class="text-xs">Account no</b>
                    {{ trainer.bookbank_no }}
                  </div>
                  <div>
                    <b class="text-xs">Account name</b>
                    {{ upperCase(trainer.bookbank_name) }}
                  </div>
                </div>
              </div>
            </TrainerDetailList>
            <TrainerDetailList label="Remark">
              <div>{{ trainer.remark }}</div>
            </TrainerDetailList>
          </div>
          <div class="flex-grow-0">
            <!-- Switch -->
            <div @click.prevent="onRequestChangeStatus">
              <InputSwitch
                v-model="isActived"
                :is-disabled="true"
                checked-label="Actived"
                uncheck-label="Inactive"
              />
            </div>
          </div>
        </div>
        <Btn size="sm" @fnClick="onShowModalNote">Note</Btn>

        <!-- Existing members -->
        <div class="mt-5">
          <h5 class="text-gray-600 mb-3 font-bold">
            Existing Member <small>(No Commision)</small>
          </h5>
          <ExistingMemberTable
            :items="trainer.a_trainee_special"
            @fnAddExistMember="onAddExistMember"
            @fnRemoveExistMember="onRemoveExistMember"
          />
        </div>

        <Modal ref="modalNote" container-classes="w-2/3">
          <TrainerNoteForm
            @fnSubmit="onSubmitNote"
            @fnCancel="onHideModalNote"
          />
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { startCase, upperCase } from 'lodash'

import { dateFormat } from '@/libs/moment'
import { phoneFormat } from '@/libs/numeral'

import TrainerDetailList from '@/components/molecules/trainer/detail/list'
import Btn from '@/components/atoms/btn'
import Modal from '@/components/molecules/modal'
import TrainerNoteForm from '@/components/molecules/form/trainer/note'
import InputSwitch from '@/components/atoms/input/switch'
import ExistingMemberTable from '@/components/molecules/table/existing-member'

export default {
  name: 'TrainerDetailTemplate',

  components: {
    TrainerDetailList,
    Btn,
    Modal,
    TrainerNoteForm,
    InputSwitch,
    ExistingMemberTable,
  },

  data() {
    return {}
  },

  computed: {
    ...mapState('trainer', ['trainer']),

    workouts() {
      const workouts = this.trainer.a_workout.map((item) => item.name)
      return workouts.join(', ')
    },

    locations() {
      const locations = this.trainer.a_location.map((item) => item.name)
      return locations.join(', ')
    },

    isActived() {
      return this.trainer.status === 'active'
    },
  },

  methods: {
    startCase,
    upperCase,
    dateFormat,
    phoneFormat,

    onShowModalNote() {
      this.$refs.modalNote.show()
    },

    onHideModalNote() {
      this.$refs.modalNote.hide()
    },

    onSubmitNote(form) {
      this.$emit('fnAddNote', form)
      this.onHideModalNote()
    },

    async onRequestChangeStatus() {
      const { value } = await this.$swal({
        icon: 'question',
        title: 'Confirm Change',
        showCancelButton: true,
      })

      if (!value) return

      const status = this.trainer.status === 'active' ? 'inactive' : 'active'

      this.$emit('fnChangeStatus', status)
    },

    onAddExistMember(email) {
      this.$emit('fnAddExistMember', email)
    },

    onRemoveExistMember(memberId) {
      this.$emit('fnRemoveExistMember', memberId)
    },
  },
}
</script>
