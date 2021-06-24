// tslint:disable:no-string-literal
import { IBlockDetails } from "./IBlockDetails";
import { BigNumber } from "app/util/BigNumber";
import { TxDetailsReader } from "app/eth-lite/data/tx/details/TxDetailsReader";

export class BlockDetailsReader {
    constructor(private txDetailsReader: TxDetailsReader) {
    }
    read(data: any) {
        let blockNumber = Number(data["number"]);

        let block: IBlockDetails = {
            id: blockNumber,
            creationTime: Number(data["timestamp"]),
            hash: data["hash"],
            parentHash: data["parentHash"],
            parentId: blockNumber - 1,
            nonce: data["nonce"],
            byteSize: Number(data["size"]),
            sha3uncles: data["sha3Uncles"],
            beneficiaryAddress: data["miner"],
            gasLimit: new BigNumber(data["gasLimit"]),
            gasUsed: new BigNumber(data["gasUsed"]),
            difficulty: new BigNumber(data["difficulty"]),
            extraData: data["baseFeePerGas"],
            logsBloom: data["logsBloom"].replace("0x", ""),
            mixHash: data["mixHash"],
            uncles: data["uncles"] || [],
            transactionCount: Number(data["transactions"].length),
            transactions: ((data["transactions"] || []) as any[]).map(txData => {
                return this.txDetailsReader.read(txData);
            })
        };

        return block;
    }
}
