package kr.ac.kopo.tripplanner.dao;

import kr.ac.kopo.tripplanner.model.Member;

public interface MemberDao {

	int checkId(String id);

	void add(Member item);

	Member item(Member member);

	Member lostid(Member member);

	int checkNickName(String name);

	Member lostpasswd(Member member);

	void changePasswd(Member member);

}
