function App() {
  return (
    <div className='App antialiased'>
      <div className='h-screen bg-blue-100'>
        <div className='w-11/12 h-full mx-auto md:w-10/12 lg:w-8/12 xl:w-7/12'>
          <div className='flex flex-col items-center justify-between h-1/2 bg-blue-200'>
            <h1 className='lg:my-6 my-2 text-5xl lg:text-8xl md:text-8xl sm:text-6xl'>
              Title
            </h1>

            <div className=' my-4 text-3xl tracking-wide uppercase lg:text-6xl md:text-4xl sm:text-3xl p-1 px-4 border-b-2 border-gray-900'>
              #FFFFFF
            </div>

            <button className='my-1  h-14 px-4 w-9/12 lg:w-1/2 text-xl font-bold bg-white border-2 border-gray-900 rounded shadow-md lg:h-20 lg:text-3xl '>
              Generate Color
            </button>
            <input
              placeholder='Enter color hex'
              type='text'
              className='h-10 p-2 w-11/12 text-md lg:text-xl font-semibold uppercase border-2 border-gray-900  shadow-md rounded lg:h-12'
            />
          </div>
          <div className='flex justify-center items-center h-1/2 bg-blue-300'>
            <div className='w-full h-5/6 bg-blue-500'>
              <ul className='overflow-y-scroll max-h-full bg-white border-2 uppercase border-gray-900 rounded-md shadow-xl'>
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>{' '}
                <li className='items-center flex m-1 p-2 cursor-pointer  bg-blue-300 rounded'>
                  #FFFFFF
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
