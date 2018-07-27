<template>
 <div>
   <navheader></navheader>
   <maincontent></maincontent>
   <footers></footers>
   <backtop></backtop>
 </div>
</template>

<script>
import navheader from './navheader'
import maincontent from './maincontent'
import footers from './footers'
import backtop from './backtop'
 export default {
   data () {
     return {

     }
   },
   components: {
     navheader,
     maincontent,
     footers,
     backtop
   }
 }
</script>

<style>


</style>
