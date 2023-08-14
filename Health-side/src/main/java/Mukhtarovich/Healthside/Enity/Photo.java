package Mukhtarovich.Healthside.Enity;

import Mukhtarovich.Healthside.Enity.template.AbsEntity;
import lombok.*;

import javax.persistence.Entity;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Photo extends AbsEntity {
    private UUID photoId;
}
