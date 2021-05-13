<template>

	<div id="HotJobs">

		<h2 class="text-warning">List of Hot Jobs</h2>

		<div class="cardContainer" >

			<div class="card" v-for="job in allJobs" :key="job.id">
				<img v-bind:src="job.image" class="card-img-top">
				<div class="card-body">
					<div class="card-title text-warning">{{job.name}}</div>
					<div class="card-text text-warning">Nhóm Ngành: {{job.field}}</div>
					<br>
					<router-link v-bind:to="{name: 'JobInfo', params:{field: job.field.trim().replace(/\s+/g, '-'),  link: job.link}}" exact target="_blank"><button class="btn" id="read" v-on:click="changeTitle(job.name)" >Read More</button></router-link>
				</div>
			</div>

		</div>
	
	</div>
	
</template>

<script type="text/javascript">

import gql from 'graphql-tag'

export default{
	methods:{
		changeTitle(jobName){
			this.$store.commit('updateTitle', jobName)
		}
	},

	apollo:{
		// Query
		allJobs:{
			query: gql `query {
							allJobs(hot: true){
								id
								name
								subjects
								domain
								field
								image
								link
					}
			}`
		}
	}
	
	
	
};

</script>

<style type="text/css" scoped>

	#HotJobs{
		margin-top: 75px;
	}

	h2{
		font-weight: bold;

	}

	.cardContainer{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding-bottom: 50px;
	}
	
	.card{
		border: solid 4px white ;
		border-radius: 10px;
		background-color: black;
		margin:20px 80px;
		width: 250px;
		}

	.card:hover{
		border:solid 4px #FF4500;
	}

	.card-img-top{
		height: 170px;

	}
	.card-title{
		font-weight: bold;
		text-transform: uppercase;
	}

	#read{
		background-color: 	#FF7F50	;
		color: darkblue;
		font-weight: bold;
		box-shadow: 0 0 10px 	#FF7F50	, 0 0 40px 	#FF7F50	, 0 0 80px 	#FF7F50	;
	}

	#read:hover{
		background-color: #00FF7F;
		box-shadow: 0 0 10px #00FF7F, 0 0 40px #00FF7F, 0 0 80px #00FF7F;

	}

	@media screen and (max-width: 1030px){
		.card{
			margin: 10px 32px;
		}

		.card-title{
			font-size: 25px;
		}

		.card-text{
			font-size: 25px;
		}

		#read{
			font-size: 25px;
			width: 170px;
		}

		.watchMore{
			font-size: 30px;
			width: 220px;
		}
	}

	@media screen and (max-width: 840px){
		.card{
			margin: 10px 30px;
		}
		.card-text{
			font-size: 20px;
		}

		#read{
			font-size: 23px;
			width: 150px;
		}

		.watchMore{
			font-size: 25px;
			width: 200px;
		}
	}

</style>