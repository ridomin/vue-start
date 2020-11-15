<!-- exampleFile.vue -->
<template>
  <v-app>
  <!-- Since Vuetify 2.3.10 "v-content" is named "v-main"  -->
    <v-main>
      <v-container fluid>
        <v-form>
          <v-form-base :model="myModel" :schema="mySchema" @input="handleInput"/>
        </v-form>
      </v-container>   
    </v-main>
  </v-app>
</template>
<script>
import VFormBase from 'vuetify-form-base'  
export default {	
  components:{ VFormBase },
  data () {
    return {
      myModel: {
        name: 'Jumo',
        password: '123456',
      },   
      mySchema: {
        name: { type: 'text', label: 'Name' },
        password: { type: 'password', label: 'Password' },
      }
    }
  },
  methods:{
    handleInput(val){
      console.log(val) 
    }
  }
}
</script>