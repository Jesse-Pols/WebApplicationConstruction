package nl.hu.v1wac.firstapp.model;

import nl.hu.v1wac.firstapp.persistence.CountryDao;
import nl.hu.v1wac.firstapp.persistence.CountryPostgresDaoImpl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class WorldService {

	CountryDao countryDao = new CountryPostgresDaoImpl();

	public WorldService() throws Exception {
	}

	public List<Country> getAllCountries() {
		try {
			return countryDao.findAll();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return new ArrayList<>();
	}
	
	public List<Country> get10LargestPopulations() {
		try {
			return countryDao.find10LargestPopulations();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return new ArrayList<>();
	}

	public List<Country> get10LargestSurfaces() {
		try {
			return countryDao.find10LargestSurfaces();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return new ArrayList<>();
	}
	
	public Country getCountryByCode(String code) {
		try {
			return countryDao.findByCode(code);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
}
