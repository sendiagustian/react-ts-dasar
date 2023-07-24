import { describe, it, expect } from "vitest";
import { Customer, Tier } from "../src/type-enum";

describe("enum", () => {
  it("typedata enum", () => {
    const customer: Customer = {
      id: 1,
      name: "Sendi Agustian",
      tier: Tier.PLATINUM,
    };

    console.info(customer);
  });
});
