import './App.css'
import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'
import Dark from './components/Dark'


function App() {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({});

  // useEffect(() => {
  //   const getLS = () => {
  //     const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
  //     setPatients(patientsLS);
  //   }
  //   getLS();
  // }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])

  const deletePatient = (id) => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients)
  }

  return (
    <div className='dark:bg-[#09090b] bg-[#e4d8b4] text-black dark:text-[#dca44b] py-3'>
      <Dark />
      <div className='container mx-auto pt-20'>

        <Header />

        <div className='mt-12 md:flex '>
          <Form
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
          />
          <PatientList
            patients={patients}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
        </div>
      </div>
    </div>

  )
}

export default App
