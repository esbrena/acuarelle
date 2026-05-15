const FROM = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
const TO = "aaaaeeeeiiiioooouuuunc------";

export function slugify(value: string): string {
  const normalized = value
    .trim()
    .toLowerCase()
    .split("")
    .map((char) => {
      const index = FROM.indexOf(char);
      return index >= 0 ? TO[index] : char;
    })
    .join("");

  return normalized
    .replace(/&/g, " y ")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
