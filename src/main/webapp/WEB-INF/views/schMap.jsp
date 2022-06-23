<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<jsp:include page="include/header.jsp"></jsp:include>
<link rel='stylesheet' type='text/css' media='screen' href='css/top.css'>
<link rel='stylesheet' type='text/css' media='screen' href='css/map.css'>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet">
<link href="css/datepicker/datepicker.min.css" rel="stylesheet"
	type="text/css" media="all">
<script src="js/datepicker/datepicker.min.js"></script>
<script src="js/datepicker/datepicker.ko.js"></script>
<script>
	var schMap = "/schMapApi"
	var schMapCity = "/schMapApiCity"
	var addSch = "/addSch"
	var schMap_root = "#schedule_map"
	var schMap_list = '.loc_list'
</script>
</head>
<body>
	<div>
		<div>
			<div id="top">
				<div id="logo">
					<a href="../"><img src="/images/Logo.png"></a>
				</div>

				<div id="navi">
					<span><a href="schMap">일정만들기</a></span> <span><a href="#">여행지탐색</a></span>
					<span><a href="#">MyPage</a></span>
				</div>
				<div id="login">
					<c:if test="${sessionScope.member != null }">
						<div id="login_success">
							<span class="member_name">${sessionScope.member.name}</span><span
								class="member">님 환영합니다</span> <a href="logout"><p class="logout">Logout</p></a>
						</div>
					</c:if>
					<c:if test="${sessionScope.member == null }">
						<a href="login"> <i class="fas fa-user-circle fa-2x"></i>
							<p>Login</p>
						</a>
					</c:if>
				</div>
			</div>
		</div>

		<div id="schedule_map">
			<form id="scheduel">
				<div class="schedule_banner">
					<p>일정만들기</p>
				</div>
				<div class="schedule">
					<div class="country_box">
						<div class="country">
							<p>나라</p>
						</div>
						<input type="text" name="country" id="country">
					</div>
					<div class="city_box">
						<div class="city">
							<p>도시</p>
						</div>
						<input type="hidden" name="codeCity" id="city_code">
						<input type="text" name="city" id="city">
					</div>
				</div>
				<div class="scheduel_bottom">
					<div class="sdate">
						<p>출발날짜</p>
					</div>
					<input type="text" name="sdate" id="sdate" placeholder="날짜를 선택해주세요" autocomplete="off">
					<div class="adate">
						<p>귀국날짜</p>
					</div>
					<input type="text" name="adate" id="adate" placeholder="날짜를 선택해주세요" autocomplete="off">
				</div>
				<div class="list">
					<input type="text" id="title" name="title"
						placeholder="일정이름을 입력해주세요">
					<div id="list"></div>
				</div>
				<button type="button" class="sch_map_submit">일정등록</button>
			</form>
			<div id="map"></div>
		</div>

	</div>



	<script src="/js/sch_map.js">
		
	</script>
	<script async
		src="https://maps.googleapis.com/maps/api/js?v=quarterly&key=AIzaSyCVzoX_7cO3uxNSueIFdpuDuTw8_G1ysYc&libraries=&libraries=geometry,places&callback=initMap">
		
	</script>
	<div id="footer">
		<p>Copyright © All Right Reserved</p>
	</div>
	</div>
</body>
</html>