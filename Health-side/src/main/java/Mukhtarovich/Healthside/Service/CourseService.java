package Mukhtarovich.Healthside.Service;

import Mukhtarovich.Healthside.Enity.Category;
import Mukhtarovich.Healthside.Enity.Course;
import Mukhtarovich.Healthside.Enity.Lesson;
import Mukhtarovich.Healthside.Enity.User;
import Mukhtarovich.Healthside.Pyload.ApiResponse;
import Mukhtarovich.Healthside.Pyload.CourseDto;
import Mukhtarovich.Healthside.Repositroy.AuthRepository;
import Mukhtarovich.Healthside.Repositroy.CategoryRepository;
import Mukhtarovich.Healthside.Repositroy.CourseRepository;
import Mukhtarovich.Healthside.Repositroy.LessonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final CategoryRepository categoryRepository;
    private final AuthRepository authRepository;
    private final LessonRepository lessonRepository;

    public ApiResponse addCourse(CourseDto dto) {
        try {
            Category category = categoryRepository.findById(dto.getCategoryId()).orElseThrow(() -> new ResourceNotFoundException("getCategory"));
            User getUser = authRepository.findById(dto.getUserId()).orElseThrow(() -> new ResourceNotFoundException("getUser"));
            Course build = Course.builder()
                    .category(category)
                    .name(dto.getName())
                    .description(dto.getDescription())
                    .build();
            Course save = courseRepository.save(build);
            getUser.getCourses().add(save);
            authRepository.save(getUser);
            return new ApiResponse("Kurs saqlandi", true);
        } catch (Exception e) {
            return new ApiResponse("Xato", false);
        }
    }

    public ApiResponse editCourse(UUID id, CourseDto dto) {
        try {
            Course getCourse = courseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getCourse"));
            getCourse.setName(dto.getName());
            getCourse.setDescription(dto.getDescription());
            return new ApiResponse("Kurs tahrirlandi", true);
        } catch (Exception e) {
            return new ApiResponse("Xato", false);
        }
    }

    public ApiResponse deleteCourse(UUID id) {
        try {
            Course getCourse = courseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getCourse"));
            courseRepository.delete(getCourse);
            return new ApiResponse("Kurs o'chirildi", true);
        } catch (Exception e) {
            return new ApiResponse("Xato", true);
        }
    }
}
