<template>
    <div class="JobsViewer" v-for="job in jobs" :key="job.id">
           <h2><router-link class="Jobdetaillink" :to="{name:'JobDetail',params:{id:job.id}}">{{ job.title }}</router-link> 
</h2>
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
    .JobsViewer{
        display: flex;
        justify-content: center;
    }
    .Jobdetaillink{
        cursor: pointer;
        width:300px;
        padding: 5px;
        border-radius: 10px;
        margin: 5px;
        color: #2c3e50;
        text-decoration: none;

    }
    .Jobdetaillink:hover{
        
        color: #eee;
        background: #42b983;
    }
</style>