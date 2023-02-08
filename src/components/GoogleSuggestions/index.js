import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="container">
          <div className="search-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-bar"
              onChange={this.onChangeInput}
              value={searchInput}
            />
          </div>
          <ul className="suggestions-list">
            {searchResults.map(each => (
              <SuggestionItem
                suggestionDetails={each}
                key={each.id}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
