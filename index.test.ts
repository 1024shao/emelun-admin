import {expect ,test} from 'vitest'

function genNumber(min: number, max: number): number[] {
  const result = []
  for (let i = min; i <= max; i++) {
    result.push(i)
  }
  return result
}

test('to bt test',()=>{
  expect(1).toBe(1)
  expect(genNumber(2, 20)).toMatchInlineSnapshot(`
    [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]
  `)
})