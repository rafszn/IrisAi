import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  
  function handleClick (){
     navigate('/tests')
  }
  return (
   <div className='container'>
      <header>
        <img src='eye.png' alt="irisAi" />
      </header>

      <div style={{marginTop: '50px'}} className='center'>
        <div>

          <section>
            
            <h2 className='welcome' >Welcome to IrisAI</h2>
            <p className='p' >Iris AI is an expert system that helps you diagnose some select eye defects you may have.</p>
            
          </section>

          <section className="form">

            <button className='btn' onClick={handleClick} >Start Diagnosis</button>
          </section>

        </div>
      </div>

    </div>
  )
}

export default Welcome