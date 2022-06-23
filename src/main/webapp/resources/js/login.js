var regax_email=/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
 var regex_passwd= /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

$(function(){
	
	$("#login_box input").keydown(function(event){
		if(event.keyCode==13){
			$("#login_submit").click()
		}
	})
	
	$("#login_submit").click(function(){
		loginCheck();
		
	})
	singUp();
	
	lostId();
	
	lostPasswd();
	
})

function loginCheck(){
	
	const login_item = {
		id : $("input[name='id']").val(),
		passwd : $("input[name='passwd']").val()
	}
	
	$.ajax("/login_post",{
		method : "POST",
		contentType: "application/json",
		data : JSON.stringify(login_item),
		success : result => {
			if(result == "FAIL"){
				alert("아이디와 비밀번호가 맞지 않습니다.");
				$("#login_box input").val("");
				$("#input_id input").focus();
			}
			if(result == "OK"){
				alert("로그인에 성공했습니다.")
				location.href="../"
			}
		},
		error: xhr => {
						alert(`오류 발생 : ${xhr.statusText}`);
				}
	})
}

function lostId(){
	 var modalLostid = document.querySelector('.modal-lostid');
         
                     $(".modal-btn-lostid").click(function(){
                         modalLostid.classList.add('modal-active-lostid');
                     });
                     $(".modal-close").click(function(){
                         modalLostid.classList.remove('modal-active-lostid');
                     });
					window.addEventListener('click', (e) => {
						e.target === modalLostid ?  modalLostid.classList.remove('modal-active-lostid') : false
					})
		
	$("#lostid_box input").keydown(function(event){
		if(event.keyCode==13){
			$("#lostid_submit").click()
		}
	})
	
	$("#lostid_submit").click(function(){
		
		const name = $("#lostid_box input[name='name']");
		const email= $("#lostid_box input[name='email']");
		
		const lostid_item = {
		id : null,
		name : name.val(),
		email : email.val(),
		
	}
		
		if(name.val() == ""){
			alert("이름를 입력해주세요");
			name.focus();
			return;
		}
		if(email.val() == ""){
			alert("이메일을 입력해주세요")
			email.focus();
			return;
		}
		if(!regax_email.test(email.val())){
			alert("올바른 이메일 양식을 쓰십시오")
			email.focus();
			return;
		}
		
		lostidCheck(modalLostid,lostid_item);
		
	})
}

function lostidCheck(modalLostid,lostid_item){
	
	
	$.ajax("/lostid",{
		method : "POST",
		contentType: "application/json",
		data : JSON.stringify(lostid_item),
		dataType: "json",
		success : result => {
			
			const findId_item=result;
			
			const {id} = findId_item
			
			if(id == null){
				alert("없는 사용자 입니다")
				$("#lostid_box input").val("")
				$("#lostid_box input[name='name']").focus();
				return;
			}
			if(id != null){
				const {name,id} = findId_item;
				const lostid_box=$("#lostid_box")
				let findId = '<div id="findid">'
					findId +=`<span class="modal-close"><span class="material-icons">close</span></span><p>${name}님의 아이디는<br>${id}입니다</p><div class="findid_submit"><button id="lostid_close">닫기</button></div>`
				$(".lostid_input").remove()
				lostid_box.append(findId);
				
				  $(".modal-close").click(function(){
                         modalLostid.classList.remove('modal-active-lostid');
                  });

				$("#lostid_close").click(function(){
                         modalLostid.classList.remove('modal-active-lostid');
                  });
				
				$(".findpasswd").click(function(){
					var modalLostpasswd = document.querySelector('.modal-lostpasswd');
				
					modalLostid.classList.remove('modal-active-lostid');
					
					modalLostpasswd.classList.add('modal-active-lostpasswd');
					lostPasswd()
				})
			}
		},
		error: xhr => {
						alert(`오류 발생 : ${xhr.statusText}`);
				}
	})
}

function lostPasswd(){
	  var modalLostpasswd = document.querySelector('.modal-lostpasswd');
     
                 $(".modal-btn-lostpasswd").click(function(){
                     modalLostpasswd.classList.add('modal-active-lostpasswd');
                 });
                 $(".modal-close").click(function(){
                     modalLostpasswd.classList.remove('modal-active-lostpasswd');
                 });

				window.addEventListener('click', (e) => {
						e.target === modalLostpasswd ?  modalLostpasswd.classList.remove('modal-active-lostpasswd') : false
					})
				
				$("#lostpasswd_box input").keydown(function(event){
					if(event.keyCode==13){
						$("#lostpasswd_submit").click()
					}
				})
				
				$("#lostpasswd_submit").click(function(){
					const id = $("#lostpasswd_box input[name='id']");
					const name = $("#lostpasswd_box input[name='name']");
					const email = $("#lostpasswd_box input[name='email']")
					const lostpasswd_item = {
						id : id.val(),
						name : name.val(),
						email : email.val()
					}
					
					if(id.val()==""){
						alert("ID를 입력해주세요")
						id.foucs();
						return;
					}
					if(name.val()==""){
						alert("닉네임을 입력해주세요")
						name.foucs();
						return;
					}
					if(email.val()==""){
						alert("이메일을 입력해주세요")
						email.foucs();
						return;
					}
					if(!regax_email.test(email.val())){
						alert("올바른 이메일 양식을 쓰십시오")
						email.focus();
						return;
					}
					
					findPasswd(modalLostpasswd,lostpasswd_item)
						

					
					
				})
				
}

function findPasswd(modalLostpasswd,lostpasswd_item){
	$.ajax("/lostpasswd",{
		method : "POST",
		contentType: "application/json",
		data : JSON.stringify(lostpasswd_item),
		success : result =>{
			if(result == "FAIL"){
				alert("아이디 또는 닉네임 또는 이메일이 맞지 않습니다")
				$("#lostpasswd_box input").val("");
				$("#lostpasswd_box input[name='id']").focus()
			}
			if(result == "OK"){
				$(".lostpasswd_input").remove()
				$("")
				const lostpasswd_box = $("#lostpasswd_box");
				let changePasswd = '<div>'
					changePasswd += `<p id="banner">비밀번호 변경</p>
		                <div id="input_passwd">
		                    <span class="modal-close"><span class="material-icons">close</span></span>
		                    <P>비밀번호</P>
							<p id="passwd_confirm">영문과 특수문자를 포함한 8글자에서 15글자사이로 해주세요</p>
		                <input type="hidden" name="id">    
						<input type="password" name="passwd" placeholder="비밀번호를 입력하세요">
		                </div>
		                <div id = "input_passwdCheck">
		                    <P>비밀번호 재입력</P>
		                    <input type="password" id="passwdCheck" placeholder="비밀번호를 다시 입력해주세요">
		                </div>
		                <button id="changepasswd_submit">비밀번호 변경</button>`
					changePasswd += '</div>'
					
				lostpasswd_box.append(changePasswd)
				$("#lostpasswd_box input[name='id']").val(lostpasswd_item.id)
				$(".modal-close").click(function(){
                     modalLostpasswd.classList.remove('modal-active-lostpasswd');
                 });
				
				$("#lostpasswd_box input").keydown(function(event){
					if(event.keyCode==13){
						$("#changepasswd_submit").click()
					}
				})
				
				$("#changepasswd_submit").click(function(){
					const passwd = $("#lostpasswd_box input[name='passwd']");
					const passwdCheck = $("#passwdCheck");
					const id = $("#lostpasswd_box input[name='id']");
					
					if(passwd.val() != passwdCheck.val()){
						alert("비밀번호가 같지 않습니다")
						$("#lostpasswd_box input").val("");
						console.log(passwd.val(),passwdCheck.val())
						passwd.focus();
						return
					}
					
					changepasswd(passwd,id,modalLostpasswd);
			})
				
				
			}
		},
		error: xhr => {
						alert(`오류 발생 : ${xhr.statusText}`);
				}
	})
}

function changepasswd(passwd,id,modalLostpasswd){
	
	const changepasswd_item = {
		passwd : passwd.val(),
		id : id.val()
	}
	
	$.ajax("/changepasswd",{
		method : "POST",
		contentType: "application/json",
		data : JSON.stringify(changepasswd_item),
		success : result => {
			if(result == "OK"){
				alert("비밀번호가 변경되었습니다!");
				modalLostpasswd.classList.remove('modal-active-lostpasswd');
				
			}
		},
		error: xhr => {
						alert(`오류 발생 : ${xhr.statusText}`);
				}
	})
}

function singUp(){
	var modalSignup = document.querySelector('.modal-signup');

            $(".modal-btn-signup").click(function(){
                modalSignup.classList.add('modal-active-signup');
            });
            $(".modal-close").click(function(){
                modalSignup.classList.remove('modal-active-signup');
            });
			window.addEventListener('click', (e) => {
				e.target === modalSignup ?  modalSignup.classList.remove('modal-active-signup') : false
			})
            

			$('#nickname_check').click(function(){
				const form = document.getElementById("signup_box");
				
				let item = {
					name : form.name.value
				}
				
				if(form.name.value == ""){
					alert("닉네임을 입력해주세요")
					form.name.focus();
					return
				} else{
						$.ajax("/checkNickName",{
						method : "POST",
						data : item,
						success : (result) => {
							if(result == "OK"){
								alert("사용가능한 닉네임 입니다")
								 $("#checkNickName").val(form.name.value);
								console.log($("#checkNickName").val())
								form.name.focus();
							}
							if(result == "FAIL"){
								alert("사용불가능한 닉네임 입니다")
								$("#signup_box input[name='name']");
							}
						},
						error: xhr => {
							alert(`오류 발생 : ${xhr.statusText}`);
						}
						
					})
				}
				
			})	
            
            $("#id_check").click(function(){
               	const form = document.getElementById("signup_box")
               	var checkId_result = "";
					if(form.id.value == ""){
						alert("아이디를 입력해주세요");
                  		 form.id.focus();
                   		return;
					} else {
						 $.ajax({
	                       method : "POST",
	                       url : "checkId",
	                       data : {
	                           id : form.id.value
	                       },
	                       success : function(result){
	                           if (result == "OK"){
	                               alert("사용가능한 ID 입니다.");
									$("#checkId").val(form.id.value)
									form.id.foucs();
	                           }
	                      
	                           else{
	                               alert("사용불가능한 ID 입니다");
									$("#id").val("");
									form.id.foucs();
	                           }
	    						
	                       },
							error: xhr => {
								alert(`오류 발생 : ${xhr.statusText}`);
							}
	                       
	                       
	                   })
					}
                  

               })
            
           $("#signup_submit").click(function(){
        	   const form = document.getElementById("signup_box")
               if(form.name.value == ""){
                   alert("닉네임을 입력해주세요");
                   form.name.focus();
                   return;
               }
				
				if($("#checkNickName").val() != form.name.value){
            	   alert("닉네임 중복체크를 해주세요");
            	   return;
               }

               if(form.id.value == ""){
                   alert("아이디를 입력해주세요");
                   form.id.focus();
                   return;
               }

               
               if($("#checkId").val() != form.id.value){
            	   alert("아이디 중복체크를 해주세요");
            	   return;
               }
		        if(!regex_passwd.test(form.passwd.value)){
                    alert("비밀번호는 영문과 특수문자를 포함한 8~15자 이어야 합니다");
                    form.passwd.focus();
                    return;
                }

               if(form.passwd.value == ""){
                   alert("비밀번호를 입력해주세요");
                   form.passwd.focus();
                   return;
               }
               
               if(form.passwd_check.value == ""){
                   alert("비밀번호를 다시입력해주세요");
                   form.passwd.focus();
                   return;
               }
               if(form.passwd.value != form.passwd_check.value){
                   alert("비밀번호를 입력해주세요");
                   form.passwd_check = "";
                   form.passwd_check.focus();
                   return;
               }

               if(form.tel.value == ""){
                   alert("전화번호를 입력해주세요");
                   form.phone.focus();
                   return;
               }
               if(!regax_email.test(form.email.value)){
                   alert("적합한 이메일방식이 아닙니다");
                   form.email.focus();
                   return;
               }
               if(form.email.value == ""){
                   alert("이메일을 입력해주세요");
                   form.email.focus();
                   return;
               }
			
               $.ajax({
                    method:"POST",
                    url : "add",
                    data : {
                    	name : form.name.value,
                    	id : form.id.value,
                    	passwd : form.passwd.value,
                    	tel : form.tel.value,
                    	email : form.email.value
                    },
            	    success : function(result){
            	    	if(result == "OK"){
            	    		form.submit();
            	    		
            	    	}
            		  
                   }
               });
	    		alert("회원가입에 성공했습니다.");
	    		modalSignup.classList.remove('modal-active-signup');
	    		
           });
}