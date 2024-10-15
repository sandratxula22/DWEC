//si esta entre el intervalo
console.log(/^[0-9]/.test(1));//true
console.log(/[0-9]/.test("abc1"));//true

//si contiene alguna
console.log(/[xyz]/.test("zyx"));//true
console.log(/[xyz]/.test("Z"));//false
console.log(/[aZ]/.test("hol"));//false
console.log(/[aZ]/.test("holZ"));//true

//si no está en el intervalo
console.log(/[^0-9]/.test("a"));//true
console.log(/[^0-9]/.test(1));//false

//si no contiene alguna
console.log(/[^xyz]/.test("zyx"));//false
console.log(/[^xyz]/.test(0));//true


//empieza por hello
console.log(/^hello/.test('hola mundo'));//false

//empieza por h
console.log(/^h/.test('hola mundo'));//true

//empieza por h con carácteres de por medio y acaba en o
console.log(/^h.*o$/.test('hola mundo'));//true

//el . funciona como un caracter cualquiera
console.log(/^h..o$/.test('holo'));//true
console.log(/^h.o$/.test('holo'));//false

//el * indica que ese carácter esta 0 o n veces (el asterisco solo no sirve)
console.log(/h*/.test("a"));//true

//el + indica que ese carácter esta 1 o más veces
console.log(/h+/.test("hhhh"));//true

// \d = [0-9]
console.log(/\d/.test(100));//true

// \D = [0-9]
console.log(/\D/.test(6));//false

//empieza por a y tiene 0 o 1 dígitos
console.log(/^a\d?/.test("abc"));//true
console.log(/^a\d?/.test("ab3"));//true

//{3} significa que tiene que aparecer 3 veces
console.log(/\d{3}/.test("33a"));//false
console.log(/\d{3}/.test("h334a"));//true
console.log(/^h\d{3}a$/.test("h334a"));//true
console.log(/^h\d{3}a$/.test("h334ba"));//false

//{3,} significa que tiene que aparecer al menos 3 veces
console.log(/[a-c]{3,}/.test("abadcaaaa"));//true
console.log(/^h[a-c]{3,}x$/.test("habadcaaaax"));//false  (tiene más cosas en medio)

//{2,3}  significa que tiene que aparecer de 2 a 3 veces
console.log(/[a-c]{2,3}/.test("a"));//false
console.log(/[a-c]{2,3}/.test("aa"));//true
console.log(/^h[a-c]{2,3}x$/.test("habadcaaaax"));//false
console.log(/^h[a-c]{2,3}x$/.test("habx"));//true

console.log(/(abc){2}(.\d)/.test("--abcabcx4-"));//true

const result = '--abcabccx4--'.match(/(abc){2}.\d/);
console.log()