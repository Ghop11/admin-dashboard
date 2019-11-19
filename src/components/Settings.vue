<template>
  <div>
    <!-- Page Heading -->
    <h1>Header Settings</h1>
    <p>Description</p>
    <!-- Page Heading -->
    <v-content>
      <v-card>
        <!--Edit Account Settings-->
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="8">
            <v-icon class="float-right px-3" v-on:click="edit()">mdi-pencil</v-icon>
          </v-col>
        </v-row>


        <!--Name-->
        <v-row>
          <v-col cols="4">
            <v-subheader>Name:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field id="name" v-model="name" :disabled="isDisabled"></v-text-field>
          </v-col>
        </v-row>


        <!--Username-->
        <v-row>
          <v-col cols="4">
            <v-subheader>Username:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field id="username" v-model="username" :disabled="isDisabled"></v-text-field>
          </v-col>
        </v-row>

        <!--Email-->
        <v-row>
          <v-col cols="4">
            <v-subheader>Email:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field id="email" v-model="email" :disabled="isDisabled"></v-text-field>
          </v-col>
        </v-row>

        <!--New Password-->
        <v-row>
          <v-col cols="4">
            <v-subheader>New Password:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field id="password" v-model="password" placeholder="New Password" :disabled="isDisabled"></v-text-field>
          </v-col>
        </v-row>

        <!--Confirm New Password-->
        <v-row>
          <v-col cols="4">
            <v-subheader>Confirm Password:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field id="cPassword" v-model="confirmPassword" placeholder="Confirm Password" :disabled="isDisabled"></v-text-field>
          </v-col>
        </v-row>


        <!--Submit buttons-->
        <v-row>
          <v-col cols="4">
            <v-subheader>
              <v-btn color="primary" v-on:click="saveSettings()" :hidden="isHidden">Save</v-btn>
            </v-subheader>
          </v-col>
          <v-col cols="4">
           <v-btn  v-on:click="edit" :hidden="isHidden">Cancel</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-content>

  </div>
</template>

<script>




    export default {
        name: "Settings.vue",
        data() {
            return {

                username: 'admin',
                email: 'email@email.com',
                password: '',
                confirmPassword: '',
                name: 'First Name',
                isDisabled: true,
                isHidden: true,

            }
        },
        methods: {
            edit: function () {
              // enable all fields:
                if(this.isDisabled){
                    this.isDisabled = false;
                    this.isHidden = false;
                } else {
                    this.isDisabled = true;
                    this.isHidden = true;
                }
            },
            saveSettings: function () {
                console.log(`Saving new account details`);
            }
        },
    }
</script>

<style scoped>

</style>