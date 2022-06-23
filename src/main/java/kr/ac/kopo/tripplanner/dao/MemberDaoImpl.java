package kr.ac.kopo.tripplanner.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.ac.kopo.tripplanner.model.Member;

@Repository
public class MemberDaoImpl implements MemberDao {
	
	@Autowired
	SqlSession sql;
	@Override
	public int checkId(String id) {
		return sql.selectOne("member.checkId", id);
	}
	@Override
	public void add(Member item) {
		
		sql.insert("member.add",item);
		
	}
	@Override
	public Member item(Member member) {
		return sql.selectOne("member.login", member);
	}
	@Override
	public Member lostid(Member member) {
		return sql.selectOne("member.lostid", member);
	}
	@Override
	public int checkNickName(String name) {
		return sql.selectOne("member.checkNickName", name);
	}
	@Override
	public Member lostpasswd(Member member) {
		return sql.selectOne("member.lostPasswd",member);
	}
	@Override
	public void changePasswd(Member member) {
		
		sql.update("member.change_passwd",member);
		
	}


}
