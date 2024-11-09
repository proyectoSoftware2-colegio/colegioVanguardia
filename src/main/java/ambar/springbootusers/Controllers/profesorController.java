package ambar.springbootusers.Controllers;
import ambar.springbootusers.Modelos.profesor;
import ambar.springbootusers.Modelos.userGeneral;
import ambar.springbootusers.Modelos.profesorInfo;
import ambar.springbootusers.Modelos.rol;
import ambar.springbootusers.Repositories.UserGeneralRepository;
import ambar.springbootusers.Repositories.profesorRepository;
import ambar.springbootusers.Repositories.rolRepository;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("profesor")
public class profesorController {
    @Autowired
    profesorRepository profesorRepo;
    @Autowired
    UserGeneralRepository userRepo;
    @Autowired
    rolRepository rolRepo;


    @GetMapping
    public List<profesor> getAllProfesor() {
        return profesorRepo.findAll();
    }

    @GetMapping("/{id}")
    public profesor getProfesorById(@PathVariable String id) {
        profesor response = profesorRepo.findById(id).orElse(null);
        if (response == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No fue encontrado el profesor con id: "+ id);
        }else{
            return response;
        }
    }

    @PostMapping
    public profesor createProfesor(@RequestBody profesorInfo profesor) {
        rol dbrol = rolRepo.findById("6727bf91cbde4710ce84054b").orElse(null);
        userGeneral userdb = userRepo.getUserGeneralByCorreo(profesor.getCorreo());
        if (userdb != null) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Ya existe un usuario registrado con ese correo");
        }
        userGeneral userProfesor  = new userGeneral(null, profesor.getNombreApellido(), profesor.getCorreo(), profesor.getNumeroCelular(), profesor.getPassword(),dbrol);
        userGeneral dbUser = userRepo.save(userProfesor);
        profesor profesorinfo = new profesor(null,dbUser,profesor.getDoc_identidad(),profesor.getMateria());
        return profesorRepo.save(profesorinfo);
    }

    @PutMapping("/{id}")
    public profesor updateProfesor(@RequestBody profesorInfo Profesorinfo, @PathVariable String id){
        profesor profesorDB = profesorRepo.findById(id).orElse(null);
        if (profesorDB == null) {
            rol dbrol = rolRepo.findById("6727bf91cbde4710ce84054b").orElse(null);
            userGeneral userProfesorDB  = userRepo.findById(profesorDB.getId()).orElse(null);
            userGeneral newUserProfesor = new userGeneral(userProfesorDB.get_id(), userProfesorDB.getNombreApellido(), userProfesorDB.getCorreo(), userProfesorDB.getNumeroCelular(), userProfesorDB.getPassword(),dbrol);
            userGeneral updateUser = userRepo.save(newUserProfesor);
            profesor profesorinfo = new profesor(profesorDB.getId(), updateUser,Profesorinfo.getDoc_identidad(),Profesorinfo.getMateria());
            return profesorRepo.save(profesorinfo);
        }
        else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No fue encontrado el profesor");
    }

    @DeleteMapping("/{id}")
    public ResponseStatusException deleteProfesor(@PathVariable String id) {
        profesor profesor = profesorRepo.findById(id).orElse(null);
        if (profesor != null) {
            profesorRepo.deleteById(id);
            userRepo.deleteById(profesor.getUser().get_id());
            return new ResponseStatusException(HttpStatus.OK, "Se ha eliminado el profesor");
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No fue encontrado el profesor");
        }
    }



}
