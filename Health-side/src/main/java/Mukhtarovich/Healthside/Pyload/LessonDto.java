package Mukhtarovich.Healthside.Pyload;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LessonDto {
    private String foodMenu;
    private String lessonText;
    private UUID courseId;
    private UUID photoId;
}
