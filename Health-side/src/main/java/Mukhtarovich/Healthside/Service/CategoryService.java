package Mukhtarovich.Healthside.Service;

import Mukhtarovich.Healthside.Enity.Category;
import Mukhtarovich.Healthside.Pyload.ApiResponse;
import Mukhtarovich.Healthside.Pyload.CategoryDto;
import Mukhtarovich.Healthside.Repositroy.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public ApiResponse addCategory(CategoryDto categoryDto) {
        try {
            Category category = new Category();
            category.setName(categoryDto.getName());
            categoryRepository.save(category);
            return new ApiResponse("Bo'lim saqlandi", true);
        } catch (Exception e) {
            return new ApiResponse("Xato", false);
        }

    }

    public ApiResponse editCategory(Integer id, CategoryDto categoryDto) {
        try {
            Category category = categoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getCategory"));
            category.setName(categoryDto.getName());
            categoryRepository.save(category);
            return new ApiResponse("Bo'lim taxrirlandi", true);
        } catch (Exception e) {
            return new ApiResponse("Xato", false);
        }
    }

    public ApiResponse deleteCategory(Integer id) {
        try {
            Category category = categoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getCategory"));
            categoryRepository.delete(category);
            return new ApiResponse("Bo'lim o'chirildi", true);
        } catch (Exception e) {
            return new ApiResponse("Xato", false);
        }
    }
}
