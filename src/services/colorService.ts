import axios from 'axios';
import { ColrResponse, Color } from '../types';
import { useState } from 'react';

const API_URL = `https://www.colr.org/json/color/random`;
const api = axios.create({
    params: {
        t: new Date().getTime()
    }
})

const useColorService = (): [() => void, Color, string] =>
{
    const [currentColor, setCurrentColor] = useState<Color>({ hex: "", id: -2 });
    const [errorMsg, setErrorMsg] = useState("");

    const getColor = async () =>
    {
        setErrorMsg("");
        try
        {
            const response = await api.get<ColrResponse>(API_URL, { params: { t: new Date().getTime() } });
            if (response.data.colors[0].id === -1)
            {
                setErrorMsg("Something went wrong please try again.");
                return;
            }
            setCurrentColor({ hex: '#' + response.data.colors[0].hex, id: response.data.colors[0].id });

        } catch (error)
        {
            setErrorMsg(error);
        }
    };


    return [getColor, currentColor, errorMsg];
};

export default useColorService;