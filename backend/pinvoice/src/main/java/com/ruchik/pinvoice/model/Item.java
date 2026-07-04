package com.ruchik.pinvoice.model;

public record Item(
        String description,
        Integer hours,
        Integer rate,
        Integer amount
) {
}
