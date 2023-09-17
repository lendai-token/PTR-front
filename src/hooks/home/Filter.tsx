export const searchFilter = (searchValue:String, list:Record<string, any>[], searchBy = 'name') => {
    let lowerCaseQuery = searchValue.toLowerCase();
    let filteredList = searchValue
        ? list.filter(x => x[searchBy].toLowerCase().includes(lowerCaseQuery))
        : list;
    return filteredList;
};
