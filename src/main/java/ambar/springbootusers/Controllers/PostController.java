package ambar.springbootusers.Controllers;

import ambar.springbootusers.Modelos.Post;
import ambar.springbootusers.Modelos.userGeneral;
import ambar.springbootusers.Repositories.PostRepository;
import ambar.springbootusers.Repositories.UserGeneralRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserGeneralRepository userGeneralRepository;

    // Crear un nuevo post
    @PostMapping("/user/{usuarioId}")
    public Post createPost(@RequestBody Post post, @PathVariable String usuarioId) {
        userGeneral usuario = userGeneralRepository.findById(usuarioId).orElse(null);
        if (usuario == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuario no encontrado");
        }
        post.setUsuario(usuario);
        post.setFecha(new Date());
        return postRepository.save(post);
    }

    // Obtener todos los posts
    @GetMapping
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    // Obtener un post por su ID
    @GetMapping("/{id}")
    public Post getPostById(@PathVariable String id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post no encontrado"));
    }

    // Obtener posts por ID de usuario
    @GetMapping("/user/{usuarioId}")
    public List<Post> getPostsByUsuarioId(@PathVariable String usuarioId) {
        return postRepository.findByUsuarioId(usuarioId);
    }

    // Actualizar un post
    @PutMapping("/{id}")
    public Post updatePost(@PathVariable String id, @RequestBody Post postDetails) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post no encontrado"));

        post.setTitulo(postDetails.getTitulo());
        post.setContenido(postDetails.getContenido());
        post.setPostType(postDetails.getPostType());
        post.setImagen(postDetails.getImagen());
        post.setArchivo(postDetails.getArchivo());
        return postRepository.save(post);
    }

    // Eliminar un post
    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable String id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post no encontrado"));
        postRepository.delete(post);
    }
}
