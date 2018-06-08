import { resolve } from 'path'
// FIXME: v-upしたらなおす。
import { Nuxt, Builder } from 'nuxt-edge'
import { JSDOM } from 'jsdom'
import test from 'ava'

let nuxt = null

test.before(async () => {
  const config = {
    dev: false,
    rootDir: resolve(__dirname, '../../')
  }
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  await nuxt.listen(4000, 'localhost')
}, 30000)

test('foo()', async t => {
  const context = {}
  const {html} = await nuxt.renderRoute('/', context)
  t.pass()
})

test.after('Closing server and nuxt.js', t => {
  nuxt.close()
})