
// Obtener ubicación
function obtenerUbicacion() {
  const div = document.getElementById("ubicacion-info");
  if (!navigator.geolocation) {
    div.textContent = "Tu navegador no soporta geolocalización.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function(position) {
      div.textContent = `Estás visitando desde Lat: ${position.coords.latitude.toFixed(4)}, Lon: ${position.coords.longitude.toFixed(4)}.`;
    },
    function(error) {
      div.textContent = "No se pudo obtener tu ubicación.";
    }
  );
}