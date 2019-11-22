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
            <v-icon class="float-right px-3" v-on:click="exitSetting()">mdi-pencil</v-icon>
          </v-col>
        </v-row>


        <!--Name-->
        <v-row>
          <v-col cols="4">
            <v-subheader>Name:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field id="name" v-model="userData.name" :disabled="isDisabled"></v-text-field>
          </v-col>
        </v-row>


        <!--Username-->
        <v-row>
          <v-col cols="4">
            <v-subheader>Username:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field id="username" v-model="userData.username" :disabled="isDisabled"></v-text-field>
          </v-col>
        </v-row>

        <!--Email-->
        <v-row>
          <v-col cols="4">
            <v-subheader>Email:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field id="email" v-model="userData.email" :disabled="isDisabled"></v-text-field>
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
           <v-btn  v-on:click="exitSetting" :hidden="isHidden">Cancel</v-btn>
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
                password: '',
                confirmPassword: '',
                isDisabled: true,
                isHidden: true,
                userData: Object.assign({}, this.$store.getters.getUserInfo),
                defaultUserData: Object.assign({}, this.$store.getters.getUserInfo),
            }
        },
        methods: {
            mode: function () {
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
                // TODO: need toupdate store with new data
                console.log(`Saving new account details`);
                // update profile

                this.mode();
            },
            exitSetting: function () {
                // TODO: need toreset values
                this.userData = this.defaultUserData;
                this.mode();
            }
        },
    }
</script>

<style scoped>

</style>