const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButtonLg = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

const deleteButtonListLg =
  gnbSearchHistoryList.querySelectorAll('.delete-button')
const gnbSearchHistoryItem = gnbSearchHistoryList.querySelector('li')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function openGnbSearchHistory() {
  // Check => gnbSearchHistoryList 안에 li가 몇 개 있는지
  // li가 0개일 경우 => 실행 X
  if (gnbSearchHistoryList.children.length == 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

deleteAllButtonLg.addEventListener('click', deleteAllSearchHistoryItems)

function deleteSearchHistoryItem(e) {
  e.stopPropagation()
  // 삭제 버튼이 클릭 됐을 때, li삭제
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length == 0) {
    closeGnbSearchHistory()
  }
}

deleteButtonListLg.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})
