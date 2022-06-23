package kr.ac.kopo.tripplanner.service;

import kr.ac.kopo.tripplanner.model.Member;

public interface MemberService {

	boolean checkid(String id);

	void add(Member item);

	boolean login(Member member);

	boolean lostid(Member member);

	boolean checkNickName(String name);

	boolean lostpasswd(Member member);

	void changePasswd(Member member);

}
