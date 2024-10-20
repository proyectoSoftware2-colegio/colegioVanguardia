package ambar.springbootusers.Modelos;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Getter
@Setter
public class Evento {
    @Id
    private String Id;
    private String nombre;
    private String descripcion;
    private Date fecha;
}
