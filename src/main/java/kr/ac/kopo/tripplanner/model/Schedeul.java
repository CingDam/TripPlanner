package kr.ac.kopo.tripplanner.model;

import java.util.Date;
import java.util.List;

public class Schedeul {
	
	private int codeSch;
	private String id;
	private int codeCity;
	private String title;
	private String sdate;
	private String adate;
	private Date regDate;
	private List<DaySch> day;
	
	private String cityName;
	private String countryName;
	
	
	
	public String getCountryName() {
		return countryName;
	}
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public int getCodeCity() {
		return codeCity;
	}
	public void setCodeCity(int codeCity) {
		this.codeCity = codeCity;
	}
	public int getCodeSch() {
		return codeSch;
	}
	public void setCodeSch(int codeSch) {
		this.codeSch = codeSch;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSdate() {
		return sdate;
	}
	public void setSdate(String sdate) {
		this.sdate = sdate;
	}
	public String getAdate() {
		return adate;
	}
	public void setAdate(String adate) {
		this.adate = adate;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	public List<DaySch> getDay() {
		return day;
	}
	public void setDay(List<DaySch> day) {
		this.day = day;
	}
	
}
