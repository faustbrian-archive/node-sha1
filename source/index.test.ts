import { test } from "uvu";
import { is } from "uvu/assert";

import { hash } from "./index";

test("from string", () => {
  is(hash("a").toString("hex"), "86f7e437faa5a7fce15d1ddcb9eaeaea377667b8");
});

test("from buffer", () => {
  is(
    hash(Buffer.from("a")).toString("hex"),
    "86f7e437faa5a7fce15d1ddcb9eaeaea377667b8",
  );
});

test("from buffer array", () => {
  is(
    hash([Buffer.from("a")]).toString("hex"),
    "86f7e437faa5a7fce15d1ddcb9eaeaea377667b8",
  );
});

test.run();
