package kr.ac.kopo.tripplanner.model;

public class City {
	private int codeCity;
	private String name;
	private int codeCountry;
	private double latitude;
	private double longitude;
	private String image;
	
	
	
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getcodeCity() {
		return codeCity;
	}
	public void setCityCode(int codeCity) {
		this.codeCity = codeCity;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCodeCountry() {
		return codeCountry;
	}
	public void setCodeCountry(int codeCountry) {
		this.codeCountry = codeCountry;
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
