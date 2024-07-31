package com.web.ndolphin.dto.vote;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class VoteCount {

    private final Long voteContentId;
    private final String voteContent;
    private final Long voteCount;
}
