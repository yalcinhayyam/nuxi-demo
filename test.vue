<!-- <template>
  <div>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script setup lang="ts">
      console.log("sxs");

</script> 
<script lang="ts">

export default {
  setup() {
    if (process.client) {
      console.log("hello world");
    }
    const count = ref(0);

    // expose to template and other options API hooks
    return {
      count,
    };
  },
};
</script> -->

<template>
  <ul>
    <li v-for="book in data?.books">{{ book.title }}</li>
  </ul>
  <!-- <p>There are {{ data?.books[0].title || 0 }} ships.</p> -->
</template>
<script lang="ts" setup>
// const { clients, getToken, onLogin, onLogout } = useApollo()
const query = gql`
  query books {
    books {
      title
      author
    }
  }
`;
var data = ref<Query>({ books: [] });
// const variables = { limit: 5 };
if (process.client) {
  const result = await useAsyncQuery<Query>(query /*variables*/);
  data = result.data
  console.log(data.value);
}
// console.log(data.value)
interface Query {
  books: IBook[]
}

interface IBook {
  title: string;
  author: string;
}
</script>


