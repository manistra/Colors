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
    const [currentColor, setCurrentColor] = useState<Color>({ hex: "", id: -2 });
    const [colorList, setColorList] = useState<Color[]>([]);
    const [errorMsg, setErrorMsg] = useState("");

    const getColor = async () =>
    {
        setErrorMsg("");
        try
        {
            const response = await api.get<ColrResponse>(API_URL, { params: { t: new Date().getTime() } }); //
            if (response.data.colors[0].id === -1)
            {
                setErrorMsg("Something went wrong please try again.");
                return;
            }
            removeColorIfExists('#' + response.data.colors[0].hex);
            setColorList(colorList => [{ hex: '#' + response.data.colors[0].hex, id: response.data.colors[0].id }, ...colorList]);
            setCurrentColor({ hex: '#' + response.data.colors[0].hex, id: response.data.colors[0].id });

        } catch (error)
        {
            setErrorMsg(error);
        }
    };
    const removeColorIfExists = (hex: string) =>
    {
        const newColor = colorList.find(el => el.hex === hex)

        if (newColor)
        {
            let newColorHistory = colorList.filter(color => color.hex !== hex); //is this a ref or a copy of colorList? BUMP
            setColorList([...newColorHistory])
        }
    }
    const changeCurrentColor = (newColor: Color) =>
    {
        if (!colorList.find(el => el.hex === newColor.hex))
            setColorList(colorList => [newColor, ...colorList]);
        setCurrentColor(newColor)

    }
    const changeColorList = (newColorHistory: Color[]) =>
    {
        setColorList([...newColorHistory]);

    }


    return [getColor, changeCurrentColor, changeColorList, currentColor, errorMsg, colorList,];
};

export default useColorService;