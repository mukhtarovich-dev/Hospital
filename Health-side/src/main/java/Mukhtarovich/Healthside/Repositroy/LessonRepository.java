package Mukhtarovich.Healthside.Repositroy;

import Mukhtarovich.Healthside.Enity.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.UUID;
@CrossOrigin
public interface LessonRepository extends JpaRepository<Lesson, UUID> {
}
