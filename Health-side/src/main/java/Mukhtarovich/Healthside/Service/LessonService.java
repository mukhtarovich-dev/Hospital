package Mukhtarovich.Healthside.Service;

import Mukhtarovich.Healthside.Enity.Course;
import Mukhtarovich.Healthside.Enity.Lesson;
import Mukhtarovich.Healthside.Enity.Photo;
import Mukhtarovich.Healthside.Enity.User;
import Mukhtarovich.Healthside.Pyload.ApiResponse;
import Mukhtarovich.Healthside.Pyload.LessonDto;
import Mukhtarovich.Healthside.Repositroy.AuthRepository;
import Mukhtarovich.Healthside.Repositroy.CourseRepository;
import Mukhtarovich.Healthside.Repositroy.LessonRepository;
import Mukhtarovich.Healthside.Repositroy.PhotoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LessonService {
    private final AuthRepository authRepository;
    private final LessonRepository lessonRepository;
    private final CourseRepository courseRepository;
    private final PhotoRepository photoRepository;

    public ApiResponse addLesson(UUID userId, LessonDto dto) {
        try {
            User user = authRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("getUser"));
            Photo photo = Photo.builder().photoId(dto.getPhotoId()).build();
            Photo save = photoRepository.save(photo);
            Lesson build = Lesson.builder()
                    .photos(Collections.singletonList(save))
                    .foodMenu(dto.getFoodMenu())
                    .lessonText(dto.getLessonText())
                    .build();
            build.setCreateBy(user.getId());
            for (Course cours : user.getCourses()) {
                if (cours.getId().equals(dto.getCourseId())) {
                    cours.getLessons().add(build);
                    lessonRepository.save(build);
                    courseRepository.save(cours);
                    return new ApiResponse("saqlandi", true);
                }
                return new ApiResponse("xato", false);
            }
            return new ApiResponse("xato", false);
        } catch (Exception e) {
            return new ApiResponse("Xato", false);
        }
    }

    public ApiResponse delete(UUID id) {
        try {
            Lesson get = lessonRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("get"));
            lessonRepository.delete(get);
            return new ApiResponse("o'chirildi", true);
        } catch (Exception e) {
            return new ApiResponse("xato", false);
        }
    }
}
