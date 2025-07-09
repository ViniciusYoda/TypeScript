const input: string | null = '1';
const a: number = Number(input);

switch (a) {
  case 0:
    console.log(0);
    break;

  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log('2,3');
    break;

  default:
    console.log('Unknown value');
}
