package com.levelup.gamer.controller;

import com.levelup.gamer.model.Product;
import com.levelup.gamer.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*") // ¡Permite que React se conecte desde cualquier puerto!
public class ProductController {

    @Autowired
    private ProductService productService;

    // GET: Traer todos los productos
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // GET: Traer un producto por ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable long id) {
        return productService.getProductById(id);
    }

    // POST: Crear un nuevo producto
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    // PUT: Actualizar un producto existente
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable long id, @RequestBody Product productDetails) {
        return productService.updateProduct(id, productDetails);
    }

    // DELETE: Borrar un producto
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable long id) {
        productService.deleteProduct(id);
    }
}