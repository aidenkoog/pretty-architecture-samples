import Constants from '../../../utils/Constants.js'
import { logDebug } from '../../../utils/Logger.js'
import BluetoothRepository from '../../../data/repositories/BluetoothRepository.js'

const LOG_TAG = Constants.LOG.BT_USECASE_LOG

const GetUuidListUseCase = () => {

    const { getUuidList } = BluetoothRepository

    /**
     * Execute the use case of getting uuid list. 
     * @param {Any} peripheral 
     * @returns {Any}
     */
    executeGetUuidListUseCase = (peripheral) => {
        logDebug(LOG_TAG, ">>> triggered executeGetUuidListUseCase")

        const uuidList = getUuidList(peripheral)
        logDebug(LOG_TAG, "<<< succeeded to execute getUuidList: " + uuidList)
        return uuidList
    }
    return { executeGetUuidListUseCase }
}

/**
 * export bluetooth usecase.
 */
export default GetUuidListUseCase