package Mukhtarovich.Healthside.Repositroy;

import Mukhtarovich.Healthside.Enity.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;
@CrossOrigin
public interface PhotoRepository extends JpaRepository<Photo, UUID> {
}
