import test from 'ava'
import { jonstr } from '../lib'

test('renders a simple object to string', t => {
  const obj = {
    name: 'armin',
    family: 'jazi'
  }

  t.assert(jonstr(obj, 'name, family') === 'armin, jazi')
})

test('renders a nested object to string', t => {
  const obj = {
    street: 'elmstreet',
    number: 10,
    city: 'Cologne',
    country: 'Germany'
  }

  t.assert(jonstr(obj, 'street, number, city, country') === 'elmstreet, 10, Cologne, Germany')
})
