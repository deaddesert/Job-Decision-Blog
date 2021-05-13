import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate'



import {getField, updateField} from 'vuex-map-fields'

Vue.use(Vuex);

export const store = new Vuex.Store({

	strict: true,
	

	state:{
				choice:{
					
					domains:[
						'Khoa Học Tự Nhiên',
						'Khoa Học Xã Hội',
						'Công Nghệ-Kĩ Thuật',
						'Kinh Tế',
						'Nghệ Thuật'
					],

					groupOfJobs:[
						'Toán Học',
						'Vật Lý',
						'Hóa-Sinh',
						'Thiên Văn',
						'Địa Lý',
						'Y Học',
						'Kinh Tế',
						'Marketing',
						'Quản Trị-Kinh Doanh',
						'Lịch Sử',
						'Luật Pháp',
						'Ngôn Ngữ Học',
						'Nhân Học',
						'Văn Hóa Học',
						'Tâm Lý Học',
						'Triết Học',
						'Báo Chí-Truyền Thông',
						'Xây Dựng',
						'Điện-Điện Tử',
						'IT',
						'Cơ Khí',
						'Địa Chất và Dầu Khí',
						'Kĩ Thuật Giao Thông',
						'Môi Trường',
						'Vật Liệu',
						'Văn Học',
						'Giáo Dục',
						'Thiết Kế'
					],

					grades:[
						'Khối A(Toán,Lý,Hóa)',
						'Khối A1(Toán,Lý,Anh)',
						'Khối A2(Toán,Lý,Sinh)',
						'Khối B(Toán,Hóa,Sinh)',
						'Khối B3(Toán,Sinh,Văn)',
						'Khối C(Văn,Sử,Địa)',
						'Khối C1(Văn,Toán,Lý)',
						'Khối C2(Văn,Toán,Hóa)',
						'Khối C3(Văn,Toán,Sử)',
						'Khối C4(Văn,Toán,Địa)',
						'Khối C14(Toán,Văn,GDCD)',
						'Khối D1(Toán,Văn,Anh)',
						'Khối D2(Toán,Văn,Nga)',
						'Khối D3(Toán,Văn,Pháp)',
						'Khối D4(Toán,Văn,Trung)',
						'Khối D5(Toán,Văn,Đức)',
						'Khối D6(Toán,Văn,Nhật)',
						'Khối D7(Toán,Hóa,Anh)',
						'Khối D8(Toán,Sinh,Anh)',
						'Khối D9(Toán,Sử,Anh)',
						'Khối D10(Toán,Địa,Anh)',
						'Khối D14(Văn,Sử,Anh)',
						'Khối D15(Văn,Địa,Anh)',
						'Khối D66(Văn,GDCD,Anh)',
						'Khối H(Văn,Vẽ,Vẽ)',
						'Khối H1(Toán,Văn,Vẽ)',
						'Khối H2 (Toán,Vẽ hình họa mỹ thuật,Vẽ trang trí màu)',
						'Khối H4(Toán,Anh,Vẽ)',
						'Khối H6(Văn,Anh,Vẽ)',
						'Khối H8(Văn,Sử,Vẽ)',
						'Khối K1(Toán,Anh,Tin)',
						'Khối M(Văn,Toán,Đọc Diễn Cảm,Hát)',
						'Khối V(Toán,Lý,Vẽ Hình Họa Mĩ Thuật)',
						'Khối V1(Toán,Văn,Vẽ Hình Họa Mĩ Thuật)',
						'Khối T(Toán,Sinh,Năng Khiếu Thể Dục Thể Thao)',
						'Khối T2(Văn,Sinh,Năng Khiếu Thể Dục Thể Thao)'
				]},

				form:{
					newGrade: '',
					newDomain: '',
					newGroup: ''
				},

				skipQuery: true,

				slug: '',

				title: ''
	},

	getters:{
		getField,
	},

	mutations:{
		updateField,

		trueSkip: state =>{
			 state.skipQuery=true
			
		},

		falseSkip: state =>{
			state.skipQuery = false
			
		},

		updateSlug: state =>{
			var x = '';
			var y
			for (y in state.form){
				x += state.form[y] + ' '
			}
			state.slug = x.trim().replace(/\s+/g, '-')
			return state.slug
		},

		updateTitle: (state, newTitle) =>{
			state.title = newTitle
		}

	},

	 plugins: [createPersistedState()], 
	 // this line will remian variables in state{} unchanged when we reload the page or open in the new Tab
});