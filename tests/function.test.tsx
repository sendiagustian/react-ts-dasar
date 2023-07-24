import { describe, it, expect } from "vitest";

describe("function", () => {
    it("function & void", () => {
        // function ada return
        function sayHello(name: string): string {
            return `Hallo ${name}`;
        }

        // void tidak ada return
        function printHello(name: string): void {
            console.info(sayHello(name));
        }

        printHello("Sendi");
    });

    it("function parameter with default value", () => {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        console.info(sayHello());

        expect(sayHello()).toBe("Hello Guest");
    });

    it("function with rest prameter", () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        const total = sum(2, 2, 2, 2);

        console.info(total);

        expect(total).toBe(8);
    });

    it("optional parameter", () => {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }
        }

        const sayFirst = sayHello("Sendi");
        const sayFirstLast = sayHello("Sendi", "Agustian");

        console.info(sayFirst);
        console.info(sayFirstLast);

        expect(sayFirst).toBe("Hello Sendi");
        expect(sayFirstLast).toBe("Hello Sendi Agustian");
    });

    it("function overloading", () => {
        function callMe(value: number): number;
        function callMe(value: string): string;

        function callMe(value: any): any {
            if (typeof value === "string") {
                return value;
            } else if (typeof value === "number") {
                return value * 10;
            }
        }

        console.info(callMe(100));
        console.info(callMe("Sendi"));

        expect(callMe(100)).toBe(1000);
        expect(callMe("Sendi")).toBe("Sendi");
    });

    it("function di simpan pada parameter", () => {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string) {
            return name.toUpperCase();
        }

        console.info(sayHello("sendi", toUpper));
        expect(sayHello("sendi", toUpper)).toBe("Hello SENDI");
    });

    it("anonymous function", () => {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        console.info(sayHello("Sendi", (name: string): string => name.toUpperCase()));

        expect(sayHello("Sendi", (name: string): string => name.toUpperCase())).toBe("Hello SENDI");
    });
});
