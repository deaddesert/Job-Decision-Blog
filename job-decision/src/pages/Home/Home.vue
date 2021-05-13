<template>

	<div id="Home">

	 

     <div id="body">
     	<choice-box></choice-box>
     	<hot-jobs></hot-jobs>
        <university></university>
     </div>

   
		
	</div>
	
</template>

<script type="text/javascript">

import HotJobs from '../Tools/HotJobs.vue';
import University from '../Tools/University.vue';
import ChoiceBoxes from '../Tools/choices.vue';


export default{

	name:'Home',

	components:{
    'hot-jobs' : HotJobs,
    'university': University,
   	'choice-box': ChoiceBoxes,

	},
	


};
	
</script>

<style type="text/css" scoped>



</style>