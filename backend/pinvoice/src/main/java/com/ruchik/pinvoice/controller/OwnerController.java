package com.ruchik.pinvoice.controller;

import com.ruchik.pinvoice.model.OwnerRecord;
import com.ruchik.pinvoice.repository.OwnerRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/owner")
public class OwnerController {

    private final OwnerRepo newOwner;

    public OwnerController(OwnerRepo newOwner){
        this.newOwner = newOwner;
    }

    @GetMapping
    public OwnerRecord getOwner(){
        return newOwner.getOwnerInf();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping
    public void saveOwner(@RequestBody OwnerRecord postOwner){
        newOwner.savOwnerInf(postOwner);
    }
}

