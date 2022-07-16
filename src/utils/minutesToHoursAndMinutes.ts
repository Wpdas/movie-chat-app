const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

const minutesToHoursAndMinutes = (totalMinutes: number) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${hours}h ${padTo2Digits(minutes)}m`;
};

export default minutesToHoursAndMinutes;
