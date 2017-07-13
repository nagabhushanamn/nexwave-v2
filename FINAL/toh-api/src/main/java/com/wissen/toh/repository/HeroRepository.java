package com.wissen.toh.repository;



import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.wissen.toh.model.Hero;

@CrossOrigin(origins="*")
@RepositoryRestResource(collectionResourceRel = "heroes", path = "heroes")
public interface HeroRepository extends CrudRepository<Hero, Long> {

    @Query("from Hero h where lower(h.name) like CONCAT('%', lower(:name), '%')")
    public Iterable<Hero> findByName(@Param("name") String name);
    
}