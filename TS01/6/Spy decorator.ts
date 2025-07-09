type SpyFunction<T extends (...args: any[]) => any> = T & { calls: Parameters<T>[] };

function spy<T extends (...args: any[]) => any>(func: T): SpyFunction<T> {
    function wrapper(this: any, ...args: Parameters<T>): ReturnType<T> {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [] as Parameters<T>[];

    return wrapper as SpyFunction<T>;
}

// Exemplo de função para testar o spy
function sum3(a: number, b: number): number {
    return a + b;
}

// Usando a função spy
let spySum = spy(sum3);

spySum(1, 2);
spySum(3, 4);

console.log(spySum.calls); // [[1, 2], [3, 4]]
