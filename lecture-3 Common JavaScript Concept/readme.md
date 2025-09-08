1.Difference between primitive and non permitive data type in js
ANS:
| Feature           | Primitive                | Non-Primitive (Reference)  |
| ----------------- | ------------------------ | -------------------------- |
| **Type**          | Basic, single values     | Objects (collections)      |
| **Stored as**     | Value                    | Reference (memory address) |
| **Mutable?**      | ❌ Immutable             |  ✅ Mutable               |
| **Examples**      | string, number, boolean… | Object, Array, Function…   |
| **Copy behavior** | Copy by **value**        | Copy by **reference**      |
-----------------------------------------------------------------------------

2.Difference between Null and Undefined

| Feature         | `undefined`                     | `null`                    |
| --------------- | ------------------------------- | ------------------------- |
| **Meaning**     | Variable declared but no value  | Explicit empty value      |
| **Assigned by** | JavaScript (default)            | Developer (manually)      |
| **Type**        | `undefined`                     | `object` (legacy quirk)   |
| **Use case**    | Missing value / not initialized | Intentional empty / reset |


3.Difference between double equal and tripple equal

| Feature           | `==` (Double Equal)   | `===` (Triple Equal)        |
| ----------------- | --------------------- | --------------------------- |
| **Name**          | Loose equality        | Strict equality             |
| **Checks**        | Value only            | Value + Type                |
| **Type coercion** | ✅ Yes (auto converts) | ❌ No (exact match required) |
| **Safer to use?** | ❌ Can cause confusion | ✅ Recommended in most cases |
