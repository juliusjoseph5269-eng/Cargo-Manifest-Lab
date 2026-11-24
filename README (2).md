# Cargo Manifest Lab

JavaScript functions to normalize and validate cargo manifests.

## Functions

- `normalizeUnits(manifest)`: returns a new manifest with weight in kilograms (1 lb = 0.45 kg) and unit set to `"kg"`. Does not mutate the original.
- `validateManifest(manifest)`: returns an object listing each property as `"Missing"` or `"Invalid"`. Returns `{}` when the manifest is valid.
- `processManifest(manifest)`: logs a validation success message and total weight in kg, or a validation error message and the error object.

## Manifest shape

```js
{
  containerId: 1,                      // positive integer
  destination: "Monterey, California", // non-empty string
  weight: 831,                         // positive number
  unit: "lb",                          // "kg" or "lb"
  hazmat: false                        // boolean
}
```
