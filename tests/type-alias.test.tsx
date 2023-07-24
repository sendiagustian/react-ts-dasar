import { describe, it, expect } from "vitest";
import { Category, Product } from "../src/type-alias";

describe("type-alias", () => {
  it("representasi dari model", () => {
    const category: Category = {
      id: 1,
      name: "Handphone",
      desc: "Smartphone",
    };

    // category.description = "deskripsi category" //error

    const samsungGalaxyM21: Product = {
      id: "1",
      name: "Samsung Galaxy M21",
      price: 3000000,
      category: category,
    };

    const infinixHotPlay10Plus: Product = {
      id: "2",
      name: "Infinix Hot Play 10 Plus",
      price: 2000000,
      category: category,
      desc: "hape ayang yang rusak",
    };

    // product.description = "deskripsi product"; // error

    console.info(category);
    console.info(samsungGalaxyM21);
    console.info(infinixHotPlay10Plus);
  });
});
