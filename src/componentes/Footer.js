import '../css/Footer.css';

function Footer() {
  return (
    <footer className="d-flex justify-content-center fixed-bottom text-center">
      <div>
        <p id="creador">Creado por Juan Sebastián Ayala</p>
        <p id="agradecimiento">
          Efectos de sonido extraídos desde{' '}
          <a
            href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6297"
            target="_blank"
            rel="noreferrer"
          >
            Pixabay
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
