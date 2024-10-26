package com.rest.webservices.restful_web_services.exception;

import com.rest.webservices.restful_web_services.user.UserNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDate;
import java.time.LocalDateTime;

@ControllerAdvice
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ErrorDetails> handleAllExceptions(Exception ex, WebRequest request) throws Exception {
        ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(),
                ex.getMessage(), request.getDescription(false));

        return new ResponseEntity<ErrorDetails>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public final ResponseEntity<ErrorDetails> handleUserNotFoundException(Exception ex, WebRequest request) throws Exception {
        ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(),
                ex.getMessage(), request.getDescription(false));

        return new ResponseEntity<ErrorDetails>(errorDetails, HttpStatus.NOT_FOUND);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request){

        // This will give us a lot of description of error
//        ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(),
//                ex.getMessage(), request.getDescription(false));
//
        // This will give us only first field error which we mentioned in beans or we can create string using loop mentioning all error and pass it to error
//         ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(),
//                ex.getFieldError().getDefaultMessage(), request.getDescription(false));

        // Mentioned total errors and shown first one 
         ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(),
              "Total Errors: " + ex.getErrorCount() + " First Error: " + ex.getFieldError().getDefaultMessage(),
                 request.getDescription(false));

        return new ResponseEntity(errorDetails, HttpStatus.NOT_FOUND);
    }
}