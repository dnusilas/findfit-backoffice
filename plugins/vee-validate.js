import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import {
  required,
  email,
  min,
  is,
  numeric,
  confirmed,
} from 'vee-validate/dist/rules'

// Add a rule.
extend('secret', {
  validate: (value) => value === 'example',
  message: 'This is not the magic word',
})

// Add the required rule
extend('required', {
  ...required,
  message: '* {_field_} is required',
})

// Add the email rule
extend('email', email)

// Add the min rule
extend('min', min)

// Add the min rule
extend('is', is)

// Add the min rule
extend('numeric', numeric)

extend('confirmed', confirmed)

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
