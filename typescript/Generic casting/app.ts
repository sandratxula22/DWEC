//Genéricos
function identity<T, S>(arg: T, arg2: S): T{
    return arg;
}

const str  = identity<string, boolean>('one', true);
const bool = identity<boolean, number>(true, 23);
const num = identity<number, string>(1, "hola");

class Generic<M>{
    public items: M[] = [];
}

const inst = new Generic<number>();
inst.items.push(1);
const inst2 = new Generic<string>();
inst2.items.push("sandra");

//Casting
type Person = {
    name: string;
}
const object = {
    name: "John",
} as Person;

const item = (1 as any) as string;