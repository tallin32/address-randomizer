package com.example.addressrandomizer;

public enum Alpha3 {
    USA("USA"),
    CAN("CAN"),
    MEX("MEX"),
    NLD("NLD");
    private final String text;
    Alpha3(String text) {
        this.text = text;
    }

    public String getText() {
        return this.text;
    }

    @Override
    public String toString() {
        return this.text;
    }
}
