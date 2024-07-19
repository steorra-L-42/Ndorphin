package com.web.ndolphin.dto.auth.response;

import com.web.ndolphin.common.ResponseCode;
import com.web.ndolphin.common.ResponseMessage;
import com.web.ndolphin.dto.ResponseDto;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
public class SignInResponseDto extends ResponseDto {

    private String token;
    private int expirationTime;

    private SignInResponseDto(String token){
        super();
        this.token = token;
        this.expirationTime = 3600; // 만료 시간 : 1시간
    }

    public static ResponseEntity<SignInResponseDto> success(String token) {
        SignInResponseDto responseBody = new SignInResponseDto(token);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> signInfail(){
        ResponseDto responseBody = new ResponseDto(ResponseCode.SIGN_IN_FAIL, ResponseMessage.SIGN_IN_FAIL);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseBody);
    }

}
