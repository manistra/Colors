import axios from 'axios';
import { ColrResponse, Color } from '../types';
import { useState } from 'react';

const API_URL = `https://www.colr.org/json/color/random`;
const api = axios.create({
    params: {
        t: new Date().getTime()
    }
})

const useColorService = (): [() => void, (newColor: Color) => void, (newColorHistory: Color[]) => void, Color, string, Color[],] =>
{
    const [currentColor, setCurrentColor] = useState<Color>({ hex: "#FFFFFF", id: -2 }); //Remove this and add active prop to colorHistory? BUMP
    const [colorHistory, setColorHistory] = useState<Color[]>([]);
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
            removeColorIfExists('#' + response.data.colors[0].hex);
            setColorHistory(colorHistory => [{ hex: '#' + response.data.colors[0].hex, id: response.data.colors[0].id }, ...colorHistory]);
            setCurrentColor({ hex: '#' + response.data.colors[0].hex, id: response.data.colors[0].id });

        } catch (error)
        {
            setErrorMsg(error);
        }
    };
    const removeColorIfExists = (hex: string) =>
    {
        const newColor = colorHistory.find(el => el.hex === hex)

        if (newColor)
        {
            let newColorHistory = colorHistory.filter(color => color.hex !== hex); //is this a ref or a copy of colorHistory? BUMP
            setColorHistory((colorHistory) => [...newColorHistory])
        }
    }
    const changeCurrentColor = (newColor: Color) =>
    {
        if (!colorHistory.find(el => el.hex === newColor.hex))
            setColorHistory(colorHistory => [newColor, ...colorHistory]);
        setCurrentColor(newColor)

    }
    const changeColorHistory = (newColorHistory: Color[]) =>
    {
        setColorHistory(colorHistory => [...newColorHistory]);

    }


    return [getColor, changeCurrentColor, changeColorHistory, currentColor, errorMsg, colorHistory,];
};

export default useColorService;