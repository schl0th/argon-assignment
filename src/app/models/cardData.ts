interface CardData {
    title: string,
    amount: string,
    footerText: string,
    increment: boolean,
    incAmount: number
}

export interface CardDataList extends Array<CardData> {

}