package Mukhtarovich.Healthside.Repositroy;

import Mukhtarovich.Healthside.Enity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@CrossOrigin
public interface MessageRepository extends JpaRepository<Message, UUID> {
}
