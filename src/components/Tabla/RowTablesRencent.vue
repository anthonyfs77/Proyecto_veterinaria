<template>
    <div class="ctn">
        <div class="column">
            <div class="name">
                <p>{{nomClient}}</p>
            </div>
            <div class="cant">
                <p>{{metodo}}</p>
            </div>
            <div class="pice">
                <p>{{monto}} <span>$</span></p>
            </div>
            <div class="tot">
                <p>{{date}}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import {defineProps} from 'vue'

defineProps({
    nomClient:{type:String}, 
    metodo:{type:String}, 
    monto:{type:Number}, 
    date:{type:String}    
})

</script>

<style scoped>

*{
    font-family: 'Comfortaa', cursive;
    margin: 0;
    padding: 0;
    outline: 0;
    appearance: none;
    border: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    color: #677483;

}

.ctn{
    padding-top: 10px;
}
p{

    width: 240px;
    text-align: center;
}

.column{
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
}
</style>