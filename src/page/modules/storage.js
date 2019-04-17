import wrapper from '@libs/wrapper'
import { STORAGE_READ, STORAGE_WRITE, STORAGE_DELETE } from '@constants'
import bridge from '../environment/bridge'

export default wrapper({
  install() {
    return bridge.ready()
  },

  async read(key, storageArea) {
    const { value } = await bridge.postMessage({
      action: STORAGE_READ,
      payload: { storageArea, key },
    })

    return value
  },

  async write(key, value, storageArea) {
    await bridge.postMessage({
      action: STORAGE_WRITE,
      payload: { storageArea, key, value },
    })
  },

  async delete(key, storageArea) {
    await bridge.postMessage({
      action: STORAGE_DELETE,
      payload: { storageArea, key },
    })
  },
})
