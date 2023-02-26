// ----------------------------------------------
// ray.function.js
// ----------------------------------------------
// RayID is a librray developed by Amirhopssein Mohammadi.
// It can create so many items with different algorythems.
// It this case, we just create 2 instance.
// Lowe items, and digits.

import RayID from "rayid";

const ray = new RayID("lower");
const intRay = new RayID("digit");

export { ray, intRay };
