<template>
  <Dialog v-model:visible="visible" modal header="Room Form" :style="{ width: '400px' }">
    <form @submit.prevent="$emit('save')">
      <div class="p-fluid">
        <div class="field mb-3">
          <label>Hotel Id</label>
          <InputText v-model="room.hotelId" required />
        </div>
        <div class="field mb-3">
          <label>Room Number</label>
          <InputText v-model="room.number" required />
        </div>
        <div class="field mb-3">
          <label>Type</label>
          <InputText v-model="room.type" required />
        </div>
        <div class="field mb-3">
          <label>Status</label>
          <Dropdown v-model="room.status" :options="statusOptions" placeholder="Select status" />
        </div>
        <div class="field mb-3">
          <label>Price</label>
          <InputNumber v-model="room.price" mode="currency" currency="USD" locale="en-US" />
        </div>
        <div class="field mb-3">
          <label>Floor</label>
          <InputNumber v-model="room.floor" />
        </div>
      </div>

      <div class="flex justify-content-end gap-2 mt-4">
        <Button label="Cancel" class="p-button-text" @click="$emit('cancel')" />
        <Button label="Save" type="submit" />
      </div>
    </form>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  room: {
    type: Object,
    required: true
  },
  editingId: {
    type: [String, Number, null],
    default: null
  }
})

const emit = defineEmits(['update:visible', 'save', 'cancel'])

const visible = ref(props.visible)
const statusOptions = ref(['Available', 'Occupied', 'Cleaning', 'Maintenance'])
</script>