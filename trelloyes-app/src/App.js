import React from 'react';
import './App.css';
import List from './List';
import { STORE } from './store';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id: "",
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}




class App extends React.Component {
  state = {
    store: STORE,
  };

  handleDeleteCard = (cardId) => {
    console.log('delete ran', omit(this.state.store.allCards, cardId))
    const removeCard = omit(this.state.store.allCards, cardId);
    // const newLists = map over lists & then remove corresponding cardIDs filter
    const newLists = this.state.store.lists.map(list => ({ ...list, cardIds: list.cardIds.filter(id => id !== cardId) }))
    // const newStore = {allCards: removeCard, lists: newStore}
    this.setState({store: {
      lists: newLists, 
      allCards: removeCard}
    })
  }
  
  handleRandomCard = (listId) => {
    console.log('add random card ran')
    const addedCard = newRandomCard()
    const newLists = this.state.store.lists.map(list => {
      if(list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, addedCard.id]
        };
        return list;
      }
    })

    this.setState({store: {
      lists: newLists,
      allCards: {
        ...this.state.store.allCards, [addedCard.id]: addedCard
      }
    }})

  }

  render() {
    console.log(this.state);
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
       
        {this.state.store.lists.map(list => (
          <List 
          id = {list.id}
          key = {list.id}
          header = {list.header}
          cards = {list.cardIds.map(id => this.state.store.allCards[id])}
          onDeleteCard = {this.handleDeleteCard}
          onAddRandomCard = {this.handleRandomCard}
          />
  
          
        ))}
        </div>
       
     
      </main>
    );
  }
  
}

export default App;