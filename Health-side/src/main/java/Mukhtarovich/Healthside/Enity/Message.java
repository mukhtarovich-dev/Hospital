package Mukhtarovich.Healthside.Enity;

import Mukhtarovich.Healthside.Enity.template.AbsEntity;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Message extends AbsEntity {
    private String userName;
    @Column(nullable = false, length = 10000)
    private String message;

}
