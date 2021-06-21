function App() {
  return (
    <div className='antialiased App'>
      <div className='main-container'>
        <div className='top-container'>
          <h1 className='my-2 lg:my-6 text-title'>Colors</h1>

          <p className='p-1 px-4 my-4 border-b-2 border-gray-900 text-hex'>
            #FFFFFF
          </p>

          <button className='w-9/12 px-4 my-1 btn lg:w-1/2'>
            Generate Color
          </button>
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
