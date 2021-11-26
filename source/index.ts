import parseJson from "parse-json";
import { z } from "zod";

const json = '{"foo": true}';
const obj = parseJson(json);

const Type = z.object({
  foo: z.boolean(),
});

try {
  let res = Type.parse(obj);
  console.log(res);
} catch (error) {
  console.log(error);
}
