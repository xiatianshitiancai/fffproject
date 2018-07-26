<template>
 <div>
   <navheader></navheader>
   <maincontent></maincontent>
   <footers></footers>
 </div>
</template>

<script>
import navheader from './navheader'
import maincontent from './maincontent'
import footers from './footers'
 export default {
   data () {
     return {

     }
   },
   components: {
     navheader,
     maincontent,
     footers
   }
 }
</script>

<style>


</style>
