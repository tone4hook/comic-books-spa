import Weeks from "./Weeks";
import { checkDateStr } from "./utils";

/*
 * @param startDate String
 * @param endDate String
 * @param offset Number
 */
const comicVine = (startDate = null, endDate = null, offset = 0) => {
  const base =
    "https://www.comicvine.com/api/issues/?api_key=ef11eadc3dcaf6a4b84c9f7b0b202bdeaebb8f11";
  const fieldList =
    "&field_list=image,description,id,issue_number,store_date,volume";
  const storeDates = "&filter=store_date:";
  const offsetBy = "&offset=";
  const format = "&limit=20&sort=store_date:desc&format=jsonp&json_callback=";
  if (
    startDate === null ||
    endDate === null ||
    (!checkDateStr(startDate) || !checkDateStr(endDate))
  ) {
    const date = new Date();

    const dateString = date.toISOString().substring(0, 10);

    const weeks = new Weeks(dateString); // Weeks class instance

    weeks.setWeeks(); // Weeks setter

    const releaseWeeks = weeks.getWeeks(); // Weeks getter
    startDate = releaseWeeks[0].start;
    endDate = releaseWeeks[0].end;
  }
  return `${base}${fieldList}${storeDates}${startDate}|${endDate}${offsetBy}${offset}${format}`;
};

export default comicVine;
