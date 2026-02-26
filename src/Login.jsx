import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        {/* Левая часть */}
        <div className="login-left">
          <button className="back-btn">←</button>

          <h2>
            ЗАПОВНІТЬ ВХІД ДО<br />
            ОБЛІКОВОГО ЗАПИСУ
          </h2>
        </div>

        {/* Правая часть */}
        <div className="login-right">
          <label>Електронна пошта або мобільний номер</label>
          <input type="text" />

          <p className="login-hint">
            By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code via SMS from IKEA. Message and data rates may apply.
            <br />
            <a href="#">More info about Privacy Policy</a>
          </p>

          <label>Пароль</label>
          <div className="password-field">
            <input type="password" />
            <img
  src="/images/Vector.png"
  alt="show password"
  className="eye"
/>
          </div>

          <a href="#" className="forgot">Забули свій пароль?</a>

<div className="remember-row">
  <label className="remember">
    <input type="checkbox" />
    <span>Зберегти інформацію</span>
  </label>

  <img
    src="/images/info.png"
    alt="info"
    className="info-icon"
  />
</div>

          <button className="login-btn">ПРОДОВЖИТИ</button>

          <p className="register-text">
            У вас ще немає облікового запису? Створіть його:
          </p>

          <button className="register-btn">СТВОРИТИ АККАУНТ</button>
        </div>

      </div>
    </div>
  );
}