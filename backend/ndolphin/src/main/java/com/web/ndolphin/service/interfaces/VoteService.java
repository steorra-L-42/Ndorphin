package com.web.ndolphin.service.interfaces;

import com.web.ndolphin.dto.ResponseDto;
import com.web.ndolphin.dto.vote.VoteRequestDto;
import org.springframework.http.ResponseEntity;

public interface VoteService {

    ResponseEntity<ResponseDto> addVote(VoteRequestDto voteRequestDto);

    ResponseEntity<ResponseDto> updateVote(Long voteContentId, VoteRequestDto voteRequestDto);

    ResponseEntity<ResponseDto> deleteVote(Long voteContentId);
}
