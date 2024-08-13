import { Component } from '@angular/core';
import { CompetitionService } from '../../services/competition.service'; // Ajusta la ruta según tu estructura
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css']
})
export class CreateCompetitionComponent {
  competition = {
    name: '',
    description: ''
  };

  constructor(
    private competitionService: CompetitionService,
    private router: Router
  ) {}

  // Método para manejar la creación de competencias
  createCompetition(): void {
    if (this.competition.name && this.competition.description) {
      this.competitionService.createCompetition(this.competition).subscribe(
        response => {
          console.log('Competencia creada con éxito', response);
          this.router.navigate(['/admin-competitions/results']); // Redirige a la página de resultados
        },
        error => {
          console.error('Error al crear competencia', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
