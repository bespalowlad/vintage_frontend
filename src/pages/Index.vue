<template>
  <div class="content">
    <contacts></contacts>
    <our-offices></our-offices>
    <feedback></feedback>
  </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue';
import OurOffices from '@/components/OurOffices.vue';
import Feedback from '@/components/Feedback.vue';

export default {
    name: 'Index',

    components: {
        Contacts,
        OurOffices,
        Feedback,
    },
};
</script>
