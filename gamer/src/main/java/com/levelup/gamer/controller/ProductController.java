package com.levelup.gamer.controller;

import com.levelup.gamer.model.Product;
import com.levelup.gamer.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*") 
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
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    // POST: Crear un nuevo producto
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        // Por defecto, un producto nuevo empieza con 0 ventas
        if (product.getVendidos() == null) {
            product.setVendidos(0);
        }
        return productService.saveProduct(product);
    }

    // PUT: Actualizar un producto existente
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Product existingProduct = productService.getProductById(id);

        if (existingProduct != null) {
            // Actualizamos los campos con los nuevos datos
            existingProduct.setNombre(productDetails.getNombre());
            existingProduct.setCategoria(productDetails.getCategoria());
            existingProduct.setPrecio(productDetails.getPrecio());
            existingProduct.setImagen(productDetails.getImagen());
            existingProduct.setDescripcion(productDetails.getDescripcion());
            
            return productService.saveProduct(existingProduct);
        }
        return null;
    }

    // DELETE: Borrar un producto
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}