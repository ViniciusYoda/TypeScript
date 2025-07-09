class HttpError extends Error {
  // The 'response' property holds the Fetch API Response object.
  public response: Response;

  constructor(response: Response) {
    // Call the parent Error constructor with a descriptive message.
    super(`${response.status} for ${response.url}`);
    // Set the name of the error for easier identification.
    this.name = 'HttpError';
    // Store the actual Response object for further inspection if needed.
    this.response = response;
  }
}

async function loadJson2(url: string): Promise<any> {
  const response: Response = await fetch(url); // Fetch the URL.
  if (response.status === 200) {
    return response.json(); // If status is 200 (OK), parse and return the JSON.
  } else {
    // If not OK, throw a custom HttpError.
    throw new HttpError(response);
  }
}

// Function to demonstrate fetching a GitHub user until a valid one is found.
async function demoGithubUser(): Promise<any> {
  let user: any; // 'user' can be of any type, as its structure depends on the API response.

  while (true) {
    // Prompt the user for a GitHub username. 'prompt' is a browser function.
    const name: string | null = prompt("Enter a name?", "iliakan");

    // If the user cancels the prompt, break the loop.
    if (name === null) {
      alert("User input cancelled.");
      return; // Exit the function.
    }

    try {
      // Attempt to load JSON data for the given username.
      user = await loadJson2(`https://api.github.com/users/${name}`);
      break; // If successful, exit the loop.
    } catch (err: unknown) { // Catch any errors during the fetch or JSON parsing.
      // Check if the error is an instance of HttpError and if it's a 404 (Not Found).
      if (err instanceof HttpError && err.response.status === 404) {
        alert("No such user, please reenter."); // Inform the user and loop continues.
      } else {
        // If it's an unknown error or a different HttpError, rethrow it.
        throw err;
      }
    }
  }

  // Once a valid user is found, display their full name.
  alert(`Full name: ${user.name}.`);
  return user; // Return the user object.
}

// Call the main demo function.
demoGithubUser();