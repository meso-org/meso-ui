<template>
	<v-container>
		<facility-card></facility-card>    
    <job-search-bar></job-search-bar>
    <job-thumbnail
      v-for="result in results"
      :key="result.title"
      :id="result.id"
      :position="result.position"
      :locationName="result.locationName"
      :startTime="result.startTime"
      :endTime="result.endTime"
      :date="result.date"
      router :to="result.link"
      />
	</v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import FacilityCard from './../../components/FacilityCard/FacilityCard.vue';
import JobSearchBar from './../../components/global/jobSearchBar/JobSearchBar.vue';
import JobThumbnail from './../../components/global/jobThumbnail/JobThumbnail.vue';
export default Vue.extend({
  data: () => ({
    results: [
      {
        id: 1,
        position: 'Respiratory Therapist',
        locationName: 'West Hills Hospital',
        startTime: '10:00AM',
        endTime: '2:00PM',
        date: '4/20/2020',
        link: 'position',
        // link: {name: 'Position'}
      },
      {
        id: 2,
        position: 'Respiratory Therapist',
        locationName: 'West Hills Hospital',
        startTime: '11:00PM',
        endTime: '11:00AM',
        date: '5/23/2020',
      },
      {
        id: 3,
        position: 'Respiratory Therapist',
        locationName: 'West Hills Hospital',
        startTime: '11:00PM',
        endTime: '11:00AM',
        date: '5/25/2020',
      },
    ],

}),
  components: {
    FacilityCard,
    JobSearchBar,
    JobThumbnail,
  },
});
</script>

<style lang="scss">
@import "./_Facility.scss";
</style>