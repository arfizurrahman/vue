<template>
    <div>
        <section v-if="selectedCoach">
            <base-card>
                <h2>{{ fullName }}</h2>
                <h3>${{ selectedCoach.hourlyRate }}/hour</h3>
            </base-card>
        </section>
        <section v-if="selectedCoach">
            <base-card>
                <header>
                    <h2>Interested? Reach out now!</h2>
                    <base-button link :to="contactLink">Contact</base-button>
                </header>
                <router-view></router-view>
            </base-card>
        </section>
        <section v-if="selectedCoach">
            <base-card>
                <base-badge v-for="area in selectedCoach.areas" :key="area" :type="area" :title="area"></base-badge>
                <p>{{ selectedCoach.description }}</p>
            </base-card>
        </section>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        }
    },
    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        contactLink() {
            return this.$route.path + '/contact';
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(c => c.id === this.id);
    }
}
</script>