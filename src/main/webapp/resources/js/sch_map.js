
let map;
let service;
let prevInfoWindow;
let date = new Date();
let dayValue

$(function() {
	datepicker();

	initMap();
	
	
	
	$.ajax("schMap_update_item",{
		method: "GET",
		contentType: "application/json",
		dataType: "json",
		success : result => {
			console.log(result)
		}
	})
	
	//일차별 버튼 및 버튼 클릭시 일차별 리스트 생성 - 시작
	$(`${schMap_root}`).on("click",'.day',function(){
		
			var index = $('.day').index(this); // 같은 클래스중 어느 클래스가 선택됬는지 확인하는 코드
			
			
			$('.day').removeClass('day_select');
			
			if(!dayValue){
				$(`.loc_daylist1`).addClass('day_loclist_none')

				$('.day').eq(index).addClass('day_select'); // 일치하는 인덱스 값이 오면 클래스 추가
				day_select(index);
			}
			
			if(dayValue){
				$(`.loc_daylist${dayValue}`).addClass('day_loclist_none')

				$('.day').eq(index).addClass('day_select'); // 일치하는 인덱스 값이 오면 클래스 추가
				day_select(index);
			}
			
			
		
		

	})
	//일차별 버튼 및 버튼 클릭시 일차별 리스트 생성 - 시작
	
	// 일정등록 - 시작
	$('.sch_map_submit').on('click',function(){
		
		const form = document.getElementById('scheduel')
		
		
		
		let dayArray = []
		
		$("input[name='day']").each(function(i){
		
		let placeName = []
		
		$('.place_name').each(function(i){
				let name =	$('.place_name').eq(i).text();
				
				placeName[i]= name
			})
		
		
		console.log(placeName[i])
		
		let image = []
			$('.place_image').each(function(i){
				
				let img = $('.place_image').eq(i).attr('src')
				
				image[i] = img
			})
		
		const day_item = {
			day : $(this).val(),
			name : placeName[i],
			image: image[i]
		}
		
			console.log(day_item)
			dayArray.push(day_item)

		})
			
		

		
		const item={
			codeCity : form.codeCity.value,
			title : form.title.value,
			sdate : form.sdate.value,
			adate : form.adate.value,
			day: dayArray ,
			
		}


		
		$.ajax(addSch,{
			method : "POST",
			contentType: "application/json",
			data : JSON.stringify(item),
			success : result => {
					
				
				if(result == "FAIL"){
					alert("로그인을 해주세요")
					location.href="../login"
				}
				
				 if(result == "OK") {
					alert("등록이 완료 되었습니다")
					location.href="../"
				}
			},
				
				

				error: xhr => {
						alert(`오류 발생 : ${xhr.statusText}`);
				}
		})
	})
	// 일정등록 - 끝
		
})

function day_select(day){
	
	const daySum = day+1
	const dayNum = $('.loc_top p').eq(day).text();
	
	$(`.loc_daylist${dayNum}`).removeClass('day_loclist_none')

	if(daySum != dayNum){
		const list = `<div class="loc_daylist${daySum}">
					<div class="loc_top"><p name="day">${daySum}</p>일차</div>
					</div>`
					
		$(`${schMap_root} .loc_list`).append(list);
	}
	dayValue = daySum
	
}

function add(){
	country();
}
function country(){
		$.ajax(schMap, {
		method: "GET",
		contentType: "application/json",
		dataType: "json",
		data: null,
		success: result => {

			const country = result;


			for (let i = 0; i < result.length; i++) {

				const { codeCountry, name, latitude, longitude } = country[i];

				const country_marker = new google.maps.Marker({
					map: map,
					title: name,
					position: new google.maps.LatLng({
						lat: latitude, lng: longitude
					})
				})

				country_marker.addListener("click", function() {

					for (let i = 0; i < result.length; i++) {
						if (country_marker.title == "한국") {

							const item = {
								codeCountry: codeCountry,
								name: name,
								latitude: latitude,
								longitude: longitude
							}

							$('#country').val(name)
							map = new google.maps.Map(document.getElementById("map"), {
								center: { lat: latitude, lng: longitude },
								zoom: 8,
								streetViewControl: false,
								mapId: '19f9de6fc14911b2',
								disableDefaultUI: true

							});

							$.ajax(schMapCity, {

								method: "POST",
								contentType: "application/json",
								dataType: "json",
								data: JSON.stringify(item),
								success: result => city(result),
								error: xhr => {
									alert(`오류 발생 : ${xhr.statusText}`);
								}
							})
						}

						if (country_marker.title == "일본") {
							const item = {
								codeCountry: codeCountry,
								name: name,
								latitude: latitude,
								longitude: longitude
							}

							console.log(country_marker.title)
							$('#country').val(name)
							map = new google.maps.Map(document.getElementById("map"), {
								center: { lat: latitude, lng: longitude },
								zoom: 6,
								streetViewControl: false,
								mapId: '19f9de6fc14911b2',
								disableDefaultUI: true

							});

							$.ajax(schMapCity, {

								method: "POST",
								contentType: "application/json",
								dataType: "json",
								data: JSON.stringify(item),
								success: result => city(result),
								error: xhr => {
									alert(`오류 발생 : ${xhr.statusText}`);
								}
							})
						}
					}

				})
			}
		},
		error: xhr => {
			alert(`오류 발생 : ${xhr.statusText}`);
		}
	});
}

function city(city) {
	for (let i = 0; i < city.length; i++) {


		const { codeCity, name, codeCountry, latitude, longitude } = city[i];

		const city_marker = new google.maps.Marker({
			map: map,
			title: name,
			position: new google.maps.LatLng({
				lat: latitude, lng: longitude
			})
		});
		city_marker.addListener("click", function() {
			$("#city_code").val(codeCity)
			$('#city').val(name)
			const city_coordi = new google.maps.LatLng({
				lat: latitude, lng: longitude
			});

			map = new google.maps.Map(document.getElementById("map"), {
				center: city_coordi,
				zoom: 13,
				disableDefaultUI: true
			});
			const request = {
				location: city_coordi,
				radius: 18000,
				keyword : `(${name} 여행명소) OR (${name} 観光地)`,
				types: ['tourist_attraction','establishment'],
				rankBy: google.maps.places.RankBy.PROMINENCE,

			};
			
			const request2 = {
				location: city_coordi,
				radius: 18000,
				keyword : `(${name}대표적인) OR (おすすめ店)`,
				types: ['restaurant','establishment'],
				rankBy: google.maps.places.RankBy.PROMINENCE,

			};
			service = new google.maps.places.PlacesService(map);
			service.nearbySearch(request, Tour);
			service.nearbySearch(request2, Restaurant);


		})
	}

function Tour(results, status, pagetoken) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			if (pagetoken.hasNextPage) {
					pagetoken.nextPage();
				}
			for (var i = 0; i < results.length; i++) {
				createTour(results[i]);
				
			}

		}
	}


function Restaurant(results, status, pagetoken) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			if (pagetoken.hasNextPage) {
					pagetoken.nextPage();
				}
			for (var i = 0; i < results.length; i++) {
				createRestaurant(results[i]);
				
			}

		}
	}
}
function createTour(place) {

	const id = place.place_id

	if (place.geometry && place.geometry.location) {
		
		const marker = new google.maps.Marker({
			map: map,
			title: place.name,
			label: {
				text: '\ue412',
				fontFamily: 'Material Icons',
				color: '#fff',
				fontSize: '14px',
			},
			place: {
				placeId: id,
				location: place.geometry.location
			},
			position: new google.maps.LatLng({
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng()
			})
		});

		let photos = place.photos
		if (!photos) {
			return;
		}

		let image = photos[0].getUrl({
			maxWidth: 220, maxHeight: 220
		})
		
		const infoWindow = new google.maps.InfoWindow({
			content: `<div id="info">
							<p> 이름 : ${place.name}</br></p><img src="${image}">
							</div>
							<div id="info_submit">
							<button onclick="submitLoc('${marker.title}','${image}')">등록</button>
							</div>`,
			maxWidth: 1000
		});

		google.maps.event.addListener(marker, "click", () => {
			
			if (prevInfoWindow) {
				prevInfoWindow.close();
			}
			infoWindow.open(map, marker);
			prevInfoWindow = infoWindow;
		});

		google.maps.event.addListener(map, 'click', function() {
			infoWindow.close();
		});
	}
}

function createRestaurant(place){
	const id = place.place_id

	if (place.geometry && place.geometry.location) {
		
		const marker = new google.maps.Marker({
			map: map,
			title: place.name,
			label: {
				text: '\ue56c',
				fontFamily: 'Material Icons',
				color: '#fff',
				fontSize: '14px',
			},
			icon : {
				size : new google.maps.Size(10,10)
			},
			place: {
				placeId: id,
				location: place.geometry.location
			},
			position: new google.maps.LatLng({
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng()
			})
		});

		let photos = place.photos
		if (!photos) {
			return;
		}

		let image = photos[0].getUrl({
			maxWidth: 220, maxHeight: 220
		})
		
		const infoWindow = new google.maps.InfoWindow({
			content: `<div id="info">
							<p> 이름 : ${place.name}</br></p><img src="${image}">
							</div>
							<div id="info_submit">
							<button onclick="submitLoc('${marker.title}','${image}')">등록</button>
							</div>`,
			maxWidth: 1000
		});

		google.maps.event.addListener(marker, "click", () => {
			
			if (prevInfoWindow) {
				prevInfoWindow.close();
			}
			infoWindow.open(map, marker);
			prevInfoWindow = infoWindow;
		});

		google.maps.event.addListener(map, 'click', function() {
			infoWindow.close();
		});
	}
}


function submitLoc(title, image) {
	
	addloc(title,image);

	$(`${schMap_list}`).on("click", ".delete", function() {
			$(this).parent().remove();
	});
	
}

function addloc(title,image){
	if(!dayValue){
		const loc_box = $(`${schMap_root} .list .loc_list .loc_daylist1`);
			const loc = `<div class="loc">
						<input type="hidden" name="day" value = "1">
						<p name= "name" class="place_name">${title}</p>
						<img class="place_image" src="${image}">
						<button type="button" class="delete">삭제</button></div>`
		loc_box.append(loc);
	}
	if(dayValue){
		const loc_box = $(`${schMap_root} .list .loc_list .loc_daylist${dayValue}`);
			const loc = `<div class="loc">
						<input type="hidden" name="day" value = "${dayValue}">
						<p name= "name" class="place_name">${title}</p>
						<img class="place_image" src="${image}">
						<button type="button" class="delete">삭제</button></div>`
		loc_box.append(loc);
	}
}

function datepicker() {

	let sdate = $('#sdate').datepicker({
		startDate: new Date(date.getFullYear, date.getMonth, date.getDate()),
		language: 'ko',
		autoClose: true,
		minDate: new Date(),
		onSelect: function(date) {
			var endNum = date;
			$('#adate').datepicker({
				minDate: new Date(endNum),
				
			})
			const adateValue = document.querySelector("#adate").value;
			const arr1 = date.split('-');
			const arr2 = adateValue.split('-');
			
			if(adateValue){
				const dat1 = new Date(arr1[0], arr1[1], arr1[2])
			const dat2 = new Date(arr2[0], arr2[1], arr2[2])
			const dayMinus = dat2 - dat1;
			let cDay = 24 * 60 * 60 * 1000;// 시 * 분 * 초 * 밀리세컨

			const daySum = parseInt(dayMinus / cDay)
			const dayList = $(`${schMap_root} .list #list`);
			
			let dayTab = `<div class="day_list">`
			for (let i = 0; i <= daySum; i++) {
				dayTab += `<button type = "button" class="day" value="${[i + 1]}">${[i + 1]}일차</button>`

			}
			dayTab += `</div><div class="loc_list">
						<div class="loc_daylist1">
						<div class="loc_top"><p>1</p>일차</div>
						</div>
						</div>`;

			$(`${schMap_root} .list #list .day_list`).remove();
			$(`${schMap_root} .list #list .loc_list`).remove();
			dayList.append(dayTab);
			
			$('.day_list :first-child').addClass('day_select')
			}
		}
	}).data(`datepicker`).selectDate(new Date(date));

	let adate = $('#adate').datepicker({
		startDate: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
		language: 'ko',
		autoClose: true,
		onSelect: function(date) {
			$('input[name=adate]').attr("readonly", true)
			var startNum = date;
			$('#sdate').datepicker({
				maxDate: new Date(startNum),
			})
			const sdateValue = document.querySelector("#sdate").value;
			const arr1 = sdateValue.split('-');
			const arr2 = date.split('-');
			const dat1 = new Date(arr1[0], arr1[1], arr1[2])
			const dat2 = new Date(arr2[0], arr2[1], arr2[2])
			const dayMinus = dat2 - dat1;
			let cDay = 24 * 60 * 60 * 1000;// 시 * 분 * 초 * 밀리세컨

			const daySum = parseInt(dayMinus / cDay)
			const dayList = $(`${schMap_root} .list #list`);

			let dayTab = `<div class="day_list">`
			for (let i = 0; i <= daySum; i++) {
				dayTab += `<button type = "button" class="day" value="${[i + 1]}">${[i + 1]}일차</button>`

			}
			dayTab += `</div><div class="loc_list">
						<div class="loc_daylist1">
						<div class="loc_top"><p>1</p>일차</div>
						</div>
						</div>`;

			$(`${schMap_root} .list #list .day_list`).remove();
			$(`${schMap_root} .list #list .loc_list`).remove();
			dayList.append(dayTab);
			
			$('.day_list :first-child').addClass('day_select')


		}

	}).data('datepicker');

}

function initMap() {

	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 35.3683251, lng: 125.6615133 },
		zoom: 5,
		mapId: '19f9de6fc14911b2',
		disableDefaultUI: true

	});
}

