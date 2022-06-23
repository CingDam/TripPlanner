<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<jsp:include page="include/header.jsp"></jsp:include>
<link rel='stylesheet' type='text/css' href='resources/css/top.css'>
<link rel='stylesheet' type='text/css' href='resources/css/login.css'>

<style>

	body{
		background-image: url('resources/images/hallstatt-g615f2ea54_1920_gaussianblur.jpg');
        background-repeat : no-repeat;
        background-size : cover;
	}

</style>
</head>
<body>
	<body>
        <div>
            <div id="top">
                <div id="logo">
                    <a href=".."><img src="resources/images/Logo.png"></a>
                </div>
                <div id="navi">
                    <span><a href="schMap">일정만들기</a></span>
                    <span><a href="#">여행지탐색</a></span>
                    <span><a href="#">MyPage</a></span>
                </div>
                <div id="login">
                    <a href = "login">
                        <i class="fas fa-user-circle fa-2x"></i>
                        <p>Login</p>
                    </a>
                </div>
             </div>
        </div>
        <div id="login_box">
                <div class="input_id">
                    <P>ID</P>
                    <input type="text" name="id" placeholder="ID를 입력해주세요">
                </div>
                <div class="input_passwd">
                    <P>PASSWORD</P>
                    <input type="password" name="passwd" placeholder="비밀번호를 입력해주세요">
                </div>
                <div>
                    <button id="login_submit">Log in</button>
                </div>   
        </div>
        <div id="option">
                <button id="lostid" class="modal-btn-lostid">
                        <p>ID를 잊으셨나요?</p>
                        <i class="fas fa-chevron-right"></i>
                </button>
                <button id="lostpasswd" class="modal-btn-lostpasswd">
                        <p>비밀번호를 잊으셨나요?</p>
                        <i class="fas fa-chevron-right"></i>
                </button>
                <button id="signup" class="modal-btn-signup">
                    	<p>처음 이신가요?</p>
                     	<i class="fas fa-chevron-right"></i>
                </button>
        </div>
        <div class="modal-signup">
				<form method="post" id="signup_box">
					<span class="modal-close"><span class="material-icons">close</span></span>
                    <p id="banner">회원가입</p>
                    
                     <input type="hidden" id="checkNickName">
                    <div id="input_name">
                        <i class="far fa-user-circle fa-2x"></i>
                        <input type="text" name="name" placeholder="닉네임을 입력해주세요"><button type = "button" id="nickname_check">중복검사</button>
                    </div>
                    
                    <input type="hidden" id="checkId">
                    <div id="input_id">
                        <i class="fas fa-user-circle fa-2x"></i>
                        <input type="text" name="id" id="id" placeholder="ID를 입력해주세요"><button type = "button" id="id_check">중복검사</button>
                    </div>
                    
                    <div id="passwd">
                        <i class="fas fa-lock fa-2x"></i>
                        <p id="passwd_confirm">영문과 특수문자를 포함한 8글자에서 15글자사이로 해주세요</p>
                        <input type="password" name="passwd" placeholder="비밀번호를 입력해주세요">
                    </div>
                    
                    <div id="input_passwdcheck">
                        <i class="fas fa-check-square fa-2x"></i>
                        <input type="password" name="passwd_check" placeholder="비밀번호를 다시 입력해주세요">
                    </div>
                    
                    <div id="input_phone">
                        <i class="fas fa-mobile-alt fa-2x"></i>
                        <input type="text" name="tel" placeholder="전화번호를 입력해주세요">
                    </div>
                    
                    <div id="input_email">
                        <i class="fas fa-at fa-2x"></i>
                        <input type="text" name="email" placeholder="이메일을 입력해주세요">
                    </div>
                        <button type="button" id="signup_submit">회원가입</button>
				</form>   
        </div>
        <div class="modal-lostid">
            <div id="lostid_box">
            	<div class="lostid_input">
		                <p id="banner">ID 찾기</p>
		                <div class="input_name">
		                    <span class="modal-close"><span class="material-icons">close</span></span>
		                    <P>닉네임</P>
		                    <input type="text" name="name" placeholder="이름을 입력해주세요">
		                </div>
		                <div class="input_email">
		                    <P>E-mail</P>
		                    <input type="text" name="email" placeholder="E-mail를 입력해주세요">
		                </div>
		                <button id="lostid_submit">ID 찾기</button>
                    </div>
              </div>
        </div>
       <div class="modal-lostpasswd">
        <div id="lostpasswd_box">
            <span class="modal-close"><span class="material-icons">close</span></span>
            <div class="lostpasswd_input">
	            <p id="banner">비밀번호 찾기</p>
	            <div id="input_id">
	                <p>ID</p>
	                <input type="text" name="id" placeholder="ID를 입력해주세요">
	            </div>
	            <div id="input_name">
	                <p>닉네임</p>
	                <input type="text" name="name" placeholder="닉네임을 입력해주세요">
	            </div>
	            <div id="input_email">
	                <p>E-mail</p>
	                <input type="text" name="email" placeholder="E-mail를 입력해주세요">
	            </div>
                <button id="lostpasswd_submit">비밀번호 변경</button>
            </div>
        </div>
       </div>
        <script src="js/login.js"></script>
        <div id="footer">
            <p>Copyright © All Right Reserved</p>
       </div>
</body>
</html>