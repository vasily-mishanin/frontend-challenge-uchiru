import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      {' '}
      <div>
        <a href='https://uchi.ru/'>
          <img
            className={classes.footer__logo}
            src='https://www.school619.ru/assets/images/news/2021_05/unnamed.jpg'
            alt='UCHI.RU Logo'
          />
        </a>
      </div>
      <div>
        {' '}
        <a href='https://github.com/vasily-mishanin'>
          <img
            className={classes['footer__logo-github']}
            src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
            alt='Github Logo'
          />
          В. Мишанин
        </a>
      </div>
    </div>
  );
}

export default Footer;
