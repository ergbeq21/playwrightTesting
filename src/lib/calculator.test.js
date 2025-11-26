 
import { multiplier, adder, divider, subtractor } from "./calculator";
import { expect, test } from "vitest";


test('Multiplication Test', ()=>{
    let result = multiplier(4,3);
    expect(result).toEqual(12);
})


test('Addition Test', ()=>{
    let result = adder(4,3);
    expect(result).toEqual(7);
})

test('Division Test', ()=>{
    let result = divider(10,2);
    expect(result).toEqual(5);
})

test('Subtraction Test', ()=>{
    let result = subtractor(4,3);
    expect(result).toEqual(1);
})