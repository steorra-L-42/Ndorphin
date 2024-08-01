package com.web.ndolphin.dto.board.response;

import com.web.ndolphin.domain.ReactionType;
import com.web.ndolphin.dto.comment.CommentResponseDto;
import java.util.List;
import java.util.Map;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RelayBoardDetailResponseDto extends BoardDto {

    private String contentFileUrl;
    private boolean hasParticipated;
    private List<CommentResponseDto> commentResponseDtos;
    private Map<ReactionType, Long> reactionTypeCounts;
    private Long userReactionId;
    private ReactionType userReactionType;
}
