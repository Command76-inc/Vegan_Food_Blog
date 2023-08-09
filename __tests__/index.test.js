// Documentation for jest testing https://testing-library.com/docs/queries/byrole/
// https://jestjs.io/docs/jest-platform
// To run tests enter npm run test in terminal


import { render, screen } from '@testing-library/react'
import HomePage from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />)
 
    const heading = screen.getByRole('paragraph', {
      name: /We'd like to walk along with /i,
    })
 
    expect(heading).toBeInTheDocument()
  })
})