const searchModal = document.querySelector('.search-modal')
const searchOveraly = document.querySelector('.overlay')

const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchModalClose = searchModal.querySelector(
  '.search-modal-form .btn-ghost'
)

const deleteAllButton = searchModal.querySelector(
  '.search-history-header button'
) // 전체삭제 버튼
const deleteButtonList = searchModal.querySelectorAll('.delete-button') // 하나 삭제
const modalSearchHistoryList = searchModal.querySelector('ol')
const modalSearchHistoryItem = modalSearchHistoryList.querySelector('li')
const nothingModalItem = searchModal.querySelector('.nothing-modal-item')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchOveraly.classList.add('is-active')
}

function closeSearchModal() {
  searchModal.classList.remove('is-active')
  searchOveraly.classList.remove('is-active')
}

searchButton.addEventListener('click', openSearchModal)
searchModalClose.addEventListener('click', closeSearchModal)

function deleteAllSearchModalItems() {
  console.log(nothingModalItem)
  modalSearchHistoryList.innerHTML = ''
  deleteAllButton.remove()
  nothingModalItem.style.display = 'block'
}
deleteAllButton.addEventListener('click', deleteAllSearchModalItems)

function deleteSearchModalItem() {
  const itemToDelete = this.parentNode
  modalSearchHistoryList.removeChild(itemToDelete)

  if (modalSearchHistoryList.children.length == 0) {
    deleteAllButton.remove()
    nothingModalItem.style.display = 'block'
  }
}

deleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchModalItem)
})
