import { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
    renderText(language) {
        return language === 'english' ? 'Name' : 'Ad';
    }

    render() {
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {this.renderText}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field;