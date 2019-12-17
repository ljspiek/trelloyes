import React from 'react';
import './App.css';
import List from './List';

class App extends React.Component(props) {
  state = {

  }
 
  handleDeleteItem(){
    console.log('deleting item')
  }

  handleAddRandomCard() {
    console.log('adding random card')
  }
 
  
  render() {
      return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
      
        {props.store.lists.map(list => (
          <List 
          key = {list.id}
          header = {list.header}
          cards = {list.cardIds.map(id => props.store.allCards[id])}
          />

          
        ))}
        </div>
      
    
      </main>
    );
  }
}

