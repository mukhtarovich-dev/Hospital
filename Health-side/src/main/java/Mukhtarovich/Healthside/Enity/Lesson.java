package Mukhtarovich.Healthside.Enity;

import Mukhtarovich.Healthside.Enity.template.AbsEntity;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Lesson extends AbsEntity {
    @OneToMany
    private List<Photo> photos = new ArrayList<>();
    private String foodMenu;
    private String lessonText;
}
