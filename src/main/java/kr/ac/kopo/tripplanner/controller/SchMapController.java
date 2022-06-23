package kr.ac.kopo.tripplanner.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.kopo.tripplanner.model.City;
import kr.ac.kopo.tripplanner.model.Country;
import kr.ac.kopo.tripplanner.model.Member;
import kr.ac.kopo.tripplanner.model.Schedeul;
import kr.ac.kopo.tripplanner.service.SchMapService;

@RestController
@RequestMapping("/")
public class SchMapController {
	
	@Autowired
	SchMapService service;
	
	
	@GetMapping("/schMapApi")
	public List<Country> country(){
		
		return service.country();
	}
	
	@PostMapping("/schMapApiCity")
	public List<City> city(@RequestBody Country item){
		System.out.println(item.getCodeCountry());
		return service.city(item);
	}
	
	@PostMapping("/addSch")
	public String add(@RequestBody Schedeul item,HttpSession session) {
		
		Member member = (Member) session.getAttribute("member");
		
			
			
			if(member != null) {
				
				item.setId(member.getId());
				service.add(item);
				return "OK";
			}
			
			return "FAIL";
	}
}
