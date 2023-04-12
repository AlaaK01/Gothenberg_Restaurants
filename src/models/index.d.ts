import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerMeal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly imageUrl?: string | null;
  readonly restaurantID: string;
  readonly ingredients?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMeal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly imageUrl?: string | null;
  readonly restaurantID: string;
  readonly ingredients?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Meal = LazyLoading extends LazyLoadingDisabled ? EagerMeal : LazyMeal

export declare const Meal: (new (init: ModelInit<Meal>) => Meal) & {
  copyOf(source: Meal, mutator: (draft: MutableModel<Meal>) => MutableModel<Meal> | void): Meal;
}

type EagerRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type?: string | null;
  readonly address?: string | null;
  readonly phone?: string | null;
  readonly website?: string | null;
  readonly imageUrl?: string | null;
  readonly logoUrl?: string | null;
  readonly menu?: string | null;
  readonly hours?: string | null;
  readonly description?: string | null;
  readonly Meals?: (Meal | null)[] | null;
  readonly serviceOption?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type?: string | null;
  readonly address?: string | null;
  readonly phone?: string | null;
  readonly website?: string | null;
  readonly imageUrl?: string | null;
  readonly logoUrl?: string | null;
  readonly menu?: string | null;
  readonly hours?: string | null;
  readonly description?: string | null;
  readonly Meals: AsyncCollection<Meal>;
  readonly serviceOption?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurant = LazyLoading extends LazyLoadingDisabled ? EagerRestaurant : LazyRestaurant

export declare const Restaurant: (new (init: ModelInit<Restaurant>) => Restaurant) & {
  copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant>) => MutableModel<Restaurant> | void): Restaurant;
}