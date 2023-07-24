/**
 * type data enum harus di definisikan nilai asliny agar lebih aman value yang di harapkannya sama.
 */

export enum Tier {
  SILFER = "SILFER",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

export type Customer = {
  id: number;
  name: string;
  tier: Tier;
};
