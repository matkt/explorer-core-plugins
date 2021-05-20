// tslint:disable:no-string-literal
import { ITxDetails } from "./ITxDetails";
import { BigNumber } from "app/util/BigNumber";

export class TxDetailsReader {
    read(data: any) {
        let tx: ITxDetails = {
            hash: data["hash"],
            from: data["from"],
            to: data["to"] ? data["to"] : "",
            value: new BigNumber(data["value"]),
            nonce: Number(data["nonce"]),
            gasLimit: new BigNumber(data["gas"]),
            gasPrice: new BigNumber(data["gasPrice"]),
            payload: data["input"] || void 0,
            block: {
                id: Number(data["blockNumber"])
            },
            type: new BigNumber(data["type"]),
            maxPriorityFeePerGas: new BigNumber(data["maxPriorityFeePerGas"]),
            maxFeePerGas: new BigNumber(data["maxFeePerGas"]),
            txIndex: Number(data["transactionIndex"])
        };

        return tx;
    }
}
