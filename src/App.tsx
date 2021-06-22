import useColorService from './services/colorService';
import { useEffect } from 'react';
import { ColorsListContainer } from './components/ColorList';

function App() {
  const [getColor, color, errorMsg] = useColorService();

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

            <p className='p-1 px-4 my-4 border-b-2 border-gray-900 text-hex'>
              {color.hex}
            </p>

            <button
              onClick={() => getColor()}
              className='w-9/12 px-4 my-1 btn lg:w-1/2'
              style={{
                color: color.hex,
              }}
            >
              Generate Color
            </button>
            <p className='text-lg font-semibold text-red-700'>{errorMsg}</p>
            <input
              placeholder='Enter color hex'
              type='text'
              className='w-11/12 input'
            />
          </div>
          <div className='bottom-container'>
            <div className='w-full h-5/6 '>
              <ColorsListContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
