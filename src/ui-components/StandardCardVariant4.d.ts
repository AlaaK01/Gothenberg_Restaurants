/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandardCardVariant4OverridesProps = {
    StandardCardVariant4?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 98122"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StandardCardVariant4Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: StandardCardVariant4OverridesProps | undefined | null;
}>;
export default function StandardCardVariant4(props: StandardCardVariant4Props): React.ReactElement;
