<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
      <router-link to="/teams/t2">Go to team 2</router-link>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  props: ['teamId'],
  inject: ['users', 'teams'],
  data() {
    return {
      teamName: null,
      members: [],
    };
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);

    console.log(this.$route.query); // accessing query params
  },
  // can be used as a alternative to watch 
  // but by doing this we again binding this 
  // component to router
  beforeRouteUpdate(to, from, next) {
    console.log('team members beforeRouteUpdate');
    // this.loadTeamMembers(to.params.teamId)
    next();
  },
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find(team => team.id === teamId);
      if (!selectedTeam) return;

      const members = selectedTeam.members;
      const selectedMemebers = [];

      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMemebers.push(selectedUser);
      }
      this.members = selectedMemebers;
      this.teamName = selectedTeam.name;
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>