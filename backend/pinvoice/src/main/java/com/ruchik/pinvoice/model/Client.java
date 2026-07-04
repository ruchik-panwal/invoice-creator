package com.ruchik.pinvoice.model;

public record Client(
        Integer id,
        String name,
        String phone,
        String email,
        String address,
        String pincode
) {
}
