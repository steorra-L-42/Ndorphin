package com.web.ndolphin.service.impl;

import com.web.ndolphin.common.ResponseCode;
import com.web.ndolphin.common.ResponseMessage;
import com.web.ndolphin.domain.Notification;
import com.web.ndolphin.domain.User;
import com.web.ndolphin.dto.ResponseDto;
import com.web.ndolphin.dto.notification.request.NotificationRequestDto;
import com.web.ndolphin.dto.notification.response.NotificationResponseDto;
import com.web.ndolphin.mapper.NotificationMapper;
import com.web.ndolphin.repository.NotificationRepository;
import com.web.ndolphin.repository.UserRepository;
import com.web.ndolphin.service.NotificationService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {

  private final NotificationRepository notificationRepository;
  private final UserRepository userRepository;

  @Override
  public ResponseEntity<ResponseDto> create(Long userId, NotificationRequestDto dto) {

    try {
      User user = userRepository.findByUserId(userId);

      if (user == null) {
        return ResponseDto.databaseError();
      }

      Notification notification = NotificationMapper.toEntity(user, dto);

      notificationRepository.save(notification);

      return ResponseDto.success();

    } catch (Exception e) {
      return ResponseDto.databaseError();
    }
  }

  @Override
  public ResponseEntity<ResponseDto> selectAllByUserId(Long userId) {

    try {
      List<Notification> notifications = notificationRepository.findAllByUserId(userId);

      List<NotificationResponseDto> responseList = NotificationMapper.toDtoList(notifications);

      ResponseDto<List<NotificationResponseDto>> responseDto = new ResponseDto<>(
          ResponseCode.SUCCESS,
          ResponseMessage.SUCCESS,
          responseList
      );

      return ResponseEntity.status(HttpStatus.OK).body(responseDto);

    } catch (Exception e) {
      return ResponseDto.databaseError();
    }
  }

  @Override
  public ResponseEntity<ResponseDto> delete(Long notificationId) {

    try {
      
      notificationRepository.deleteById(notificationId);
    } catch (Exception e) {

      return ResponseDto.databaseError();
    }

    return ResponseDto.success();
  }

}