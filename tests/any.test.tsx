import { describe, expect, it } from "vitest";

describe("any", () => {
  it("should support any (data bebas tidak di lakukan pengecekan type)", () => {
    const person: any = {
      id: 1,
      name: "Sendi Agustian",
      age: 23,
    };

    person.age = 32;
    person.address = "Jakarta";

    console.info(person);
  });
});
