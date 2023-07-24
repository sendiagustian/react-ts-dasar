import { describe, it, expect } from "vitest";
import { Seller } from "../src/type-interface";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

describe("interface", () => {
    it("edvance level model", () => {
        const seller: Seller = {
            id: "1",
            name: "Sendi Agustian",
            address: "Jakarta",
            nib: "1231234",
            npwp: "02193093",
        };

        seller.name = "Toko Sensen";
        // seller.nib = "a"; // error

        console.info(seller);
    });

    it("membuat function dalam interface", () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (val1: number, val2: number): number => {
            return val1 + val2;
        };

        console.info(add(1, 2));

        expect(add(1, 2)).toBe(3);
    });

    it("interface array object", () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ["Sendi", "Agustian"];

        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });

    it("interface map object", () => {
        interface StringMap {
            [key: string]: string;
        }

        const stringDirectory: StringMap = {
            name: "Sendi Agustian",
            address: "Jakarta",
        };

        console.info(stringDirectory["name"]);
        console.info(stringDirectory["address"]);

        expect(stringDirectory["name"]).toBe("Sendi Agustian");
        expect(stringDirectory["address"]).toBe("Jakarta");
    });

    it("interface support extends", () => {
        const employee: Employee = {
            id: 1,
            name: "Sendi",
            division: "IT",
        };

        console.info(employee);

        const manager: Manager = {
            id: 2,
            name: "Sendi",
            division: "IT",
            numberOfEmployee: 10,
        };
    });

    it("interface di simpat pada atribute", () => {
        const person: Person = {
            name: "Sendi",
            sayHello: (name: string): string => {
                return `Hello ${name}, my name is ${person.name}`;
            },
        };

        console.info(person.sayHello("Budi"));

        expect(person.sayHello("Budi")).toBe("Hello Budi, my name is Sendi");
    });

    it("gabungan interface", () => {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: string;
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Sendi",
        };

        console.info(domain);
    });

    it("type assertions", () => {
        const person: any = {
            id: "Sendi",
            age: 23,
        };

        const person2: Person = person as Person;

        // person2.sayHello("Budi"); // error

        console.info(person);
        console.info(person2);
    });
});
