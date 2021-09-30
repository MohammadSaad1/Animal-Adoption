// Can be expanded with more options such as greater than
// and smaller than, but don't have the time for that :D 
export enum Operator {
    eq = '=',
    notEq = '_ne='
}

interface FilterUnit {
    value: any,
    key: string,
    operator: Operator
}

// Can be expanded with more options such as sort, 
// but don't have the time for that :D 
export interface Options {
    filters?: FilterUnit[]
}

const handleFilters = (endpoint: string, filters: FilterUnit[]) => {
    const filterString = filters
        .map(filter => `${filter.key}${filter.operator}${filter.value}`)
        .join('&')

    return `${endpoint}?${filterString}`
}

export const applyOptions = (endpoint: string, options?: Options) => {
    let modifiedEndpoint = endpoint

    if (options?.filters) {
        modifiedEndpoint = handleFilters(modifiedEndpoint, options.filters)
    }

    console.log(modifiedEndpoint)
    return modifiedEndpoint
}