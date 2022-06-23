package kr.ac.kopo.tripplanner.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.ac.kopo.tripplanner.model.City;
import kr.ac.kopo.tripplanner.model.Member;
import kr.ac.kopo.tripplanner.model.Schedeul;
import kr.ac.kopo.tripplanner.service.MemberService;
import kr.ac.kopo.tripplanner.service.SchMapService;

@Controller
public class RootController {
	
	@Autowired
	MemberService memberservice;
	
	@Autowired
	SchMapService schService;
	
	
	
	@RequestMapping("/")
	public String index(Model model){
		
		List<City> cityList = schService.cityList();
		List<Schedeul> schList = schService.schList();
		
		model.addAttribute("cityList", cityList);
		model.addAttribute("schList", schList);
		
		return "index";
	}
	// 로그인 펑션 시작
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@ResponseBody
	@PostMapping("/login_post")
	public String login(@RequestBody Member member, HttpSession session){
		
		if(memberservice.login(member)) {
			session.setAttribute("member", member);
			return "OK";
		}
		
		return "FAIL";
	}
	
	@ResponseBody
	@PostMapping("/lostid")
	public Member lostid(@RequestBody Member member) {
		
		if(memberservice.lostid(member) == true) {
			return member;
		}
		
		return member;
	}
	@ResponseBody
	@PostMapping("/lostpasswd")
	public String lostpasswd(@RequestBody Member member) {
		
		if(memberservice.lostpasswd(member)) {
			return "OK";
		}
		
		return "FAIL";
	}
	
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		
		return "redirect:.";
	}

	@PostMapping("/add")
	public String add(Member item) {
		
		memberservice.add(item);
		
		return "redirect:.";
	}
	@ResponseBody
	@PostMapping("/checkId")
	public String checkId(String id) {
		System.out.println(id);
		if(memberservice.checkid(id))
			return "OK";
		else
			return "FAIL";
				
	}
	@ResponseBody
	@PostMapping("/checkNickName")
	public String checkNickName(String name) {
		if(memberservice.checkNickName(name))
			return "OK";
		else
			return "FAIL";
	}
	@ResponseBody
	@PostMapping("/changepasswd")
	public String changePasswd(@RequestBody Member member) {
		
		memberservice.changePasswd(member);
		
		return "OK";
		
	}
	// 로그인 펑션 끝
	@GetMapping("schMap")
	public String schMap() {
		return "schMap";
	}
	@GetMapping("schMap/{codeSch}")
	public String schMap(@PathVariable int codeSch) {
		
		return "schMap_update";
	}
	
	
}
