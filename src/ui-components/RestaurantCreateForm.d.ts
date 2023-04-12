/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RestaurantCreateFormInputValues = {
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
export declare type RestaurantCreateFormValidationValues = {
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
export declare type RestaurantCreateFormOverridesProps = {
    RestaurantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type RestaurantCreateFormProps = React.PropsWithChildren<{
    overrides?: RestaurantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RestaurantCreateFormInputValues) => RestaurantCreateFormInputValues;
    onSuccess?: (fields: RestaurantCreateFormInputValues) => void;
    onError?: (fields: RestaurantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RestaurantCreateFormInputValues) => RestaurantCreateFormInputValues;
    onValidate?: RestaurantCreateFormValidationValues;
} & React.CSSProperties>;
export default function RestaurantCreateForm(props: RestaurantCreateFormProps): React.ReactElement;
