import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/tasks")
public class TaskController {
    private List<Task> tasks = new ArrayList<>();

    @GetMapping
    public List<Task> getTasks() {
        return tasks;
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        tasks.add(task);
        return task;
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}