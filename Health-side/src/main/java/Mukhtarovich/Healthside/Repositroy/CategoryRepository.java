package Mukhtarovich.Healthside.Repositroy;

import Mukhtarovich.Healthside.Enity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
