package kr.ac.kopo.tripplanner.dao;

import java.util.List;

import kr.ac.kopo.tripplanner.model.City;
import kr.ac.kopo.tripplanner.model.Country;
import kr.ac.kopo.tripplanner.model.Schedeul;

public interface SchMapDao {

	List<Country> country();

	List<City> city(Country item);

	void add(Schedeul item);

	List<Schedeul> schList();

	List<City> cityList();

	List<Schedeul> item(int schCode);


}
