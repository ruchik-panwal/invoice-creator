package com.ruchik.pinvoice.controller;

import com.ruchik.pinvoice.model.Client;
import com.ruchik.pinvoice.repository.ClientRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/clients")
public class ClientController {

    private final ClientRepo newClient;

    public  ClientController(ClientRepo newClient){
        this.newClient = newClient;
    }

    @GetMapping
    public List<Client> getAllClients(){
        return newClient.getClients();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void addClient(Client c) {
        newClient.saveClient(c);
    }
}
