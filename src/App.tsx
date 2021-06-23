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
    changeColorList,
    currentColor,
    errorMsg,
    colorList,
  ] = useColorService();

  return (
    <div className='App'>
      <div
        className='antialiased transition-colors duration-500 '
        style={{
          backgroundColor: currentColor.hex,
        }}
      >
        <div className='main-container'>
          <div className='top-container'>
            <Title
              titleName='Colors'
              currentColor={currentColor}
              colorList={colorList}
            />
            <div className='relative flex items-center justify-center w-8/12 md:w-7/12 xl:w-6/12'>
              <Button onClick={() => getColor()} currentColor={currentColor} />
              <div className='absolute -right-1/4'>
                <ClipBoardIcon data={currentColor.hex} />
              </div>
            </div>
            <p className='inline-block text-lg font-semibold text-red-700'>
              {errorMsg}
            </p>
            <Input
              currentColor={currentColor}
              colorList={colorList}
              changeCurrentColor={changeCurrentColor}
            />
          </div>
          <div className='bottom-container'>
            <ColorList
              changeCurrentColor={changeCurrentColor}
              changeColorList={changeColorList}
              colorList={colorList}
              currentColor={currentColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
