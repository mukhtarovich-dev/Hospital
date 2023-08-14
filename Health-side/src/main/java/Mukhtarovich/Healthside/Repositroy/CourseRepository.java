package Mukhtarovich.Healthside.Repositroy;

import Mukhtarovich.Healthside.Enity.Course;
import Mukhtarovich.Healthside.Enity.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.UUID;

@CrossOrigin
public interface CourseRepository extends JpaRepository<Course, UUID> {
@Query("select course from Course course where course.category.id=?1")
    List<Course> findCoursesByCategory_Id(Integer category_id);
}