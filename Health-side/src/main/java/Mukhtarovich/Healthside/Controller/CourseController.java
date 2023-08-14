package Mukhtarovich.Healthside.Controller;

import Mukhtarovich.Healthside.Enity.Course;
import Mukhtarovich.Healthside.Enity.Lesson;
import Mukhtarovich.Healthside.Enity.User;
import Mukhtarovich.Healthside.Pyload.ApiResponse;
import Mukhtarovich.Healthside.Pyload.CourseDto;
import Mukhtarovich.Healthside.Pyload.LessonDto;
import Mukhtarovich.Healthside.Repositroy.AuthRepository;
import Mukhtarovich.Healthside.Repositroy.CourseRepository;
import Mukhtarovich.Healthside.Repositroy.LessonRepository;
import Mukhtarovich.Healthside.Service.CourseService;
import Mukhtarovich.Healthside.Service.LessonService;
import io.swagger.models.auth.In;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/course")
public class CourseController {
    private final CourseService courseService;
    private final CourseRepository courseRepository;
    private final LessonService lessonService;
    private final LessonRepository lessonRepository;
    private final AuthRepository authRepository;

    @PostMapping
    public HttpEntity<?> addCourse(@RequestBody CourseDto dto) {
        try {
            ApiResponse apiResponse = courseService.addCourse(dto);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping
    public HttpEntity<?> getCourse() {
        try {
            List<Course> all = courseRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/category/{Cid}")
    public HttpEntity<?> getByCategory(@PathVariable Integer Cid) {
        try {
            List<Course> coursesByCategoryId = courseRepository.findCoursesByCategory_Id(Cid);
            return ResponseEntity.ok(coursesByCategoryId);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/one/{id}")
    public HttpEntity<?> getOneCourse(@PathVariable UUID id) {
        try {
            Course course = courseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("get"));
            return ResponseEntity.ok(course);
        } catch (Exception e) {
            return null;
        }
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editCourse(@PathVariable UUID id, @RequestBody CourseDto courseDto) {
        try {
            ApiResponse apiResponse = courseService.editCourse(id, courseDto);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteCourse(@PathVariable UUID id) {
        try {
            ApiResponse apiResponse = courseService.deleteCourse(id);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/get")
    public HttpEntity<?> getCourses(@RequestParam UUID userId) {
        try {
            User user = authRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("use"));
            List<Course> courses = user.getCourses();
            return ResponseEntity.ok(courses);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/lesson")
    public HttpEntity<?> getAllLesson() {
        try {
            List<Lesson> all = lessonRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping("/lesson")
    public HttpEntity<?> addLesson(@RequestParam UUID userId, @RequestBody LessonDto dto) {
        try {
            ApiResponse apiResponse = lessonService.addLesson(userId, dto);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/lesson/{id}")
    public HttpEntity<?> deleteLesson(@PathVariable UUID id) {
        try {
            ApiResponse delete = lessonService.delete(id);
            return ResponseEntity.status(delete.isSuccess() ? 200 : 409).body(delete);
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("o'chirilmadi", false));
        }
    }
}
