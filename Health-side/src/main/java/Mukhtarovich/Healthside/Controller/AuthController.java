package Mukhtarovich.Healthside.Controller;

import Mukhtarovich.Healthside.Enity.Role;
import Mukhtarovich.Healthside.Enity.User;
import Mukhtarovich.Healthside.Pyload.*;
import Mukhtarovich.Healthside.Repositroy.AuthRepository;
import Mukhtarovich.Healthside.Repositroy.RoleRepository;
import Mukhtarovich.Healthside.Service.AuthService;
import Mukhtarovich.Healthside.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final
    AuthService authService;
    private final
    AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;
    private final
    AuthRepository authRepository;
    private final
    JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public HttpEntity<?> login(@RequestBody LoginDto request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getPhoneNumber(), request.getPassword())
        );
        User user = authRepository.findUserByPhoneNumber(request.getPhoneNumber()).orElseThrow(() -> new ResourceNotFoundException("getUser"));
        ResToken resToken = new ResToken(generateToken(request.getPhoneNumber()));
        System.out.println(ResponseEntity.ok(getMal(user, resToken)));
        return ResponseEntity.ok(getMal(user, resToken));
    }

    @PostMapping("/addDoctor")
    public HttpEntity<?> addDoctor(@RequestBody RegisterDto registerDto) {
        try {
            ApiResponse apiResponse = authService.addDoctor(registerDto);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("Xatolik", false));
        }
    }

    @GetMapping("/doctor")
    public HttpEntity<?> getDoctor() {
        Role getRole = roleRepository.findById(2).orElseThrow(() -> new ResourceNotFoundException("getRole"));
        try {
            List<User> users = new ArrayList<>();
            for (User user : authRepository.findAll()) {
                for (Role role : user.getRoles()) {
                    if (role.getRoleName() == getRole.getRoleName()) {
                        users.add(user);
                    }
                }
            }

            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("Xatolik", false));
        }
    }

    @PutMapping("/edit")
    public HttpEntity<?> edit(@RequestBody RegisterDto registerDto) {
        try {
            ApiResponse edit = authService.edit(registerDto);
            return ResponseEntity.status(edit.isSuccess() ? 200 : 409).body(edit);
        } catch (Exception e) {
            return null;
        }
    }

    @PutMapping("/addPhoto")
    public HttpEntity<?> addPhoto(@RequestParam UUID photoId, @RequestParam UUID userId) {
        try {
            ApiResponse apiResponse = authService.addPhoto(photoId, userId);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return null;
        }

    }

    @PostMapping("/register")
    public HttpEntity<?> register(@RequestBody RegisterDto registerDto) {
        try {
            ApiResponse register = authService.register(registerDto);
            return ResponseEntity.status(register.isSuccess() ? 200 : 400).body(register);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/user")
    public HttpEntity<?> getUser() {
        Role getRole = roleRepository.findById(3).orElseThrow(() -> new ResourceNotFoundException("getRole"));
        try {
            List<User> users = new ArrayList<>();
            for (User user : authRepository.findAll()) {
                for (Role role : user.getRoles()) {
                    if (role.getRoleName() == getRole.getRoleName()) {
                        users.add(user);
                    }
                }
            }
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("Xatolik", false));
        }
    }

    @GetMapping("/one")
    public HttpEntity<?> getOneUser(@RequestParam UUID useId) {
        try {
            User user = authRepository.findById(useId).orElseThrow(() -> new ResourceNotFoundException("get"));
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return null;
        }
    }

    private String generateToken(String phoneNumber) {
        User user = authRepository.findUserByPhoneNumber(phoneNumber).orElseThrow(() -> new UsernameNotFoundException("getUser"));
        return jwtTokenProvider.generateToken(user.getId());
    }

    public GetData getMal(User user, ResToken resToken) {
        return new GetData(user, resToken);
    }


}
