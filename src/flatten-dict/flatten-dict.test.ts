import chai from 'chai'
import { flattenDictionary } from './flatten-dict'
chai.should()

describe(`when flattening a dictionary`, () => {
  it(`should return a flattened dictionary`, () => {
    const input = {
      key: 3,
      foo: {
        a: 5,
        bar: {
          baz: 8,
        },
      },
    }

    const expectedOutput = {
      'key': 3,
      'foo.a': 5,
      'foo.bar.baz': 8,
    }

    const result = flattenDictionary(input)
    result.should.eql(expectedOutput)
  })
})
