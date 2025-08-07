const formatDate = (date: Date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}${mm}${dd}`;
};

const getPastDates = (baseDate: Date, days: number = 7) => {
  return Array.from({ length: days }, (_, i) => {
    const date = new Date(baseDate);
    date.setDate(date.getDate() - i);
    return formatDate(date);
  });
};

const getJson = async (date: string) =>
  (await fetch(`https://boatraceopenapi.github.io/programs/v2/${date}.json`)).json();

export const fetchPrograms = async (baseDate = new Date()) => {
  const dates = getPastDates(baseDate);
  return await Promise.all(dates.map(getJson));
};
