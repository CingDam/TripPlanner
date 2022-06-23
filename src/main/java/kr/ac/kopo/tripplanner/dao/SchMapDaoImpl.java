package kr.ac.kopo.tripplanner.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.ac.kopo.tripplanner.model.City;
import kr.ac.kopo.tripplanner.model.Country;
import kr.ac.kopo.tripplanner.model.Schedeul;

@Repository
public class SchMapDaoImpl implements SchMapDao {

	@Autowired
	SqlSession sql;
	
	@Override
	public List<Country> country() {
		
		return sql.selectList("schMap.country");
	}

	@Override
	public List<City> city(Country item) {

		return sql.selectList("schMap.city",item);
	}

	@Override
	public void add(Schedeul item) {
		
		sql.insert("schMap.add", item);
		
	}

	@Override
	public List<City> cityList() {
		return sql.selectList("schMap.city_list");
	}

	@Override
	public List<Schedeul> schList() {
		return sql.selectList("schMap.sch_list");
	}

	@Override
	public List<Schedeul> item(int schCode) {
		return sql.selectOne("schMap.item",schCode);
	}

}
