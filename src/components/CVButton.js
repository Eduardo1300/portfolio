// components/CVButton.js
const CVButton = () => (
  <div className="text-center mt-10">
    <a
      href="/cv-christopher-valdivia.pdf"
      download
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
    >
      📄 Descargar CV
    </a>
  </div>
);

export default CVButton;
