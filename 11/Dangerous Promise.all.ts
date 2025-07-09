function customPromiseAllWait<T>(promises: (PromiseLike<T> | T)[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = new Array(promises.length);
    let settledCount: number = 0;
    let firstError: any = null; // Use 'any' since error types can vary

    // If there are no promises, resolve immediately with an empty array.
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          results[index] = result;
        })
        .catch(error => {
          // Store only the first error encountered.
          if (firstError === null) {
            firstError = error;
          }
        })
        .finally(() => {
          settledCount++;
          // When all promises have settled, either reject with the first error
          // or resolve with all results.
          if (settledCount === promises.length) {
            if (firstError !== null) {
              reject(firstError);
            } else {
              resolve(results);
            }
          }
        });
    });
  });
}

function allOrAggregateError<T>(promises: (PromiseLike<T> | T)[]): Promise<T[]> {
  return Promise.allSettled(promises).then(results => {
    const errors: any[] = [];
    const values: T[] = [];

    results.forEach((res, i) => {
      if (res.status === 'fulfilled') {
        values[i] = res.value;
      } else {
        errors.push(res.reason);
      }
    });

    if (errors.length > 0) {
      // If there are errors, throw an AggregateError containing all of them.
      throw new AggregateError(errors, 'One or more promises failed');
    }

    // Otherwise, return the fulfilled values.
    return values;
  });
}