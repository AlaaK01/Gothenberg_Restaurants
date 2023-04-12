/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Meal } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandardCardVariant2OverridesProps = {
    StandardCardVariant2?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 98122"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StandardCardVariant2Props = React.PropsWithChildren<Partial<FlexProps> & {
    meal?: Meal;
} & {
    overrides?: StandardCardVariant2OverridesProps | undefined | null;
}>;
export default function StandardCardVariant2(props: StandardCardVariant2Props): React.ReactElement;
