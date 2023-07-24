import { describe, expect, it } from "vitest";

describe("array", () => {
  it("array test", () => {
    const names: string[] = ["Sendi", "Agustian"];
    const ages: number[] = [23, 24, 25];

    console.info(names);
    console.info(ages);
  });

  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];

    // hobbies[0] = "Main Game"; //error

    console.info(hobbies[0]);
    console.info(hobbies[1]);
  });

  it("should support tupe (array yang sudah di tentukan)", () => {
    const person: readonly [string, string, number] = ["Sendi", "Agustian", 23];
    console.info(person);

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
