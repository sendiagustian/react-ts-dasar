import { describe, expect, it } from "vitest";

describe("type-data", () => {
  it("should must declare", () => {
    let name: string = "Sendi Agustian";
    let age: number = 23;
    let married: boolean = true;

    console.info(name);
    console.info(age);
    console.info(married);

    // name = 10; //error
    // age = "ok"; //error
    // married = 1; //error

    /*
            Kelemahan typescript ini ketika kompilasi ke js dia tidak membaca error perubahan type data
            padahal seharusnya error di type script tp tidak error pada saat di kompilasi.
            Karena ketika di kompilasi hasil nya jadi javascript tapi file typescript nya di hapus.
            
            // pembuktian
            jika line error di atas di uncoment lalu coba di lakukan test hasil test tidak menunjukan error
        */
  });
});
