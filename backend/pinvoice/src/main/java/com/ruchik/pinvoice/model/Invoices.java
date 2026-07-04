package com.ruchik.pinvoice.model;

import java.time.LocalDateTime;
import java.util.List;

public record Invoices(
        String InvoiceNumber,
        String customerId,
        Status status,
        LocalDateTime dateCreated,
        LocalDateTime dateDue,
        Integer GSTPercent,
        Integer discountPercent,
        Integer paidAmount,
        List<Item> items
) {
}
