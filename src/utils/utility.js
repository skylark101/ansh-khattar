const MONTH_MAP = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};


const parsePeriodDate = (value, isEnd = false) => {
  if (!value) return null;

  const parts = value.trim().split(" ");

  if (parts.length === 2 && MONTH_MAP[parts[0].toLowerCase()] !== undefined) {
    return new Date(
      parseInt(parts[1], 10),
      MONTH_MAP[parts[0].toLowerCase()],
      isEnd ? 28 : 1,
    );
  }

  const year = parseInt(value, 10);
  if (!isNaN(year)) {
    return new Date(year, isEnd ? 11 : 0, isEnd ? 31 : 1);
  }

  return null;
};

export const getDurationFromPeriod = (period) => {
  if (!period || !period.includes("-")) return "";

  const [startRaw, endRaw] = period.split("-").map((p) => p.trim());

  const startDate = parsePeriodDate(startRaw);
  const endDate = /present/i.test(endRaw)
    ? new Date()
    : parsePeriodDate(endRaw, true);

  if (!startDate || !endDate) return "";

  let totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth() + 1);

  if (totalMonths < 0) totalMonths = 0;

  if (totalMonths < 12) {
    return `${totalMonths} mon`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return months === 0 ? `${years} yrs` : `${years} yrs ${months} mon`;
};
