import React from "react";

export const SearchInput = (props: {
  searchQuery: any;
  setSearchQuery: any;
}) => {
  /* 
    The page should have a search input that filters products without page refresh 
    (https://github.com/ChiliLabs/test-tasks/blob/master/frontend_developer.md?plain=1#L10)

    Not mentioned filter by what exactly, category or name or whatever
  */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchQuery(e.target.value);
  };
  return (
    <input
      className={
        "w-full p-4 bg-neutral-900 " + 
        "border-t-2 md:border-2 border-neutral-700 md:rounded-xl"
      }
      type="text"
      placeholder="Search products by category..."
      value={props.searchQuery}
      onChange={handleSearch}
    />
  );
};
