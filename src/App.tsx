import useColorService from './services/colorService';
import { useEffect } from 'react';
import { ColorList } from './components/ColorList';
import { Button } from './components/ui/Button';
import { ClipBoardIcon } from './components/ui/ClipBoardIcon';
import { Input } from './components/ui/Input';
import { Title } from './components/ui/Title';

function App() {
  const [
    getColor,
    changeCurrentColor,
    changeColorHistory,
    color,
    errorMsg,
    colorHistory,
  ] = useColorService();

  useEffect(() => {
    getColor();
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <div
        className='antialiased transition-colors duration-500 '
        style={{
          backgroundColor: color.hex,
        }}
      >
        <div className='main-container'>
          <div className='top-container'>
            <Title name='Colors' />
            <div className='flex items-center'>
              <Button onClick={() => getColor()} currentColor={color} />
              <ClipBoardIcon data={color.hex} />
            </div>
            <p className='inline-block text-lg font-semibold text-red-700'>
              {errorMsg}
            </p>
            <Input
              colors={colorHistory}             
              changeCurrentColor={changeCurrentColor}
            />
          </div>
          <div className='bottom-container'>
            <div className='w-full h-5/6 '>
              <ColorList
                changeCurrentColor={changeCurrentColor}
                changeColorHistory={changeColorHistory}
                colors={colorHistory}
                currentColor={color}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
