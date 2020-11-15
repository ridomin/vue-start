// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify, {
  VRow,
  VCol,
  VTextField,
  VTooltip,
  VCheckbox,
  VSelect
} from 'vuetify/lib'
import { Ripple, Intersect, Touch, Resize } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: { VRow, VTooltip, VCol, VTextField, VCheckbox, VSelect },
  directives: { Ripple, Intersect, Touch, Resize }
})

export default new Vuetify({})
