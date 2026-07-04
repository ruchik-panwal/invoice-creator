package com.ruchik.pinvoice.model;

public record OwnerRecord(
        String Id,
        String name,
        String phoneNumber,
        String email,
        String address,
        String pincode
) {
}
