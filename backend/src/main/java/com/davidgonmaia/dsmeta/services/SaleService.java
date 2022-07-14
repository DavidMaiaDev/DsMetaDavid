package com.davidgonmaia.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.davidgonmaia.dsmeta.entities.Sale;
import com.davidgonmaia.dsmeta.repositories.SaleRepository;



@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}

}
