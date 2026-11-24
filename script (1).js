function normalizeUnits(manifest) {
  const copy = { ...manifest };

  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45;
    copy.unit = "kg";
  }

  return copy;
}

function validateManifest(manifest) {
  const errors = {};

  const validators = {
    containerId: (v) => Number.isInteger(v) && v > 0,
    destination: (v) => typeof v === "string" && v.trim().length > 0,
    weight: (v) => typeof v === "number" && !Number.isNaN(v) && v > 0,
    unit: (v) => v === "kg" || v === "lb",
    hazmat: (v) => typeof v === "boolean",
  };

  for (const key in validators) {
    if (!(key in manifest)) {
      errors[key] = "Missing";
    } else if (!validators[key](manifest[key])) {
      errors[key] = "Invalid";
    }
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const { weight } = normalizeUnits(manifest);
    console.log(`Total weight: ${weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}
