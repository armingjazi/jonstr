import test from 'ava'
import { jonstr } from '../lib'

test('renders a simple object to string', t => {
  const obj = {
    name: 'armin',
    family: 'jazi'
  }

  t.assert(jonstr(obj) === 'armin, jazi')
})
