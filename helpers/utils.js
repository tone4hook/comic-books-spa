/*
 * @param dateStr String
 */
export const checkDateStr = dateStr => {
  if (!typeof dateStr === "string") return false;
  if (!dateStr.length === 10) return false;
  if (isNaN(Date.parse(dateStr))) return false;
  return true;
};

/*
 * @param item Any
 */
export const isObject = item => {
  return typeof item === "object" && item !== null;
};

/*
 * @param obj Object
 * @param prop String
 */
export const hasProperty = (obj, prop) => {
  if (!isObject(obj) || typeof prop !== "string") return false;
  return obj.hasOwnProperty(prop);
};

/*
 * @param res Object
 */
export const formatComicVineResponse = res => {
  if (!isObject(res)) return null;
  if (res.error !== "OK") return null;
  if (!hasProperty(res, "results")) return null;
  if (res.results.length < 1) return null;
  return res.results;
};
