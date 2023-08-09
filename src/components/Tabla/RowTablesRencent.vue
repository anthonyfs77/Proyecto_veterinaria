<template>
    <div class="ctn">
        <div class="column">
            <div class="name">
                <p>{{motivo}}</p>
            </div>
            <div class="cant">
                <p>{{fecha}}</p>
            </div>
          <div id="btn" @click="GoCita">
          </div>
        </div>
    </div>
</template>


<script setup>
import {defineProps} from 'vue'
import {useRouter} from 'vue-router'

defineProps({
    motivo:{type:String},
    fecha:{type:String},
})
const router = useRouter()
const GoCita = () =>{
  router.push('/citasTotales');
}
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
    text-align: center;
}
.column{
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1.4fr 1.4fr 0.2fr;
  gap: 0px 0px;
  border-bottom: 1px solid rgba(132, 139, 200, 0.18);
}

#btn{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #868686;
  cursor: pointer;
}

</style>