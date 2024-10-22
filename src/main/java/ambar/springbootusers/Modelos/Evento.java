package ambar.springbootusers.Modelos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@Data
@Document
public class Evento {
    @Id
    private String Id;
    private String nombre;
    private String descripcion;
    private Date fecha;
}
