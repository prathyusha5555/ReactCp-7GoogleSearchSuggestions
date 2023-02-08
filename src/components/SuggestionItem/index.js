import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onClickArrow = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
