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
public class CourseDto {
    private String name;
    private String description;
    private UUID userId;
    private Integer categoryId;
}
