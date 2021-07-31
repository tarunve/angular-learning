import * as DEV_CONFIG from './dev/dev.json'
import * as PROD_CONFIG from './prod/prod.json'

export const getConfig = (env : string) => {
    const configMap = {
        dev : {
            ...DEV_CONFIG
        },
        prod : {
            ...PROD_CONFIG
        }
    }
    return configMap[env];
}