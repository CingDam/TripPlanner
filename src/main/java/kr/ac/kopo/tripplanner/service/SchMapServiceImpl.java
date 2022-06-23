package kr.ac.kopo.tripplanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.ac.kopo.tripplanner.dao.Daydao;
import kr.ac.kopo.tripplanner.dao.SchMapDao;
import kr.ac.kopo.tripplanner.model.City;
import kr.ac.kopo.tripplanner.model.Country;
import kr.ac.kopo.tripplanner.model.DaySch;
import kr.ac.kopo.tripplanner.model.Schedeul;

@Service
public class SchMapServiceImpl implements SchMapService {
	
	@Autowired
	SchMapDao dao;
	
	@Autowired
	Daydao dayDao;
	@Override
	public List<Country> country() {
		
		return dao.country();
	}

	@Override
	public List<City> city(Country item) {
		
		return dao.city(item);
	}

	@Override
	@Transactional
	public void add(Schedeul item) {
		dao.add(item);
		if(item.getDay() != null)
		for(DaySch day : item.getDay()) {
			day.setSchedule(item.getCodeSch());
			dayDao.add(day);
		}
		
	}


	@Override
	public List<City> cityList() {
		return dao.cityList();
	}

	@Override
	public List<Schedeul> schList() {
		return dao.schList();
	}

	@Override
	public List<Schedeul> item(int schCode) {
		return dao.item(schCode);
	}

}
