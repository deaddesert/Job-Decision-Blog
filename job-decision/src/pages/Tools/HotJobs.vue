<template>

	<div id="hotJobs">
		<h3 class="text-warning">HOT JOBS</h3>
		
		<div class="multiJobs">

			<div class="cardContainer">

					<div class="card">
						<img src="@/assets/data_scientist.jpg" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title text-warning">DATA SCIENTIST</h5>
							<div class="card-text text-warning">Nhóm Ngành: IT</div>
							<br>
							<router-link to="/job/IT/data-scientist" exact target="_blank"><button class="btn" id="read" v-on:click="changeTitle('Data Scientist')" >Read More</button></router-link>
						</div>
					</div>

					<div class="card">
						<img src="@/assets/machine_learning_engineer.jpg" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title text-warning">MACHINE LEARNING</h5>
							<div class="card-text text-warning">Nhóm Ngành: IT</div>
							<br>
							<router-link to="/job/IT/machine-learning" exact target="_blank"><button class="btn" id="read" v-on:click="changeTitle('Machine Learning')" >Read More</button></router-link>
						</div>
					</div>

					<div class="card">
						<img src="@/assets/IOT.jpg" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title text-warning">IOT ENGINEER</h5>
							<div class="card-text text-warning">Nhóm Ngành: Điện-Điện Tử</div>
							<br>
							<router-link to="/job/Điện-Điện-Tử/iot-engineer" exact target="_blank"><button class="btn" id="read" v-on:click="changeTitle('IOT engineer')" >Read More</button></router-link>
						</div>
					</div>
			</div>

	<router-link to="/hotjob" exact class="watchMore btn" target="_blank">Xem Thêm <font-awesome-icon icon="chevron-right"/></router-link>


		</div>
</div>
	
</template>

<script type="text/javascript">

  export default {
  
    methods:{
		changeTitle(jobName){
			this.$store.commit('updateTitle', jobName)
		}
	},
    };
	
</script>

<style type="text/css" scoped>

	#hotJobs{
		margin-top: 75px;
	}

	h3{
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
		margin:10px 80px;
		width: 250px;

	}

	.card:hover{
		border:solid 4px #FF4500;
	}

	.card-title{
		font-weight: bold;
	}
	
	.card-img-top{
		height: 170px;

	}
	
	a.watchMore{
		float: right;
		background-color: #FFD700	;
		color: darkblue;
		box-shadow: 0 0 10px #FFD700	, 0 0 40px #FFD700	, 0 0 80px #FFD700;
		font-weight: bold;
	}

	a.watchMore:hover{
		background-color: #00FFFF;
		color: darkblue;
		box-shadow: 0 0 10px #00FFFF, 0 0 40px #00FFFF, 0 0 80px #00FFFF;
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