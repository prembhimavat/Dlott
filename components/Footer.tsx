import React from 'react'

function Footer() {
  return (
    <footer className='border-t border-emerald-500/20 flex items-center text-white justify-between p-5'>
      <img className='h-10 w-10 filter hue-rotate-90 opacity-20 rounded-full'
        src="https://icon-library.com/images/announcement-icon/announcement-icon-16.jpg" alt="discalimer" />

      <p className='text-s text-emerald-900 pl-5'>
        Made By Prem Bhimavat & Devendra Yadav.
      </p>
    </footer>
  )
}

export default Footer