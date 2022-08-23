import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import "./App.scss";

function App() {
  const { t, i18n } = useTranslation();
  const [day, setDay] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <div className="languageSwitcher">
          <ReactCountryFlag
            className={i18n.resolvedLanguage === "al" ? "active" : ""}
            countryCode="AL"
            onClick={() => i18n.changeLanguage("al")}
          />
          <ReactCountryFlag
            onClick={() => i18n.changeLanguage("en")}
            className={i18n.resolvedLanguage === "en" ? "active" : ""}
            countryCode="US"
          />
        </div>
        <img src={require("./logo.png")} />
        <div className="seperator"></div>
      </header>
      {/* <div className="buttons">
        <ul>
          <li className="button-animated">
            <p>Dita 1 / 2 Korrik</p>
            <div className="liquid"></div>
          </li>
          <li className="button-animated">
            <p>Dita 2 / 3 Korrik</p>
            <div className="liquid"></div>
          </li>
          <li className="button-animated">
            <p>Dita 3 / 4 Korrik</p>
            <div className="liquid"></div>
          </li>
        </ul>
      </div> */}

      <div className="buttons">
        <ul>
          <li onClick={() => setDay(1)} className="button">
            {t("d1b")}
          </li>
          <li onClick={() => setDay(2)} className="button">
            {t("d2b")}
          </li>
          <li onClick={() => setDay(3)} className="button">
            {t("d3b")}
          </li>
        </ul>
      </div>
      <div className="content">
        {/* DAY 1 */}
        <div className={`content__day--one ${day === 1 ? "active" : ""}`}>
          <div className="content__title">{t("d1")}</div>
          <div className="content__activity">
            <div className="content__activity--hours">10:00</div>
            <div className="content__activity--desc">{t("d1h10")}</div>
          </div>
          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">10:00</div>
            <div className="content__activity--desc">{t("d1h10-2")}</div>
          </div>
          {/* End Activity */}
          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">10:30</div>
            <div className="content__activity--desc">{t("d1h10-3")}</div>
          </div>
          {/* End Activity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">11:00 - 20:00</div>
            <div className="content__activity--desc">{t("d1h11")}</div>
          </div>
          {/* End Activity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">11:00</div>
            <div className="content__activity--desc">{t("d1h11-2")}</div>
          </div>
          {/* End Activity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">11:45 - 12:00</div>
            <div className="content__activity--desc">{t("d1h11-3")}</div>
          </div>
          {/* End Activity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">12:00 - 12:15</div>
            <div className="content__activity--desc">{t("d1h12")}</div>
          </div>
          {/* End Activity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">12:15 - 12:45</div>
            <div className="content__activity--desc">{t("d1h12-2")}</div>
          </div>
          {/* End Activity */}
          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">12:45 - 14:00</div>
            <div className="content__activity--desc">{t("d1h12-3")}</div>
          </div>
          {/* End Activity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">14:00</div>
            <div className="content__activity--desc">{t("d1h14")}</div>
          </div>
          {/* End Activity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">15:00</div>
            <div className="content__activity--desc">{t("d1h15")}</div>
          </div>
          {/* End Activity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">16:00</div>
            <div className="content__activity--desc">{t("d1h16")}</div>
          </div>
          {/* End Activity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">20:00 - 02:00</div>
            <div className="content__activity--desc">{t("d1h20")}</div>
          </div>
          {/* End Activity */}
        </div>
        {/* END OF DAY 1 */}
        {/* DAY 2 */}
        <div className={`content__day--two ${day === 2 ? "active" : ""}`}>
          <div className="content__title">{t("d2")}</div>
          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">09:00</div>
            <div className="content__activity--desc">{t("d2h9")}</div>
          </div>
          {/* End Acitvity */}
          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">10:00</div>
            <div className="content__activity--desc">{t("d2h10")}</div>
          </div>
          {/* End Acitvity */}
          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">10:00</div>
            <div className="content__activity--desc">{t("d2h10-2")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">10:30</div>
            <div className="content__activity--desc">{t("d2h10-3")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">11:00</div>
            <div className="content__activity--desc">{t("d2h11")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">11:00 - 20:00</div>
            <div className="content__activity--desc">{t("d2h11-2")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">12:00</div>
            <div className="content__activity--desc">{t("d2h12")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">13:00</div>
            <div className="content__activity--desc">{t("d2h13")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">13:00</div>
            <div className="content__activity--desc">{t("d2h13-2")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">16:00</div>
            <div className="content__activity--desc">{t("d2h16")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">16:00</div>
            <div className="content__activity--desc">{t("d2h16-2")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">19:00</div>
            <div className="content__activity--desc">{t("d2h19")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">20:00 - 02:00</div>
            <div className="content__activity--desc">{t("d2h20")}</div>
          </div>
          {/* End Acitvity */}
        </div>
        {/* END OF DAY 2 */}
        {/* DAY 3 */}
        <div className={`content__day--three ${day === 3 ? "active" : ""}`}>
          <div className="content__title">{t("d3")}</div>
          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">09:00</div>
            <div className="content__activity--desc">{t("d3h9")}</div>
          </div>
          {/* End Acitvity */}
          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">10:00</div>
            <div className="content__activity--desc">{t("d3h10")}</div>
          </div>
          {/* End Acitvity */}
          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">10:00</div>
            <div className="content__activity--desc">{t("d3h10-2")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">10:30</div>
            <div className="content__activity--desc">{t("d3h10-3")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">11:00</div>
            <div className="content__activity--desc">{t("d3h11")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">11:00 - 20:00</div>
            <div className="content__activity--desc">{t("d3h11-2")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">12:00</div>
            <div className="content__activity--desc">{t("d3h12")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">14:00</div>
            <div className="content__activity--desc">{t("d3h14")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">15:00</div>
            <div className="content__activity--desc">{t("d3h15")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">17:00</div>
            <div className="content__activity--desc">{t("d3h17")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">17:00</div>
            <div className="content__activity--desc">{t("d3h17")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">19:00</div>
            <div className="content__activity--desc">{t("d3h19")}</div>
          </div>
          {/* End Acitvity */}

          {/* Start Activity */}
          <div className="content__activity">
            <div className="content__activity--hours">20:00 - 02:00</div>
            <div className="content__activity--desc">{t("d3h20")}</div>
          </div>
          {/* End Acitvity */}
        </div>
        {/* END OF DAY 2 */}
      </div>
    </div>
  );
}

export default App;
