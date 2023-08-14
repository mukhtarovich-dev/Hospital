package Mukhtarovich.Healthside.Service;

import Mukhtarovich.Healthside.Enity.Role;
import Mukhtarovich.Healthside.Enity.User;
import Mukhtarovich.Healthside.Enity.template.Attachment;
import Mukhtarovich.Healthside.Enity.template.AttachmentContent;
import Mukhtarovich.Healthside.Pyload.ApiResponse;
import Mukhtarovich.Healthside.Pyload.RegisterDto;
import Mukhtarovich.Healthside.Repositroy.AttachmentContentRepository;
import Mukhtarovich.Healthside.Repositroy.AttachmentRepository;
import Mukhtarovich.Healthside.Repositroy.AuthRepository;
import Mukhtarovich.Healthside.Repositroy.RoleRepository;
import Mukhtarovich.Healthside.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService implements UserDetailsService {
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthRepository authRepository;
    private final AttachmentRepository attachmentRepository;
    private final AttachmentContentRepository attachmentContentRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public ApiResponse addDoctor(RegisterDto registerDto) {
        try {
            Role getRole = roleRepository.findById(2).orElseThrow(() -> new ResourceNotFoundException("getRole"));
            if (!authRepository.existsByPhoneNumber(registerDto.getPhoneNumber())) {
                User build = User.builder()
                        .firstName(registerDto.getFirstName())
                        .lastName(registerDto.getLastName())
                        .phoneNumber(registerDto.getPhoneNumber())
                        .password(passwordEncoder().encode(registerDto.getPassword()))
                        .roles(Collections.singleton(getRole))
                        .enabled(true)
                        .accountNonLocked(true)
                        .accountNonExpired(true)
                        .credentialsNonExpired(true)
                        .build();
                authRepository.save(build);
                return new ApiResponse("Registratsyadan o'tdingiz", true);
            }
            return new ApiResponse("Xatolik", false);
        } catch (Exception e) {
            return new ApiResponse("Xatolik", false);
        }
    }


    public ApiResponse edit(RegisterDto registerDto) {
        try {
            User user = authRepository.findById(registerDto.getUserId()).orElseThrow(() -> new ResourceNotFoundException("getUSer"));
            user.setFirstName(registerDto.getFirstName());
            user.setLastName(registerDto.getLastName());
            user.setPassword(passwordEncoder().encode(registerDto.getPassword()));
            user.setPhoneNumber(registerDto.getPhoneNumber());
            authRepository.save(user);
            return new ApiResponse("Tahrirlandi", true);
        } catch (Exception e) {
            return new ApiResponse("Xatolik", false);
        }
    }

    public ApiResponse addPhoto(UUID photoId, UUID userId) {
        try {
            User user = authRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("user"));
            if (user.getPhotoId() == null) {
                user.setPhotoId(photoId);
                authRepository.save(user);
                return new ApiResponse("saqlandi", true);
            } else {
                AttachmentContent byAttachmentId = attachmentContentRepository.findByAttachmentId(user.getPhotoId());
                Attachment get1 = attachmentRepository.findById(user.getPhotoId()).orElseThrow((() -> new ResourceNotFoundException("get")));
                attachmentContentRepository.delete(byAttachmentId);
                attachmentRepository.delete(get1);
                user.setPhotoId(photoId);
                authRepository.save(user);
                return new ApiResponse("saqlandi", true);
            }
        } catch (Exception e) {
            return new ApiResponse("Xato", true);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String phoneNumber) throws UsernameNotFoundException {
        return authRepository.findUserByPhoneNumber(phoneNumber).orElseThrow(() -> new UsernameNotFoundException("getUser"));
    }

    public ApiResponse register(RegisterDto registerDto) {
        try {
            Role getRole = roleRepository.findById(3).orElseThrow(() -> new ResourceNotFoundException("getRole"));
            if (!authRepository.existsByPhoneNumber(registerDto.getPhoneNumber())) {
                User build = User.builder()
                        .firstName(registerDto.getFirstName())
                        .lastName(registerDto.getLastName())
                        .phoneNumber(registerDto.getPhoneNumber())
                        .password(passwordEncoder().encode(registerDto.getPassword()))
                        .roles(Collections.singleton(getRole))
                        .enabled(true)
                        .accountNonLocked(true)
                        .accountNonExpired(true)
                        .credentialsNonExpired(true)
                        .build();
                authRepository.save(build);
                return new ApiResponse("Registratsyadan o'tdingiz", true);
            }
            return new ApiResponse("xato", false);
        } catch (Exception e) {
            return new ApiResponse("xato", false);
        }
    }

    public UserDetails getUserById(UUID id) {
        return authRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getUser"));
    }


}
