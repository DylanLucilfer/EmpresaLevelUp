package com.levelup.gamer.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data // Esto crea los Getters y Setters automáticamente
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String categoria;
    private Integer precio;
    private String imagen;
    
    @Column(length = 1000) // Permite descripciones largas
    private String descripcion;
    
    private Integer vendidos;
}