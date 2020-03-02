package com.example.addressrandomizer;

import lombok.Data;

@Data public class Country {
    private final Alpha3 code;
    private final String name;
    private final String locale;
    Country(Alpha3 code, String name, String locale) {
        this.code = code;
        this.name = name;
        this.locale = locale;
    }
}
