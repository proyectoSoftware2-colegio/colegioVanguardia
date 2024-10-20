package ambar.springbootusers.Controllers;

import ambar.springbootusers.Modelos.userGeneral;
import ambar.springbootusers.Repositories.UserGeneralRepository;
import ambar.springbootusers.Security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserGeneralRepository userGeneralRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public String convertirSHA256(String password) {
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("SHA-256");
        }
        catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
        byte[] hash = md.digest(password.getBytes());
        StringBuffer sb = new StringBuffer();
        for(byte b : hash) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody userGeneral loginRequest) {
        userGeneral user = userGeneralRepository.getUserGeneralByCorreo(loginRequest.getCorreo());

        if (user != null && user.getPassword().equals(this.convertirSHA256(loginRequest.getPassword()))) { // Comparar hash si es necesario
            String token = jwtUtil.generateToken(user.get_id(), user.getCorreo(), user.getRol().get_id());
            System.out.println(token);
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Credenciales incorrectas");
        }
    }
}
