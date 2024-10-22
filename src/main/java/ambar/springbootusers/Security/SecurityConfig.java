package ambar.springbootusers.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, CustomSecurityFilter customSecurityFilter) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .addFilterBefore(customSecurityFilter, UsernamePasswordAuthenticationFilter.class) // Registrar el filtro antes de la autenticación
                .authorizeHttpRequests(authRequest -> authRequest.requestMatchers("/**").permitAll()
                        .anyRequest().authenticated())
                .build();
    }
}
