package Mukhtarovich.Healthside.Pyload;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterDto {
    private UUID userId;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String password;
}
