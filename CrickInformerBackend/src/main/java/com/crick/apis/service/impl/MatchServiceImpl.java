package com.crick.apis.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crick.apis.entity.Match;
import com.crick.apis.repository.MatchRepo;
import com.crick.apis.service.MatchService;

@Service
public class MatchServiceImpl implements MatchService{

	@Autowired
	private MatchRepo matchRepo;
	
	//Match History all matches in our database
	@Override
	public List<Match> getAllMatches() {
		return this.matchRepo.findAll();
	}

	@Override
	public List<Match> getLiveMatches() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Map<String, String>> getPointTable() {
		// TODO Auto-generated method stub
		return null;
	}

}
