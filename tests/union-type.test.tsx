import { describe, it, expect } from "vitest";

describe("union-type", () => {
  it("type data bisa berubah", () => {
    let sample: string | number | boolean = "Sendi Agustian";

    sample = 23;
    sample = true;

    console.info(sample);

    /**
     * dalam penggunaan union type data ini hati hati dalam memanggil methode terhadap variable tersebut
     * agar aman lebih baik melakukan pengecekan type data terlebih dahulu sebelum menggunakan methode pada variable.
     */
  });

  // contoh fungsi pengecekan
  it("test pengecekan type pada union", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process(100)).toBe(102);
    expect(process("sendi")).toBe("SENDI");
    expect(process(false)).toBe(true);
  });
});
