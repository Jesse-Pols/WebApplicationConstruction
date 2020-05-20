package nl.hu.v1wac.firstapp.webservices;

import java.io.IOException;
import java.util.List;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.*;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
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
		}
		
		JsonArray array = jab.build();
		return array.toString();
		
	}
	
	@GET
	@Path("{code}")
	@Produces("application/json")
	public String getCountryInfo(@PathParam("code") String code) {
		
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

	@DELETE
	@Path("/{code}/delete")
	@Produces("application/json")
	public String deleteCountry(@PathParam("code") String code) {
		ServiceProvider serviceProvider = new ServiceProvider();
		JsonArrayBuilder jab = Json.createArrayBuilder();

		JsonObjectBuilder job = Json.createObjectBuilder();
		Boolean success = serviceProvider.getWorldService().deleteCountryByCode(code);
		job.add("success", success);
		if (!success) {
			job.add("error", "Country couldn't be deleted. World Service failed.");
		}
		jab.add(job);

		JsonArray array = jab.build();
		return array.toString();
	}

	@PUT
	@Path("/{json}/update")
	@Produces("application/json")
	public String updateCountry(@PathParam("json") String json) throws IOException {
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(json);

		String name = jsonNode.get("name").asText();
		String capital = jsonNode.get("capital").asText();
		String region = jsonNode.get("region").asText();
		String oldname = jsonNode.get("oldname").asText();
		int population = jsonNode.get("population").asInt();
		double surface = jsonNode.get("surface").asDouble();
		Country country = new Country(name, capital, region, population, surface, oldname);

		ServiceProvider serviceProvider = new ServiceProvider();
		JsonArrayBuilder jab = Json.createArrayBuilder();

		JsonObjectBuilder job = Json.createObjectBuilder();
		Boolean success = serviceProvider.getWorldService().updateCountry(country);
		job.add("success", success);
		if (!success) {
			job.add("error", "Country couldn't be updated. World Service failed.");
		}
		jab.add(job);

		JsonArray array = jab.build();
		return array.toString();
	}

}
