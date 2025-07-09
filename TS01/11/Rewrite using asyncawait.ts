async function loadJson(url: string): Promise<any> { // (1)
  let response: Response = await fetch(url); // (2)

  if (response.status === 200) {
    let json: any = await response.json(); // (3)
    return json;
  }

  throw new Error(String(response.status));
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404 (4)