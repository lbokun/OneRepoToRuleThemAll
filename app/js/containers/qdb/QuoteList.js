import { connect } from 'react-redux';
import List from 'components/general/List';
import Quote from 'components/qdb/Quote';
import { getQuotes, destoryQuote } from 'actions/quotes';
import { showQuoteModal } from 'actions/modal';

function mapStateToProps(store) {
  return {
    scroll: true,
    scrollDone: store.quotes.pagination.totalPages <= store.quotes.pagination.currentPage,
    item: Quote,
    itemProps: {
      loggedIn: !!store.auth.officer,
    },
    items: store.quotes.all,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editItem: id => dispatch(showQuoteModal(id)),
    deleteItem: id => dispatch(destoryQuote(id)),
    getItems: getNext => dispatch(getQuotes(getNext)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
