import { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
    renderText(language) {
        return language === 'english' ? 'Submit' : 'Gonder';
    }

    renderContent = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    { this.renderText }
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {this.renderContent}
            </ColorContext.Consumer>
        );
    }
}

export default Button;