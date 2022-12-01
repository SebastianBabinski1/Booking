const defaultGuestsOptions = {
  adult: 1,
  children: 0,
  room: 1,
};

const today = new Date();
const tommorow = new Date();

tommorow.setDate(tommorow.getDate() + 1);

const defaultGuestsDates = [
  {
    startDate: today,
    endDate: tommorow,
    key: "selection",
  },
];

export { defaultGuestsOptions, defaultGuestsDates };
