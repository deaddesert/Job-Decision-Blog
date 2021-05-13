<template>

	<div id="web-footer">
		<img src="@/assets/LogoJob.png">
		<div id="foot-contain">
			<address>Email: daipham1302@gmail.com</address>
			<address>Số Điện Thoại: 0938329815</address>
			<address>Facebook: Đại Phương</address>
			<address>Email: luuthu2222@gmail.com</address>
			<address>Facebook: Lưu Thị Thanh Thư</address>
		</div>
	</div>
	
</template>

<style type="text/css" scoped>

#web-footer{
	margin-top: 150px;
	background-color: gold;
	text-align: left;
	color: black;
	line-height: 1;
}

#foot-contain{
	margin-top: 20px;
}

@media screen and (max-width: 1030px){
	img{
		width: 200px;
	}

	address{
		font-size: 25px;
	}
}

@media screen and (max-width: 840px){
	address{
		font-size: 20px;
	}
}

</style>