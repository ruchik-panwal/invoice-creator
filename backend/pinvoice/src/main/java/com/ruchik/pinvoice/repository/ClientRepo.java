package com.ruchik.pinvoice.repository;

import com.ruchik.pinvoice.model.Client;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ClientRepo {

    private final List<Client> clientList = new ArrayList<>();

    public ClientRepo(){
    }

    public List<Client> getClients(){
        return  clientList;
    }

    public void saveClient(Client c){
        clientList.add(c);
    }

    public  void removeClientById(Integer id){
        clientList.removeIf(client -> client.id().equals(id));
    }
}
