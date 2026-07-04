package com.ruchik.pinvoice.repository;

import com.ruchik.pinvoice.model.OwnerRecord;
import org.springframework.stereotype.Repository;

@Repository
public class OwnerRepo {

    private OwnerRecord owner;

    public OwnerRepo() {
        this.owner = new OwnerRecord("Owner1",
                "", "", "", "", ""
        );
    }

    public OwnerRecord getOwnerInf() {
        return this.owner;
    }

    public void savOwnerInf(OwnerRecord newOwner) {
        this.owner = newOwner;
    }

}
