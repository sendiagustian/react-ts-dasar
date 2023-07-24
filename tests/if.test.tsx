import { describe, it, expect } from "vitest";

describe("if statement", () => {
    it("pengecekan if else", () => {
        const nilai = 90;

        if (nilai >= 80) {
            console.info("Very Good");
        } else if (nilai >= 60) {
            console.info("Cukup lah");
        } else {
            console.info("Coba lagi");
        }
    });

    it("ternari operator", () => {
        const value = 60;

        const say = value >= 80 ? "Very Good" : value >= 60 ? "Cukuplah" : "Coba lagi";

        console.info(say);
    });

    it("switch statement", () => {
        const value: string = "Ayang";

        switch (value) {
            case "Sendi":
                console.info("Hi Sendi");
                return "Hi Sendi";
            case "Ayang":
                console.info("Hi Ayang");
                return "Hi Ayang";
            default:
                return "Hallo";
        }
    });
});
