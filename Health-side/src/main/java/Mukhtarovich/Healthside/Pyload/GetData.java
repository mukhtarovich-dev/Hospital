package Mukhtarovich.Healthside.Pyload;

import Mukhtarovich.Healthside.Enity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GetData {
    private User user;
    private ResToken resToken;

}
