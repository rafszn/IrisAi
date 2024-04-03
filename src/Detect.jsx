import {useState} from 'react'
import {
  detectGlaucoma,
  detectCataract, 
  detectMacularDegeneration,
  detectDryEyeSyndrome,
  detectMyopia,
  detectHyperopia,
  detectAstigmatism,
  detectPresbyopia,
  symptoms
  } from './util.js'


function Detect() {

const [patientData, setPatientData] = useState({
    age: 0,
    symptoms: [],
    familyHistoryOfGlaucoma: false,
    familyHistoryOfCataract: false,
    familyHistoryOfMacularDegeneration: false,
    familyHistoryOfDryEyeSyndrome: false,
    familyHistoryOfColorBlindness: false,
    familyHistoryOfDiabetes: false,
    familyHistoryOfPresbyopia: false,
    familyHistoryOfAstigmatism:false,
    familyHistoryOfHyperopia:false,
    familyHistoryOfMyopia:false,
    smokingHistory: false,
    medicalHistory: '',
    environmentalFactors: [],
    screenTime: 0,
    eyeCheckupFrequency: '',
    colorVisionTestResults: ''
  })
  
const [result, setResult] = useState('')

const detectionFunctionsArray = [
  detectGlaucoma,
  detectCataract,
  detectMacularDegeneration,
  detectDryEyeSyndrome,
  detectMyopia,
  detectHyperopia,
  detectAstigmatism,
  detectPresbyopia
];

function performEyeDefectDetection(patientData) {
  const result = []
  for (const detectionFunction of detectionFunctionsArray) {
    const detectionResult = detectionFunction(patientData);
    result.push(detectionResult)
  }
  const first = result.slice(0, result.length-1)
  const last = result[result.length-1]

  return `From my examination, you are showing ${first.join(', ')} and ${last}`
}

function handleSubmit (e){
   e.preventDefault();
   setResult(performEyeDefectDetection(patientData))
   
}

function handleInputChange (e){
  const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setPatientData(prevData => ({
        ...prevData,
        [name]: checked
      }));
    } else {
      setPatientData(prevData => ({
        ...prevData,
        [name]: type === 'number' ? parseInt(value) : value
      }));
    }
    console.log(patientData)

}

function handleSymptomChange (e) {
  const { value, checked } = e.target;
    const updatedSymptoms = checked
      ? [...patientData.symptoms, value]
      : patientData.symptoms.filter(symptom => symptom !== value);

    setPatientData(prevData => ({
      ...prevData,
      symptoms: updatedSymptoms
    }));
    console.log(patientData)
}

  return (
   <div className='container'>
      <header>
        <img src='eye.png' alt="irisAi" />
      </header>

      <p>Please input your age and select as many options to describe your symptoms.</p>
    <form onSubmit={handleSubmit}>
      <div className='test'>
        
        <label htmlFor="age">Your Age</label>
        <input
         className='age' 
         type="number" 
         id='age' 
         name="age" 
         value={patientData.age} 
         onChange={handleInputChange} required
        />
        <br />

        {symptoms.map((item) => {
            return (
              <div key={item.id}>

                <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    onChange={handleSymptomChange}
                />
                <label htmlFor={item.id}> {item.label} </label>

              </div>
            )
        })}
 
      <br />


      <div>
        <label>
          <input type="checkbox" name="familyHistoryOfGlaucoma" checked={patientData.familyHistoryOfGlaucoma} onChange={handleInputChange} />
          Family History of Glaucoma
        </label>
        <br />
      </div>

            <div>
        <label>
          <input type="checkbox" name="familyHistoryOfAstigmatism" checked={patientData.familyHistoryOfAstigmatism} onChange={handleInputChange} />
          Family History of Astigmatism
        </label>
        <br />
      </div>

            <div>
        <label>
          <input type="checkbox" name="familyHistoryOfCataract" checked={patientData.familyHistoryOfCataract} onChange={handleInputChange} />
          Family History of Cataract
        </label>
        <br />
      </div>

            <div>
        <label>
          <input type="checkbox" name="familyHistoryOfColorBlindness" checked={patientData.familyHistoryOfColorBlindness} onChange={handleInputChange} />
          Family History of Color Blindness
        </label>
        <br />
      </div>

            <div>
        <label>
          <input type="checkbox" name="familyHistoryOfDiabetes" checked={patientData.familyHistoryOfDiabetes} onChange={handleInputChange} />
          Family History of Diabetes
        </label>
        <br />
      </div>

            <div>
        <label>
          <input type="checkbox" name="familyHistoryOfHyperopia" checked={patientData.familyHistoryOfHyperopia} onChange={handleInputChange} />
          Family History of Hyperopia
        </label>
        <br />
      </div>

            <div>
        <label>
          <input type="checkbox" name="familyHistoryOfMyopia" checked={patientData.familyHistoryOfMyopia} onChange={handleInputChange} />
          Family History of Myopia
        </label>
        <br />
      </div>

            <div>
        <label>
          <input type="checkbox" name="familyHistoryOfMacularDegeneration" checked={patientData.familyHistoryOfMacularDegeneration} onChange={handleInputChange} />
          Family History of Macular Degeneration
        </label>
        <br />
      </div>

            <div>
        <label>
          <input type="checkbox" name="familyHistoryOfPresbyopia" checked={patientData.familyHistoryOfPresbyopia} onChange={handleInputChange} />
          Family History of Presbyopia
        </label>
        <br />
      </div>

            <div>
        <label>
          <input type="checkbox" name="familyHistoryOfDryEyeSyndrome" checked={patientData.familyHistoryOfDryEyeSyndrome} onChange={handleInputChange} />
          Family History of Dry Eye Syndrome
        </label>
        <br />
      </div>

      <br />


      <label>
        <input type="checkbox" name="smokingHistory" checked={patientData.smokingHistory} onChange={handleInputChange} />
       Smoking History:

      </label><br /><br />

      {/* Add input fields for medical history, environmental factors, screen time, eye checkup frequency, color vision test results */}

      <button className='btn' type="submit">Submit</button>
      </div>

    </form>
      

      {result && (<div>
        <h2>Diagnosing your symptoms...</h2>
        <p style={{fontSize:'35px'}}><i>{result}</i></p>
        </div>)}

   </div>
  );
}

export default Detect;
