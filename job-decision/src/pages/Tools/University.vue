<template>

	<div id="universities">

		<h3 class="text-warning">UNIVERSITIES</h3>
		
		<div class="cardContainer">

					<div class="card">
						<img src="@/assets/bk-hcm.jpeg" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title text-warning">ĐẠI HỌC BÁCH KHOA-TP.HỒ CHÍ MINH</h5>
							<br>
							<router-link to="/university/HCMUT" exact id="read" class="btn" target="_blank">Read More</router-link>
						</div>
					</div>

					<div class="card">
						<img src="@/assets/RMIT.jpg" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title text-warning">ĐẠI HỌC RMIT TP.HỒ CHÍ MINH</h5>
							<br>
							<router-link to="/university/RMIT" exact id="read" class="btn" target="_blank">Read More</router-link>
						</div>
					</div>

					<div class="card">
						<img src="@/assets/ul.jpg" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title text-warning">ĐẠI HỌC LUẬT TP.HỒ CHÍ MINH</h5>
							<br>
							<router-link to="/university/UL" exact id="read" class="btn" target="_blank">Read More</router-link>
						</div>
					</div>
			</div>

			<router-link to="/university" exact class="watchMore btn" target="_blank">Xem Thêm <font-awesome-icon icon="chevron-right"/></router-link>

</div>
	
</template>

<script type="text/javascript">

  export default {
    

    data(){
    	return{}
    }
    };
	
</script>

<style type="text/css" scoped>


#universities{
		margin-top: 100px;
	}

	h3{
		font-weight: bold;
		text-align: center;

	}

	.cardContainer{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
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
			margin: 10px 35px;
		}
		.card-title{
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
			margin: 10px 25px;
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