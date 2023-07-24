import { describe, it, expect } from "vitest";

describe("loop statement", () => {
    it("macam macam penggunaan for", () => {
        const names: string[] = ["Sendi", "Agustian", "Ayang"];

        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }

        for (const name of names) {
            console.info(name);
        }

        for (const index in names) {
            console.info(names[index]);
        }
    });

    it("while", () => {
        let counter = 0;

        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    });

    it("do while", () => {
        let counter = 0;

        do {
            console.info(counter);
            counter++;
        } while (counter < 10);
    });

    it("break & continue", () => {
        let counter = 0;

        do {
            counter++;

            if (counter == 10) {
                break;
            }

            if (counter % 2) {
                continue;
            }

            console.info(counter);
        } while (true);
    });
});
