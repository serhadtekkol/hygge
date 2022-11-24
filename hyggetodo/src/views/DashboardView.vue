<template>
<div class="bg-slate-800 h-screen text-white">

<HeaderMenuVue ></HeaderMenuVue>
<TodoListVue></TodoListVue>
</div>


</template>
<script>
import HeaderMenuVue from '../components/HeaderMenu.vue';
import TodoListVue from '../components/TodoList.vue';
export default {


components:{
HeaderMenuVue,
TodoListVue


}


}

</script>