/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StandardCardVariant2Props } from "./StandardCardVariant2";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MealsCollectionOverridesProps = {
    MealsCollection?: PrimitiveOverrideProps<CollectionProps>;
    StandardCardVariant2?: StandardCardVariant2Props;
} & EscapeHatchProps;
export declare type MealsCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => StandardCardVariant2Props;
} & {
    overrides?: MealsCollectionOverridesProps | undefined | null;
}>;
export default function MealsCollection(props: MealsCollectionProps): React.ReactElement;
