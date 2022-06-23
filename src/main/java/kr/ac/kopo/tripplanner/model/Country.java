package kr.ac.kopo.tripplanner.model;

public class Country {
	private int codeCountry;
	private String name;
	private double latitude;
	private double longitude;
	
	
	public int getCodeCountry() {
		return codeCountry;
	}
	public void setCodeCountry(int codeCountry) {
		this.codeCountry = codeCountry;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	
	
}
