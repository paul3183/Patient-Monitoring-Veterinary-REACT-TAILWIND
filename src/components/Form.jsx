import React, { useEffect, useState } from 'react'
import Error from './Error';


const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [released, setReleased] = useState('');
  const [symptoms, setSymptoms] = useState('');

  //mostrar el error:
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setReleased(patient.released)
      setSymptoms(patient.symptoms)
    }
  }, [patient])



  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Enviando Formulario')
    //validando el formulario: 
    if ([name, owner, email, released, symptoms].includes('')) {
      console.log('Hay al menos un campo vacio')
      setError(true)
      return;
    }
    setError(false)

    //Objeto de paciente:
    const objectPatient = {
      name,
      owner,
      email,
      released,
      symptoms,
    }

    if (patient.id) {
      //editando el regisro
      objectPatient.id = patient.id
      console.log(objectPatient)
      console.log(patient)
      const updatedPatients = patients.map(patientState => patientState.id === patient.id ? objectPatient : patientState)

      setPatients(updatedPatients)
      setPatient({})

    } else {
      // nuevbo registro:
      objectPatient.id = generarId();
      setPatients([...patients, objectPatient]);
    }

    // console.log(objectPatient);


    // Reiniciar el Form:
    setName('')
    setOwner('')
    setEmail('')
    setReleased('')
    setSymptoms('')

  }

  return (
    <div className='md:w-2/5 mx-3'>
      <h2 className='font-black text-3xl text-center'>Patient Monitoring</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Add Patients and {''}
        <span className='text-indigo-700 font-bold '>Manage Them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5' >

        {error && <Error><p>ALL FIELDS ARE REQUIRED</p></Error >}

        <div className=' '>
          <label className='block uppercase font-bold' htmlFor="pet">Pet Name</label>
          <input
            id='pet'
            type="text"
            placeholder='Pet Name'
            className='border-2 w-full p-2 mt-2 dark:placeholder-[#dca44b] text-white rounded-md'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label className='block uppercase font-bold' htmlFor="owner">Owner Name</label>
          <input
            id='owner'
            type="text"
            placeholder='Owner Name'
            className='border-2 w-full p-2 mt-2 rounded-md dark:placeholder-[#dca44b] text-white '
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label className='block uppercase font-bold' htmlFor="email">Email</label>
          <input
            id='email'
            type="email"
            placeholder='Owner Contact Email'
            className='border-2 w-full p-2 mt-2 dark:placeholder-[#dca44b] rounded-md text-white '
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label className='block uppercase font-bold' htmlFor="released">Released</label>
          <input
            id='released'
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md dark:text-[#dca44b] text-white'
            value={released}
            onChange={(e) => setReleased(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label className='block uppercase font-bold' htmlFor="symptoms">Symptoms</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-white ' name="symptoms" id=" symptoms" cols="30" rows="10" placeholder=''
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)} />
        </div>
        <input
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg'
          value={patient.id ? 'Edit Patient' : 'Add Patient'} />
      </form>
    </div >
  )
}

export default Form