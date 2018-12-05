let Export = {}
Export.TimeFormat = function (str, format) {
  let d = new Date(str);
  let year = d.getFullYear();
  let month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
  let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
  let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  let second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
  if (format == 'HH:MM:SS') {
    return [hour, minute, second].join(':');
  } else if (format == 'YY-MM-DD') {
    return [year, month, day].join('-');
  } else if (format == ',') {
    return [year, month, day].join(',') + "," + [hour, minute, second].join(',');
  } else {
    return [year, month, day].join('-') + " " + [hour, minute, second].join(':');
  }
}
export default Export
