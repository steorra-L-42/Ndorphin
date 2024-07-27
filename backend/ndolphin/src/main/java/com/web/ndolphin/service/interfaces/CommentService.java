package com.web.ndolphin.service.interfaces;

import com.web.ndolphin.dto.ResponseDto;
import com.web.ndolphin.dto.comment.CommentRequestDto;
import org.springframework.http.ResponseEntity;

public interface CommentService {

    ResponseEntity<ResponseDto> addComment(Long boardId, CommentRequestDto commentRequestDto);

    ResponseEntity<ResponseDto> updateComment(Long commentId, CommentRequestDto commentRequestDto);

    ResponseEntity<ResponseDto> deleteComment(Long commentId);
}