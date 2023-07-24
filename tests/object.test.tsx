import { describe, it, expect } from "vitest";

describe("object", () => {
  it("untuk kasus sederhana", () => {
    const sendi: { id: number; name: string; hobbies?: string[] } = {
      id: 1,
      name: "Sendi Agustian",
    };

    const ayang: { id: number; name: string; hobbies?: string[] } = {
      id: 1,
      name: "Sendi Agustian",
      hobbies: ["Jajan", "Tidur", "Main"],
    };

    console.info(sendi);
    console.info(ayang);

    sendi.id = 2;
    sendi.name = "Agustian Sendi";
    // person.desc = "desktipsi person" // error

    console.info(sendi);
  });
});
