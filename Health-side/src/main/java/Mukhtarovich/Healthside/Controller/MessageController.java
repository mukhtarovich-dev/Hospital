package Mukhtarovich.Healthside.Controller;

import Mukhtarovich.Healthside.Enity.Message;
import Mukhtarovich.Healthside.Pyload.ApiResponse;
import Mukhtarovich.Healthside.Repositroy.MessageRepository;
import Mukhtarovich.Healthside.Service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/message")
@RequiredArgsConstructor
public class MessageController {
    private final MessageRepository messageRepository;
    private final MessageService messageService;

    @PostMapping
    public HttpEntity<?> sendMsg(@RequestParam String message, @RequestParam String name) {
        ApiResponse apiResponse = messageService.sendMsg(message, name);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteMsg(@PathVariable UUID id) {
        ApiResponse apiResponse = messageService.deleteMessage(id);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @DeleteMapping
    public HttpEntity<?> deleteAllMsg() {
        try {
            messageRepository.deleteAll();
            return ResponseEntity.ok(new ApiResponse("Tozalandi", true));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("Xato", false));
        }
    }

    @GetMapping
    public HttpEntity<?> getAllMsg() {
        try {
            List<Message> all = messageRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/today")
    public HttpEntity<?> getTodayMsg() {
        try {
            List<Message> messages = new ArrayList<>();
            for (Message message : messageRepository.findAll()) {
                if (message.getCreateAt().toString().substring(0, 10).equals(LocalDate.now().toString())) {
                     messages.add(message);
                }
                System.out.println(message.getCreateAt().toString().substring(0, 10));
                System.out.println("111"+LocalDate.now().toString());
            }
            return ResponseEntity.ok(messages);
        } catch (Exception e) {
            return null;
        }
    }
}
