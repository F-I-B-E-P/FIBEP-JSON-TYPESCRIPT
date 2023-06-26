export interface AdditionalContent {
    Type: string;
    Format: string;
    ContentURL: string;
    FileName: string;
    Base64data: string;
}
export interface MatchingWord {
    StartTextPosition: number,
    EndTextPosition: number,
    Value: string,
    Field: string
}

export interface ShortArticle {
    Provider: string;
    ItemID: number;
    Country: string;
    Language: string;
    SourceID: number;
    SourceName: string;
    PublishTime: string;
    Headline: string;
    Lead: string;
    Text: string;
    SourceChannel: string;
    ContentURL: string;
}

export interface LongArticle {
    Provider: string;
    ContractID: string;
    CustomerID: string;
    ProfileID: string;
    ItemID: string;
    Country: string;
    Language: string;
    SourceChannel: string;
    SourceID: number;
    SourceName: string;
    SourceID2: number;
    SourceName2: string;
    PublishTime: string;
    Headline: string;
    Author: string;
    Lead: string;
    Text: string;
    TextType: string;
    ContentURL: string;
    MatchingWords: Array<MatchingWord>;
}

export interface ArticleWithAttachment {
    "Provider": string;
    "ItemID": string;
    "Country": string;
    "Language": string;
    "SourceChannel": string;
    "SourceID": number;
    "SourceName": string;
    "PublishTime": string;
    "Headline": string;
    "Author": string;
    "AdditionalContent": Array<AdditionalContent>;
}

export type Article = ShortArticle | LongArticle | ArticleWithAttachment;