<template>

	<div id="JobInfo">

		<div v-for="info in jobInfo" :key="info.id">
			<h1 id="infoTitle">{{info.title}}</h1>
			<div v-html="info.body" id="infoBody"></div>
			<p id="infoDate">{{info.date}}</p>
		</div>

	</div>
	
</template>

<script type="text/javascript">

	import gql from 'graphql-tag'

	export default{
		apollo:{
			jobInfo:{
				query : gql `query jobInfo($title: String!){
					jobInfo(title_Icontains: $title){
						id
						title
						body
						date
					}
				}`,

				variables(){
					return{
						title : this.$store.state.title
					}
				}
			}
		},
	};

</script>

<style type="text/css" scoped>

	#infoTitle{
		margin: 25px 0;
		font-weight: bold;
		text-transform: uppercase;
		color: #FF8C00;
	}

	#infoBody{
		text-align: left;
	}

	#infoDate{
		text-align: left;
		margin-top: 30px;
	}

	@media screen and (max-width: 1030px){
		
		#infoTitle {
			font-size: 80px;
		}

	}

	@media screen and (max-width: 500px){
		
		#infoTitle {
			font-size: 40px;
		}

	}

</style>