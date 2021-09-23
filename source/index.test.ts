import "jest-extended";

import { hash } from "./index";

test("#hash", () => {
  expect(hash("a").toString("hex")).toStrictEqual("86f7e437faa5a7fce15d1ddcb9eaeaea377667b8");
  expect(hash(Buffer.from("a")).toString("hex")).toStrictEqual("86f7e437faa5a7fce15d1ddcb9eaeaea377667b8");
  expect(hash([Buffer.from("a")]).toString("hex")).toStrictEqual("86f7e437faa5a7fce15d1ddcb9eaeaea377667b8");
});
