package kr.ac.kopo.tripplanner.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.kopo.tripplanner.dao.MemberDao;
import kr.ac.kopo.tripplanner.model.Member;



@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberDao dao;
	@Override
	public boolean checkid(String id) {
		if(dao.checkId(id) == 0)
			return true;
		else
			return false;
	}
	@Override
	public void add(Member item) {
		
		dao.add(item);
		
	}
	@Override
	public boolean login(Member member) {
		Member item = dao.item(member);
		if(item != null) {
			member.setPasswd(null);
			member.setName(item.getName());
			member.setTel(item.getTel());
			member.setEmail(item.getEmail());
			return true;
			
		}
		return false;
	}
	@Override
	public boolean lostid(Member member) {
		Member lostIdItem = dao.lostid(member);
		
		if(lostIdItem != null) {
			member.setId(lostIdItem.getId());
			member.setName(lostIdItem.getName());
			return true;
		}
		return false;
	}
	@Override
	public boolean checkNickName(String name) {
			if(dao.checkNickName(name) == 0)
				return true;
			else
				return false;
	}
	@Override
	public boolean lostpasswd(Member member) {
		
		Member lostPasswdItem = dao.lostpasswd(member);
		
		if(lostPasswdItem != null) {
			return true;
		}
		return false;
	}
	@Override
	public void changePasswd(Member member) {
		
		dao.changePasswd(member);
	}
	
	

}
