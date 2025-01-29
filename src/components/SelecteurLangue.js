import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../App";

const SelecteurLangue=()=>{
const {language, setLanguage } = useContext(LanguageContext)
const {isDarkTheme} = useContext(ThemeContext)

return(
    <div className="mb-3">
        <label>{language==='fr' ? 'Choisissez votre langue' : 'Choose your language'}</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={`form-select ${isDarkTheme ? 'bg-dark text-light' : ''}`}
        >
          <option value="fr"> Français </option>
          <option value="en">English</option>
        </select>
      </div>

)
};
export default SelecteurLangue;