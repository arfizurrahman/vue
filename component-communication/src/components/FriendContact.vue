<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorit)' : '' }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorit"> Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete-contact', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ['name','phoneNumber','emailAddress'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validtor: function(value){
      //   return value === '1' || value === '0';
      // }
    }
  },
  // emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': function (id) {
      if (id) {
        return true;
      } else {
        console.warn('Id is missing!');
        return false;
      }
    },
    'delete-contact': function (id) {
      if (id) {
        return true;
      } else {
        console.warn('Id is missing!');
        return false;
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorit() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    }
  }
};
</script>