<template>
    <div v-for="job in jobs" :key="job.id">
           <h2> {{ job.title }}</h2>
    </div>
</template>

<script>
export default {
    name:'JobsView',
    components:{
        
    },
    data(){
            return{
                jobs:[
                    {title:"Frontend Developer",id:"1",detail:"Lorem20"},
                    {title:"Backend Developer",id:"2",detail:"Lorem20"},
                    {title:"DevOps Developer",id:"3",detail:"Lorem20"},
                    {title:"Wordpress Developer",id:"4",detail:"Lorem20"}
                ]
            }
        }
}
</script>

<style>
    h2{
        cursor: pointer;
    }
</style>