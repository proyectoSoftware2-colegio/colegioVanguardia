package ambar.springbootusers.Repositories;

import ambar.springbootusers.Modelos.Evento;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface eventoRepo extends MongoRepository<Evento,String> {

}
