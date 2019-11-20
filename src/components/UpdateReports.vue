<template>
  <div>
    <!-- Page Heading -->
    <h1>Header Update Reports</h1>
    <p>Description</p>
    <!-- Page Heading -->
    <v-content>
      <v-card>
        <v-card-title>
          Recent Reports
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="reportData" :search="search">

          <v-spacer></v-spacer>
          <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>

        </v-data-table>
      </v-card>

      <!--      Pop Up for Editing items-->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title class="justify-center">Edit</v-card-title>
          <v-card-text class="px-3">
            <v-text-field label="Client Account Number" v-model="editData.clientNumber" disabled></v-text-field>
            <v-text-field label="Order Number" v-model="editData.orderNumber" disabled></v-text-field>
          </v-card-text>
          <v-menu class="px-3" ref="menu"  :close-on-content-click="true" :return-value.sync="editData.date" transition="scale-transition" offset-y max-width="290px" min-width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field class="px-3" v-model="editData.date" label="Date" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="editData.date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(editData.date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-card-text class="px-3">
            <v-text-field label="Order Quantity" v-model="editData.orderQty" :rules="inputNumberQty"> </v-text-field>
          </v-card-text>
          <v-card-text class="px-3">
            <v-text-field label="Cost Per Unit" v-model="editData.costPerUnit" :rules="inputNumberCost"> </v-text-field>
          </v-card-text>
          <v-card-text class="px-3">
            <v-textarea label="Report Info" v-model="editData.report"> </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--      Pop Up for Deleting items-->
      <v-dialog v-model="deleteDialog" max-width="500px">
        <v-card>
          <v-card-title class="justify-center">Delete</v-card-title>
          <v-card-text class="px-3">
            <v-text-field label="Client Account Number" v-model="editData.clientNumber" disabled></v-text-field>
            <v-text-field label="Order Number" v-model="editData.orderNumber" disabled></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="removeItem">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-content>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'


    export default {
        name: "Update.vue",
        data() {
            return {
                dialog: false,
                deleteDialog: false,
                allReports: [],
                search: '',
                editData: {
                    "clientNumber": '',
                    "date" : "",
                    'orderQty': '',
                    'costPerUnit': '',
                    "report": ""
                },
                headers: [
                    {text: 'Client Number', value: 'clientNumber'},
                    {text: 'Order Number', value: 'orderNumber'},
                    {text: 'Date', value: 'date'},
                    {text: 'Order Quantity', value: 'orderQty'  },
                    {text: 'Cost Per Unit', value: 'costPerUnit'},
                    {text: 'Total Cost', value: 'totalCost'},
                    {text:'Report', value: 'report'},
                    { text: 'Actions', value: 'action', sortable: false },
                ],
                inputNumberQty: [
                    v => {
                        if(/^[\d.]+$/.test(v) || v == '' ){
                            return true
                        } else {
                            this.order = this.order.substring(0, this.order.length -1);
                            return 'This field only accept numbers'
                        }
                    }
                ],
                inputNumberCost: [
                    v => {
                        if(/^[\d.]+$/.test(v) || v == ''){
                            return true
                        } else {
                            this.cost = this.cost.substring(0, this.cost.length -1);
                            return 'This field only accept numbers'
                        }
                    }
                ],
            }
        },
        computed: {
            ...mapGetters(['getReports']),
            ...mapState(['reports']),
            ...mapActions(['deleteReport', 'updateExistingReport']),

            reportData(){
                let data = this.$store.getters.getReports;
                data.forEach((row) => {
                    let total = parseFloat(row.orderQty) * parseFloat(row.costPerUnit);
                    row.totalCost = total.toFixed(2);
                })

                return data;
            },
        },
        methods: {
            deleteItem: function (item) {
                this.deleteDialog = true;
                this.editData = item;
                console.log(`delete This.editData: ${JSON.stringify(this.editData, null, 3)}`);
            },
            removeItem: function(){
                // Remove item from array -->
                // Delete item from db

                this.$store.dispatch('deleteReport', this.editData);
                this.clearEditData();

            },
            editItem: function (item) {
                this.dialog = true;
                this.editData = item;
                console.log(`editItem this.editData: ${JSON.stringify(this.editData, null, 3)}`);
            },
            save: function () {
                // update item from array - client side
                // update item in db
                this.$store.dispatch('updateExistingReport', this.editData);
                this.clearEditData()
            },
            clearEditData: function () {
                this.editData = {
                    "clientNumber": '',
                    "date" : "",
                    'orderNumber': '',
                    'orderQty': '',
                    'costPerUnit': '',
                    "report": ""
                };
                this.dialog = false;
                this.deleteDialog = false;
            },
            close () {
                this.clearEditData()
            },
        },
    }
</script>

<style scoped>

</style>