import {useEffect, useState} from "react";
import {IUserInfo} from "../types/users";

export const useContacts = () => {
    const [data, setData] = useState<IUserInfo[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect( () => {
        // Implementation code where T is the returned data shape
        function api<T>(url: string): Promise<T> {
            return fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })

        }
        // Consumer
        api<{ results: IUserInfo[], error: string }>('https://randomuser.me/api/?results=100')
            .then(({ results, error }) => {
                if(error) {
                    throw new Error(error)
                }
                setData(results)
                setIsError(false)
                setIsLoading(false)
            })
            .catch(error => {
                setIsError(true)
            })
    },[])

    return {data, isLoading, isError}
}