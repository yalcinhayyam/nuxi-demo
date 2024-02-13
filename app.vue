<template>
  <span v-if="!data?.books">Loading</span>
  <ul v-else>
    <li v-for="book in data?.books">{{ book?.title }}</li>
  </ul>
</template>
<script setup lang="ts">
import { Query } from './src/gql/graphql';


var query = gql`
  query books {
    books {
      title
      author
    }
  }
`;
var { data } = await useAsyncQuery<Query>(query);
</script>
