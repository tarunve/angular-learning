import { getConfig } from "./config"

describe('when config is retrieved', () => {
    it('correct dev health url', () => {
        const devConfig = getConfig('dev')
        const healthUrl = devConfig['healthUrl']
        expect(healthUrl).toEqual('/health')
    })

    it('correct prod health url', () => {
        const prodConfig = getConfig('prod')
        const healthUrl = prodConfig['healthUrl']
        expect(healthUrl).toEqual('/health')
    })
})