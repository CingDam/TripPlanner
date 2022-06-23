package kr.ac.kopo.tripplanner.service;

import java.util.List;

import kr.ac.kopo.tripplanner.model.City;
import kr.ac.kopo.tripplanner.model.Country;
import kr.ac.kopo.tripplanner.model.Schedeul;

public interface SchMapService {

	List<Country> country();

	List<City> city(Country item);

	void add(Schedeul item);

	List<City> cityList();

	List<Schedeul> schList();

	List<Schedeul> item(int schCode);

}
