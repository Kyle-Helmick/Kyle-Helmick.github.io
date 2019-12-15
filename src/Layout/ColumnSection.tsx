import React from 'react'

export interface ColumnSectionProps {
  children: React.ReactNode
}

const ColumnSection = ({ children }: ColumnSectionProps) => (
  <div
    className="d-flex"
    style={{
      height: '100vh'
    }}
  >
    <div className="d-flex flex-fill flex-column justify-content-center align-items-center p-4">
      {children}
    </div>
  </div>
)

export default ColumnSection
