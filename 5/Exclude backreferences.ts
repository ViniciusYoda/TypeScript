interface Person2 {
  name: string;
}

interface Room {
  number: number;
  occupiedBy?: Meetup;
}

interface Meetup {
  title: string;
  occupiedBy: Person2[];
  place: Room;
  self?: Meetup;
}

let room: Room = {
  number: 23
};

let meetup: Meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

const json = JSON.stringify(meetup, function replacer(this: any, key: string, value: any): any {
  // 'this' here is the object containing the key
  // Se não for a raiz (key !== "") e value é o próprio meetup, retorna undefined para evitar ciclo
  return (key !== "" && value === meetup) ? undefined : value;
});

alert(json);

/*
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
