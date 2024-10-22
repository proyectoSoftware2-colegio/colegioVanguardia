package ambar.springbootusers.Controllers;

import ambar.springbootusers.Modelos.Evento;
import ambar.springbootusers.Repositories.eventoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/evento")
public class EventoController {

    @Autowired
    private eventoRepo eventoRepo;

    // Crear un nuevo evento
    @PostMapping
    public ResponseEntity<Evento> crearEvento(@RequestBody Evento evento) {
        Evento nuevoEvento = eventoRepo.save(evento);
        return ResponseEntity.ok(nuevoEvento);
    }

    // Obtener todos los eventos
    @GetMapping("/getAll")
    public ResponseEntity<List<Evento>> obtenerTodosLosEventos() {
        List<Evento> eventos = eventoRepo.findAll();
        return ResponseEntity.ok(eventos);
    }

    // Obtener un evento por ID
    @GetMapping("/{id}")
    public ResponseEntity<Evento> obtenerEventoPorId(@PathVariable String id) {
        Optional<Evento> evento = eventoRepo.findById(id);
        return evento.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Actualizar un evento por ID
    @PutMapping("/{id}")
    public ResponseEntity<Evento> actualizarEvento(@PathVariable String id, @RequestBody Evento eventoActualizado) {
        Optional<Evento> evento = eventoRepo.findById(id);
        if (evento.isPresent()) {
            Evento eventoExistente = evento.get();
            eventoActualizado.setId(eventoExistente.getId());
            Evento eventoGuardado = eventoRepo.save(eventoActualizado);
            return ResponseEntity.ok(eventoGuardado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un evento por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarEvento(@PathVariable String id) {
        Optional<Evento> evento = eventoRepo.findById(id);
        if (evento.isPresent()) {
            eventoRepo.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
