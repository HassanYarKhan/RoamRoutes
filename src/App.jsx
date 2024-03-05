import Tours from './components/Tours';

function App() {
 

  return (
     <div className='w-full h-[300vh] bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
      <div className='flex flex-col justify-center items-center'>
            <span className='text-center text-white text-5xl border-dotted border-white border-4 rounded-xl px-4 py-2 my-4 headerFont'>RoamRoutes</span>
      </div>
        <Tours />
     </div> 
  )
}

export default App
