export const getRandomPosition = (): string => {
  const positions = [
    "Workplace Health and Safety Specialist",
    "Talent Acquisition Manager – Customer Support",
    "Aircraft Development Specialist",
    "Quality Assurance, Safety & Projects Manager",
    "Department Officer",
    "Senior Paint Hall Mechanic",
    "Cabin Crew Training Manager",
  ];
  return positions[Math.floor(Math.random() * positions.length)];
};
export const getLeaderPosition = (): string => {
  const positions = [
    "Chairman and Chief Executive, Layon Air Airline & Group",
    "President, Layon Air Airline",
    "Chief Operating Officer, Layon Air Airline",
    "Chief Commercial Officer, Layon Air Airline",
    "Chief Financial Officer, Layon Air Group",
  ];
  return positions[Math.floor(Math.random() * positions.length)];
};
