import React from "react";
import i18n from "i18next";

export default class ChangeLanguage extends React.Component{
    staet = {
        lang: "en"
    };

    langChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            localStorage.setItem("lang", this.state.lang);
            const lang = localStorage.getItem("lang");
            i18n.changeLanguage(lang);
        });
    };

    render(){
        return(
            <div className="App">
                <select name="lang" onChange={this.langChange}>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </div>
        );
    }
}