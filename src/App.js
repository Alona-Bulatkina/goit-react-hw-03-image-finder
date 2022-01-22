import React from 'react';
import Searchbar from './components/Searchbar/Searchbar';
// import IconButton from './components/IconButton/IconButton';
// import { ReactComponent as IconButton } from './components/IconButton/IconButton';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends React.Component {
  state = {
    img: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://pixabay.com/api/?q=cat&page=1&key=24397436-bb721594672d7e5644d807709&image_type=photo&orientation=horizontal&per_page=12')
    .then(res => res.json()
    .then(img => this.setState({ img })))
    .finally(() => this.setState({ loading: false}));
  }
handleFormSubmit = pictureName => {
  console.log(pictureName);
}

render() {
  return (
    <div>
      <Searchbar onSubmit={this.handleFormSubmit} />
      <div>Здесь будет картинка
        {this.state.loading && <h1>Загружаем...</h1>}
        {this.state.img && <div>{this.state.img.name}</div>}
      </div>
    </div>
    
  )
}
}


