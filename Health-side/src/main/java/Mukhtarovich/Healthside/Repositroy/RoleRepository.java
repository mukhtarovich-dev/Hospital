package Mukhtarovich.Healthside.Repositroy;

import Mukhtarovich.Healthside.Enity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface RoleRepository extends JpaRepository<Role, Integer> {

}
