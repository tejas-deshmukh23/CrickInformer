package com.crick.apis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crick.apis.entity.Match;
import com.crick.apis.service.MatchService;

import ch.qos.logback.core.status.Status;

@RestController
@RequestMapping("/match")
public class MatchController {
	
	@Autowired
	public MatchService matchService;
	
	@GetMapping("/live")
	public ResponseEntity<List<Match>> getLiveMatches()
	{
		return new ResponseEntity<>(matchService.getLiveMatches(),HttpStatus.OK);
	}
	
	//get all matches
	@GetMapping
	public ResponseEntity<List<Match>> getAllMatches()
	{
		return new ResponseEntity<>(matchService.getAllMatches(),HttpStatus.OK);
	}
	
	//get point Table
	@GetMapping("/point-table")
	public ResponseEntity<?> getPointTable()
	{
		return new ResponseEntity<>(this.matchService.getPointTable(),HttpStatus.OK);
	}

}
