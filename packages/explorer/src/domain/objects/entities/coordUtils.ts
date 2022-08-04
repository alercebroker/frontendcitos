export const decToHms = (deg: number): string => {
  const sign = deg < 0 ? "-" : "+";
  let dec = Math.abs(deg);
  deg = Math.floor(dec);
  const decM = Math.abs(Math.floor((dec - deg) * 60));
  const decS = ((Math.abs((dec - deg) * 60) - decM) * 60).toFixed(2);
  return `${sign}${deg}:${decM}:${decS}`;
};

export const raToHms = (deg: number): string => {
  const sign = deg < 0 ? "-" : "\xA0";
  const ra = Math.abs(deg);
  const raH = Math.floor(ra / 15);
  const raM = Math.floor((ra / 15 - raH) * 60);
  const raS = (((ra / 15 - raH) * 60 - raM) * 60).toFixed(3);
  return `${sign}${raH}:${raM}:${raS}`;
};
