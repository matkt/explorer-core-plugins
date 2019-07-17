import * as React from "react";
import { UsdValueBox } from "@alethio/ui/lib/data/box/UsdValueBox";
import styled from "@alethio/explorer-ui/lib/styled-components";
import { IBalanceAreaChartPayload } from "./IBalanceAreaChartPayload";
import { CHART_DATA_KEY } from "./BalanceChartData";
import { EthValueBox } from "@alethio/ui/lib/data/box/EthValueBox";

const Root = styled.div`
    padding: 9px 11px;
    display: flex;
`;

export interface IBalanceChartTooltipTopProps {
    locale: string;
    ethSymbol: string;
    payload: IBalanceAreaChartPayload;
}

export class BalanceChartTooltipTop extends React.Component<IBalanceChartTooltipTopProps> {
    render() {
        return (
            <Root>
                <EthValueBox
                    locale={this.props.locale}
                    wei={this.props.payload.balanceWei}
                    symbol={this.props.ethSymbol}
                    variant="small"
                />
                <UsdValueBox
                    locale={this.props.locale}
                    value={this.props.payload[CHART_DATA_KEY]}
                    variant="small"
                />
            </Root>
        );
    }
}
