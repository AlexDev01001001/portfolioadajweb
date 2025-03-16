import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  proyectos = [
    { nombre: "Proyecto PangeaCO", imagen: "/projects/pangeaco.jpg", descripcion: "Desempeñé como desarrollador FrontEnd en la empresa PangeaCO, participando en la implementación de nuevas funcionalidades para el Inventario de Planta Externa de PangeaCo de Telefónica. Utilicé la metodología SCRUM, desarrollé funciones para la creación de red del equipo de operaciones, y elaboré diagramas de secuencia, bloques y cronogramas previos a la implementación. Además, realicé pruebas unitarias y pruebas en ambiente de certificación junto al equipo de QA, y asistí en los procesos de despliegue a producción. Herramientas: SQL Server, ArcGIS, Máquinas Virtuales Azure, Git, Camunda y Pruebas Unitarias." },
    { nombre: "Proyecto Gesmat", imagen: "/projects/gesmat.jpg", descripcion: "Sistema de gestión de matrículas para instituciones educativas. Este proyecto cuenta con un flujo completo de matriculas, solicitud, aprobación y gestión de matrícula en total. También tiene una interfaz amigable para los administradores para que puedan realizar la aprobación de las solicitudes o en su defecto, rechazarlas. Fue realiza con PHP, PHPMyAdmin, SQL y Boostrap." },
    { nombre: "Nancy Web", imagen: "/projects/nancy.jpg", descripcion: "Sistema Web de pedidos para el famoso restaurante Nancy, ubicado en San Juan Masías- Callao. Este proyecto fue realizado con ASP NET CORE 9 para el consumo y realización de APIs, Framework Angular , Base de datos SQL Server. " },
    { nombre: "Soporte N1", imagen: "/projects/soporte.jpg", descripcion: "Como Soporte Nivel 1, gestioné y analicé datos en tiempo real en producción para el proyecto PangeaCo de Telefónica, asegurando diagnósticos precisos de cada ticket. Realicé análisis de incidencias con Jira, mantuve comunicación activa con el cliente para reportes, solucioné incidencias bajo metodología Agile y ejecuté pruebas funcionales, además de manejar el Inventario de Planta Externa. Herramientas: SQL Server, ArcGIS Pro, Postman, ArcGIS Enterprise, Jira, Azure, Apollo GraphQL, Azure Lab, OpenLens y MongoDB." }
  ];

  proyectoSeleccionado: any = null;

  constructor(private renderer: Renderer2) {}

  seleccionarProyecto(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
    document.body.classList.add("modal-abierto");
}

cerrarModal() {
    this.proyectoSeleccionado = null;
    document.body.classList.remove("modal-abierto"); // 🔹 Quita la clase al cerrar modal
}
}
