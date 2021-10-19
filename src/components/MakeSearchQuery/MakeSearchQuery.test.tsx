import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MakeSearchQuery from './MakeSearchQuery'
import { DEFAULT_SEARCH_QUERY, SEARCH_FIELD_PLACEHOLDER } from '../../constants'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme'

describe('<MakeSearchQuery />', () => {
    const setQuery = jest.fn()

    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <MakeSearchQuery setQuery={setQuery} />
            </ThemeProvider>
        )
    })

    it('renders MakeSearchQuery component and calls setQuery on Page load', () => {
        expect(setQuery).toHaveBeenCalledWith(DEFAULT_SEARCH_QUERY)
    })

    it('calls setQuery on Enter key press on input field', () => {
        const searchField = screen.getByPlaceholderText(
            SEARCH_FIELD_PLACEHOLDER
        )
        userEvent.type(searchField, 'rxjs{enter}')
        expect(setQuery).toHaveBeenLastCalledWith(
            `${DEFAULT_SEARCH_QUERY} rxjs`
        )
    })

    it('calls setQuery when Open filter is clicked', () => {
        const issueFilterOpen = screen.getByRole('button', { name: 'Open' })
        fireEvent.click(issueFilterOpen)
        expect(setQuery).toHaveBeenLastCalledWith(
            `${DEFAULT_SEARCH_QUERY} is:open`
        )
    })
})
