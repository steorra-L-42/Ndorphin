package com.web.ndolphin.dto.vote;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class VoteRequestDto {

    Long userId;
    Long voteContentId;
}
