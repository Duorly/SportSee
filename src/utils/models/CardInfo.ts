export enum CardInfoType {
    Calories = "Calories",
    Proteines = "Proteines",
    Glucides = "Glucides",
    Lipides = "Lipides",
}

export interface CardInfo {
	type: CardInfoType;
	nbGramme?: number;
}