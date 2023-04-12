/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Meal } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import HeroLayout1 from "./HeroLayout1";
import { Collection } from "@aws-amplify/ui-react";
export default function MealDetailsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Meal,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={1}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "MealDetailsCollection")}
      {...rest}
    >
      {(item, index) => (
        <HeroLayout1
          mealDetails={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></HeroLayout1>
      )}
    </Collection>
  );
}
