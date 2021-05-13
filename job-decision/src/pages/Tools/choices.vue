<template>


		<div id="choices">

		<h3 class="text-warning">EXPLORING FOR MORE JOBS</h3>

		<div id="multipleRanks">

			<div id="exam" class="item">
				<img src="@/assets/exam w background.png">
				<p class="text-warning">KHỐI THI</p>
				<select v-model="newGrade" v-on:click="SkipQuery(); ChangeSlug();">
					<option v-for="grade in Grades" >{{grade}}</option>
				</select>
			</div>

			<div id="linhvuc" class="item">
				<img src="@/assets/linhvuc w background.png">
				<p class="text-warning">LĨNH VỰC</p>
				<select v-model="newDomain" v-on:click="SkipQuery(); ChangeSlug();">
					<option v-for="domain in Domains" >{{domain}}</option>
				</select>
			</div>

			<div id="nhomnganh" class="item">
				<img src="@/assets/nhomnganh w background.png">
				<p class="text-warning">NHÓM NGÀNH</p>
				<select v-model="newGroup" v-on:click="SkipQuery(); ChangeSlug();">
					<option v-for="group in GroupOfJobs" >{{group}}</option>
				</select>
			</div>
		</div>

		<div>
			<router-link v-bind:to="{name: 'ShowJobs', params:{ slug: this.$store.state.slug} }"><button type="button" class="btn" id="Search" v-on:click="SearchJobs()">Search</button></router-link>
		</div>

		</div>

	
</template>

<script type="text/javascript">


import { mapFields } from 'vuex-map-fields';
	
	export default {

		data(){
			return {
			}
		},

		computed:{
			Domains(){
				return this.$store.state.choice.domains
			},

			GroupOfJobs(){
				return this.$store.state.choice.groupOfJobs
			},


			Grades(){
				return this.$store.state.choice.grades
			},

			...mapFields([
				'form.newGrade',
				'form.newDomain',
				'form.newGroup'
				]),

			

		},

		methods:{
			SkipQuery(){
				this.$store.commit('trueSkip')
			},

			SearchJobs(){
			this.$store.commit('falseSkip')
		},

			ChangeSlug(){
				this.$store.commit('updateSlug')
			}
		}

	};
	
</script>

<style type="text/css" scoped>

#choices{
	margin-top: 45px;
}

h3{
	font-weight: bold;

}


#multipleRanks{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}

.item{
	margin: 20px 20px;
}

p{
	font-weight: bold;
}

select{
	background: #FF8C00;
	color: black;
	font-weight: bold;
	width: 250px;
	height: 50px;
	border:none;
	font-size: 20px;
	outline: none;
	border-radius: 25px;
}

#Search{
	background: #FF8C00;
	color: black;
	font-weight: bold;
	width: 100px;
	height: 50px;
	border:none;
	font-size: 20px;
	outline: none;
	border-radius: 25px;
	margin-top: 30px;
	margin-bottom: 20px;
}

@media screen and (max-width: 1030px){

	h3{
		font-size: 30px;
	}

	.btn{
		font-size: 25px;
	}

	select{
		width: 300px;
		font-size: 25px;
	}

	
}

@media screen and (max-width: 840px){
	
	select{
		width: 230px;
		font-size: 20px;
	}
}



</style>