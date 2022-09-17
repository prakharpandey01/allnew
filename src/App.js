// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           its ur boi
//           bbg
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



class App extends Component {




  constructor() {
    super();
    this.state = {
      
      monsters: [
      //   {
      //     name: 'franky',
      //     id:'1'
      //   },
      //   {
      //     name: 'rocky',
      //     id:'2'
      
      //   },
      //   {
      //     name: 'tony',
      //     id:'3'
      //   },
      ],
      searchField:''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        {/* <input type='search' placeholder='search monster' 
          onChange={e=>this.setState({searchField:e.target.value})}
        /> */}
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handleChange={e=>this.setState({searchField:e.target.value})}
        />
        
        
        
        {/* <CardList name='huuiig'>{
          this.state.monsters.map(monster=>(<h1 key={monster.id}>{monster.name}</h1>))
        } </CardList> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
            { this.state.string}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          {/* <button onClick={() => this.setState({ string: 'holiday bro' })}>change text</button>
      </header> * /} */}
        <CardList monsters={ filteredMonsters } />
      
      
    </div>


    )
  }
}
export default App;
                