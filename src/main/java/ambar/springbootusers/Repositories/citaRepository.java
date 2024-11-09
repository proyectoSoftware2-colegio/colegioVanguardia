package ambar.springbootusers.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import ambar.springbootusers.Modelos.citas;
import org.springframework.data.mongodb.repository.Query;

import java.util.Date;

public interface citaRepository extends MongoRepository<citas,String> {
    @Query("{'$and': [{'fechaHora': ?0}, {'profesorAsignado.id': ?1}]}")
    public citas getByHoraProfesorId(Date fechaHora, String profesorId);

}
