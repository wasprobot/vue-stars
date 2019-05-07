<template>
  <div>
    <md-table @md-selected="selected" v-model="projections">
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
        <md-table-cell md-label="Type">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="Bonus Year">{{ item.bonus_year }}</md-table-cell>
        <md-table-cell md-label="Created">{{ item.created_by }}</md-table-cell>
        <md-table-cell md-label="On">{{ item.created_date }}</md-table-cell>
        <md-table-cell md-label="Modified">{{ item.modified_by }}</md-table-cell>
        <md-table-cell md-label="On">{{ item.modified_date }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "Projections",
  data() {
    return {
      projections: [
        {
          id: 1,
          type: "CAHPS Thresholds",
          bonus_year: 2020,
          created_by: "Alan B",
          created_date: "12/31/2018",
          modified_by: "David S",
          modified_date: "12/31/2018"
        },
        {
          id: 2,
          type: "CAHPS Thresholds",
          bonus_year: 2020,
          created_by: "Alan B",
          created_date: "12/31/2018",
          modified_by: "David S",
          modified_date: "12/31/2018"
        },
        {
          id: 3,
          type: "CAHPS Thresholds",
          bonus_year: 2021,
          created_by: "Alan B",
          created_date: "12/31/2018",
          modified_by: "David S",
          modified_date: "12/31/2018"
        },
        {
          id: 4,
          type: "CAHPS Thresholds",
          bonus_year: 2021,
          created_by: "Rohit W",
          created_date: "03/20/2019",
          modified_by: "David S",
          modified_date: "03/21/2019"
        },
        {
          id: 5,
          type: "CAHPS Thresholds",
          bonus_year: 2021,
          created_by: "Greg C",
          created_date: "04/04/2019",
          modified_by: "",
          modified_date: ""
        }
      ]
    };
  },
  methods: {
    selected(item) {
      this.$router.push({ path: "/details/:" + item.id });
    }
  }
};
</script>