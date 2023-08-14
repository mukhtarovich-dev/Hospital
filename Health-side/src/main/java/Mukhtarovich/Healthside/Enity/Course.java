package Mukhtarovich.Healthside.Enity;

import Mukhtarovich.Healthside.Enity.template.AbsEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Course extends AbsEntity {
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private String description;
    @OneToMany
    private List<Lesson> lessons = new ArrayList<>();
    @ManyToOne
    private Category category;
}
