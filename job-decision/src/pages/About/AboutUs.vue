<template>
	
	<div id="about">
		<div class="media p-3" id="SuDon">
			<img src="@/assets/su_don.jpg" class="mr-3 mt-3 rounded-circle" style="width:80px;">
			<div class="media-body">
				<h4 class="text-warning">Thanh Thư - Web Designer</h4>
				<p>Công việc: Sinh viên tại Đại Học RMIT-TP.HCM</p>
				<p>Chuyên Ngành: Thiết Kế Đồ Họa</p>
				<p>Email: luuthu2222@gmail.com</p>
			</div>
		</div>

		<div class="media p-3" id="PhuongDai">
			<img src="@/assets/mine.jpg" class="mr-3 mt-3 rounded-circle" style="width:80px;">
			<div class="media-body">
				<h4 class="text-warning">Phương Đại - Web Developer</h4>
				<p>Công việc: Sinh viên tại Đại Học Bách Khoa-TP.HCM</p>
				<p>Chuyên Ngành: Điện-Điện Tử</p>
				<p>Email: daipham1302@gmail.com</p>
			</div>
		</div>

	</div>

</template>

<style type="text/css" scoped>
	#about{
		margin:40px 25px;
	}

	h4{
		font-weight: bold;
		text-align: left; 
	}

	p{
		font-weight: bold;
		text-align: left;
		color: white;
	}

	@media screen and (max-width: 1030px){
		
		h4{
			font-size: 30px;
		}

		p{
			font-size: 25px;
		}
	}

	@media screen and (max-width: 840px){
		
		#about{
			margin-left: 0;
		}

		h4{
			font-size: 25px;
		}

		p{
			font-size: 20px;
		}
	}

	@media screen and (max-width: 600px){

		h4{
			font-size: 22px;
		}

		p{
			font-size: 18px;
		}
	}
</style>