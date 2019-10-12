import React from 'react'

export interface CenterSectionProps {
  children: React.ReactNode
}

const CenterSection = ({ children }: CenterSectionProps) => (
  <div
    className='d-flex flex-column'
    style={{
      height: '100vh'
    }}>
    <div className='d-flex flex-fill flex-column justify-content-center align-items-center'>
      {children}
    </div>
  </div>
)

export default CenterSection
