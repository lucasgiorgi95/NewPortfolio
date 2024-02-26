import React from 'react'
import Link from 'next/link'

import { RiInstagramFill, RiFacebookBoxFill, RiLinkedinFill, RiGithubFill} from 'react-icons/ri'

function Socials() {
  return (
    <div className=' flex items-center gap-x-3 text-lg '>
      <Link href={''} className='hover:text-accent transition-all duration-300'><RiInstagramFill/> </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'><RiFacebookBoxFill/> </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'><RiLinkedinFill/> </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'><RiGithubFill/> </Link>

    </div>
  )
}

export default Socials