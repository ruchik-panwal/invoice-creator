package com.ruchik.pinvoice.repository;

import com.ruchik.pinvoice.model.Invoices;

import java.util.ArrayList;
import java.util.List;

public class InvoiceRepo {
    private final List<Invoices> InvList = new ArrayList<>();

    public  InvoiceRepo(){
    }

    public List<Invoices> getInvByRange(int start, int end){
        return  InvList.subList(start, end);
    }
    }


}
