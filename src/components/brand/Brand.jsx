import React from 'react'
import {google , atlassian , shopify ,slack ,dropbox} from './imports'
import './brand.css'


function Brand() {
  return (
    <div className='gpt3__brand section_padding'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div>
        <img src={atlassian} alt='atlassian' />
      </div>
      <div>
        <img src={slack} alt='slack' />
      </div>
      <div>
        <img src={dropbox} alt='dropbox' />
      </div>
      <div>
        <img src={shopify} alt='shopify' />
      </div>
    </div>
  )
}

export default Brand