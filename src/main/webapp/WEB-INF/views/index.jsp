<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>



<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<jsp:include page="include/header.jsp"></jsp:include>
<link rel='stylesheet' type='text/css' href='css/top.css'>
<link rel='stylesheet' type='text/css' href='css/MainPage_css.css'>
</head>
<style>
body {
	background-image:
		url('resources/images/hallstatt-g615f2ea54_1920_gaussianblur.jpg');
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
<body>
	<div id="top">
		<div id="logo">

			<a href="../"><img src="images/Logo.png"></a>
		</div>

		<div id="navi">
			<span><a href="schMap">일정만들기</a></span> <span><a href="#">여행지탐색</a></span>
			<span><a href="#">MyPage</a></span>
		</div>

		<div id="login">
			<c:if test="${sessionScope.member != null }">
				<div id="login_success">
					<span class="member_name">${sessionScope.member.name}</span><span
						class="member">님 환영합니다</span> <a href="logout"><p
							class="logout">Logout</p></a>
				</div>
			</c:if>
			<c:if test="${sessionScope.member == null }">
				<a href="login"> <i class="fas fa-user-circle fa-2x"></i>
					<p>Login</p>
				</a>
			</c:if>
		</div>
	</div>
	<form method="post">

		<div id="banner">
			<p id="banner_top">Trip Planner 어서오세요!</p>
			<p id="banner_bottom">자신 만의 여행일정을 만들어보세요!</p>
		</div>
		<div id="searchbar">
			<input type="text" name="search" placeholder="도시를 검색해주세요"
				id="search_text"> <i class="fas fa-search fa-2x"></i>
		</div>
	</form>
	
	<div id="city">
		<c:forEach var="item" items="${cityList}" varStatus="status">
			<c:if test="${status.index eq 0}">
				<div id="city_1">
					<img src="images/City/${item.image}"> <a href="#"><P
							class="img_text">${item.name}</P></a>
					<table>
						<thead>
							<tr>
								<td class="top_text">인기 여행일정</td>
							</tr>
						</thead>
						<tbody>
						<tr>
							<c:if test="${schList.size() < 1}">
								<td class="schedule">
									<p class="schedule_none">등록된 일정이 없습니다!</p>
								</td>
							</c:if>
							<c:forEach var="schitem" items="${schList}" varStatus="schStatus">
									<c:if test="${item.name == schitem.cityName}">
										<input type="hidden" name="codeSch" value="${schitem.codeSch}">
										<td class="schedule">
										<a href="schMap/${schitem.codeSch}">
										<p class="name">일정명 : ${schitem.title}</p></a>
										</td>
									</c:if>

							</c:forEach>
							</tr>
						</tbody>
					</table>
				</div>
			</c:if>
			<c:if test="${status.index eq 1}">
				<div id="city_2">
					<img src="images/City/${item.image}"> <a href="#"><P class="img_text">${item.name}</P></a>
					<table>
						<thead>
							<tr>
								<td class="top_text">인기 여행일정</td>
							</tr>
						</thead>
						<tbody>
							<tr>
							<c:if test="${schList.size() < 1}">
								<td class="schedule">
									<p class="schedule_none">등록된 일정이 없습니다!</p>
								</td>
							</c:if>
							<c:forEach var="schitem" items="${schList}" varStatus="schStatus">
									<c:if test="${item.name == schitem.cityName}">
										<td class="schedule">
										<a href="schMap/${schitem.codeSch}">
										<p class="name">일정명 : ${schitem.title}</p></a>
										</td>
									</c:if>
									<c:if test="${item.name != schitem.cityName && schStatus.index eq 1}">
										<td class="schedule">
											<p class="schedule_none"> ${schitem.cityName} 등록된 일정이 없습니다!</p>
										</td>
									</c:if>
								</c:forEach>
							</tr>
						</tbody>
					</table>
				</div>
			</c:if>
			<c:if test="${status.index eq 2}">
				<div id="city_3">
					<img src="images/City/${item.image}"> <a href="#"><P
							class="img_text">${item.name}</P></a>
					<table>
						<thead>
							<tr>
								<td class="top_text">인기 여행일정</td>
							</tr>
						</thead>
						<tbody>
						<tr>
							<c:if test="${schList.size() < 1}">
								<td class="schedule">
									<p class="schedule_none">등록된 일정이 없습니다!</p>
								</td>
							</c:if>
							<c:forEach var="schitem" items="${schList}" varStatus="schStatus">
								<c:if test="${item.name == schitem.cityName}">
										<td class="schedule">
										<a href="schMap/${schitem.codeSch}">
										<p class="name">일정명 : ${schitem.title}</p></a>
										</td>
									</c:if>
									<c:if test="${item.name != schitem.cityName && schStatus.index eq 0}">
										<td class="schedule">
											<p class="schedule_none">등록된 일정이 없습니다!</p>
										</td>
									</c:if>
							</c:forEach>
						</tr>

						</tbody>
					</table>
				</div>
			</c:if>
		</c:forEach>
	</div>
	<script src="js/mainpage.js"></script>
	<div id="footer">
		<p>Copyright © All Right Reserved</p>
	</div>
</body>
</html>