import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const data = [];
  const digit = [19, 20, 34];
  for (const n of digit) {
    const newobj = new ClassRoom(n);
    data.push(newobj);
  }
  return data;
}
