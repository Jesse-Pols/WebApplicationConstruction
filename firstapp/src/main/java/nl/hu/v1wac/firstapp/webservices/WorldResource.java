package nl.hu.v1wac.firstapp.webservices;

import java.util.List;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import nl.hu.v1wac.firstapp.model.Country;
import nl.hu.v1wac.firstapp.model.ServiceProvider;

@Path("/countries")
public class WorldResource {
	
	@GET
	@Produces("application/json")
	public String getAllCountries(){
		
		ServiceProvider serviceProvider = new ServiceProvider();
		JsonArrayBuilder jab = Json.createArrayBuilder();
		
		List<Country> allCountries = serviceProvider.getWorldService().getAllCountries();
		for (Country country : allCountries) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("name", country.getName());
			jab.add(job);
		}
		
		JsonArray array = jab.build();
		return array.toString();
		
	}
	
	@GET
	@Path("{code}")
	@Produces("application/json")
	public String getCountryInfo(@PathParam("code") String code) {
		
		System.out.println(code);
		
		ServiceProvider serviceProvider = new ServiceProvider();
		JsonArrayBuilder jab = Json.createArrayBuilder();
		
		Country country = serviceProvider.getWorldService().getCountryByCode(code);
		JsonObjectBuilder job = Json.createObjectBuilder();
		job.add("code", country.getCode());
		job.add("iso3", country.getIso3());
		job.add("name", country.getName());
		job.add("continent", country.getContinent());
		job.add("capital", country.getCapital());
		job.add("region", country.getRegion());
		job.add("surface", country.getSurface());
		job.add("population", country.getPopulation());
		job.add("government", country.getGovernment());
		job.add("lat", country.getLatitude());
		job.add("lng", country.getLongitude());
		jab.add(job);
		
		JsonArray array = jab.build();
		return array.toString();
		
		
	}
	
	@GET
	@Path("/largestsurfaces")
	@Produces("application/json")
	public String getLargestSurface() {
		
		ServiceProvider serviceProvider = new ServiceProvider();
		JsonArrayBuilder jab = Json.createArrayBuilder();
		
		List<Country> countries = serviceProvider.getWorldService().get10LargestSurfaces();
		for (Country country : countries) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("name", country.getName());
			job.add("surface", country.getSurface());
			jab.add(job);
		}
		
		JsonArray array = jab.build();
		return array.toString();
		
	}
	
	@GET
	@Path("/largestpopulations")
	@Produces("application/json")
	public String getLargestPopulation() {
		
		ServiceProvider serviceProvider = new ServiceProvider();
		JsonArrayBuilder jab = Json.createArrayBuilder();
		
		List<Country> countries = serviceProvider.getWorldService().get10LargestPopulations();
		for (Country country : countries) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("name", country.getName());
			job.add("population", country.getPopulation());
			jab.add(job);
		}
		
		JsonArray array = jab.build();
		return array.toString();
		
	}	

}
