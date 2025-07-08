const input: string | null = '1';

if (input !== null) {
    const value: number = Number(input);

    if (value > 0) {
        console.log(1);
    } else if (value < 0) {
        console.log(-1);
    } else {
        console.log(0);
    }
} else {
    console.log('No input provided');
}
