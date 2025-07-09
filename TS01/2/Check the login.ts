const userName: string | null = 'Admin';

if (userName === 'Admin') {
  const pass: string | null = 'TheMaster';

  if (pass === 'TheMaster') {
    console.log('Welcome!');
  } else if (pass === '' || pass === null) {
    console.log('Canceled');
  } else {
    console.log('Wrong password');
  }

} else if (userName === '' || userName === null) {
  console.log('Canceled');
} else {
  console.log("I don't know you");
}
