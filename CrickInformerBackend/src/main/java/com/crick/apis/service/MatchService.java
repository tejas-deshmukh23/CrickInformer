package com.crick.apis.service;

import java.util.List;
import java.util.Map;

import com.crick.apis.entity.Match;

public interface MatchService {
	
	//get All Matches
	public List<Match> getAllMatches();
	//get Live Matches
	public List<Match> getLiveMatches();
	//get cwc2023 point Table
	public List<Map<String,String>> getPointTable();

}
