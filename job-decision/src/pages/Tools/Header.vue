<template>
	
	<div id="web-header" v-on:click="show=false">
	
		<div id="head-container">
			<div id="logo">
				<router-link to="/" exact><img src="@/assets/LogoJob.png"></router-link>
			</div>

			<div id="nav-bar">
				<ul v-bind:class="{activate:activate}">
					<li v-on:click="activate= !activate"><router-link to="/" exact >Home</router-link></li>
					<li v-on:click="activate= !activate"><router-link to="/about" exact>About</router-link></li>
				</ul>
				<span class="menuIcon" v-on:click="activate =!activate" v-if="!activate"><font-awesome-icon icon="bars"/></span>
				<span class="closeIcon" v-on:click="activate= !activate" v-if="activate"><font-awesome-icon icon="times"/></span>
			</div>
			
		</div>

		<div id="searchJob">
				<input type="text" v-model="search" v-on:keyup="ShowList"   placeholder="Name of Job">
				<font-awesome-icon icon="search" />
				
				 <div class="cardContainer" v-if="show" >
                    <router-link class="card"   v-bind:to="{name: 'JobInfo', params:{field: job.field.trim().replace(/\s+/g, '-'),  link: job.link}}" exact target="_blank" v-for="job in filterJobs" :key="job.id">
                         <div class="card-body" v-on:click="changeTitle(job.name)">
                             <img v-bind:src="job.image">
					       <div class="card-title">{{job.name}}</div>
					        <div class="card-text">Nhóm Ngành: {{job.field}}</div>
					   </div>
			        </router-link>
                </div>
		</div>

			<img src="@/assets/thang nguoi.png" id="image">

		
	</div>
	
</template>

<script type="text/javascript">


import gql from 'graphql-tag'

    
	export default{
		data(){
			return {
				activate:false,
                show:false,
                search: '',
			}
		},
        
        methods:{
            
            ShowList: function(){
                if (this.search == ''){
                    
                    this.show = false;
                }
                else{
                    
                    this.show = true;
                }
                
                return this.show
            },

            changeTitle(jobName){
			this.$store.commit('updateTitle', jobName)
		}
            
            
            },
        
         apollo:{
        // Query
        allJobs:{
            query: gql `query {
                            allJobs{
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
    },

    computed:{
       // Custom Search Filter
        filterJobs: function(){
            return this.allJobs.filter((job) =>{
                return job.name.toLowerCase().match(this.search);
            })
        }
    }

	};
</script>

<style type="text/css" scoped>

#web-header{
	background-image: url('~@/assets/background.png');
	background-size: 100%;
	background-repeat: no-repeat;
	margin-left: 0;
}

#head-container{
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}

ul{
	list-style-type: none;

}

li{
	display: inline-block;
	
}

#nav-bar li{
	margin:0 15px;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: underline;
}

a{
	color: black;
}

input{
	border-radius: 25px;
	width: 500px;
	text-align: center;
}

#image{
	width: 500px;
	margin-top: 30px;
	padding-top: 10px;
   
}

.menuIcon{
	display: none;
}

.closeIcon{
	display: none;
}

    .cardContainer{
        width: 500px;
        margin-left:  415px;
        position: absolute;
        z-index: 1;
        overflow-y:auto;
        height: 100%;
    }
    
    .card{
        height: 150px;
        border: solid 1px;
    }
    
    .card:hover{
        background-color: black;
        border: solid 1px yellow;
    }
    .cardContainer img{
        width: 150px;
        float: left;
        height: 100%
    }
    .card-title{
		font-weight: bold;
		text-transform: uppercase;
        font-size: 18px;
        color: black
	}
    
    .card-text{
        font-weight: bold;
        color: black
    }
    
    .card:hover .card-title{
        color: yellowgreen
    }
    
    .card:hover .card-text{
        color: yellow
    }
    
 

@media screen and (max-width: 1030px){
	#image{
		width: 300px;
	}

	li{
		font-size: 20px;
	}

	input{
		font-size: 25px;
		font-weight: bold;
	}
    
    .cardContainer{
        margin-left: 250px;
    }
    
    .card-title{
        font-size: 22px;
    }
    
    .card-text{
        font-size: 20px;
    }
    
}


@media screen and (max-width: 840px){
	#image{
		width: 250px;
	}

	li{
		font-size: 17px;
	}
	#nav-bar li{
		margin:0 8px;
	}
    
    .cardContainer{
        margin-left: 125px;
    }

}

@media screen and (max-width: 700px){
	input{
		width: 300px;
	}

	#logo{
		margin-bottom: 10px;
	}


	#image{
		padding-top: 0px;
		margin: 0;
		width:150px;
	}

	#nav-bar ul{
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: DarkOrange;
		z-index: 100000;
		padding: 10px 20px;
	}

	#nav-bar ul.activate{
		display: initial;
	}

	#nav-bar ul li{
		padding:23px;
		text-align: center;
	}

	#nav-bar ul li a{
		font-size: 32px !important;
	}

	.menuIcon{
		display: initial;
		font-size: 35px;
		position: absolute;
		right: 20px;
		top: 0;
		cursor: pointer;
		z-index: 100000;
	}

	.closeIcon{
		display: initial;
		font-size: 40px;
		position: absolute;
		right: 20px;
		top: 0;
		cursor: pointer;
		z-index: 100000;
	}
    
}

@media screen and (max-width: 500px){
	input{
		width: 200px;
	}

	#image{
		width: 120px;
	}
    
    .cardContainer{
        margin-left: 0px;
        width: 350px;
    }

    .card-title{
        font-size: 20px;
    }
    
    .card-text{
        font-size: 18px;
    }
    
}
    
    @media screen and (max-width:320px){
        
        .cardContainer{
            margin-left: 0px;
            width: 300px;
    }
         .card-title{
            font-size: 15px;
        }
        
        .card-text{
            font-size: 15px;
    }
    } 

</style>