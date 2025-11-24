package com.levelup.gamer.service; // 👈 IMPORTANTE: Debe tener el guion bajo

import com.levelup.gamer.model.Product;
import com.levelup.gamer.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; // 👈 IMPORTANTE
import java.util.List;

@Service // 👈 ¡ESTA ETIQUETA ES LA CLAVE! Sin ella, Spring no ve el archivo.
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}