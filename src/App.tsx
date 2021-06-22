import useColorService from './services/colorService';
import { useEffect } from 'react';
import { ColorList } from './components/ColorList';

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
            <h1 className='my-2 lg:my-6 text-title'>Colors</h1>

            <div className='flex items-center'>
              <button
                onClick={() => getColor()}
                className='btn'
                style={{
                  WebkitTextStroke: '2px black',
                  color: color.hex,
                }}
              >
                {color.hex}
              </button>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='inline ml-3 transition transform cursor-pointer w-28 h-28 hover:scale-110 active:scale-100 '
                viewBox='0 0 20 20'
                fill='white'
                stroke='currentColor'
                stroke-width='2%'
              >
                <path d='M8 2a1 1 0 000 2h2a1 1 0 100-2H8z' />
                <path d='M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z' />
              </svg>
            </div>
            <p className='text-lg font-semibold text-red-700'>{errorMsg}</p>
            <input
              placeholder='Enter color hex'
              type='text'
              className='w-11/12 input'
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
