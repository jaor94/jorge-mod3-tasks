import { Task1 } from "../src/task";
import { Task2 } from "../src/task2";
import { Task3 } from "../src/task3";

test('task check palindromos', () => {
    //TDD 
    //const input1 = 'ANA LAVA LANA';
    //const task1 = jest.fn((input: string) => true);
    const t1 = new Task1();
    const actual = t1.esPalindromo('ANA LAVA LANA');
    //actual
    //const actual = task1(input1);
    
    //expected ffff
    const expc = true;

    expect(actual).toEqual(expc);
    //expect(actual).toBeTruthy()
});

test('task mayor en array', () => {
    //TDD 
    //const input2 = [2, 88, 65, 17, 95, 39];
    //const task2 = jest.fn((input: number[]) => 95);
    const t2 = new Task2();
    //const calc = new Calculadora();

    //actual
    const actual = t2.mayor([2, 88, 65, 17, 95, 39]);
    
    //expected ffff
    const expc = 95;

    expect(actual).toEqual(expc);
    //expect(actual).toBeTruthy()
});

test('task separar string en array', () => {
    //TDD 
    //const input3 = 'Hello';
    //const task3 = jest.fn((input: string) => ['H', 'e', 'l', 'l', 'o']);
    //const calc = new Calculadora();
    const t3 = new Task3();
    //actual
    //const actual = task3(input3);
    const actual = t3.separar('Hello');
    //expected ffff
    const expc = ['H', 'e', 'l', 'l', 'o'];

    expect(actual).toEqual(expc);
    //expect(actual).toBeTruthy()
});

