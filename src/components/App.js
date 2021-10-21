import { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends Component {
    state = { language: 'english', color: 'red' };

    onLanguageChange(language) {
        this.setState({ language });
    }

    onColorChange(color) {
        this.setState({ color });
    }

    render() {
        return(
            <div className="ui container">
                <div>
                    Select Language:
                    <i 
                        className="flag us" 
                        onClick={() => {
                            this.onLanguageChange('english');
                            this.onColorChange('red');
                        }}
                    />
                    <i 
                        className="flag az" 
                        onClick={() => {
                            this.onLanguageChange('azeri');
                            this.onColorChange('primary');
                        }}
                    
                    />
                </div>
                <ColorContext.Provider value={this.state.color}>
                    <LanguageContext.Provider value={this.state.language} >
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;