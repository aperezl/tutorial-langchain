import './loading.css'; // Estilo CSS para la página de carga

export function LoadingPage() {

    return (
      <div className="loading-page">
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

export default LoadingPage;
