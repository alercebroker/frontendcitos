import { jdToDate } from '../../../utils/AstroDates';

function formatTooltip(params: any) {
  const colorSpan = (color: any) =>
    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
    color +
    '"></span>';
  const rowTable = (col1: any, col2: any, col3: any) =>
    "<tr> <td>" +
    col1 +
    "</td> <td>" +
    col2 +
    "</td> <td>" +
    col3 +
    "</td> </tr>";
  const calendarIcon = (color: any) =>
    `<span class="mdi mdi-alarm" style='font-size:13px; color: ${color};'></span>`;
  const serie = params[0].seriesName;
  let table = "<table> <tr> <th></th> <th></th> <th></th></tr>";
  if (serie === "r non-detections" || serie === "g non-detections") {
    table += rowTable(
      colorSpan(params[0].color),
      params[0].seriesName + ":",
      params[0].value[1]
    );
    table += rowTable(
      calendarIcon(params[0].color),
      "MJD: ",
      params[0].value[0]
    );
    table += rowTable(
      calendarIcon(params[0].color),
      "Date: ",
      jdToDate(params[0].value[0]).toUTCString().slice(0, -3) + "UT"
    );
    return table + "</table>";
  } else if (serie === "r" || serie === "g") {
    const isdiffpos = params[0].value[4] === 1 ? "(+)" : "(-)";
    const mag = params[0].value[1].toFixed(3);
    const err = params[0].value[3].toFixed(3);
    table += rowTable("", "candid: ", params[0].value[2]);
    table += rowTable(
      colorSpan(params[0].color),
      params[0].seriesName + ": ",
      `${isdiffpos} ${mag} ± ${err}`
    );
    table += rowTable(
      calendarIcon(params[0].color),
      "MJD: ",
      params[0].value[0]
    );
    table += rowTable(
      calendarIcon(params[0].color),
      "Date: ",
      jdToDate(params[0].value[0]).toUTCString().slice(0, -3) + "UT"
    );
    table += rowTable("", "click to change stamp", "");
    return table + "</table>";
  }
}

export default formatTooltip;