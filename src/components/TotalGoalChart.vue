

<script>
    // CommitChart.js
    import VueCharts from 'vue-chartjs';
    import {mapState, mapGetters, mapActions} from 'vuex'


    export default {
        extends: VueCharts.Doughnut,
        computed: {
            ...mapGetters(['getReports']),
            ...mapState(['reports']),
            ...mapActions([]),
        },
        mounted () {
            // Overwriting base render method with actual data.

            // TODO: get data from state and put it in an array
            // TODO: Labels =
            let goal = 1000;
            let totalCharged = 0;

            let mockData = this.$store.getters.getReports;

            mockData.forEach((data ) => {
                let orderCost = (parseFloat(data.orderQty) * parseFloat(data.costPerUnit)).toFixed(2);
                totalCharged = parseFloat(totalCharged) + parseFloat(orderCost)
            });


            let remainingGoal =  (goal - totalCharged).toFixed(2);
            remainingGoal = remainingGoal >= 0 ? remainingGoal : 0.00
            let doughnutData = [parseFloat(totalCharged).toFixed(2), parseFloat(remainingGoal).toFixed(2)];
            this.renderChart({
                labels: ['Total Monthly Sales', 'Remaining Monthly Goal'],
                datasets: [
                    {
                        fontColor: 'red',
                        backgroundColor: ['rgba(0,128,0, 0.6)'],
                        borderColor: 'rgba(0,100,0, 1)',
                        data: doughnutData,
                    },
                ]
            }, {
                responsive: true,
                maintainAspectRatio: false,
            })
        }
    }

</script>

