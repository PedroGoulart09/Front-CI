import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import Home from "./page";

test('loads and displays greeting', () => {
  render(<Home />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
