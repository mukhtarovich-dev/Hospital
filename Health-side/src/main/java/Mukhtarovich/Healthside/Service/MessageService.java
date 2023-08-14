package Mukhtarovich.Healthside.Service;

import Mukhtarovich.Healthside.Enity.Message;
import Mukhtarovich.Healthside.Pyload.ApiResponse;
import Mukhtarovich.Healthside.Repositroy.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;

    public ApiResponse sendMsg(String message,String userName) {
        try {
            Message build = Message.builder().message(message).userName(userName).build();
            messageRepository.save(build);
            return new ApiResponse("Habar yuborildi", true);
        } catch (Exception e) {
            return new ApiResponse("Habar Yuborilmadi", false);
        }
    }

    public ApiResponse deleteMessage(UUID id) {
        try {
            Message get = messageRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("get"));
            messageRepository.delete(get);
            return new ApiResponse("O'chirildi", true);
        } catch (Exception e) {
            return new ApiResponse("O'chirilmadi", false);
        }
    }
}
