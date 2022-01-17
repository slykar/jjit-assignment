import { useEffect, useState } from 'react';

/**
 * Possible sort direction states.
 * The values are actually a reverse of what you would use when sorting.
 * This is because we will use them as modifiers of the sort result.
 *
 * @example
 * // inside a sort function
 * return SortDirection.ASC * (a.size - b.size);
 */
export enum SortDirection {
  NOT_SET = 0,
  ASC = 1,
  DESC = -1,
}

/**
 * We can toggle between 3 states.
 * This is a simple mapping that decides what the next sorting direction would be given a current state.
 */
const NEXT_SORT_DIRECTION = {
  [SortDirection.NOT_SET]: SortDirection.ASC,
  [SortDirection.ASC]: SortDirection.DESC,
  [SortDirection.DESC]: SortDirection.ASC,
};

/**
 * A sort function that will be used for comparing object of type T
 */
export interface SortFunction<T> {
  (a: T, b: T, dir: SortDirection): number;
}

/**
 * A collection of sorting functions.
 * Using this type will make sure we can only pass names of defined sorters.
 */
export type Sorters<S, T> = {
  [k in keyof S]: SortFunction<T>;
};

/**
 * Hook for an easy sort toggle.
 *
 * @param items Items you want to sort.
 * @param sorters Sorting functions that will be used.
 * @return [toggleSort('key name'), sortedItems]
 */
export default function useSort<T, S>(items: T[], sorters: Sorters<S, T>) {
  // sort key
  const [sortKey, setSortKey] = useState<keyof S | null>(null);
  // sort direction
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.NOT_SET
  );
  // sorted data
  const [sortedItems, setSortedItems] = useState<T[]>(items);

  // helpers
  const getCurrentSortDirection = (newSortKey: keyof S) =>
    newSortKey !== sortKey
      ? // current sort direction should be reset if sort key changes
        SortDirection.NOT_SET
      : // sort key did NOT change, so we use existing sort direction
        sortDirection;

  /**
   * Toggles the sort direction on a given key.
   * The sort is a tri-state value of [NO_SORT, ASC, DESC].
   * @param newSortKey
   * @param dir sort direction you want to set instead of toggling it
   */
  function toggleSort(newSortKey: keyof S, dir?: SortDirection): SortDirection {
    // Before we try to set the new sort key, first we need to get current sort direction
    const currentSortDirection = getCurrentSortDirection(newSortKey);
    // now we can change the sort key
    setSortKey(newSortKey);
    // Reverse the sort direction
    const nextSortDirection = dir ?? NEXT_SORT_DIRECTION[currentSortDirection];
    setSortDirection(nextSortDirection);
    return nextSortDirection;
  }

  // NOTE: We should call `setSortedItems` if `items` change.
  // This is because the initial `items` we pass might be an empty array.
  useEffect(() => {
    if (sortKey === null || SortDirection.NOT_SET === sortDirection) {
      // no sort should be applied, return items in original order
      setSortedItems([...items]);
      return;
    }

    const sortFunction = sorters[sortKey] ?? undefined;
    if (!sortFunction) return; // no sort function, bye!

    const sorted = [...items].sort((a, b) => sortFunction(a, b, sortDirection));
    setSortedItems(sorted);
  }, [items, sortDirection, sortKey, sorters]);

  return { toggleSort, sortedItems, sortKey, sortDirection };
}
