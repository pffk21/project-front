import "./Register.css";

export default function Register() {
  return (
    <div className="register-page">

      {/* Левая картинка */}
      <div className="register-left">
        <button className="back-btn">←</button>
      </div>

      {/* Правая форма */}
      <div className="register-right">
        <form className="register-form">

          <label>Імʼя</label>
          <input type="text" />

          <label>Фамілія</label>
          <input type="text" />

          <label>Дата народження</label>
          <input type="text" />

          <label>Країна</label>
          <input type="text" />

          <label>Адреса</label>
          <input type="text" />

          <label>Мобільний номер</label>
          <input type="tel" />

          <p className="hint">
            By entering your mobile number and one-time code sign-in option,
            you agree to receive a one-time verification code via SMS from IKEA.
            <br />
            <a href="#">More info about Privacy Policy</a>
          </p>

          <label>Електронна пошта</label>
          <input type="email" />
          <small>Вам потрібно буде пройти верифікацію</small>

          <label>Пароль</label>
          <input type="password" />

          <label className="checkbox">
            <input type="checkbox" />
            Я ознайомлений з Політикою конфіденційності з обробки та захисту персональних даних
          </label>

          <button className="submit-btn">ПРОДОВЖИТИ</button>

        </form>
      </div>

    </div>
  );
}