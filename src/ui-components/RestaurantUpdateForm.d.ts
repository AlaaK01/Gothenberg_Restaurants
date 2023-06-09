/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Restaurant } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RestaurantUpdateFormInputValues = {
    name?: string;
    type?: string;
    address?: string;
    phone?: string;
    website?: string;
    imageUrl?: string;
    logoUrl?: string;
    menu?: string;
    hours?: string;
    description?: string;
    serviceOption?: string;
};
export declare type RestaurantUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    logoUrl?: ValidationFunction<string>;
    menu?: ValidationFunction<string>;
    hours?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    serviceOption?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestaurantUpdateFormOverridesProps = {
    RestaurantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    logoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    menu?: PrimitiveOverrideProps<TextFieldProps>;
    hours?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    serviceOption?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RestaurantUpdateFormProps = React.PropsWithChildren<{
    overrides?: RestaurantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    restaurant?: Restaurant;
    onSubmit?: (fields: RestaurantUpdateFormInputValues) => RestaurantUpdateFormInputValues;
    onSuccess?: (fields: RestaurantUpdateFormInputValues) => void;
    onError?: (fields: RestaurantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RestaurantUpdateFormInputValues) => RestaurantUpdateFormInputValues;
    onValidate?: RestaurantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RestaurantUpdateForm(props: RestaurantUpdateFormProps): React.ReactElement;
