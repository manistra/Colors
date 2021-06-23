import useColorService from './services/colorService';
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
            <Title
              titleName='Colors'
              color={color}
              colorHistory={colorHistory}
            />
            <div className='relative flex items-center justify-center w-8/12 md:w-7/12 xl:w-6/12'>
              <Button onClick={() => getColor()} currentColor={color} />
              <div className='absolute -right-1/4'>
                <ClipBoardIcon data={color.hex} />
              </div>
            </div>
            <p className='inline-block text-lg font-semibold text-red-700'>
              {errorMsg}
            </p>
            <Input
              currentColor={color}
              colors={colorHistory}
              changeCurrentColor={changeCurrentColor}
            />
          </div>
          <div className='bottom-container'>
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
  );
}

export default App;
