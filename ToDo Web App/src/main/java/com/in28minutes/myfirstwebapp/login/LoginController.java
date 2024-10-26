package com.in28minutes.myfirstwebapp.login;


import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("name")
public class LoginController {

//    private Logger logger = LoggerFactory.getLogger(getClass());

    //Model -> using model we will be able to pass param to jsp page
//    @RequestMapping("/login")
//    public String gotoLoginPage(@RequestParam String name, ModelMap model){
//        model.put("name", name);
//        logger.debug("Request param is {}", name); //RECOMMENDED
//        logger.info("I want this printed at info level"); //RECOMMENDED
//        logger.warn("I want this printed at warn level"); //RECOMMENDED
//
//        System.out.println("Request param is: " + name); //NOT RECOMMENDED FOR PROD CODE
//        return "login";
//    }

    // We wrote this code before using Spring Security to handle Authentication
//    private AuthenticationService authenticationService;
//
//    public LoginController(AuthenticationService authenticationService) {
//        this.authenticationService = authenticationService;
//    }

//    @RequestMapping(value = "/login", method = RequestMethod.GET)
//    public String gotoLoginPage(){
//        return "login";
//    }

    // We wrote this code before using Spring Security to handle Authentication
//    @RequestMapping(value = "/login", method = RequestMethod.POST)
//    public String gotoWelcomePage(@RequestParam String name, @RequestParam String password,
//                                  ModelMap model){
//        if(authenticationService.authenticate(name, password)){
//
//            model.put("name", name);
//            // Authentication
//            // name - in28minutes and password - dummy
//            return "welcome";
//        }
//        model.put("errorMessage", "Invalid Credentials! Please try again.");
//        return "login";
//    }
}
