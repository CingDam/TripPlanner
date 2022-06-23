package kr.ac.kopo.tripplanner.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.ac.kopo.tripplanner.model.DaySch;

@Repository
public class dayDaoImpl implements Daydao {
	
	@Autowired
	 SqlSession sql;
	
	@Override
	public void add(DaySch day) {
		
		sql.insert("daySch.add",day);
		
	}

}
