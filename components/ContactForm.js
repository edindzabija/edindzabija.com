import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  })

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

    fetch('https://formspree.io/f/myybqang', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.email,
        message: formData.message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setFormData({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }

  return (
    <section id='contactForm'>
      <form onSubmit={handleOnSubmit} className='w-full md:flex-row md:px-16'>
        <input
          className='flex-grow w-full h-12 my-2 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline'
          placeholder='Email'
          required
          id='email'
          type='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          className='resize-none flex-grow w-full py-2 px-4 my-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline'
          rows='5'
          cols='35'
          placeholder='Message'
          required
          id='message'
          type='text-field'
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <button
          type='submit'
          className='inline-flex items-center justify-center w-full h-12 my-6 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
        >
          Send
        </button>
      </form>
      {status.info.error && (
        <div className='text-center max-w-md text-xl font-thin tracking-wide text-red-400 sm:mx-auto md:mb-6'>
          Error: {status.info.msg}
        </div>
      )}
      {!status.info.error && status.info.msg && (
        <p className='text-center max-w-md text-xl font-thin tracking-wide text-gray-200 sm:mx-auto md:mb-6'>
          {status.info.msg}
        </p>
      )}
    </section>
  )
}

export default ContactForm
