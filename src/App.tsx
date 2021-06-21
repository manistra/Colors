import useColorService from './services/colorService';
import { useEffect } from 'react';

function App() {
  const [getColor, color, errorMsg] = useColorService();

  useEffect(() => {
    getColor();
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className='antialiased transition-colors duration-500 App'
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
            <ul className='list-container'>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
              <li className='p-2 m-1 list-item'>#FFFFFF</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
