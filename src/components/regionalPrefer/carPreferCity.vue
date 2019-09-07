<template>
    <div>
      <table class="table table-bordered table-striped text-center">
        <thead>
        <tr v-for ="(user,index) in title">
          <th>序号</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for ="(user,index) in users">
          <td>{{index+1}}</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="text"  id="name" v-model="user.name"/></td>
          <td><input type="text" id="age"v-model="user.age"/></td>
          <td><input type="text" id="school"v-model="user.school"/></td>
          <td><button @click="insert">insert</button></td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  export default {
    name: "carPreferCity"
  }
</script>

<style scoped>

</style>
