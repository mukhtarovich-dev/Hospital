package Mukhtarovich.Healthside.Controller;

import Mukhtarovich.Healthside.Enity.Category;
import Mukhtarovich.Healthside.Pyload.ApiResponse;
import Mukhtarovich.Healthside.Pyload.CategoryDto;
import Mukhtarovich.Healthside.Repositroy.CategoryRepository;
import Mukhtarovich.Healthside.Service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/category")
public class CategoryController {
    private final CategoryService categoryService;
    private final CategoryRepository categoryRepository;

    @GetMapping
    public HttpEntity<?> getCategory() {
        try {
            List<Category> all = categoryRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping
    public HttpEntity<?> addCategory(@RequestBody CategoryDto categoryDto) {
        try {
            ApiResponse apiResponse = categoryService.addCategory(categoryDto);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return null;
        }
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editCategory(@PathVariable Integer id, @RequestBody CategoryDto categoryDto) {
        ApiResponse apiResponse = categoryService.editCategory(id, categoryDto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteCategory(@PathVariable Integer id) {
        ApiResponse apiResponse = categoryService.deleteCategory(id);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }
}
