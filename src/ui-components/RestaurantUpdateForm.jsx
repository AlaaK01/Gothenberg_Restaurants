/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Restaurant } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RestaurantUpdateForm(props) {
  const {
    id: idProp,
    restaurant,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    type: "",
    address: "",
    phone: "",
    website: "",
    imageUrl: "",
    logoUrl: "",
    menu: "",
    hours: "",
    description: "",
    serviceOption: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [address, setAddress] = React.useState(initialValues.address);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [logoUrl, setLogoUrl] = React.useState(initialValues.logoUrl);
  const [menu, setMenu] = React.useState(initialValues.menu);
  const [hours, setHours] = React.useState(initialValues.hours);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [serviceOption, setServiceOption] = React.useState(
    initialValues.serviceOption
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = restaurantRecord
      ? { ...initialValues, ...restaurantRecord }
      : initialValues;
    setName(cleanValues.name);
    setType(cleanValues.type);
    setAddress(cleanValues.address);
    setPhone(cleanValues.phone);
    setWebsite(cleanValues.website);
    setImageUrl(cleanValues.imageUrl);
    setLogoUrl(cleanValues.logoUrl);
    setMenu(cleanValues.menu);
    setHours(cleanValues.hours);
    setDescription(cleanValues.description);
    setServiceOption(cleanValues.serviceOption);
    setErrors({});
  };
  const [restaurantRecord, setRestaurantRecord] = React.useState(restaurant);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Restaurant, idProp)
        : restaurant;
      setRestaurantRecord(record);
    };
    queryData();
  }, [idProp, restaurant]);
  React.useEffect(resetStateValues, [restaurantRecord]);
  const validations = {
    name: [{ type: "Required" }],
    type: [],
    address: [],
    phone: [],
    website: [{ type: "URL" }],
    imageUrl: [{ type: "URL" }],
    logoUrl: [{ type: "URL" }],
    menu: [],
    hours: [],
    description: [],
    serviceOption: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          type,
          address,
          phone,
          website,
          imageUrl,
          logoUrl,
          menu,
          hours,
          description,
          serviceOption,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Restaurant.copyOf(restaurantRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RestaurantUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              type,
              address,
              phone,
              website,
              imageUrl,
              logoUrl,
              menu,
              hours,
              description,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type: value,
              address,
              phone,
              website,
              imageUrl,
              logoUrl,
              menu,
              hours,
              description,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              address: value,
              phone,
              website,
              imageUrl,
              logoUrl,
              menu,
              hours,
              description,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              address,
              phone: value,
              website,
              imageUrl,
              logoUrl,
              menu,
              hours,
              description,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              address,
              phone,
              website: value,
              imageUrl,
              logoUrl,
              menu,
              hours,
              description,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              address,
              phone,
              website,
              imageUrl: value,
              logoUrl,
              menu,
              hours,
              description,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
      ></TextField>
      <TextField
        label="Logo url"
        isRequired={false}
        isReadOnly={false}
        value={logoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              address,
              phone,
              website,
              imageUrl,
              logoUrl: value,
              menu,
              hours,
              description,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.logoUrl ?? value;
          }
          if (errors.logoUrl?.hasError) {
            runValidationTasks("logoUrl", value);
          }
          setLogoUrl(value);
        }}
        onBlur={() => runValidationTasks("logoUrl", logoUrl)}
        errorMessage={errors.logoUrl?.errorMessage}
        hasError={errors.logoUrl?.hasError}
        {...getOverrideProps(overrides, "logoUrl")}
      ></TextField>
      <TextField
        label="Menu"
        isRequired={false}
        isReadOnly={false}
        value={menu}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              address,
              phone,
              website,
              imageUrl,
              logoUrl,
              menu: value,
              hours,
              description,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.menu ?? value;
          }
          if (errors.menu?.hasError) {
            runValidationTasks("menu", value);
          }
          setMenu(value);
        }}
        onBlur={() => runValidationTasks("menu", menu)}
        errorMessage={errors.menu?.errorMessage}
        hasError={errors.menu?.hasError}
        {...getOverrideProps(overrides, "menu")}
      ></TextField>
      <TextField
        label="Hours"
        isRequired={false}
        isReadOnly={false}
        value={hours}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              address,
              phone,
              website,
              imageUrl,
              logoUrl,
              menu,
              hours: value,
              description,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.hours ?? value;
          }
          if (errors.hours?.hasError) {
            runValidationTasks("hours", value);
          }
          setHours(value);
        }}
        onBlur={() => runValidationTasks("hours", hours)}
        errorMessage={errors.hours?.errorMessage}
        hasError={errors.hours?.hasError}
        {...getOverrideProps(overrides, "hours")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              address,
              phone,
              website,
              imageUrl,
              logoUrl,
              menu,
              hours,
              description: value,
              serviceOption,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Service option"
        isRequired={false}
        isReadOnly={false}
        value={serviceOption}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              address,
              phone,
              website,
              imageUrl,
              logoUrl,
              menu,
              hours,
              description,
              serviceOption: value,
            };
            const result = onChange(modelFields);
            value = result?.serviceOption ?? value;
          }
          if (errors.serviceOption?.hasError) {
            runValidationTasks("serviceOption", value);
          }
          setServiceOption(value);
        }}
        onBlur={() => runValidationTasks("serviceOption", serviceOption)}
        errorMessage={errors.serviceOption?.errorMessage}
        hasError={errors.serviceOption?.hasError}
        {...getOverrideProps(overrides, "serviceOption")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || restaurant)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || restaurant) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
