import { describe, expect, it } from "vitest";
import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
  it("support null & undefined", function () {
    expect(sayHello(undefined)).toBe("Hello");
    expect(sayHello(null)).toBe("Hello");
    expect(sayHello("Sendi")).toBe("Hello Sendi");
  });
});
