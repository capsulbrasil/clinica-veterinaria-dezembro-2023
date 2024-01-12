import { init, makeRouter } from 'sonata-api'
export * as collections from './collections'

const router = makeRouter()

router.GET('/hello-world', (_context) => {
  return {
    message: 'Hello, world!'
  }
})

router.GET('/getAnimalsbyDocument',async context => {
  
})

init(null, (context) => {
  return router.install(context)
})
